import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey = "marketing" | "brand" | "guide" | "rebranding" | "visual";

const brandingData = {
  title: "Branding",
  intro: {
    paragraph1:
      "Our branding services aim to strategically build a compelling image that inspires users, foster deep customer connections, and ensures businesses stand out from the competition. We believe your brand encompasses more than just a logo or color palette—it is the complete story, identity, and experience your audience associates with your business.",
  },
  mainImage: sv_1,
  mainContent: {
    text1:
      "Our branding services combine creativity, strategy, and market insight to help you build a brand that is memorable, trusted, and positioned for long-term success.",
    text2:
      "We don’t just design brands. We go beyond the aesthetics, crafting comprehensive identities and experiences that speak, resonate with your target market, and convert.",
  },
  features: [
    "Builds trust and credibility.",
    "Makes your business instantly recognizable.",
    "Inspires loyalty and repeated engagement.",
    "Helps you stand out in a crowded market.",
    "Increases perceived value and customer confidence.",
    "Supports consistent marketing and communication.",
  ],
  smallImages: [sv_2, sv_3],
  bottomText:
    "Our strategic branding design steps sparks emotional connection, crafting unforgettable journeys that turn transient interest into lasting devotion and resonate across every single interaction.",
  services: [
    { name: "Brand Strategy & Identity Development", key: "brand" as const },
    { name: "Logo Design & Visual Identity", key: "visual" as const },
    { name: " Brand Guidelines Development", key: "guide" as const },
    {
      name: "Marketing & Communication Collateral",
      key: "marketing" as const,
    },
    {
      name: "Rebranding & Brand Refresh Services",
      key: "rebranding" as const,
    },
  ],
  sidebarContent: {
    brand: {
      title: "Brand Strategy & Identity Development",
      description:
        "Your brand identity begins with a strong foundation. We work closely with you to understand your business, target audience, and competitive landscape.",
      listTitle: "Services Include:",
      list: [
        "Brand discovery and research.",
        "Brand positioning and messaging.",
        "Competitor analysis.",
        "Customer persona development.",
        "Brand voice and tone creation.",
        "Brand value and mission articulation.",
      ],
      buttomText:
        "We translate your story into a strategic identity that aligns with your vision and connects with your audience.",
      ctaText: "Get In Touch",
      ctaLink: "/contact",
    },
    visual: {
      title: " Logo Design & Visual Identity",
      listTitle: "Our Visual Branding Services Include:",
      description:
        "A strong visual identity is essential for building recognition and trust. Our design team crafts timeless, modern, and memorable visual elements that define your brand.",
      list: [
        "Professional logo design.",
        "Typography and color palette selection.",
        "Brand iconography and patterns.",
        "Brand imagery direction.",
        "Custom graphics and illustrations.",
        "Social media branding kits.",
      ],
      buttomText:
        "Every element is designed to ensure your brand looks consistent and professional across all digital and print platforms.",
      ctaText: "Get In Touch",
      ctaLink: "/contact",
    },
    guide: {
      title: "Brand Guidelines Development",
      description:
        "Consistency is the key to powerful branding. We create comprehensive brand guidelines that outline how your brand should be represented across all channels.",
      listTitle: "Your Brand Guidelines Will Include:",
      list: [
        "Logo usage rules.",
        "Color systems and combinations.",
        "Typography hierarchy.",
        "Tone and messaging standards.",
        "Photography and media style.",
        "Layout and spacing rules.",
      ],
      buttomText:
        "These guidelines empower your team to communicate your brand effectively and professionally—every time.",

      ctaText: "Get In Touch",
      ctaLink: "/contact",
    },
    marketing: {
      title: " Marketing & Communication Collateral",
      description:
        "Bring your brand to life through eye-catching marketing materials that reinforce your identity and engage your audience.",
      listTitle: "We Create:",
      list: [
        "Business cards and stationery.",
        "Brochures and promotional materials.",
        "Social media templates.",
        "Pitch decks and presentations.",
        "Digital banner",
        "Branded content assets.",
      ],
      buttomText:
        "Our designs help you communicate your message with clarity, creativity, and impact.",
      ctaText: "Get In Touch",
      ctaLink: "/contact",
    },
    rebranding: {
      title: " Rebranding & Brand Refresh Services",
      description:
        "Is your current brand outdated or no longer aligned with your business? We help companies reinvent their identity while maintaining their core values.",
      listTitle: "Rebranding Services Include:",
      list: [
        "Brand audit and analysis.",
        "Identity modernization.",
        "Logo redesign.",
        "Tone and messaging evolution.",
        "Customer perception repositioning.",
        "Full relaunch strategy.",
      ],
      buttomText:
        "We ensure your brand re-emerges stronger, clearer, and more relevant than ever.",
      ctaText: "Get In Touch",
      ctaLink: "/contact",
    },
  },
};

export default function Branding() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("brand");

  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <h4
                className="sv-hero-title tp-char-animation"
                style={{ letterSpacing: "1px" }}
              >
                {brandingData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {brandingData.intro.paragraph1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={brandingData.mainImage}
                  alt="branding"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  {brandingData.mainContent.text1}
                </p>
                <p>{brandingData.mainContent.text2}</p>
              </div>
              <div className="service-details__fea-list">
                <h3>Why Branding Matters</h3>

                <p>
                  Why Branding Matters In today’s competitive digital world,
                  businesses with strong brands outperform those without one.
                  Effective branding:
                </p>

                <ul>
                  {brandingData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {brandingData.smallImages.map((image, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-6 mb-20"
                    >
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`branding-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="service-details__left-text">
                <p>{brandingData.bottomText}</p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {brandingData.services.map((service, index) => (
                  <a
                    key={index}
                    className={activeService === service.key ? "active" : ""}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveService(service.key);
                    }}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h3 className="pb-20" style={{ letterSpacing: "1.2px" }}>
                  {brandingData.sidebarContent[
                    activeService
                  ].title.toUpperCase()}
                </h3>
                <p className="mb-20">
                  {brandingData.sidebarContent[activeService].description}
                </p>
                <div className="service-details__fea-list">
                  <h3>
                    {brandingData.sidebarContent[activeService].listTitle}
                  </h3>

                  <ul>
                    {brandingData.sidebarContent[activeService].list.map(
                      (feature, index) => (
                        <li key={index}>{feature}</li>
                      )
                    )}
                  </ul>
                  <p className="mt-10">
                    {brandingData.sidebarContent[activeService].buttomText}
                  </p>
                </div>
                <Link
                  className="tp-btn-white background-black"
                  href={brandingData.sidebarContent[activeService].ctaLink}
                >
                  {brandingData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
