import React from "react";
import NewsComponent from "./NewsComponent";
import NewSMolecules from "./Newsmolecules";

export default function NewsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12 ">
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
      <NewSMolecules />
    </div>
  );
}
