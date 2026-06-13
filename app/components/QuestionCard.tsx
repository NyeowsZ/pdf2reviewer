"use client";
import { useState } from "react";
import { QuestionCardProp } from "../page";
import McQuestionCard from "@/app/components/questions/MultipleChoicesQuestionCard";
import EnumQuestionCard from "@/app/components/questions/EnumerationQuestionCard";
import IdentificationQuestionCard from "./questions/IdentificationQuestionCard";

const QuestionCard = ({ index, question }: QuestionCardProp) => {
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
