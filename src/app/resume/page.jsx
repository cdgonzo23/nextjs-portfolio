"use client";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Resume() {
  return (
    <div className="hero min-h-screen bg-gradient-to-t from-base-200 from-0% via-primary via-50% to-base-200 to-100%">
      <div className="my-24">
        <a href="/Gonzales.Resume.pdf" download="Gonzales_Resume" className="link link-hover">
          Download Resume
        </a>
        <Document className="p-3 bg-neutral" file="/Gonzales_Resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
