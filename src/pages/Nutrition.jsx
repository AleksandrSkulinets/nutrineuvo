import { Button } from "../components/ui/button";
import {
  ArrowRight,
  BookOpenCheck,
  Users,
  Stethoscope,
  Leaf,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const NutritionPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto py-20 px-6 my-20">
        {/* Intro */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("nutrition.nutrition_heading")}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("nutrition.nutrition_intro")}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              {t("nutrition.section1_title")}
            </span>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
              {t("nutrition.section1_desc")}
            </p>
            <Button className="mt-8 w-full">
              {t("nutrition.section1_cta")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {/* Media for Card 1 */}
          <div className="hidden md:block col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"

              alt="Nutrition consultation"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Media for Card 2 */}
          <div className="hidden md:block col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Healthy food for everyone"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t("nutrition.section2_title")}
            </span>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {t("nutrition.section2_list", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>• {item}</li>
                )
              )}
            </ul>
            <Button className="mt-8 w-full">
              {t("nutrition.section2_cta")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <BookOpenCheck className="h-5 w-5" />
              {t("nutrition.section3_title")}
            </span>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
              {t("nutrition.section3_desc")}
            </p>
            <Button className="mt-8 w-full">
              {t("nutrition.section3_cta")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {/* Media for Card 3 */}
          <div className="hidden md:block col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Meal planning process"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Media for Card 4 */}
          <div className="hidden md:block col-span-1 md:col-span-3 lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Gut health foods"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-muted rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              {t("nutrition.section4_title")}
            </span>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {t("nutrition.section4_list", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>• {item}</li>
                )
              )}
            </ul>
            <Button className="mt-8 w-full">
              {t("nutrition.section4_cta")}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-start gap-6">
          <h2 className="text-2xl font-semibold text-start">
            {t("nutrition.cta_title")}
          </h2>
          <p className="text-muted-foreground text-start max-w-2xl">
            {t("nutrition.cta_desc")}
          </p>
          <Button size="lg" className="mt-4">
            {t("nutrition.book_now")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
