import { MultipleChoicesQuestion } from "@/app/page";
import { useState } from "react";

export const McQuestionCard = (question: MultipleChoicesQuestion) => {
  const [chosenMcq, setChosenMcq] = useState<number>();

  return (
    <div className="flex flex-col items-start gap-2.5 md:gap-5 text-neutral-800 md:flex-row md:items-center">
      {question.choices.map((value, index) => {
        return (
          <button
            key={index}
            className={`text-start cursor-pointer hover:border-black border-white border-b ${chosenMcq == index ? (value.isCorrect ? "font-semibold" : "text-red-500") : ""}`}
            onClick={() => setChosenMcq(index)}
          >
            {String.fromCharCode(65 + index)}. {value.choice}
          </button>
        );
      })}
    </div>
  );
};

export default McQuestionCard;
