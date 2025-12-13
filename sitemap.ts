// app/sitemap.ts
import { MetadataRoute } from "next";

// Optional: dynamically set lastModified per page if you want
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kajal-portfolio.vercel.app";

  // Static pages + sections
  const urls: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified },
    { url: `${baseUrl}/#about`, lastModified },
    { url: `${baseUrl}/#skills`, lastModified },
    { url: `${baseUrl}/#projects`, lastModified },
    { url: `${baseUrl}/#contact`, lastModified },
  ];

  return urls;
}
