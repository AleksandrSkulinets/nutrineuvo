import React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { Card } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Separator } from "../components/ui/separator"
import { CircleCheck } from "lucide-react"

const pricingPlans = [
  {
    title: "productsection.plans.consultation.title",
    price: "productsection.plans.consultation.price",
    description: "productsection.plans.consultation.description",
    features: [
      "productsection.plans.consultation.features.0",
      "productsection.plans.consultation.features.1",
      "productsection.plans.consultation.features.2",
      "productsection.plans.consultation.features.3",
      "productsection.plans.consultation.features.4",
    ],
    buttonText: "productsection.plans.consultation.buttonText",
  },
  {
    title: "productsection.plans.express.title",
    price: "productsection.plans.express.price",
    description: "productsection.plans.express.description",
    features: [
      "productsection.plans.express.features.0",
      "productsection.plans.express.features.1",
      "productsection.plans.express.features.2",
    ],
    buttonText: "productsection.plans.express.buttonText",
    isPopular: true,
  },
  {
    title: "productsection.plans.mealplan.title",
    price: "productsection.plans.mealplan.price",
    description: "productsection.plans.mealplan.description",
    features: [
      "productsection.plans.mealplan.features.0",
      "productsection.plans.mealplan.features.1",
      "productsection.plans.mealplan.features.2",
      "productsection.plans.mealplan.features.3",
      "productsection.plans.mealplan.features.4",
      "productsection.plans.mealplan.features.5",
    ],
    buttonText: "productsection.plans.mealplan.buttonText",
  },
  {
    title: "productsection.plans.coaching.title",
    price: "productsection.plans.coaching.price",
    description: "productsection.plans.coaching.description",
    features: [
      "productsection.plans.coaching.features.0",
      "productsection.plans.coaching.features.1",
      "productsection.plans.coaching.features.2",
      "productsection.plans.coaching.features.3",
      "productsection.plans.coaching.features.4",
      "productsection.plans.coaching.features.5",
    ],
    pricingDetails: [
      {
        duration:
          "productsection.plans.coaching.pricingDetails.0.duration",
        price: "productsection.plans.coaching.pricingDetails.0.price",
      },
      {
        duration:
          "productsection.plans.coaching.pricingDetails.1.duration",
        price: "productsection.plans.coaching.pricingDetails.1.price",
      },
      {
        duration:
          "productsection.plans.coaching.pricingDetails.2.duration",
        price: "productsection.plans.coaching.pricingDetails.2.price",
      },
    ],
    buttonText: "productsection.plans.coaching.buttonText",
  },
]

export default function Products() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto max-w-[1920px] px-2 py-10">
      <motion.h2
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-10 text-3xl md:text-4xl font-bold tracking-tight text-center"
      >
        {t("productsection.title")}
      </motion.h2>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mx-auto my-6 text-lg text-center text-muted-foreground max-w-2xl"
      >
        {t("productsection.description")}
      </motion.p>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <Card className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold">{t(plan.title)}</h3>
              <p className="mt-4 text-4xl font-bold">{t(plan.price)}</p>

              {/* Coaching pricing tiers */}
              {plan.pricingDetails && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {plan.pricingDetails.map((option, i) => (
                    <p key={i}>
                      {t(option.duration)} —{" "}
                      <span className="font-semibold">{t(option.price)}</span>
                    </p>
                  ))}
                </div>
              )}

              <p className="mt-4 text-muted-foreground">
                {t(plan.description)}
              </p>

              <Separator className="my-6" />

              <ul className="space-y-2 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CircleCheck className="h-4 w-4 mt-1 text-green-600 shrink-0" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "default" : "outline"}
                size="lg"
                className="w-full mt-6"
              >
                {t(plan.buttonText)}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
