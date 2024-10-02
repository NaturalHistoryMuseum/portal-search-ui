import{r as i,f as C,H as w,y as z,z as D,I as t,G as o,b as n,O as a,J as h,N as L,F as T,B as _,R as j,S as A,K as H,A as p}from"./vendor-2c73b3f7.js";import{u as F}from"./main-04ceaeb1.js";import{u as r,c as R,a as N}from"./schemas-418681d8.js";const G=p("div",{class:"divider"},"Attributes",-1),J=p("div",{class:"divider"},"Catalogue",-1),K=p("div",{class:"divider"},"Origin",-1),Q=p("span",{class:"date-separator"},"to",-1),W=p("div",{class:"divider"},"Resources",-1),oe={__name:"SpecimensEnt",setup(X){F().resetGroup("specimens-ent");const P=i([{value:"Type",order:0},{value:"Nontype",order:1},{value:"Paratype",order:2},{value:"Syntype",order:3},{value:"Holotype",order:4},{value:"Paralectotype",order:5},{value:"Lectotype",order:6},{value:"Allotype",order:7},{value:"Neoparatype",order:8},{value:"Cotype",order:9}]),q=i([{value:"Lepidoptera",order:0},{value:"Small orders",order:1},{value:"Diptera and siphonaptera",order:2},{value:"Coleoptera",order:3},{value:"Hymenoptera",order:4},{value:"Molecular collections",order:5},{value:"Historical collections - insects",order:6},{value:"British and irish herbarium",order:7}]),B=i([{value:"Dry",order:0},{value:"Mounted",order:1},{value:"Slide",order:2},{value:"Pinned",order:3},{value:"Frozen",order:4},{value:"Pressed",order:5},{value:"Spirit",order:6},{value:"Carded",order:7},{value:"Liquid nitrogen",order:8},{value:"Papered",order:9}]),m=i(!1),c=r("everything","string","equals",["*"]),v=r("taxonomy-all","string","contains",["scientificName","higherClassification","currentScientificName","determinationNames"]),E=i(R.map(s=>({widget:s.widget,term:r(s.term.id,s.term.contentType,s.term.matchType,s.term.fieldNames)}))),y=r("type-status","string","equals",["typeStatus"]),V=r("preservative","string","equals",["preservative"]),b=r("specimen-id","string","contains",["catalogueId"]),g=r("subdepartment","string","equals",["subdepartment"]),x=r("location","geo",null,[]),f=r("collector-donor","string","contains",["collectedBy","donor"]),d=N("collection-date-start","date","from",[]),u=N("collection-date-end","date","to",[]),S=r("project-expedition","string","contains",["project","expedition"]),U=r("has-media","exists",null,["associatedMedia"]),k=C(()=>u.value?u.value.latest:"today"),I=C(()=>d.value?d.value.earliest:null);return(s,l)=>{const M=w("fa-icon");return z(),D(T,null,[t(o(a),{"zoa-type":"textbox",label:"Search everything",options:{placeholder:"e.g. bombus united kingdom"},modelValue:o(c),"onUpdate:modelValue":l[0]||(l[0]=e=>n(c)?c.value=e:null)},null,8,["options","modelValue"]),G,t(o(a),{label:"Taxonomy or synonym","grid-class":"taxonomy-all"},{default:h(()=>[t(o(a),{"zoa-type":"textbox",label:"Taxonomy or synonym","label-position":"none",options:{placeholder:"e.g. lysandra coridon or carabidae"},modelValue:o(v),"onUpdate:modelValue":l[1]||(l[1]=e=>n(v)?v.value=e:null)},null,8,["options","modelValue"]),t(o(L),{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value=e),title:"Search by individual taxonomic ranks"},{default:h(()=>[t(M,{icon:m.value?"fa-minus":"fa-plus"},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),m.value?(z(!0),D(T,{key:0},_(E.value,e=>(z(),j(o(a),A(e.widget,{modelValue:e.term,"onUpdate:modelValue":O=>e.term=O}),null,16,["modelValue","onUpdate:modelValue"]))),256)):H("",!0),t(o(a),{"zoa-type":"multiselect",label:"Type status",options:{placeholder:"e.g. paratype",options:P.value,enableSearch:!0},modelValue:o(y),"onUpdate:modelValue":l[3]||(l[3]=e=>n(y)?y.value=e:null)},null,8,["options","modelValue"]),t(o(a),{"zoa-type":"multiselect",label:"Preservative",options:{placeholder:"e.g. slide",options:B.value,enableSearch:!0},modelValue:o(V),"onUpdate:modelValue":l[4]||(l[4]=e=>n(V)?V.value=e:null)},null,8,["options","modelValue"]),J,t(o(a),{"zoa-type":"textbox",label:"ID",options:{placeholder:"catalogue ID, barcode, occurrence ID, etc"},modelValue:o(b),"onUpdate:modelValue":l[5]||(l[5]=e=>n(b)?b.value=e:null)},null,8,["modelValue"]),t(o(a),{"zoa-type":"multiselect",label:"Subdepartment",options:{placeholder:"e.g. small orders",options:q.value,enableSearch:!0},modelValue:o(g),"onUpdate:modelValue":l[6]||(l[6]=e=>n(g)?g.value=e:null)},null,8,["options","modelValue"]),K,t(o(a),{"zoa-type":"textbox",label:"Location",options:{placeholder:"e.g. tring or south america or coordinates"},modelValue:o(x),"onUpdate:modelValue":l[7]||(l[7]=e=>n(x)?x.value=e:null)},null,8,["options","modelValue"]),t(o(a),{"zoa-type":"textbox",label:"Collector or donor",options:{placeholder:"e.g. cockayne"},modelValue:o(f),"onUpdate:modelValue":l[8]||(l[8]=e=>n(f)?f.value=e:null)},null,8,["options","modelValue"]),t(o(a),{label:"Collection date","grid-class":"collection-date"},{default:h(()=>[t(o(a),{"zoa-type":"date-ambiguous",label:"Collection date start","label-position":"none",class:"collection-date-start",options:{min:null,max:k.value},modelValue:o(d),"onUpdate:modelValue":l[9]||(l[9]=e=>n(d)?d.value=e:null)},null,8,["options","modelValue"]),Q,t(o(a),{"zoa-type":"date-ambiguous",label:"Collection date end","label-position":"none",class:"collection-date-end",options:{min:I.value},modelValue:o(u),"onUpdate:modelValue":l[10]||(l[10]=e=>n(u)?u.value=e:null)},null,8,["options","modelValue"])]),_:1}),t(o(a),{"zoa-type":"textbox",label:"Project or expedition",options:{placeholder:"e.g. icollections or hms beagle"},modelValue:o(S),"onUpdate:modelValue":l[11]||(l[11]=e=>n(S)?S.value=e:null)},null,8,["options","modelValue"]),W,t(o(a),{"zoa-type":"checkbox",label:"Only specimens with media","label-position":"right",modelValue:o(U),"onUpdate:modelValue":l[12]||(l[12]=e=>n(U)?U.value=e:null)},null,8,["modelValue"])],64)}}};export{oe as default};