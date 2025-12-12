import React from "react";
import { Metadata } from "next";
import DataAnalytic from "@/pages/service/data-analytics";

export const metadata: Metadata = {
  title: "Kaltech - Motion Graphics Service",
};

const ServiceDetailsPage = () => {
  return <DataAnalytic />;
};

export default ServiceDetailsPage;
