import{T as k,U as F}from"./vendor-2c73b3f7.js";function B(n){n=n.replace(/_/g,"-"),n=n.replace(/[.:][\w-]*$/,"");try{return new Intl.Locale(n).baseName}catch{return"en-US"}}var Y=B;const j=Y;let d;if(typeof navigator<"u"){const n=navigator;d=Array.isArray(n.languages)?n.languages[0]:n.language}else if(typeof process<"u"){const n={GITHUB_STATE:"/home/runner/work/_temp/_runner_file_commands/save_state_b31fe970-3421-496e-97c4-c31fbe0d536a",STATS_TRP:"true",DEPLOYMENT_BASEPATH:"/opt/runner",DOTNET_NOLOGO:"1",USER:"runner",npm_config_user_agent:"npm/8.19.4 node/v16.20.2 linux x64 workspaces/false ci/github-actions",CI:"true",RUNNER_ENVIRONMENT:"github-hosted",GITHUB_ENV:"/home/runner/work/_temp/_runner_file_commands/set_env_b31fe970-3421-496e-97c4-c31fbe0d536a",PIPX_HOME:"/opt/pipx",npm_node_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",JAVA_HOME_8_X64:"/usr/lib/jvm/temurin-8-jdk-amd64",SHLVL:"1",npm_config_noproxy:"",HOME:"/home/runner",RUNNER_TEMP:"/home/runner/work/_temp",GITHUB_EVENT_PATH:"/home/runner/work/_temp/_github_workflow/event.json",npm_package_json:"/home/runner/work/zoa/zoa/package.json",JAVA_HOME_11_X64:"/usr/lib/jvm/temurin-11-jdk-amd64",PIPX_BIN_DIR:"/opt/pipx_bin",GITHUB_REPOSITORY_OWNER:"NaturalHistoryMuseum",GRADLE_HOME:"/usr/share/gradle-8.5",ANDROID_NDK_LATEST_HOME:"/usr/local/lib/android/sdk/ndk/26.1.10909125",JAVA_HOME_21_X64:"/usr/lib/jvm/temurin-21-jdk-amd64",STATS_RDCL:"true",GITHUB_RETENTION_DAYS:"90",GITHUB_REPOSITORY_OWNER_ID:"5260760",POWERSHELL_DISTRIBUTION_CHANNEL:"GitHub-Actions-ubuntu22",AZURE_EXTENSION_DIR:"/opt/az/azcliextensions",GITHUB_HEAD_REF:"",npm_config_userconfig:"/home/runner/.npmrc",npm_config_local_prefix:"/home/runner/work/zoa/zoa",SYSTEMD_EXEC_PID:"595",GITHUB_GRAPHQL_URL:"https://api.github.com/graphql",COLOR:"0",GOROOT_1_20_X64:"/opt/hostedtoolcache/go/1.20.12/x64",NVM_DIR:"/home/runner/.nvm",npm_config_metrics_registry:"https://registry.npmjs.org/",DOTNET_SKIP_FIRST_TIME_EXPERIENCE:"1",GOROOT_1_21_X64:"/opt/hostedtoolcache/go/1.21.5/x64",JAVA_HOME_17_X64:"/usr/lib/jvm/temurin-17-jdk-amd64",ImageVersion:"20240107.1.0",RUNNER_OS:"Linux",GITHUB_API_URL:"https://api.github.com",SWIFT_PATH:"/usr/share/swift/usr/bin",RUNNER_USER:"runner",STATS_V3PS:"true",CHROMEWEBDRIVER:"/usr/local/share/chromedriver-linux64",JOURNAL_STREAM:"8:17386",GITHUB_WORKFLOW:"Bump version",_:"/opt/hostedtoolcache/node/16.20.2/x64/bin/npm",npm_config_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE:"/opt/actionarchivecache",GITHUB_RUN_ID:"7503555034",npm_config_cache:"/home/runner/.npm",GITHUB_REF_TYPE:"branch",BOOTSTRAP_HASKELL_NONINTERACTIVE:"1",GITHUB_WORKFLOW_SHA:"e375314a0da4ac9be2ac53cb5b1dc335bd005738",GITHUB_BASE_REF:"",ImageOS:"ubuntu22",GITHUB_WORKFLOW_REF:"NaturalHistoryMuseum/zoa/.github/workflows/bump.yml@refs/heads/main",PERFLOG_LOCATION_SETTING:"RUNNER_PERFLOG",GITHUB_ACTION_REPOSITORY:"",npm_config_node_gyp:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",PATH:"/home/runner/work/zoa/zoa/node_modules/.bin:/home/runner/work/zoa/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.20.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin",ANT_HOME:"/usr/share/ant",DOTNET_MULTILEVEL_LOOKUP:"0",RUNNER_TRACKING_ID:"github_424b9591-93de-4121-8107-6c30aa34f59a",INVOCATION_ID:"47b1dd133c95436c88610676fc25d9b7",RUNNER_TOOL_CACHE:"/opt/hostedtoolcache",GOROOT_1_19_X64:"/opt/hostedtoolcache/go/1.19.13/x64",NODE:"/opt/hostedtoolcache/node/16.20.2/x64/bin/node",npm_package_name:"@nhm-data/zoa",GITHUB_ACTION:"__run_2",GITHUB_RUN_NUMBER:"27",GITHUB_TRIGGERING_ACTOR:"alycejenni",RUNNER_ARCH:"X64",XDG_RUNTIME_DIR:"/run/user/1001",AGENT_TOOLSDIRECTORY:"/opt/hostedtoolcache",LANG:"C.UTF-8",VCPKG_INSTALLATION_ROOT:"/usr/local/share/vcpkg",CONDA:"/usr/share/miniconda",RUNNER_NAME:"GitHub Actions 2",XDG_CONFIG_HOME:"/home/runner/.config",STATS_VMD:"true",GITHUB_REF_NAME:"main",GITHUB_REPOSITORY:"NaturalHistoryMuseum/zoa",npm_lifecycle_script:"vite build",STATS_UE:"true",ANDROID_NDK_ROOT:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_ACTION_REF:"",DEBIAN_FRONTEND:"noninteractive",GITHUB_REPOSITORY_ID:"630464665",GITHUB_ACTIONS:"true",npm_package_version:"0.6.0",npm_lifecycle_event:"build",GITHUB_REF_PROTECTED:"false",GITHUB_WORKSPACE:"/home/runner/work/zoa/zoa",ACCEPT_EULA:"Y",GITHUB_JOB:"build-then-bump",RUNNER_PERFLOG:"/home/runner/perflog",GITHUB_SHA:"e375314a0da4ac9be2ac53cb5b1dc335bd005738",GITHUB_RUN_ATTEMPT:"1",GITHUB_REF:"refs/heads/main",GITHUB_ACTOR:"alycejenni",ANDROID_SDK_ROOT:"/usr/local/lib/android/sdk",LEIN_HOME:"/usr/local/lib/lein",npm_config_globalconfig:"/opt/hostedtoolcache/node/16.20.2/x64/etc/npmrc",npm_config_init_module:"/home/runner/.npm-init.js",GITHUB_PATH:"/home/runner/work/_temp/_runner_file_commands/add_path_b31fe970-3421-496e-97c4-c31fbe0d536a",JAVA_HOME:"/usr/lib/jvm/temurin-11-jdk-amd64",PWD:"/home/runner/work/zoa/zoa",GITHUB_ACTOR_ID:"23579762",RUNNER_WORKSPACE:"/home/runner/work/zoa",npm_execpath:"/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/bin/npm-cli.js",HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS:"3650",STATS_TIS:"mining",GITHUB_EVENT_NAME:"push",HOMEBREW_NO_AUTO_UPDATE:"1",ANDROID_HOME:"/usr/local/lib/android/sdk",GITHUB_SERVER_URL:"https://github.com",GECKOWEBDRIVER:"/usr/local/share/gecko_driver",LEIN_JAR:"/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar",GHCUP_INSTALL_BASE_PREFIX:"/usr/local",GITHUB_OUTPUT:"/home/runner/work/_temp/_runner_file_commands/set_output_b31fe970-3421-496e-97c4-c31fbe0d536a",npm_config_global_prefix:"/opt/hostedtoolcache/node/16.20.2/x64",EDGEWEBDRIVER:"/usr/local/share/edge_driver",STATS_EXT:"true",npm_command:"run-script",ANDROID_NDK:"/usr/local/lib/android/sdk/ndk/25.2.9519653",SGX_AESM_ADDR:"1",CHROME_BIN:"/usr/bin/google-chrome",SELENIUM_JAR_PATH:"/usr/share/java/selenium-server.jar",STATS_EXTP:"https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data",ANDROID_NDK_HOME:"/usr/local/lib/android/sdk/ndk/25.2.9519653",GITHUB_STEP_SUMMARY:"/home/runner/work/_temp/_runner_file_commands/step_summary_b31fe970-3421-496e-97c4-c31fbe0d536a",INIT_CWD:"/home/runner/work/zoa/zoa",EDITOR:"vi",NODE_ENV:"production"};d=n.LC_ALL||n.LC_MESSAGES||n.LANG||n.LANGUAGE}d||(d="en-US");var f=j(d);const M={};for(let n=1;n<100;n++){const e=(n<9?"0":"")+n;M[e]=n+(n>51?1900:2e3)}var x=M;const $={"Eastern Daylight Time":-240,"Eastern Standard Time":-300,"Central Daylight Time":-300,"Central Standard Time":-360,"Mountain Daylight Time":-360,"Mountain Standard Time":-420,"Pacific Daylight Time":-420,"Pacific Standard Time":-480,ACDT:630,ACST:570,ACT:480,ADT:-180,AEDT:660,AEST:600,AFT:270,AKDT:-480,AKST:-540,AMST:-180,AMT:-240,ART:-180,AST:180,AWDT:540,AWST:480,AZOST:-60,AZT:240,BDT:360,BIOT:360,BIT:-720,BOT:-240,BRST:-120,BRT:-180,BTT:360,CAT:120,CCT:390,CDT:-300,CEDT:120,CEST:120,CET:60,CHADT:825,CHAST:765,CHOT:480,ChST:600,CHUT:600,CIST:-480,CIT:480,CKT:-600,CLST:-180,CLT:-240,COST:-240,COT:-300,CST:-360,CT:480,CVT:-60,CXT:420,DAVT:420,DDUT:600,DFT:60,EASST:-300,EAST:-360,EAT:180,ECT:-300,EDT:-240,EEDT:180,EEST:180,EET:120,EGST:0,EGT:-60,EIT:540,EST:-300,FET:180,FJT:720,FKST:-180,FKT:-240,FNT:-120,GALT:-360,GAMT:-540,GET:240,GFT:-180,GILT:720,GIT:-540,GMT:0,GST:-120,GYT:-240,HADT:-540,HAEC:120,HAST:-600,HKT:480,HMT:300,HOVT:420,HST:-600,IBST:0,ICT:420,IDT:180,IOT:180,IRDT:270,IRKT:480,IRST:210,IST:120,JST:540,KGT:360,KOST:660,KRAT:420,KST:540,LHST:630,LINT:840,MAGT:720,MART:-510,MAWT:300,MDT:-360,MET:60,MEST:120,MHT:720,MIST:660,MIT:-510,MMT:390,MSK:180,MST:-420,MUT:240,MVT:300,MYT:480,NCT:660,NDT:-90,NFT:660,NPT:345,NST:-150,NT:-150,NUT:-660,NZDT:780,NZST:720,OMST:360,ORAT:300,PDT:-420,PET:-300,PETT:720,PGT:600,PHOT:780,PKT:300,PMDT:-120,PMST:-180,PONT:660,PST:-480,PYST:-180,PYT:-240,RET:240,ROTT:-180,SAKT:660,SAMT:240,SAST:120,SBT:660,SCT:240,SGT:480,SLST:330,SRET:660,SRT:-180,SST:480,SYOT:180,TAHT:-600,THA:420,TFT:300,TJT:300,TKT:780,TLT:540,TMT:300,TOT:780,TVT:720,UCT:0,ULAT:480,USZ1:120,UTC:0,UYST:-120,UYT:-180,UZT:300,VET:-240,VLAT:600,VOLT:240,VOST:360,VUT:660,WAKT:720,WAST:120,WAT:60,WEDT:60,WEST:60,WET:0,WIT:420,WST:480,YAKT:540,YEKT:300,Z:0};var N=$;const K=x,V=N,W={zone:V,year:K,meridiem:{am:0,pm:12,"a.m.":0,"p.m.":12},month:{january:1,jan:1,february:2,feb:2,march:3,mar:3,april:4,apr:4,may:5,june:6,jun:6,july:7,jul:7,august:8,aug:8,september:9,sep:9,october:10,oct:10,november:11,nov:11,december:12,dec:12},dayname:{sunday:0,sun:0,monday:1,mon:1,tuesday:2,tue:2,wednesday:3,wed:3,thursday:4,thu:4,friday:5,fri:5,saturday:6,sat:6},digit:{}};var z=W;const X=N,U={MONTHNAME:"january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",DAYNAME:"sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",ZONE:"\\(?("+Object.keys(X).join("|")+")\\)?",MERIDIEM:"[ap]\\.?m?\\.?",ORDINAL:"st|nd|rd|th|\\.",YEAR:"[1-9]\\d{3}|\\d{2}",MONTH:"1[0-2]|0?[1-9]",MONTH2:"1[0-2]|0[1-9]",DAY:"3[01]|[12]\\d|0?[1-9]",DAY2:"3[01]|[12]\\d|0[1-9]",OFFSET:"[+-][01]?\\d?\\:?(?:[0-5]\\d)?",H24:"[01]\\d|2[0-3]",H12:"0?[1-9]|1[012]",MIN:"[0-5]\\d",SEC:"[0-5]\\d|60",MS:"\\d{9}|\\d{6}|\\d{1,3}",SPACE:"[\\s,-]"},J={...U,YEAR:"*{4}|*{2}",MONTH:"*{1,2}",MONTH2:"*{2}",DAY:"*{1,2}",DAY2:"*{2}",OFFSET:"[+-]*{1,2}\\:?*{0,2}",H24:"*{2}",H12:"*{1,2}",MIN:"*{2}",SEC:"*{2}",MS:"*{9}|*{6}|*{3}"};var Z={latn:U,other:J};const H={arab:1632,arabext:1776,bali:6992,beng:2534,deva:2406,fullwide:65296,gujr:2790,khmr:6112,knda:3302,laoo:3792,limb:6470,mlym:3430,mong:6160,mymr:4160,orya:2918,tamldec:3046,telu:3174,thai:3664,tibt:3872},w="[０１２３４５６７８９〇一二三四五六七八九\\d]",I={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,"０":0,"１":1,"２":2,"３":3,"４":4,"５":5,"６":6,"７":7,"８":8,"９":9,"〇":0,一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9},E={};function q(n){if(E[n])return E[n];if(n==="fullwide"||n==="hanidec")return{group:w,lookup:{...I}};const e=H[n];if(!e)return{group:"\\d",lookup:{...I}};const t=String.fromCharCode(e),r=String.fromCharCode(e+9),o={};for(let s=0;s<10;s++)o[String.fromCharCode(e+s)]=s;return E[n]={group:`[${t}-${r}]`,lookup:o},E[n]}var v={chineseGroup:w,defaultLookup:I,startCodes:H,buildDigits:q};const Q=["year","month","day","hour","minute","second","millisecond"];var ee=Q;const te=z,{latn:ne,other:O}=Z,{buildDigits:oe}=v,C=f,re=ee,g={};let ae=class L{static factory(e=C){return g[e.toLowerCase()]||(g[e.toLowerCase()]=new L(e)),g[e.toLowerCase()]}constructor(e=C){this.locale=e,this.lookups={...te},this.vars={...ne};const t=new Intl.NumberFormat(this.locale);this.numberingSystem=t.resolvedOptions().numberingSystem,this.build()}toInt(e){if(typeof e=="number")return e;if(this.numberingSystem==="latn")return parseInt(e,10);let t="";for(let r=0;r<e.length;r++)t+=String(this.lookups.digit[e[r]]);return parseInt(t,10)}build(){this.numberingSystem!=="latn"&&this.buildNumbers(),/^en/i.test(this.locale)||(this.buildMonthNames(),this.buildDaynames(),this.buildMeridiems())}buildNumbers(){const e=this.numberingSystem,{group:t,lookup:r}=oe(e);this.lookups.digit=r;for(const o in O)O.hasOwnProperty(o)&&(this.vars[o]=O[o].replace(/\*/g,t))}buildMonthNames(){const e={},t={};if(/^fi/i.test(this.locale))"tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((r,o)=>{["","k","kuu","kuuta"].forEach((s,a)=>{const i=a<2?"\\.?":"";e[r+s+i]=!0,t[r+s]=o+1})});else{const r=[],o=i=>i.type==="month";for(let i=0;i<12;i++)r.push(new Date(2017,i,1));const s=["full","long","medium"];for(const i of s){const l=Intl.DateTimeFormat(this.locale,{dateStyle:i});for(let T=0;T<12;T++){let c=l.formatToParts(r[T]).find(o).value.toLowerCase();if(/^ko/i.test(this.locale)&&(c+="월"),i==="medium"){if(/^ar|zh/i.test(this.locale))return;c=c.replace(/\.$/,""),e[`${c}\\.?`]=!0}else e[c]=!0;t[c]=T+1}}const a=Intl.DateTimeFormat(this.locale,{month:"short"});for(let i=0;i<12;i++){let l=a.formatToParts(r[i]).find(o).value.toLowerCase();l=l.replace(/\.$/,""),e[`${l}\\.?`]=!0,t[l]=i+1}}this.vars.MONTHNAME=Object.keys(e).join("|"),this.lookups.month=t}buildDaynames(){const e=[],t=a=>a.type==="weekday";for(let a=0;a<7;a++)e.push(new Date(2017,0,a+1));const r=["long","short"],o=[],s={};for(const a of r){const i=Intl.DateTimeFormat(this.locale,{weekday:a});for(let l=0;l<7;l++){let T=i.formatToParts(e[l]).find(t).value.toLowerCase();a==="short"?(T=T.replace(/\.$/,""),o.push(`${T}\\.?`)):o.push(T),s[T]=l}}this.vars.DAYNAME=o.join("|"),this.lookups.dayname=s}buildMeridiems(){const e=[new Date(2017,0,1),new Date(2017,0,1,23,0,0)],t=a=>a.type==="dayPeriod",r=[],o={},s=Intl.DateTimeFormat(this.locale,{timeStyle:"long"});for(let a=0;a<2;a++){const i=s.formatToParts(e[a]).find(t);if(!i)return;const l=i.value.toLowerCase();r.push(l),o[l]=a*12}this.vars.MERIDIEM=r.join("|"),this.lookups.meridiem=o}getObject(e,t){const r={};return e.forEach((o,s)=>{if(!o)return;let a=t[s+1];a=a.toLowerCase(),a=a.replace(/\.$/,""),o==="offset"?r.offset=this.offsetToMinutes(a):this.lookups[o]?r[o]=this.lookups[o][a]||this.toInt(a):r[o]=this.toInt(a)}),r}castObject(e){const t={};return re.forEach(r=>{r in e&&(t[r]=this.toInt(e[r]))}),typeof e.offset=="string"?t.offset=this.offsetToMinutes(e.offset):typeof e.offset=="number"&&(t.offset=e.offset),t}offsetToMinutes(e){const t=e.match(/^([+-])(..?):?(..)?$/);if(t){const[,r,o,s]=t;return(r==="-"?-1:1)*(this.toInt(o)*60+this.toInt(s||0))}return 0}compile(e){const t=e.replace(/_([A-Z0-9]+)_/g,(r,o)=>{if(!this.vars[o])throw new Error(`Template string contains invalid variable _${o}_`);return this.vars[o]});return new RegExp(t,"i")}};var h=ae;const R=h,p=f;let se=class{constructor({template:n=null,matcher:e=null,units:t=null,handler:r=null,locales:o=null}){if(!Array.isArray(t)&&typeof r!="function")throw new Error('new Format must receive a "units" array or "handler" function');if(typeof n!="string"&&!(e instanceof RegExp))throw new Error('new Format must receive a "template" string or "matcher" RegExp');this.template=n,this.units=t,this.matcher=e,this.handler=r,this.locales=o,this.regexByLocale={}}getRegExp(n=p){return this.template?(this.regexByLocale[n]||(this.regexByLocale[n]=R.factory(n).compile(this.template)),this.regexByLocale[n]):this.matcher}getMatches(n,e=p){return n.match(this.getRegExp(e))}toDateTime(n,e=p){const t=R.factory(e);if(this.units)return t.getObject(this.units,n);const r=this.handler(n,e);return!r||r.invalid?r:t.castObject(r)}attempt(n,e=p){n=String(n).trim();const t=this.getMatches(n,e);if(t){const r=this.toDateTime(t,e);if(r&&!r.invalid)return r}return null}now(){return new Date}};var u=se;function ie(n,e){return function(t,r=e){const o=n.attempt(t,r);if(o.invalid)return o;const s=new Date(2e3,0,1);return typeof o.day=="number"&&s.setUTCDate(o.day),typeof o.year=="number"&&s.setUTCFullYear(o.year),typeof o.month=="number"&&s.setUTCMonth(o.month-1),s.setUTCHours(o.hour||0),s.setUTCMinutes(o.minute||0),s.setUTCSeconds(o.second||0),s.setUTCMilliseconds(o.millisecond||0),typeof o.offset=="number"?new Date(s-o.offset*60*1e3):s}}var Te=ie;function le(n){return function(e,t){return e instanceof Date?e:typeof e=="number"?new Date(e):n(e,t)}}var ue=le;const y=f,b=Te,_e=ue;let ce=class{constructor(){this.formats=[]}addFormat(n){return this.formats.push(n),n.parser=this,this}addFormats(n){return n.forEach(e=>this.addFormat(e)),this}removeFormat(n){const e=this.formats.indexOf(n);if(e>-1){const t=this.formats[e];return this.formats.splice(e,1),t.parser=null,!0}return!1}attempt(n,e=y){for(const r of this.formats){if(Array.isArray(r.locales)&&r.locales.length>0&&!r.locales.includes(new Intl.Locale(e).baseName))continue;const o=r.attempt(n,e);if(o)return o}let t=String(n).slice(0,200);return t===""&&(t="empty string"),{invalid:`Unable to parse ${t}`}}exportAsFunction(n=y){return b(this,n)}exportAsFunctionAny(n=y){return _e(b(this,n))}};var me=ce;const de=u,he=new de({template:"^@(\\d+)$",handler:function(n){const e=parseInt(n[1],10),t=new Date(e*1e3);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds()}}});var Ee=he;const pe=u,Ae=new pe({matcher:/^\/Date\((\d+)([+-]\d{4})?\)\/$/,handler:function(n){const e=parseInt(n[1],10),t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds(),offset:n[2]||0}}});var fe=Ae;const Se={y:"year",M:"month",d:"day",w:"week",h:"hour",m:"minute",s:"second",ms:"millisecond"};var Oe=Se;const ge=u,ye=Oe,Ie=new ge({matcher:/^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,handler:function([,n,e,t,r]){e=parseFloat(e),t.length<=2?t=ye[t]:(t=t.replace(/s$/,""),t=t.toLowerCase()),t==="week"&&(t="day",e*=7),(n==="-"||r)&&(e*=-1);const o=this.now();return t==="millisecond"?o.setUTCMilliseconds(o.getUTCMilliseconds()+e):t==="second"?o.setUTCSeconds(o.getUTCSeconds()+e):t==="minute"?o.setUTCMinutes(o.getUTCMinutes()+e):t==="hour"?o.setUTCHours(o.getUTCHours()+e):t==="day"?o.setUTCDate(o.getUTCDate()+e):t==="month"?o.setUTCMonth(o.getUTCMonth()+e):t==="year"&&o.setUTCFullYear(o.getUTCFullYear()+e),{year:o.getUTCFullYear(),month:o.getUTCMonth()+1,day:o.getUTCDate(),hour:o.getUTCHours(),minute:o.getUTCMinutes(),second:o.getUTCSeconds(),millisecond:o.getUTCMilliseconds()}}});var Ne=Ie;const Ce=u,Re=h,{chineseGroup:A}=v;let m;const be=new Ce({template:`^(${A}{4}|${A}{2})\\s*年\\s*(${A}{1,2})\\s*月\\s*(${A}{1,2})\\s*日$`,handler:function([,n,e,t]){return m||(m=new Re("zh"),m.numberingSystem="hanidec",m.buildNumbers()),m.castObject({year:n,month:e,day:t})}});var De=be;const Me=u,Ue=new Me({template:"^(_DAY_)[\\/. ](_MONTH_)$",units:["day","month"]});var He=Ue;const we=u,ve=new we({template:"^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",units:["day","month"]});var Le=ve;const Ge=u,Pe=new Ge({template:"^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",units:["day",null,"month","year"]});var ke=Pe;const Fe=u,Be=new Fe({template:"^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",units:["day",null,"month","year"]});var Ye=Be;const je=u,xe=new je({template:"^(_MONTH_)(?:[\\/-])(_DAY_)$",units:["month","day"]});var $e=xe;const Ke=u,Ve=new Ke({template:"^(_MONTH_)([\\/-])(_DAY_)\\2(_YEAR_)$",units:["month",null,"day","year"],locales:["ee-TG","en-AS","en-CA","en-FM","en-GH","en-GU","en-KE","en-KY","en-MH","en-MP","en-US","en-VI","en-WS","sm-AS","sm-SM"]});var We=Ve;const ze=u,Xe=new ze({template:"^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",units:["month","day"]});var Je=Xe;const Ze=u,qe=new Ze({template:"^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",units:["month","day","year"]});var Qe=qe;const et=h,tt=u,nt=new tt({template:"^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",handler:function(n,e){let[,t,r,o,s,a]=n,i={};if(t&&(i=this.parser.attempt(t,e),i.invalid))return null;const l=et.factory(e);if(a){const T=l.lookups.meridiem[a.toLowerCase()]||0;r=parseFloat(r),r===12?r=T:r>12&&T===12?r+=0:r+=T}return i.hour=r,o&&(i.minute=o),s&&(i.second=s),i}});var ot=nt;const rt=h,at=u,D=N,st=new at({template:"^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",handler:function(n,e){let[,t,r,o,s,a,i,l]=n,T={};if(t&&(T=this.parser.attempt(t,e),T.invalid))return T;if(T.hour=r,T.minute=o,s&&(T.second=s),a&&a.length>3?T.millisecond=a.slice(0,3):a&&(T.millisecond=a),l&&!i&&l in D)T.offset=D[l];else if(i){const c=rt.factory(e);T.offset=c.offsetToMinutes(i)}return T}});var it=st;const Tt=u,lt=new Tt({matcher:/^(now|today|tomorrow|yesterday)/i,handler:function(n){const e=this.now(),t=n[1].toLowerCase();switch(t){case"tomorrow":e.setUTCDate(e.getUTCDate()+1);break;case"yesterday":e.setUTCDate(e.getUTCDate()-1);break}const r={year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()};return t==="now"&&(r.hour=e.getUTCHours(),r.minute=e.getUTCMinutes(),r.second=e.getUTCSeconds(),r.millisecond=e.getUTCMilliseconds()),r}});var ut=lt;const _t=u,ct=new _t({template:"^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",units:["month","day","hour","minute","second","offset","year"]});var mt=ct;const dt=u,ht=new dt({template:"^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",units:["year",null,"month","day"]});var Et=ht;const G=me,pt=u,At=h,ft=Ee,St=fe,Ot=Ne,gt=De,yt=He,It=Le,Nt=ke,Ct=Ye,Rt=f,bt=$e,Dt=We,Mt=Je,Ut=Qe,Ht=ot,wt=it,vt=ut,Lt=mt,Gt=Et,_=new G;_.addFormats([wt,Ht,Gt,Nt,Ut,Dt,Ct,gt,Lt,vt,Ot,Mt,It,bt,yt,ft,St]);_.Parser=G;_.Format=pt;_.LocaleHelper=At;_.defaultLocale=Rt;_.fromString=Date.fromString=_.exportAsFunction();_.fromAny=Date.fromAny=_.exportAsFunctionAny();typeof window<"u"&&(window.anyDateParser=_);var S=_;const Pt=F(S),kt=new RegExp(`(${k.abbreviated_months.map(n=>n.toLowerCase()).join("|")})`),Ft=new S.Format({matcher:/^'?(\d{2}|\d{4})$/,units:["year"]}),Bt=new S.Format({matcher:/^(\d{1,2})\D*'?(\d{2}|\d{4})$/,units:["month","year"]}),P=new S.Parser;P.addFormats([Ft,Bt]);function jt(n){n=n.trim();let e=[],t;return t=P.attempt(n),t.invalid||e.push({year:t.year,month:t.month,day:t.day}),t=Pt.attempt(n),t.invalid||e.push({year:t.year,month:t.month,day:t.day}),kt.test(n.toLowerCase())||[...e].forEach(r=>{r.day<=12&&r.day!==r.month&&e.push({year:r.year,month:r.day,day:r.month})}),e}export{jt as parseDate};