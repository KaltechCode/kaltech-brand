import Link from "next/link";
import React from "react";
// import { MdArrowOutward } from "react-icons/md";
const { MdArrowOutward } = require("react-icons/md");

// type
type IProps = {
  cls?: string;
};

export default function BrandingButtomList({ cls = "" }: IProps) {
  const whyChooseUs = [
    {
      title: "Step 1: Discovery",
      content:
        "We research everything about your company—your mission, audience, goals, and competitive environment.",
    },

    {
      title: "Step 2: Strategy",
      content:
        "We define your brand’s personality, positioning, voice, and messaging framework.",
    },

    {
      title: "Step 3: Creative Identity Design",
      content: "We craft your logo, visual system, and core branding assets.",
    },

    {
      title: "Step 4: Implementation",
      content: "Clear timelines. Consistent updates. Zero guesswork.",
    },

    {
      title: "Step 5: Launch & Support",
      content:
        "We support you through the rollout and provide all files, guidelines, and training for consistent brand usage.",
    },
  ];
  return (
    <div className={`sv-big-text-area ${cls}`}>
      <div className="container">
        <div className="sv-big-text-box">
          <h3>Our Branding Process</h3>
          <div className="">
            {whyChooseUs.map((item, index) => (
              <div className="" key={index}>
                <h6 style={{ fontWeight: 700 }}>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
