import { StaticImageData } from "next/image";

interface sericesData {
  name: string;
  key: "web" | "cms" | "mobile" | "desktop" | "api";
}

interface sidebarI {
  title: string;
  description_1: string;
  subTitle_1?: string;
  subTitle_2?: string;
  list_1: Array<string>;
  description_2?: string;
  ctaText: string;
  ctaLink: string;
  list_2?: Array<string>;
}
export interface servicesData {
  title: string;
  intro: {
    paragraph1: string;
    paragraph2: string;
  };
  mainImage: StaticImageData;
  mainContent: {
    text1: string;
    text2: string;
    text3: string;
  };
  features: Array<string>;
  smallImages: Array<StaticImageData>;
  bottomText: string;
  services: Array<sericesData>;
  sidebarContent: {
    web: sidebarI;
    mobile: sidebarI;
    desktop: sidebarI;
    api: sidebarI;
    cms: sidebarI;
  };
}
