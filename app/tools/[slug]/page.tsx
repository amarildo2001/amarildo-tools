import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Percent } from "lucide-react";
import CalculatorEngine from "@/components/calculator-engine";
import { toolBySlug, toolDefinitions } from "@/lib/tool-data";
import SiteHeader from "@/components/site-header";

export function generateStaticParams(){ return toolDefinitions.map(({slug})=>({slug})); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const tool=toolBySlug[slug];
  if(!tool) return {};
  return {
    title: tool.name+" — Free Online Tool | Amarildo Tools",
    description: tool.description,
    alternates:{canonical:"/tools/"+slug},
    openGraph:{title:tool.name+" | Amarildo Tools",description:tool.description,type:"website"}
  };
}

export default async function ToolPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const tool=toolBySlug[slug]; if(!tool) notFound();
  const related=toolDefinitions.filter(x=>x.slug!==slug&&(x.category===tool.category||tool.category==="Everyday")).slice(0,3);
  const schema={"@context":"https://schema.org","@type":"WebApplication",name:tool.name,description:tool.description,applicationCategory:"UtilityApplication",operatingSystem:"Any",offers:{"@type":"Offer",price:"0",priceCurrency:"USD"}};
  return <main>
    <SiteHeader/>
    <div className="tool-page">
      <a className="back-link" href="/#tools"><ArrowLeft size={16}/> All tools</a>
      <div className="tool-hero"><span className="category-pill">{tool.category} tool</span><h1>{tool.name}</h1><p>{tool.description}</p></div>
      <section className="engine-shell" aria-label={tool.name}><CalculatorEngine slug={slug}/><aside><span>Formula or method</span><strong>{tool.formula}</strong><p>Results update in your browser. No account is required.</p></aside></section>
      <div className="content-grid"><article><h2>How to use this {tool.name.toLowerCase()}</h2><ol>{tool.guide.map(step=><li key={step}><Check size={18}/><span>{step}</span></li>)}</ol><h2>About this calculation</h2><p>{tool.description} Amarildo Tools keeps the inputs close to the result and shows the underlying method so you can check the calculation. Results are estimates where real-world rates, measurements, or personal circumstances can vary.</p><h2>Frequently asked questions</h2>{tool.faq.map(item=><div className="faq" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</article><aside className="related"><h2>Related tools</h2>{related.map(item=><a href={"/tools/"+item.slug} key={item.slug}><strong>{item.name}</strong><span>{item.short}</span></a>)}</aside></div>
    </div>
    <footer><a className="brand" href="/"><span className="brand-mark"><Percent size={18}/></span><span>amarildo tools</span></a><p><a href="mailto:info@amarildotools.com">info@amarildotools.com</a></p><span>© 2026 Amarildo Tools · Created by <a href="https://amarildoprendi.com/" target="_blank" rel="noopener noreferrer">Amarildo Prendi</a></span></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  </main>
}
