import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kajal-portfolio.vercel.app", lastModified: new Date() },
    {
      url: "https://kajal-portfolio.vercel.app/#about",
      lastModified: new Date(),
    },
    {
      url: "https://kajal-portfolio.vercel.app/#skills",
      lastModified: new Date(),
    },
    {
      url: "https://kajal-portfolio.vercel.app/#projects",
      lastModified: new Date(),
    },
    {
      url: "https://kajal-portfolio.vercel.app/#contact",
      lastModified: new Date(),
    },
  ];
}
