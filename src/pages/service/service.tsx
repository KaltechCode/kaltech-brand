"use client";
import { gsap } from "gsap";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth, { handleAnchorClicks } from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderOne from "@/layouts/headers/header-one";
import ServiceSix from "@/components/service/service-six";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import ContactOne from "@/components/contact/contact-one";
import { ctaAnimation } from "@/utils/cta-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { ModalForm } from "@/components/custom/modal/form";
import FooterFour from "@/layouts/footers/footer-four";
import GalleryOne from "@/components/gallery/gallery-one";
import ServiceHero from "@/components/hero-banner/hero-banner-services";
import AboutThree from "@/components/about/about-three";

const ServiceMain = () => {
  useScrollSmooth();

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [formContent, setFormContent] = useState<string>("development");
  const [hasRendered, setHasRendered] = useState(false);

  useGSAP(() => {
    const timer = setTimeout(() => {
      handleAnchorClicks();
      ctaAnimation();
      hoverBtn();
      charAnimation();
      fadeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
  useEffect(() => {
    // ******This will set the state of hasRendered when the page render so as to keep track of the rendering steps *******
    setHasRendered(true);
  }, []);
  useLayoutEffect(() => {
    if (hasRendered) {
      if (!(gsap as any)._gsap || !(gsap as any).plugins?.ScrollTrigger) {
        try {
          gsap.registerPlugin(ScrollTrigger);
        } catch {}
      }
      const sv = gsap.matchMedia();
      const tl = gsap.timeline();
      sv.add("(min-width: 300px)", () => {
        // const isLarge = window.matchMedia("(min-width: 1500px)").matches;
        const projectpanelss = document.querySelectorAll(".project-panel-2");
        projectpanelss.forEach((section) => {
          tl.to(section, {
            scrollTrigger: {
              trigger: section,
              // pin: isLarge ? false : section,
              pin: section,
              scrub: 1,
              start: "top top",
              end: "bottom 100%",
              endTrigger: ".project-panel-area-2",
              pinSpacing: false,
            },
          });
        });
      });
    }
  }, [hasRendered]);

  const handleOpen = () => {
    setOpenForm(false);
  };
  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ServiceHero />
            <GalleryOne />
            <AboutThree />

            {/* service hero */}

            {/* service area */}
            {/* <div className="tp-service-5-area sv-service-style">
              <div className="container">
                <div className="tp-service-5-wrap">
                  <ServiceItems
                    openForm={openForm}
                    setFormContent={setFormContent}
                    setOpenForm={setOpenForm}
                    formContent={formContent}
                  />
                </div>
              </div>
            </div> */}
            {/* service area */}

            {/* service area */}
            <ServiceSix />
            {/* service area */}
          </main>

          {/* footer area */}
          <ContactOne />
          <FooterFour />
          {/* footer area */}
        </div>
      </div>

      <ModalForm openForm={openForm} handleOpen={handleOpen} />
    </Wrapper>
  );
};

export default ServiceMain;
