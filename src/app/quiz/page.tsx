import { QuizStepsWidget } from "@/modules/quiz";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фільтр ефектів декоративної штукатурки – знайдіть потрібний стиль",
  description: "Користуйтеся фільтром для швидкого вибору декоративної штукатурки за приміщенням, властивостями, текстурою або стилем. Зручний пошук для вашого інтер’єру.",
  openGraph: {
    title: 'Фільтр ефектів декоративної штукатурки – знайдіть потрібний стиль',
    description: "Користуйтеся фільтром для швидкого вибору декоративної штукатурки за приміщенням, властивостями, текстурою або стилем. Зручний пошук для вашого інтер’єру.",
    // images: [
    //   {
    //     url: response[0].images[0].src,
    //     width: 800,
    //     height: 600,
    //   },
    // ],
  },

}

export default function QuizPage() {
  return (
    <>
      <QuizStepsWidget />
    </>
  
  );
}
