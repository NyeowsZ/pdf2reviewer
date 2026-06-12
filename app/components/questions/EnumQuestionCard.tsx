import { EnumerationQuestion } from "@/app/page";
import { useState } from "react";

const EnumQuestionCard = (question: EnumerationQuestion) => {
  const [answers, setAnswers] = useState<string[]>(() => {
    if (question.type === "enumeration") {
      return new Array(question.answers.length).fill("");
    }

    return [];
  });
  const enumUpdateAnswer = (index: number, newAnswer: string) => {
    const temp = [...answers];
    temp[index] = newAnswer;
    setAnswers(temp);
  };

  const enumCheckAnswer = (idx: number, answer: string) => {
    if (!question.isOrdered) {
      return (
        question.answers.some((ans) => ans === answer) &&
        !answers.some((ans, i) => {
          if (i >= idx) {
            return false;
          }
          return ans === answer;
        })
      );
    } else {
      return question.answers[idx] == answer;
    }
  };

  return (
    <ul
      className={`flex flex-col gap-2.5 pl-5 ${question.isOrdered ? "list-decimal" : "list-disc"}`}
    >
      {question.answers.map((val, idx) => {
        return (
          <li key={idx} className="">
            <input
              type="text"
              placeholder="Your answer"
              value={answers[idx]}
              onChange={(e) => enumUpdateAnswer(idx, e.target.value)}
              className={`px-5 py-2 border-b outline-0 focus:text-black focus:font-normal placeholder-shown:text-black 
                    ${
                      enumCheckAnswer(idx, answers[idx])
                        ? "font-semibold"
                        : "text-red-500"
                    }`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EnumQuestionCard;
