"use client";
import { useState } from "react";
import { ChevronDown, Menu, Percent, X } from "lucide-react";
import { toolDefinitions } from "@/lib/tool-data";

const groups=["Math","Everyday","Finance","Business","Construction","Converters","Developer"];

export default function SiteHeader(){
 const [mega,setMega]=useState(false); const [mobile,setMobile]=useState(false);
 return <header className="site-header">
  <a className="brand" href="/" aria-label="Amarildo Tools home"><span className="brand-mark"><Percent size={20} strokeWidth={2.6}/></span><span>amarildo tools</span></a>
  <nav className={mobile?"main-nav open":"main-nav"} aria-label="Main navigation">
   <div className="mega-wrap">
    <button className="nav-button" onClick={()=>setMega(!mega)} aria-expanded={mega}>All tools <ChevronDown size={15}/></button>
    <div className={mega?"mega-menu is-open":"mega-menu"}>
      <div className="mega-head"><div><strong>Find the right tool</strong><span>{toolDefinitions.length} calculators and utilities</span></div><button onClick={()=>setMega(false)} aria-label="Close tools menu"><X size={18}/></button></div>
      <div className="mega-grid">{groups.map(group=><section key={group}><a className="mega-category" href={"/categories/"+group.toLowerCase()}>{group}</a>{toolDefinitions.filter(t=>t.category===group).slice(0,6).map(tool=><a href={"/tools/"+tool.slug} key={tool.slug}>{tool.name}</a>)}<a className="mega-more" href={"/categories/"+group.toLowerCase()}>View all {group.toLowerCase()} tools →</a></section>)}</div>
    </div>
   </div>
   <a href="/#categories">Categories</a><a href="/about">About</a>
  </nav>
  <a className="header-action" href="/#tools">Explore tools</a>
  <button className="mobile-menu-button" onClick={()=>setMobile(!mobile)} aria-label="Toggle menu" aria-expanded={mobile}>{mobile?<X/>:<Menu/>}</button>
 </header>
}
