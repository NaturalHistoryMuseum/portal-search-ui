import{r as q,y as D,z as T,I as a,G as o,b as t,O as n,F as B,A as s}from"./vendor-2c73b3f7.js";import{u as N}from"./main-04ceaeb1.js";import{u as r}from"./schemas-418681d8.js";const I=s("div",{class:"divider"},"General",-1),L=s("div",{class:"divider"},"Sample Properties",-1),j=s("div",{class:"divider"},"Specimen Properties",-1),O=s("div",{class:"divider"},"Resources",-1),M={__name:"Samples",setup(k){N().resetGroup("sample-all");const S=q([{value:"Darwin Tree of Life",order:0},{value:"Cryoarks",order:1},{value:"UKBoL",order:2},{value:"Freshbase",order:3}]),i=r("everything","string","equals",["*"]),p=r("project","string","equals",["project"]),u=r("preparationNumber","string","equals",["preparationNumber"]),d=r("preparationType","string","contains",["preparationType"]),m=r("preparationContents","string","equals",["preparationContents"]),c=r("preparationProcess","string","contains",["preparationProcess"]),V=r("mediumType","string","contains",["mediumType"]),b=r("preparationDate","date","equals",["preparationDate"]),y=r("purpose","string","equals",["purpose"]),g=r("scientific-name","string","contains",["scientificName"]),v=r("order","string","contains",["order"]),x=r("barcode","string","equals",["barcode"]),f=r("locality","string","equals",["locality","decimalLatitude","decimalLongitude"]),z=r("identified-by","string","contains",["identifiedBy"]),U=r("specimen-id","string","contains",["associatedOccurrences","specimenId"]),P=r("has-media","exists",null,["associatedMedia"]);return(w,e)=>(D(),T(B,null,[a(o(n),{"zoa-type":"textbox",label:"Search everything",options:{placeholder:"e.g. DNA"},modelValue:o(i),"onUpdate:modelValue":e[0]||(e[0]=l=>t(i)?i.value=l:null)},null,8,["options","modelValue"]),I,a(o(n),{"zoa-type":"multiselect",label:"Project",options:{placeholder:"e.g. Darwin Tree of Life",options:S.value,enableSearch:!0},modelValue:o(p),"onUpdate:modelValue":e[1]||(e[1]=l=>t(p)?p.value=l:null)},null,8,["options","modelValue"]),L,a(o(n),{"zoa-type":"textbox",label:"Preparation number",options:{placeholder:"e.g. BM001163319"},modelValue:o(u),"onUpdate:modelValue":e[2]||(e[2]=l=>t(u)?u.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Preparation type",options:{placeholder:"e.g. tissue"},modelValue:o(d),"onUpdate:modelValue":e[3]||(e[3]=l=>t(d)?d.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Preparation contents",options:{placeholder:"e.g. leaf"},modelValue:o(m),"onUpdate:modelValue":e[4]||(e[4]=l=>t(m)?m.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Preparation process",options:{placeholder:"e.g. desiccation: silica dried"},modelValue:o(c),"onUpdate:modelValue":e[5]||(e[5]=l=>t(c)?c.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Preparation storage medium",options:{placeholder:"e.g. silica gel"},modelValue:o(V),"onUpdate:modelValue":e[6]||(e[6]=l=>t(V)?V.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"date-ambiguous",label:"Preparation date",modelValue:o(b),"onUpdate:modelValue":e[7]||(e[7]=l=>t(b)?b.value=l:null)},null,8,["modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Preparation purpose",options:{placeholder:"e.g. reference genome"},modelValue:o(y),"onUpdate:modelValue":e[8]||(e[8]=l=>t(y)?y.value=l:null)},null,8,["options","modelValue"]),j,a(o(n),{"zoa-type":"textbox",label:"Scientific name",options:{placeholder:"e.g. Senecio erucifolius"},modelValue:o(g),"onUpdate:modelValue":e[9]||(e[9]=l=>t(g)?g.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Order",options:{placeholder:"e.g. Asterales"},modelValue:o(v),"onUpdate:modelValue":e[10]||(e[10]=l=>t(v)?v.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Barcode",options:{placeholder:"e.g. 015557513"},modelValue:o(x),"onUpdate:modelValue":e[11]||(e[11]=l=>t(x)?x.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Locality",options:{placeholder:"e.g. penrhyn mine or europe or coordinates"},modelValue:o(f),"onUpdate:modelValue":e[12]||(e[12]=l=>t(f)?f.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Identified by",options:{placeholder:"e.g. anning"},modelValue:o(z),"onUpdate:modelValue":e[13]||(e[13]=l=>t(z)?z.value=l:null)},null,8,["options","modelValue"]),a(o(n),{"zoa-type":"textbox",label:"Voucher ID",options:{placeholder:"catalogue ID, barcode, occurrence ID, etc"},modelValue:o(U),"onUpdate:modelValue":e[14]||(e[14]=l=>t(U)?U.value=l:null)},null,8,["modelValue"]),O,a(o(n),{"zoa-type":"checkbox",label:"Only samples with media","label-position":"right",modelValue:o(P),"onUpdate:modelValue":e[15]||(e[15]=l=>t(P)?P.value=l:null)},null,8,["modelValue"])],64))}};export{M as default};
