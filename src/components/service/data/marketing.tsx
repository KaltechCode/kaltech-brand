import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey =
  | "digital"
  | "social"
  | "seo"
  | "sem"
  | "content"
  | "email"
  | "branding"
  | "website"
  | "public"
  | "analytics";

const marketingData = {
  title: "Marketing Services",
  intro: {
    paragraph1:
      "We help businesses rise above competition through powerful, modern, and result-oriented marketing solutions. Our focus is to create compelling brand stories, drive measurable growth, and build long-lasting relationships between brands and their customers.",
    paragraph2:
      "Whether you’re a startup seeking brand visibility or an established company looking to upscale, our marketing services are tailored to your objectives.",
  },
  mainImage: sv_1,
  mainContent: {
    text1:
      "Whether it’s responsive web applications, email marketing, social media marketing, content creation, or more…we accelerate your company’s growth with insights, strategy, and execution to create a modern multi-channel marketing platform that scale as your business needs grow.",
    text2:
      "Great marketing strategies deliver the right message to the right people at the right time, creating meaningful connections that convert prospects into loyal customers.",
  },
  features: [
    "Digital Marketing Strategy",
    "Social Media Marketing & Management",
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM) & Paid Advertising",
    "Content Creation & Copywriting",
    "Email Marketing & Automation",
    "Branding & Creative Design",
    "Website Marketing & Conversion Optimization",
    " Analytics, Reporting & Performance Tracking",
    ,
  ],
  smallImages: [sv_2, sv_3],

  services: [
    { name: "Digital Marketing Strategy", key: "digital" as const },
    { name: "Social Media Marketing & Management", key: "social" as const },
    { name: "Search Engine Optimization (SEO)", key: "seo" as const },
    {
      name: "Search Engine Marketing (SEM)",
      key: "sem" as const,
    },
    { name: "Content Creation & Copywriting", key: "content" as const },
    { name: "Email Marketing & Automation", key: "email" as const },
    { name: "Branding & Creative Design", key: "branding" as const },
    {
      name: "Website Marketing & Conversion Optimization",
      key: "website" as const,
    },
    {
      name: "Public Relations & Reputation Management",
      key: "website" as const,
    },

    {
      name: "Analytics, Reporting & Performance Tracking",
      key: "analytics" as const,
    },
  ],
  sidebarContent: {
    digital: {
      title: "Digital Marketing Strategy",
      description:
        "We develop comprehensive digital marketing strategies that align with your business goals to maximize visibility, traffic, and revenue.",
      list_1_title: "Our services include:",
      list_1: [
        "Digital marketing audits.",
        "Competitor and market research.",
        "Marketing roadmap and execution plan.",
        "Omni channel marketing strategies.",
        "Campaign monitoring and optimization.",
      ],
      list_2_title: "Outcome: ",
      list_2:
        "A data-driven strategy that increases your reach, improves engagement, and boosts conversions.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    social: {
      title: "Social Media Marketing & Management",
      description:
        "Build a strong and engaging social media presence that attracts audiences and converts them into loyal customers.",
      list_1_title: "We manage and grow across platforms like:",
      list_1: [
        "Facebook",
        "Instagram",
        "TikTok",
        "YouTube",
        "X (Twitter)",
        "LinkedIn",
        "Pinterest",
      ],
      list_2_title: "Our capabilities include:",
      list_2: [
        "Social media content creation.",
        "Professional graphics and video post",
        "Weekly content scheduling.",
        "Social media advertising.",
        "Influencer collaboration campaigns.",
        "Community management and audience engagement.",
        "",
      ],
      list_3_title: "Outcome",
      list_3:
        "Strong brand visibility, improved engagement, and consistent follower growth.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    seo: {
      title: "Search Engine Optimization (SEO)",
      description:
        "Rank higher on Google, attract organic traffic, and build long-term online authority with our advanced SEO solutions.",
      list_1_title: "Our SEO services include:",
      list_1: [
        "On-page optimization.",
        "Technical SEO audits.",
        "Keyword research and ranking strategies.",
        "Backlink outreach and authority building.",
        "Local SEO for geo-targeted visibility.",
        "Content optimization for blog articles and landing pages.",
      ],
      list_2_title: "Outcome",
      list_2:
        "Increased organic traffic, improved search rankings, and better online credibility.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    sem: {
      title: "Search Engine Marketing (SEM) & Paid Advertising",
      description:
        "Accelerate growth through strategic paid campaigns that deliver instant visibility and measurable ROI.",
      list_1_title: "Platforms we manage:",
      list_1: [
        "Google Ads",
        "Meta Ads (Facebook & Instagram).",
        "TikTok Ads.",
        "LinkedIn Ads.",
        "YouTube Advertising.",
      ],
      list_2_title: "Our paid media services include:",

      list_2: [
        " PPC campaign setup.",
        "Ad targeting and remarketing.",
        "A/B testing.",
        "Conversion rate optimization.",
        "Budget management and analytics.",
        "",
        "",
      ],
      list_3_title: "Outcome",
      list_3:
        "Increased leads, higher conversion rates, and maximized return on marketing investment",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    content: {
      title: "Content Creation & Copywriting",
      description:
        "We produce compelling, high-quality content that communicates your brand message and connects with your audience.",
      list_1_title: "Types of content we create:",
      list_1: [
        "Website content.",
        "Blog articles.",
        "Social media content calendars.",
        "Brand stories and product descriptions.",
        "Company profiles.",
        "Email newsletters.",
        "Video scripts and marketing visuals.",
      ],
      list_2_title: "Outcome:",
      list_2:
        "Strong storytelling, better audience engagement, and more value-driven communication.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },

    email: {
      title: "Email Marketing & Automation",
      description:
        "Reach your audience directly with personalized and automated email campaigns that nurture leads and drive repeat business.",
      list_1_title: "Our email marketing services include:",

      list_1: [
        "Email campaign design.",
        "Automation sequences.",
        "Lead nurturing workflows.",
        "Newsletter creation.",
        "Customer retention strategies.",
        "Analytics tracking and optimization.",
      ],
      list_2_title: "Outcome:",
      list_2:
        "Higher conversions, increased retention, and improved communication with your customers.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    branding: {
      title: " Branding & Creative Design",
      description:
        "Your brand is your identity—and we help craft one that stands out, inspires trust, and drives loyalty.",
      list_1_title: "Our branding services include:",

      list_1: [
        "Brand strategy development.",
        "Logo and identity design.",
        "Brand guidelines and style systems.",
        "Packaging design.",
        "Marketing kits and business collateral.",
        "Visual storytelling and brand photography direction.",
      ],
      list_2_title: "Outcome:",
      list_2: "A consistent, recognizable, and compelling brand image.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    website: {
      title: "Website Marketing & Conversion Optimization",
      description:
        "Website Marketing & Conversion Optimization Your website should work for your business—not just exist. We help turn your site into a lead-generating machine.",
      list_1_title: "We provide",

      list_1: [
        "Website audit & performance improvement.",
        "Landing page optimization.",
        "Funnel creation.",
        "Performance analytics and heat mapping.",
      ],
      list_2_title: "Outcome:",
      list_2:
        "Higher conversion rates and a website that generates sales and leads consistently.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    public: {
      title: "Public Relations & Reputation Management",
      description:
        "Shape how the world perceives your brand through strategic communication and proactive reputation management.",
      list_1_title: "Our PR services include:",

      list_1: [
        "Media outreach.",
        "Online reputation monitoring.",
        "Crisis communication planning.",
        "Brand storytelling and thought leadership.",
      ],
      list_2_title: "Outcome",

      list_2: "A strong public image and elevated brand authority.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    analytics: {
      title: "Analytics, Reporting & Performance Tracking",
      description:
        "Data drives better decisions. Our advanced marketing data analytics help you understand your audience, campaign performance, and overall marketing impact.",
      list_1_title: "We provide",

      list_1: [
        "Monthly reports.",
        "Marketing KPIs tracking.",
        "Performance dashboards.",
        "Data interpretation and insights.",
        "Recommendations for optimization.",
      ],
      list_2_title: "Outcome:",
      list_2:
        "Clear visibility into what works, what needs improvement, and where to invest next.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
  },
};

export default function Marketing() {
  const [activeService, setActiveService] =
    React.useState<ServiceKey>("social");

  return (
    <div className="service-details__area service-details__space pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-70">
              <h4
                className="sv-hero-title tp-char-animation"
                style={{ letterSpacing: "1px" }}
              >
                {marketingData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {marketingData.intro.paragraph1}
                </p>
                <p className="tp_title_anim">
                  {marketingData.intro.paragraph2}
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
                  src={marketingData.mainImage}
                  alt="marketing"
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
                <p className="tp_title_anim">
                  {marketingData.mainContent.text1}
                </p>
                {/* <p>{marketingData.mainContent.text2}</p> */}
              </div>
              <div className="service-details__fea-list">
                <h3>OUR MARKETING SERVICES</h3>
                <ul style={{ marginTop: 20 }}>
                  {marketingData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {marketingData.smallImages.map((image, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-6 mb-20"
                    >
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`marketing-${index + 1}`}
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {marketingData.services.map((service, index) => (
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
                <h4 className="pb-20" style={{ letterSpacing: "1.2px" }}>
                  {
                    marketingData.sidebarContent[activeService].title.split(
                      " "
                    )[0]
                  }
                </h4>
                <p className="mb-20">
                  {marketingData.sidebarContent[activeService].description}
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href={marketingData.sidebarContent[activeService].ctaLink}
                >
                  {marketingData.sidebarContent[activeService].ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
