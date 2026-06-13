"use client";
import { useState } from "react";
import { QuestionCardProp } from "../page";
import McQuestionCard from "@/app/components/questions/McQuestionCard";
import EnumQuestionCard from "@/app/components/questions/EnumQuestionCard";
import IdentificationQuestionCard from "./questions/IdentificationQuestionCard";

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
          <IdentificationQuestionCard {...question} />
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
