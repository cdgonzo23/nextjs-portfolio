"use client";
import React from "react";


export default function Resume() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Gonzales_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Gonzales_Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="my-24">
        <button className="link link-hover" onClick={onButtonClick}>
          Download PDF
        </button>
      </div>
    </div>
  );
}
