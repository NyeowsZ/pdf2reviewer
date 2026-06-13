import { IdentificationQuestion } from "@/app/page";
import { useState } from "react";

const IdentificationQuestionCard = (question: IdentificationQuestion) => {
  const [userInput, setUserInput] = useState<string>("");
  return (
    <input
      type="text"
      placeholder="Your answer"
      className={`px-5 py-2 border-b outline-0 focus:text-black focus:font-normal placeholder-shown:text-black ${question.answers.some((ans) => ans === userInput) ? "font-semibold" : "text-red-500"}`}
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
    />
  );
};

export default IdentificationQuestionCard;
