import React from "react";
import { hadises } from "../data/data";
import { useParams } from "react-router-dom";

const HadisPage = () => {
  const { id } = useParams();
  const res = hadises.find((h) => h.id == id);
  console.log(res);
  return (
    <div className="flex justify-center">
      <div className="mx-auto max-w-2xl lg:text-center mt-10">
        <h2 className="text-lg font-semibold leading-7 text-indigo-600">
          № {res.id}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {res.title}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {res.matn}
        </p>
        <p className="mt-6 text-lg text-start leading-8 text-white bg-slate-500 rounded-md p-2">
          {res.translate}
        </p>
        <p className="mt-6 text-lg text-start leading-8 text-gray-700 bg-lime-300 p-2 rounded">
          {res.tafsir}
        </p>
      </div>
    </div>
  );
};

export default HadisPage;
