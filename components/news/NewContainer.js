import React from "react";
import NewsComponent from "./NewsComponent";

export default function NewsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-8 ">
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
      <NewsComponent />
    </div>
  );
}
