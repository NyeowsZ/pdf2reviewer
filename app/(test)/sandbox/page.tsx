"use client";
import Llm from "./components/Llm";
import Base64 from "./components/Base64";

const Page = () => {
  if (process.env.NODE_ENV != "development") return null;
  return (
    <>
      <Llm />
      <Base64 />
    </>
  );
};

export default Page;
