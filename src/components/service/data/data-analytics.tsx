import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";

type ServiceKey =
  | "businessIntelligence"
  | "AdvancedAnalytics"
  | "DataCleaning"
  | "CustomerAnalytics"
  | "FinancialAnalytics";

const dataAnalyticsData = {
  title: "Data Analytics",
  sub_title: "Data-Driven Solutions That Promote Smarter Business Decisions",
  intro: {
    paragraph1:
      "We help businesses unlock the hidden value in their data. Our Data Analytics Services empower organizations to make smarter strategic decisions, optimize organizational performance, and accelerate growth. Whether you’re a startup, a small to medium size enterprise, or an enterprise, we deliver custom, scalable, and innovative analytics solutions designed to solve complex business challenges.",
  },
  mainImage: sv_1,
  mainContent: {
    text1:
      "Our experienced data engineers, analysts, and AI specialists transform your organization's raw data into powerful insights, leveraging the latest data trends to help you make better informed and strategic decisions that increase efficiency, uncover opportunities, and accelerate growth",
    text2:
      "Whether you need predictive analytics, real-time dashboards, or enterprise-grade data engineering, we deliver the tools and expertise to increase your business efficiency and strategic performance.",
  },
  features: [
    "Business Intelligence (BI) & Reporting",
    "Advanced Analytics & Machine Learning Solutions",
    "Data Cleaning, Transformation & Automation",
    "Customer Analytics & Market Insights",
    "Operational & Financial Analytics",
  ],
  smallImages: [sv_2, sv_3],
  services: [
    { name: "Business Intelligence", key: "businessIntelligence" as const },
    { name: "Advanced Analytics", key: "AdvancedAnalytics" as const },
    { name: "Data Cleaning", key: "DataCleaning" as const },
    { name: "Customer Analytics", key: "CustomerAnalytics" as const },
    {
      name: "Operation and Financial Analytics",
      key: "FinancialAnalytics" as const,
    },
  ],
  sidebarContent: {
    businessIntelligence: {
      title: "Business Intelligence (BI) & Reporting",
      description:
        "Gain clear, real-time insights into your business performance with interactive dashboards and automated reporting systems",
      list_1_title: "Our BI capabilities include:",
      list_1: [
        "Custom dashboard development.",
        "Visual performance tracking & KPI monitoring.",
        "Automated daily/weekly/monthly reporting.",
        "Predictive and descriptive analytics for business performance.",
        "Cross-department data integration for a unified business view.",
      ],
      list_2_title: "Outcome:",
      list_2: [
        "Faster decision-making.",
        "Improved transparency.",
        "Smarter resource allocation.",
      ],
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    AdvancedAnalytics: {
      title: "Advanced Analytics & Machine Learning Solutions",
      description:
        "Accelerate innovation using AI-driven models that help predict trends, automate workflows, and enhance business performance.",
      list_1_title: "We deliver solutions such as:",
      list_1: [
        "Predictive modeling (sales forecasting, churn prediction, demand forecasting",
        "Machine learning automation & integration",
        "Customer segmentation and behavior analysis",
        "Anomaly detection for finance, retail, operations, and more",
        "Recommender systems and personalization engines",
      ],
      list_2_title: "Outcome: ",
      list_2:
        "Transform your business operations from reactive to proactive with optimized data-driven foresight.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    DataCleaning: {
      title: " Data Cleaning, Transformation & Automation",
      description:
        "Ensure your data is accurate, reliable, and analysis-ready with our cleansing and data engineering processes.",
      list_1_title: "Our processes include:",
      list_1: [
        "Data cleansing & deduplication",
        "Data standardization & formatting",
        "Automated pipelines for ongoing data quality monitoring",
        "System integration with ERP, CRM, and third-party platforms",
      ],
      list_2_title: "Outcome: ",
      list_2:
        "Higher data accuracy, improved reporting, and reduced operational errors.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    CustomerAnalytics: {
      title: "Customer Analytics & Market Insights",
      description:
        "Understand your customers better than ever and create experiences that promote customer loyalty and increased conversion rate.",
      list_1_title: "We help you analyze:",
      list_1: [
        "Customer acquisition & engagement patterns",
        "Buying behavior and lifecycle journeys",
        "Marketing campaign performance",
        "Segments & audience clusters",
        "Market trends and competitive positioning",
      ],
      list_2_title: "Outcome: ",
      list_2:
        "More targeted marketing campaigns and improved customer satisfaction.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    FinancialAnalytics: {
      title: "Operational & Financial Analytics",
      description:
        "Enhance efficiency and financial performance using detailed insights into your internal processes.",
      list_1_title: "Our analytics span:",
      list_1: [
        "Operational workflow optimization.",
        "Supply chain performance measurement.",
        "Asset and resource utilization tracking.",
        "Financial modeling & profitability analysis.",
        "Budgeting and forecasting tools.",
      ],
      list_2_title: "Outcome: ",
      list_2:
        "Cost reduction, operational excellence, and increased profitability.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    bigData: {
      title: "Big Data Solutions",
      description:
        "Handle massive datasets with our scalable big data infrastructure and processing solutions. We implement modern data architectures that can store, process, and analyze large volumes of structured and unstructured data efficiently.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
    reporting: {
      title: "Reporting & Dashboards",
      description:
        "Automated reporting systems and interactive dashboards that provide real-time insights. We create custom reporting solutions that deliver the right information to the right people at the right time, enabling faster, data-driven decisions.",
      ctaText: "Let's Talk",
      ctaLink: "/contact",
    },
  },
};

export default function DataAnalytics() {
  const [activeService, setActiveService] = React.useState<ServiceKey>(
    "businessIntelligence"
  );

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
                {dataAnalyticsData.title}
              </h4>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {dataAnalyticsData.intro.paragraph1}
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
                  src={dataAnalyticsData.mainImage}
                  alt="data-analytics"
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
                  {dataAnalyticsData.mainContent.text1}
                </p>
                <p>{dataAnalyticsData.mainContent.text2}</p>
              </div>
              <div className="service-details__fea-list">
                <h3>Our Data Analytics Solutions</h3>
                <br />
                <ul>
                  {dataAnalyticsData.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {dataAnalyticsData.smallImages.map((image, index) => (
                    <div
                      key={index}
                      className="col-xl-6 col-lg-6 col-md-6 mb-20"
                    >
                      <div className="service-details__sm-thumb">
                        <Image
                          src={image}
                          alt={`data-analytics-${index + 1}`}
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
                <span>Data Analytics services</span>
              </div>
              <div className="service-details__right-category">
                {dataAnalyticsData.services.map((service, index) => (
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
              <div className="service-details__right-text-box ">
                <h3
                  className="pb-20 font-oxanium"
                  style={{ letterSpacing: "1.2px", fontWeight: 600 }}
                >
                  {dataAnalyticsData.sidebarContent[activeService].title}
                </h3>
                <p className="mb-20">
                  {dataAnalyticsData.sidebarContent[activeService].description}
                </p>
                <h4 className="font-oxanium" style={{ fontWeight: 600 }}>
                  {dataAnalyticsData.sidebarContent[activeService].list_1_title}
                </h4>
                <ul style={{ marginTop: 20 }}>
                  {dataAnalyticsData.sidebarContent[activeService].list_1.map(
                    (feature, index) => (
                      <li key={index}>{feature}</li>
                    )
                  )}
                </ul>
                {
                  <h4
                    className="font-oxanium"
                    style={{ fontWeight: 700, marginTop: 20 }}
                  >
                    {
                      dataAnalyticsData.sidebarContent[activeService]
                        .list_2_title
                    }
                  </h4>
                }
                {Array.isArray(
                  dataAnalyticsData.sidebarContent[activeService].list_2
                ) ? (
                  <ul style={{ marginTop: 20 }}>
                    {dataAnalyticsData.sidebarContent[activeService].list_2.map(
                      (feature, index) => (
                        <li key={index}>{feature}</li>
                      )
                    )}
                  </ul>
                ) : (
                  <p>
                    {dataAnalyticsData.sidebarContent[activeService].list_2}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
