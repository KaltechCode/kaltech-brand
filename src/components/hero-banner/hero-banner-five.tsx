import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UpArrow } from "../svg";
import p_img_1 from "@/assets/img/custom/portfolio/KALTECH_LANDSCAPE_PORTFOLIO-01.png";
import p_img_2 from "@/assets/img/custom/portfolio/KALTECH_LANDSCAPE_PORTFOLIO-02.png";
import p_img_3 from "@/assets/img/custom/portfolio/KALTECH_LANDSCAPE_PORTFOLIO-03.png";

export default function HeroBannerFive() {
  return (
    <div className="tp-hero-5-area py-12 pb-12">
      <div className="container container-1480">
        <div className="" style={{ width: "100%" }}>
          <div className="tp-hero-5-content-box" style={{ overflow: "hidden" }}>
            <h3
              className="tp-hero-5-title tp-char-animation"
              style={{
                letterSpacing: "1px",
                fontSize: "clamp(50px, 6vw + 1.5rem, 120px)",
              }}
            >
              Creative <span className="font-oxanium">+ </span>
              <span style={{ color: "#b08500" }}>Portfolio</span>
            </h3>
            <p className="" style={{ textAlign: "center" }}>
              {"We're"} Our portfolio showcases a diverse collection of projects
              across web development, branding, .
              <br />
              marketing, content creation, and software solutions
            </p>
          </div>
          <div
            className="tp-project-5-wrap "
            // style={{
            //   display: "grid",
            //   gridTemplateColumns: "1fr 1fr 1fr 1fr",
            //   gap: "10px",
            //   alignItems: "center",
            // }}
          >
            <div
              className="tp-project-5-text"
              // style={{ gridColumn: "span 1", height: "100%" }}
            >
              <span>RECENT PROJECT</span>
            </div>
            <div
              className="tp-project-5-thumb-wrap"
              // style={{
              //   gridColumn: "span 3",
              //   display: "grid",
              //   gridTemplateColumns: "1fr 1fr 1fr",
              //   gap: "10px",
              //   marginTop: "20px",
              // }}
            >
              <div
                className="tp-project-5-thumb"
                // style={{ height: 200, width: "100%" }}
              >
                {/* <Link href="/blizservices.com" target="_blank"> */}
                <Image src={p_img_1} alt="project-img" objectFit="cover" />
              </div>

              <div className="tp-project-5-thumb">
                {/* <Link href="/blizservices.com" target="_blank"> */}
                <Image src={p_img_2} alt="project-img" objectFit="cover" />
              </div>
              <div
                className="tp-project-5-thumb"
                // style={{ height: 250, width: "100%" }}
              >
                {/* <Link href="/blizservices.com" target="_blank"> */}
                <Image
                  src={p_img_3}
                  alt="project-img"
                  objectFit="cover"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
