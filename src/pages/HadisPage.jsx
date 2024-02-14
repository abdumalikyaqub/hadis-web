import React from "react";
import { hadises } from "../data";
import { useParams } from "react-router-dom";

const HadisPage = () => {
  const { id } = useParams();
  const res = hadises.find((h) => h.id == id);
  console.log(res);
  return (
    <div>
      <h3>H</h3>
      <ul>
        <li>{res.id}</li>
        <li>{res.title}</li>
        <li>{res.matn}</li>
        <li>{res.translate}</li>
        <li>{res.tafsir}</li>
      </ul>
    </div>
  );
};

export default HadisPage;
