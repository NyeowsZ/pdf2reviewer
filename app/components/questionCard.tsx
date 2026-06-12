"use client";
import { useState } from "react";
import { QuestionCardProp } from "../page";

const QuestionCard = ({ index, question }: QuestionCardProp) => {
  const [userInput, setUserInput] = useState("");
  const [chosenMcq, setChosenMcq] = useState<number>();
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
    if (question.type === "enumeration") {
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
    }
  };

  const pickChoice = (index: number) => {
    setChosenMcq(index);
  };

  return (
    <>
      <div
        className={`flex gap-2.5 ${question.type !== "identification" && "flex-col"} ${question.type === "identification" && "flex-col md:flex-row md:items-center"}`}
      >
        <h1>
          {index}. {question.question}{" "}
          {question.type === "enumeration" && question.isOrdered
            ? "(Required to be in order.)"
            : ""}
        </h1>
        {question.type === "mcq" ? (
          <div className="flex flex-col items-start gap-2.5 md:gap-5 text-neutral-800 md:flex-row md:items-center">
            {question.choices.map((val, idx) => {
              return (
                <button
                  key={idx}
                  className={`text-start cursor-pointer hover:border-black border-white border-b ${chosenMcq == idx ? (val.isCorrect ? "font-semibold" : "text-red-500") : ""}`}
                  onClick={() => pickChoice(idx)}
                >
                  {String.fromCharCode(65 + idx)}. {val.choice}
                </button>
              );
            })}
          </div>
        ) : question.type === "identification" ? (
          <input
            type="text"
            placeholder="Your answer"
            className={`px-5 py-2 border-b outline-0 focus:text-black focus:font-normal placeholder-shown:text-black ${question.answers.some((ans) => ans === userInput) ? "font-semibold" : "text-red-500"}`}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        ) : question.type === "enumeration" ? (
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
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default QuestionCard;
