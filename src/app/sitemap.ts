import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hadeer-alsharq.com";
  const routes = [
    "",
    "/services",
    "/services/asphalt-paving",
    "/services/road-maintenance",
    "/services/parking-paving",
    "/services/infrastructure-works",
    "/projects",
    "/projects/historic-jeddah",
    "/projects/western-province",
    "/projects/hail-road",
    "/projects/taif-asphalt",
    "/projects/sahari-infrastructure",
    "/projects/paving-various",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") || route.startsWith("/projects/") ? 0.8 : 0.6,
  }));
}
