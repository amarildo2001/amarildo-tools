import type { MetadataRoute } from "next";
import { toolDefinitions } from "@/lib/tool-data";
export default function sitemap():MetadataRoute.Sitemap {
 const base="https://amarildotools.com";
 const categories=["math","everyday","finance","business","construction","converters","developer","health"];
 const info=["about","privacy","terms","disclaimer","contact","editorial-standards"];
 return [{url:base,lastModified:new Date(),changeFrequency:"weekly",priority:1},...categories.map(category=>({url:base+"/categories/"+category,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.8})),...toolDefinitions.map(tool=>({url:base+"/tools/"+tool.slug,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),...info.map(page=>({url:base+"/"+page,lastModified:new Date(),changeFrequency:"yearly" as const,priority:.4}))];
}
