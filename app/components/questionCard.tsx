"use client";
import { useState } from "react";
import { QuestionCardProp } from "../page";
import McQuestionCard from "@/app/components/questions/McQuestionCard";
import EnumQuestionCard from "@/app/components/questions/EnumQuestionCard";

const QuestionCard = ({ index, question }: QuestionCardProp) => {
  const [userInput, setUserInput] = useState("");
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
          <McQuestionCard {...question} />
        ) : question.type === "identification" ? (
          <input
            type="text"
            placeholder="Your answer"
            className={`px-5 py-2 border-b outline-0 focus:text-black focus:font-normal placeholder-shown:text-black ${question.answers.some((ans) => ans === userInput) ? "font-semibold" : "text-red-500"}`}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        ) : question.type === "enumeration" ? (
          <EnumQuestionCard {...question} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default QuestionCard;
