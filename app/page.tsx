"use client";

import { useState } from "react";
import QuestionCard from "./components/questionCard";

export interface Question {
  question: string;
  type: "mcq" | "enumeration" | "identification";
}

export interface MultipleChoicesQuestion extends Question {
  type: "mcq";
  choices: { choice: string; isCorrect: boolean }[];
}

export interface EnumerationQuestion extends Question {
  type: "enumeration";
  answers: string[];
  isOrdered: boolean;
}

export interface IdentificationQuestion extends Question {
  type: "identification";
  answers: string[];
}

export type QuizQuestion =
  | MultipleChoicesQuestion
  | EnumerationQuestion
  | IdentificationQuestion;

export type QuestionCardProp = {
  index: number;
  question: QuizQuestion;
};

export type Questions = QuizQuestion[];

const Page = () => {
  const [questions, setQuestions] = useState<Questions>([
    {
      question:
        "Which core resource is required to produce Silicon in a Silicon Smelter?",
      type: "mcq",
      choices: [
        { choice: "Copper and Lead", isCorrect: false },
        { choice: "Sand and Coal", isCorrect: true },
        { choice: "Coal and Pyratite", isCorrect: false },
        { choice: "Titanium and Thorium", isCorrect: false },
      ],
    },
    {
      question: "What is the primary function of a Liquid Router?",
      type: "mcq",
      choices: [
        { choice: "To store up to 1000 units of liquid.", isCorrect: false },
        { choice: "To accelerate the flow rate of liquids.", isCorrect: false },
        {
          choice: "To split liquid inputs equally into up to three outputs.",
          isCorrect: true,
        },
        {
          choice: "To filter specific liquids out of a pipeline.",
          isCorrect: false,
        },
      ],
    },
    {
      question:
        "Which of the following turrets can accept liquid ammo directly to shock enemies?",
      type: "mcq",
      choices: [
        { choice: "Wave", isCorrect: true },
        { choice: "Scatter", isCorrect: false },
        { choice: "Duo", isCorrect: false },
        { choice: "Scorch", isCorrect: false },
      ],
    },
    {
      question:
        "What dangerous event occurs if a Thorium Reactor runs out of Cryoflux while actively processing Thorium?",
      type: "mcq",
      choices: [
        { choice: "It shuts down safely.", isCorrect: false },
        {
          choice: "It explodes, destroying a large surrounding area.",
          isCorrect: true,
        },
        { choice: "It temporarily stops generating power.", isCorrect: false },
        { choice: "It turns into an unminable scrap tile.", isCorrect: false },
      ],
    },
    {
      question:
        "Which conveyor type provides the fastest item throughput in the Serpulo tech tree?",
      type: "mcq",
      choices: [
        { choice: "Titanium Conveyor", isCorrect: false },
        { choice: "Armored Conveyor", isCorrect: false },
        { choice: "Plastanium Conveyor", isCorrect: true },
        { choice: "Junction", isCorrect: false },
      ],
    },
    {
      question:
        "What environment block is required to place a Thermal Generator for passive power generation?",
      type: "mcq",
      choices: [
        { choice: "Snow", isCorrect: false },
        { choice: "Magma / Hot Rock", isCorrect: true },
        { choice: "Water", isCorrect: false },
        { choice: "Oil Tar", isCorrect: false },
      ],
    },
    {
      question:
        "Which unit factory tier directly produces the basic ground support unit 'Nova'?",
      type: "mcq",
      choices: [
        { choice: "Additive Reconstructer", isCorrect: false },
        { choice: "Multiplicative Reconstructor", isCorrect: false },
        { choice: "Exponential Reconstructor", isCorrect: false },
        { choice: "Ground Factory", isCorrect: true },
      ],
    },
    {
      question:
        "What happens when an Armored Conveyor receives an item from the side?",
      type: "mcq",
      choices: [
        { choice: "It accepts the item normally.", isCorrect: false },
        {
          choice:
            "It blocks the item unless it comes from another conveyor facing into it.",
          isCorrect: true,
        },
        { choice: "It instantly burns the item.", isCorrect: false },
        { choice: "It routes the item backward.", isCorrect: false },
      ],
    },
    {
      question:
        "Which processor type offers the largest code execution capacity and highest speed in Mindustry Logic?",
      type: "mcq",
      choices: [
        { choice: "Micro Processor", isCorrect: false },
        { choice: "Logic Display", isCorrect: false },
        { choice: "Hyper Processor", isCorrect: true },
        { choice: "World Processor", isCorrect: false },
      ],
    },
    {
      question:
        "What resource is specifically used to construct Phase Fabrics inside a Phase Weaver?",
      type: "mcq",
      choices: [
        { choice: "Thorium and Sand", isCorrect: true },
        { choice: "Titanium and Metaglass", isCorrect: false },
        { choice: "Surge Alloy and Scrap", isCorrect: false },
        { choice: "Graphite and Coal", isCorrect: false },
      ],
    },

    // =========================================================================
    // ENUMERATION QUESTIONS (5)
    // =========================================================================
    {
      question:
        "Enumerate the three basic starting materials required to craft Metaglass inside a Kiln.",
      type: "enumeration",
      answers: ["Sand", "Lead"],
      isOrdered: false,
    },
    {
      question:
        "Enumerate four types of power generation blocks available on the planet Serpulo.",
      type: "enumeration",
      answers: [
        "Combustion Generator",
        "Thermal Generator",
        "Steam Generator",
        "Differential Generator",
      ],
      isOrdered: false,
    },
    {
      question:
        "Enumerate the elements combined in a Surge Smelter to produce Surge Alloy.",
      type: "enumeration",
      answers: ["Copper", "Lead", "Titanium", "Silicon"],
      isOrdered: false,
    },
    {
      question:
        "Enumerate the progression tiers of Serpulo Cores from lowest capacity to highest capacity.",
      type: "enumeration",
      answers: ["Core: Shard", "Core: Foundation", "Core: Nucleus"],
      isOrdered: true,
    },
    {
      question:
        "Enumerate three distinct liquid types present in standard vanilla Mindustry gameplay.",
      type: "enumeration",
      answers: ["Water", "Slag", "Oil", "Cryofluid"],
      isOrdered: false,
    },

    // =========================================================================
    // IDENTIFICATION QUESTIONS (5)
    // =========================================================================
    {
      question:
        "What is the name of the radioactive purple resource used to feed RTG Generators and Thorium Reactors?",
      type: "identification",
      answers: ["Thorium"],
    },
    {
      question:
        "Which defensive structure requires Metaglass or Graphite as ammo and is dedicated strictly to wiping out air units?",
      type: "identification",
      answers: ["Scatter"],
    },
    {
      question:
        "What is the name of the desert-like planet introduced alongside Serpulo in Mindustry's v7 update?",
      type: "identification",
      answers: ["Erekir"],
    },
    {
      question:
        "What specific fluid is created by mixing Water and Titanium in a Cryofluid Mixer to cool down heavy machinery?",
      type: "identification",
      answers: ["Cryofluid"],
    },
    {
      question:
        "What assembly component block allows item conveyor lines to cross directly over one another without mixing their items?",
      type: "identification",
      answers: ["Junction"],
    },
  ]);

  return (
    <>
      <div className="space-y-10">
        <h1 className="text-2xl font-semibold">
          PDF<span className="text-red-500">2</span>Reviewer
        </h1>

        <p>Directions:</p>

        <div className="flex flex-col gap-7.5 items-start">
          {questions.map((val, idx) => {
            const QuestionProp: QuestionCardProp = {
              question: val,
              index: idx + 1,
            };
            return <QuestionCard key={idx} {...QuestionProp}></QuestionCard>;
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
