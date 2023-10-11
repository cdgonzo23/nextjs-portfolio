"use client";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

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

  const pdfLoader = () => {
    return <div className="text-base-200 text-center">Loading PDF</div>;
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="my-24">
        <button className="link link-hover" onClick={onButtonClick}>Download PDF</button>
        <Document
          className="p-3 bg-neutral rounded-box"
          file="/Gonzales_Resume.pdf"
          loading={pdfLoader}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
