import React from "react";
import { BallRound } from "../svg";

export default function AboutFour() {
  return (
    <div
      className="tp-about-5-area pt-150 pb-120"
      // style={{ background: "#f3f3f3" }}
    >
      <div className="container container-1560">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-about-5-title-box pb-90">
              <h4 className="section-title p-relative tp_fade_bottom">
                {/* <span className="tp-about-5-subtitle tp_fade_left">
                  140+ projects closed
                </span> */}
                <span className="text-space font-come"></span>
                Driving Innovation, Designing Excellence, Delivering Results{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-category">
              <span
                className="tp_fade_bottom"
                style={{ padding: "10px 20px", background: "rgba(0,0,0,0.1)" }}
              >
                Development
              </span>
              <span className="tp_fade_bottom"> Marketing</span>
              <span className="tp_fade_bottom">Branding</span>
              <span className="tp_fade_bottom">Data Analytics</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-5-text">
              <p className="mb-30 tp_fade_bottom">
                Our work reflect our commitment to quality, creativity, and
                innovation. We partner with businesses, nonprofits, and
                entrepreneurs to develop business workflows and business
                solutions that elevate brands, streamline operations, and
                promote business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
