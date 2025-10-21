import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import { useTranslation } from "react-i18next"
import VideoBg from "../assets/Video_bg.mp4"

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background video */}
      <video
        src={VideoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-md text-center text-white py-20 ">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
            {t("hero.badge")}
            <ArrowUpRight className="h-4 w-4" />
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          {t("hero.title")}
         
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl">
          {t("hero.description")}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button
          variant="default"
            size="lg"
            className="flex items-center  text-base font-medium px-6 py-3 shadow-lg transition-transform hover:scale-105"
          >
            {t("hero.appointment")}
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>

           <Button
           variant="outline"
            size="lg"
            className="flex items-center  text-base font-medium px-6 py-3 shadow-lg transition-transform hover:scale-105"
          >
            <CirclePlay className="mr-2 h-5 w-5" />
            {t("hero.service")}  test deploy
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
