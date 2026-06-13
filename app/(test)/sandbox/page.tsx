"use client";
import { useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [apiLink, setApiLink] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");

  if (process.env.NODE_ENV != "development") return null;

  const handle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-2xl font-semibold">LLM API Test</h1>

        <div className="space-y-1">
          <h2 className="text-xl font-semibold">API Auth</h2>
          <div className="flex flex-col items-start">
            <input
              type="text"
              placeholder="API Link"
              className="px-5 py-2 rounded-xl border border-neutral-500"
              value={apiLink}
              onChange={(e) => setApiLink(e.target.value)}
            />
            <input
              type="password"
              placeholder="API Key"
              className="px-5 py-2 rounded-xl border border-neutral-500"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="Prompt"
          className="px-5 py-2 rounded-xl border border-neutral-500"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="flex items-center gap-2.5">
          <button
            className={`px-5 py-2 rounded-xl  text-white font-semibold  ${!isLoading ? "hover:bg-blue-600 active:bg-blue-700 bg-blue-500 cursor-pointer" : "bg-neutral-500"}`}
            disabled={isLoading}
            onClick={handle}
          >
            Send Prompt
          </button>
          {isLoading && (
            <span className="block border-3 border-blue-500 border-t-white animate-spin size-5 rounded-full" />
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
