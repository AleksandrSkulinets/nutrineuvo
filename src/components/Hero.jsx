import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { ArrowUpRight, CirclePlay } from "lucide-react"
import { useTranslation } from "react-i18next"
import VideoBg from "../assets/Video_bg.mp4"

const Hero06 = () => {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background video */}
      <video
        src={VideoBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl text-white">
        <Badge
          variant="secondary"
          className="rounded-full py-1  bg-white/20 backdrop-blur-sm"
        >
          {t("hero.badge")} <ArrowUpRight className="ml-1 size-4" />
        </Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          {t("hero.title")}
        </h1>

        <p className="mt-6 md:text-lg text-gray-200">
          {t("hero.description")}
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" variant="default" className="rounded-full text-base">
            {t("hero.appointment")} <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base "
          >
            <CirclePlay className="mr-2 h-5 w-5" />
            {t("hero.service")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero06
