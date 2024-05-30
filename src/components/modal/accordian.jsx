import React from "react";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const SearchContent = ({variant}) => {
  return (
    <div className={`cc-text-[#f0f0f0] ${variant === 'drawer' ? 'cc-p-8 cc-bg-black' : ""}`}>
      <p className="cc-mb-2">
        When you are searching for your dream color, follow these simple tips...
      </p>
      <p className="cc-mb-2">
        Color codes are the easiest way to find a color. E.g.{" "}
        <strong>LY7C</strong>
        (Nardo Grey) <br />
        Google is your friend if you don't know the code.
      </p>
      <p className="cc-mb-2">
        If you don't know the code then all you need to do is type the first
        part of the color. E.g. <strong>Nardo</strong> (not Nardo Grey) or{" "}
        <strong>Viola</strong> P (Viola Parisea) .
      </p>
      <p className="cc-mb-2 cc-font-bold">
        If you can't find the color you want from either color code or name,
        message us and we'll find it for you! THIS IS OUR BETA V1 SO PLEASE BE
        PATIENT. THANKS
      </p>
    </div>
  );
};
const TipsAccordion = ({ className, accordianTitle, children }) => {
  return (
    <Accordion className={`cc-w-full ${className}`} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="cc-text-black">
          {accordianTitle}
        </AccordionTrigger>
        <AccordionContent className="cc-text-black">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TipsAccordion;
