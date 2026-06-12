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
        "Which attribute was entirely removed from Dota 2 in the New Frontiers (7.33) update, making way for the Universal hero type?",
      type: "mcq",
      choices: [
        { choice: "Agility", isCorrect: false },
        {
          choice:
            "None, attributes were not removed; Universal was added as a fourth category",
          isCorrect: true,
        },
        { choice: "Intelligence", isCorrect: false },
        { choice: "Strength", isCorrect: false },
      ],
    },
    {
      question:
        "What is the primary damage type of Timbersaw's 'Whirling Death' if it cuts down a tree?",
      type: "mcq",
      choices: [
        { choice: "Pure damage", isCorrect: true },
        { choice: "Magical damage", isCorrect: false },
        { choice: "Physical damage", isCorrect: false },
        { choice: "Composite damage", isCorrect: false },
      ],
    },
    {
      question:
        "Which of the following items provides a passive bonus called 'Swiftasfuck' in its historical or active movement mechanics, or more accurately, which item upgrades from Blitz Knuckles?",
      type: "mcq",
      choices: [
        { choice: "Shadow Blade", isCorrect: false },
        { choice: "Monkey King Bar", isCorrect: false },
        { choice: "Orchid Malevolence", isCorrect: true },
        { choice: "Wind Waker", isCorrect: false },
      ],
    },
    {
      question:
        "How long is the initial duration of Aegis of the Immortal before it automatically expires and reclaims the holder's life?",
      type: "mcq",
      choices: [
        { choice: "6 minutes", isCorrect: false },
        { choice: "5 minutes", isCorrect: true },
        { choice: "4 minutes", isCorrect: false },
        { choice: "3 minutes", isCorrect: false },
      ],
    },
    {
      question:
        "Which hero has the highest base armor value at level 1 (excluding items and abilities)?",
      type: "mcq",
      choices: [
        { choice: "Terrorblade", isCorrect: true },
        { choice: "Ogre Magi", isCorrect: false },
        { choice: "Techies", isCorrect: false },
        { choice: "Bounty Hunter", isCorrect: false },
      ],
    },
    {
      question:
        "What is the maximum number of standard item slots available in a hero's main inventory backpack (excluding neutral slots and TP slots)?",
      type: "mcq",
      choices: [
        { choice: "9 slots", isCorrect: false },
        { choice: "6 slots", isCorrect: true },
        { choice: "3 slots", isCorrect: false },
        { choice: "4 slots", isCorrect: false },
      ],
    },
    {
      question:
        "Which historical Dota 2 team achieved the first back-to-back International (TI) championships with the exact same roster?",
      type: "mcq",
      choices: [
        { choice: "Team Liquid", isCorrect: false },
        { choice: "Natus Vincere", isCorrect: false },
        { choice: "OG", isCorrect: true },
        { choice: "Team Spirit", isCorrect: false },
      ],
    },
    {
      question:
        "What resource does the hero Muerta utilize to temporarily phase her target into the ethereal realm with 'The Calling'?",
      type: "mcq",
      choices: [
        { choice: "Health cost", isCorrect: false },
        { choice: "Mana", isCorrect: true },
        { choice: "Souls", isCorrect: false },
        { choice: "Charges", isCorrect: false },
      ],
    },
    {
      question:
        "Which structure on the map grants a team global vision and can be activated to provide a structural True Sight radar scan?",
      type: "mcq",
      choices: [
        { choice: "Outpost", isCorrect: false },
        { choice: "Tormentor", isCorrect: false },
        { choice: "Watcher", isCorrect: true },
        { choice: "Ancient", isCorrect: false },
      ],
    },
    {
      question:
        "What status effect completely prevents a hero from turning, moving, attacking, or using spells, essentially pausing their actions entirely?",
      type: "mcq",
      choices: [
        { choice: "Stun", isCorrect: true },
        { choice: "Silence", isCorrect: false },
        { choice: "Mute", isCorrect: false },
        { choice: "Disarm", isCorrect: false },
      ],
    },
    {
      question: "Enumerate 3 active items required to craft a 'Refresher Orb'.",
      type: "enumeration",
      answers: ["Ring of Tarrasque", "Tiara of Selemene", "Recipe"],
      isOrdered: false,
    },
    {
      question:
        "Enumerate the 3 positions/roles in a standard competitive match usually designated as the Core positions (Positions 1, 2, and 3). Name them by their common lane positions.",
      type: "enumeration",
      answers: ["Safe Lane", "Mid Lane", "Off Lane"],
      isOrdered: true,
    },
    {
      question:
        "Enumerate the 7 standard Power Runes that can spawn in the river channels during the early game phase.",
      type: "enumeration",
      answers: [
        "Haste",
        "Double Damage",
        "Regeneration",
        "Invisibility",
        "Illusion",
        "Arcane",
        "Shield",
      ],
      isOrdered: false,
    },
    {
      question:
        "Enumerate the original 3 primary Attributes that defined every hero's main scaling before Universal heroes were introduced.",
      type: "enumeration",
      answers: ["Strength", "Agility", "Intelligence"],
      isOrdered: false,
    },
    {
      question:
        "Enumerate the 5 items that make up the components of 'Power Treads' before applying the final modification.",
      type: "enumeration",
      answers: [
        "Boots of Speed",
        "Belt of Strength",
        "Band of Elvenskin",
        "Robe of the Magi",
        "Gloves of Haste",
      ],
      isOrdered: false,
    },
    {
      question:
        "What is the name of the colossal neutral monster located in his pit who drops the Aegis of the Immortal upon death?",
      type: "identification",
      answers: ["Roshan"],
    },
    {
      question:
        "Which hero is formally known by the title 'The Grand Magus' and is notorious for stealing the ultimate abilities of opponents?",
      type: "identification",
      answers: ["Rubick"],
    },
    {
      question:
        "What is the name of the core economy metric that tracks a player's total accumulated value in items and unspent gold?",
      type: "identification",
      answers: ["Net Worth", "Networth"],
    },
    {
      question:
        "What in-game consumable item is permanently consumed to grant a hero a permanent 7th item slot strictly for their Aghanim's Scepter upgrade?",
      type: "identification",
      answers: ["Aghanim's Blessing", "Aghanims Blessing"],
    },
    {
      question:
        "Which specific item allows a hero to instantly teleport to a friendly structure or outpost after a brief channeling period?",
      type: "identification",
      answers: ["Town Portal Scroll", "TP Scroll"],
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
