"use client";
import { useState } from "react";
import { handleAPI } from "./api";
import { documentToBase64 } from "./documentToBase64";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const [file, setFile] = useState<File>();
  const [base64, setBase64] = useState("");

  if (process.env.NODE_ENV != "development") return null;

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

  const handleDocumentToBase64 = async () => {
    try {
      setIsLoading(true);
      if (file) {
        try {
          const response = await documentToBase64(file);
          setBase64(response);
        } catch (error) {
          console.log(error);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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

      <div className="flex flex-col items-start gap-2.5 mt-10">
        <h1 className="text-2xl font-semibold">Base64 Test</h1>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              setFile(e.target.files[0]);
            }
          }}
          className="px-2 py-2 rounded-xl file:bg-blue-300 border file:px-2 file:py-2 file:rounded-xl border-neutral-500 cursor-pointer"
        />
        <p>
          Size:{" "}
          {file
            ? `${(file.size / 1024 / 1024).toFixed(2)}MB + ${((file.size / 1024 / 1024) * 0.33).toFixed(2)}MB (base64 33% conversion tax) = ${(file.size / 1024 / 1024 + (file.size / 1024 / 1024) * 0.33).toFixed(2)}MB`
            : "--"}
        </p>
        <button
          className={`px-5 py-2 rounded-xl  text-white font-semibold  ${!isLoading ? "hover:bg-blue-600 active:bg-blue-700 bg-blue-500 cursor-pointer" : "bg-neutral-500"}`}
          disabled={isLoading}
          onClick={() => handleDocumentToBase64()}
        >
          Parse
        </button>
        <p>{base64 ? base64.slice(0, 40) + "..." : "No parsed base64"}</p>
      </div>
    </>
  );
};

export default Page;
