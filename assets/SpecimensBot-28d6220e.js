import{r as d,f as C,H as F,y as B,z as I,I as t,G as l,b as n,O as a,J as T,N as H,F as N,B as L,R as G,S as R,K as J,A as p}from"./vendor-2c73b3f7.js";import{u as K}from"./main-04ceaeb1.js";import{u as s,b as Q,a as w}from"./schemas-418681d8.js";const W=p("div",{class:"divider"},"Attributes",-1),X=p("div",{class:"divider"},"Catalogue",-1),Y=p("div",{class:"divider"},"Origin",-1),Z=p("span",{class:"date-separator"},"to",-1),$=p("div",{class:"divider"},"Resources",-1),ae={__name:"SpecimensBot",setup(_){K().resetGroup("specimens-bot");const O=d([{value:"Type",order:0},{value:"Nontype",order:1},{value:"Isotype",order:2},{value:"Syntype",order:3},{value:"Holotype",order:4},{value:"Original",order:5},{value:"Lectotype",order:6},{value:"Isolectotype",order:7},{value:"Isosyntype",order:8},{value:"Paratype",order:9}]),P=d([{value:"Gen herb",order:0},{value:"Flowering plants",order:1},{value:"Bryophytes",order:2},{value:"British and Irish herbarium",order:3},{value:"Algae",order:4},{value:"Diatoms",order:5},{value:"Pteridophytes",order:6},{value:"Ferns",order:7},{label:"Lichens",order:8,value:"lichen"},{label:"Slime moulds",order:9,value:"slime mould"},{value:"Historical collections",order:10}]),k=d([{value:"Sheet",order:0},{value:"Microscope",order:1},{value:"Packet",order:2},{value:"Box",order:3},{value:"Jar",order:4},{value:"Illustration",order:5},{value:"Vial",order:6},{value:"Photograph",order:7},{value:"Plate",order:8},{value:"Tree section",order:9}]),c=d(!1),m=s("everything","string","equals",["*"]),v=s("taxonomy-all","string","contains",["scientificName","higherClassification","currentScientificName","determinationNames"]),q=d(Q.map(r=>({widget:r.widget,term:s(r.term.id,r.term.contentType,r.term.matchType,r.term.fieldNames)}))),y=s("type-status","string","equals",["typeStatus"]),b=s("plant-desc","string","contains",["plantDescription"]),V=s("habitat-desc","string","contains",["habitat"]),g=s("specimen-id","string","contains",["catalogueId"]),x=s("subdepartment","string","contains",["subdepartment"]),f=s("collection","string","contains",["collectionKind","kindOfCollection"]),h=s("exsiccata","string","equals",["exsiccata"]),S=s("location","geo",null,[]),U=s("collector-donor","string","contains",["collectedBy","donor"]),i=w("collection-date-start","date","from",[]),u=w("collection-date-end","date","to",[]),z=s("project-expedition","string","contains",["project","expedition"]),D=s("has-media","exists",null,["associatedMedia"]),E=C(()=>u.value?u.value.latest:"today"),M=C(()=>i.value?i.value.earliest:null);return(r,o)=>{const j=F("fa-icon");return B(),I(N,null,[t(l(a),{"zoa-type":"textbox",label:"Search everything",options:{placeholder:"e.g. helianthus netherlands"},modelValue:l(m),"onUpdate:modelValue":o[0]||(o[0]=e=>n(m)?m.value=e:null)},null,8,["options","modelValue"]),W,t(l(a),{label:"Taxonomy or synonym","grid-class":"taxonomy-all"},{default:T(()=>[t(l(a),{"zoa-type":"textbox",label:"Taxonomy or synonym","label-position":"none",options:{placeholder:"e.g. urtica dioica or solanaceae"},modelValue:l(v),"onUpdate:modelValue":o[1]||(o[1]=e=>n(v)?v.value=e:null)},null,8,["options","modelValue"]),t(l(H),{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=e=>c.value=e),title:"Search by individual taxonomic ranks"},{default:T(()=>[t(j,{icon:c.value?"fa-minus":"fa-plus"},null,8,["icon"])]),_:1},8,["modelValue"])]),_:1}),c.value?(B(!0),I(N,{key:0},L(q.value,e=>(B(),G(l(a),R(e.widget,{modelValue:e.term,"onUpdate:modelValue":A=>e.term=A}),null,16,["modelValue","onUpdate:modelValue"]))),256)):J("",!0),t(l(a),{"zoa-type":"multiselect",label:"Type status",options:{placeholder:"e.g. paratype",options:O.value,enableSearch:!0},modelValue:l(y),"onUpdate:modelValue":o[3]||(o[3]=e=>n(y)?y.value=e:null)},null,8,["options","modelValue"]),t(l(a),{"zoa-type":"textbox",label:"Plant description",options:{placeholder:"e.g. tree"},modelValue:l(b),"onUpdate:modelValue":o[4]||(o[4]=e=>n(b)?b.value=e:null)},null,8,["options","modelValue"]),t(l(a),{"zoa-type":"textbox",label:"Habitat description",options:{placeholder:"e.g. clay"},modelValue:l(V),"onUpdate:modelValue":o[5]||(o[5]=e=>n(V)?V.value=e:null)},null,8,["options","modelValue"]),X,t(l(a),{"zoa-type":"textbox",label:"ID",options:{placeholder:"catalogue ID, barcode, occurrence ID, etc"},modelValue:l(g),"onUpdate:modelValue":o[6]||(o[6]=e=>n(g)?g.value=e:null)},null,8,["modelValue"]),t(l(a),{"zoa-type":"multiselect",label:"Subdepartment",options:{placeholder:"e.g. algae",options:P.value,enableSearch:!0},modelValue:l(x),"onUpdate:modelValue":o[7]||(o[7]=e=>n(x)?x.value=e:null)},null,8,["options","modelValue"]),t(l(a),{"zoa-type":"multiselect",label:"Collection",options:{placeholder:"e.g. sheet",options:k.value,enableSearch:!0},modelValue:l(f),"onUpdate:modelValue":o[8]||(o[8]=e=>n(f)?f.value=e:null)},null,8,["options","modelValue"]),t(l(a),{"zoa-type":"textbox",label:"Exsiccata",options:{placeholder:"e.g. australian algae"},modelValue:l(h),"onUpdate:modelValue":o[9]||(o[9]=e=>n(h)?h.value=e:null)},null,8,["options","modelValue"]),Y,t(l(a),{"zoa-type":"textbox",label:"Location",options:{placeholder:"e.g. new forest or africa or coordinates"},modelValue:l(S),"onUpdate:modelValue":o[10]||(o[10]=e=>n(S)?S.value=e:null)},null,8,["options","modelValue"]),t(l(a),{"zoa-type":"textbox",label:"Collector or donor",options:{placeholder:"e.g. hassler"},modelValue:l(U),"onUpdate:modelValue":o[11]||(o[11]=e=>n(U)?U.value=e:null)},null,8,["options","modelValue"]),t(l(a),{label:"Collection date","grid-class":"collection-date"},{default:T(()=>[t(l(a),{"zoa-type":"date-ambiguous",label:"Collection date start","label-position":"none",class:"collection-date-start",options:{min:null,max:E.value},modelValue:l(i),"onUpdate:modelValue":o[12]||(o[12]=e=>n(i)?i.value=e:null)},null,8,["options","modelValue"]),Z,t(l(a),{"zoa-type":"date-ambiguous",label:"Collection date end","label-position":"none",class:"collection-date-end",options:{min:M.value},modelValue:l(u),"onUpdate:modelValue":o[13]||(o[13]=e=>n(u)?u.value=e:null)},null,8,["options","modelValue"])]),_:1}),t(l(a),{"zoa-type":"textbox",label:"Project or expedition",options:{placeholder:"e.g. world brassicales or britannia"},modelValue:l(z),"onUpdate:modelValue":o[14]||(o[14]=e=>n(z)?z.value=e:null)},null,8,["options","modelValue"]),$,t(l(a),{"zoa-type":"checkbox",label:"Only specimens with media","label-position":"right",modelValue:l(D),"onUpdate:modelValue":o[15]||(o[15]=e=>n(D)?D.value=e:null)},null,8,["modelValue"])],64)}}};export{ae as default};