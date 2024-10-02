import{r as d,f as M,H as j,y as U,z as C,I as t,G as o,b as n,O as a,J as T,N as E,F as D,B as P,R as A,S as G,K as R,A as p}from"./vendor-2c73b3f7.js";import{u as F}from"./main-04ceaeb1.js";import{u as s,d as K,a as h}from"./schemas-418681d8.js";const L=p("div",{class:"divider"},"Attributes",-1),H=p("div",{class:"divider"},"Catalogue",-1),J=p("div",{class:"divider"},"Origin",-1),Q=p("span",{class:"date-separator"},"to",-1),W=p("div",{class:"divider"},"Resources",-1),oe={__name:"SpecimensMin",setup(X){F().resetGroup("specimens-min");const N=d([{value:"Type",order:0},{value:"Non-type",order:1}]),O=d([{value:"Minerals",order:0},{value:"Petrology",order:1},{value:"Ores",order:2},{value:"Meteorites",order:3}]),q=d([{value:"Minerals",order:0},{value:"Petrology",order:1},{value:"Ocean bottom deposits",order:2},{value:"Ores",order:3},{value:"Building stones",order:4},{value:"Meteorites",order:5},{value:"Gems",order:6},{value:"Impactites",order:7},{value:"Tektites",order:8}]),m=d(!1),c=s("everything","string","equals",["*"]),v=s("taxonomy-all","string","contains",["scientificName","higherClassification","currentScientificName","determinationNames"]),B=d(K.map(i=>({widget:i.widget,term:s(i.term.id,i.term.contentType,i.term.matchType,i.term.fieldNames)}))),y=s("type-status","string","equals",["typeStatus"]),V=s("collection","string","equals",["collectionKind"]),b=s("specimen-id","string","contains",["catalogueId"]),g=s("subdepartment","string","equals",["subdepartment"]),x=s("location","geo",null,[]),f=s("collector-donor","string","contains",["collectedBy","donor"]),r=h("collection-date-start","date","from",[]),u=h("collection-date-end","date","to",[]),S=s("project-expedition","string","contains",["project","expedition"]),z=s("has-media","exists",null,["associatedMedia"]),I=M(()=>u.value?u.value.latest:"today"),k=M(()=>r.value?r.value.earliest:null);return(i,l)=>{const w=j("fa-icon");return U(),C(D,null,[t(o(a),{"zoa-type":"textbox",label:"Search everything",options:{placeholder:"e.g. topaz australia"},modelValue:o(c),"onUpdate:modelValue":l[0]||(l[0]=e=>n(c)?c.value=e:null)},null,8,["options","modelValue"]),L,t(o(a),{label:"Taxonomy or description","grid-class":"taxonomy-all"},{default:T(()=>[t(o(a),{"zoa-type":"textbox",label:"Taxonomy or description","label-position":"none",options:{placeholder:"e.g. quartz or red clay"},modelValue:o(v),"onUpdate:modelValue":l[1]||(l[1]=e=>n(v)?v.value=e:null)},null,8,["options","modelValue"]),t(o(E),{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value=e),title:"Search by individual taxonomic ranks"},{default:T(()=>[t(w,{icon:m.value?"fa-minus":"fa-plus"},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),m.value?(U(!0),C(D,{key:0},P(B.value,e=>(U(),A(o(a),G(e.widget,{modelValue:e.term,"onUpdate:modelValue":_=>e.term=_}),null,16,["modelValue","onUpdate:modelValue"]))),256)):R("",!0),t(o(a),{"zoa-type":"multiselect",label:"Type status",options:{placeholder:"e.g. paratype",options:N.value,enableSearch:!0},modelValue:o(y),"onUpdate:modelValue":l[3]||(l[3]=e=>n(y)?y.value=e:null)},null,8,["options","modelValue"]),H,t(o(a),{"zoa-type":"textbox",label:"ID",options:{placeholder:"catalogue ID, barcode, occurrence ID, etc"},modelValue:o(b),"onUpdate:modelValue":l[4]||(l[4]=e=>n(b)?b.value=e:null)},null,8,["modelValue"]),t(o(a),{"zoa-type":"multiselect",label:"Subdepartment",options:{placeholder:"e.g. petrology",options:O.value,enableSearch:!0},modelValue:o(g),"onUpdate:modelValue":l[5]||(l[5]=e=>n(g)?g.value=e:null)},null,8,["options","modelValue"]),t(o(a),{"zoa-type":"multiselect",label:"Collection",options:{placeholder:"e.g. ocean bottom deposits",options:q.value,enableSearch:!0},modelValue:o(V),"onUpdate:modelValue":l[6]||(l[6]=e=>n(V)?V.value=e:null)},null,8,["options","modelValue"]),J,t(o(a),{"zoa-type":"textbox",label:"Location",options:{placeholder:"e.g. penrhyn mine or europe or coordinates"},modelValue:o(x),"onUpdate:modelValue":l[7]||(l[7]=e=>n(x)?x.value=e:null)},null,8,["options","modelValue"]),t(o(a),{"zoa-type":"textbox",label:"Collector or donor",options:{placeholder:"e.g. ludlam"},modelValue:o(f),"onUpdate:modelValue":l[8]||(l[8]=e=>n(f)?f.value=e:null)},null,8,["options","modelValue"]),t(o(a),{label:"Collection date","grid-class":"collection-date"},{default:T(()=>[t(o(a),{"zoa-type":"date-ambiguous",label:"Collection date start","label-position":"none",class:"collection-date-start",options:{min:null,max:I.value},modelValue:o(r),"onUpdate:modelValue":l[9]||(l[9]=e=>n(r)?r.value=e:null)},null,8,["options","modelValue"]),Q,t(o(a),{"zoa-type":"date-ambiguous",label:"Collection date end","label-position":"none",class:"collection-date-end",options:{min:k.value},modelValue:o(u),"onUpdate:modelValue":l[10]||(l[10]=e=>n(u)?u.value=e:null)},null,8,["options","modelValue"])]),_:1}),t(o(a),{"zoa-type":"textbox",label:"Project or expedition",options:{placeholder:"e.g. aoi or hms challenger"},modelValue:o(S),"onUpdate:modelValue":l[11]||(l[11]=e=>n(S)?S.value=e:null)},null,8,["options","modelValue"]),W,t(o(a),{"zoa-type":"checkbox",label:"Only specimens with media","label-position":"right",modelValue:o(z),"onUpdate:modelValue":l[12]||(l[12]=e=>n(z)?z.value=e:null)},null,8,["modelValue"])],64)}}};export{oe as default};