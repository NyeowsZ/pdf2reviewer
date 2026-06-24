import React, { useState } from "react";
import { handleAPI } from "../api";

const Llm = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handle = async () => {
    setIsLoading(true);
    setResponse("");

    try {
      const res = await handleAPI(prompt);
      setResponse(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-5">
      <h1 className="text-2xl font-semibold">LLM API Test</h1>

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
          onClick={() => handle()}
        >
          Send Prompt
        </button>
        {isLoading && (
          <span className="block border-3 border-blue-500 border-t-white animate-spin size-5 rounded-full" />
        )}
      </div>
      <p>{response ? response : "No response"}</p>
    </div>
  );
};

export default Llm;
