import{_ as e,l as o,G as i,k as n,H as p}from"../app.BxjSqRXC.js";import{p as g}from"./gitGraph-YCYPL57B.Dkf8UVqC.js";import"./framework.CQ46jkEd.js";import"./commonjsHelpers.BosuxZz1.js";import"./theme.CEJmA63k.js";import"./baseUniq.CmfJP5b5.js";import"./basePickBy.BiMdzb5K.js";import"./clone.BVcJnfyF.js";var m={parse:e(async r=>{const a=await g("info",r);o.debug(a)},"parse")},v={version:p},d=e(()=>v.version,"getVersion"),c={getVersion:d},l=e((r,a,s)=>{o.debug(`rendering info diagram
`+r);const t=i(a);n(t,100,400,!0),t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${s}`)},"draw"),f={draw:l},E={parser:m,db:c,renderer:f};export{E as diagram};
