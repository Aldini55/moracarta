(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Object.assign({"../content/letters.example.js":[{id:1,date:`15 de Octubre, 2026`,title:`Mi primer gran amor`,content:`Mi amada Karly,

Hoy quería escribirte esto porque cada día que pasa me doy cuenta de una verdad: eres el amor de mi vida. Cada día que pasa a tu lado me confirma el inmenso amor que te tengo y lo vacíos que se sienten los días cuando no estamos juntos. 

De hecho, ya hasta parece que vivo en tu casa JAJAJA , porque mi lugar favorito en el mundo entero es simplemente estar donde tú estás. Jamás en mi vida me había enamorado tanto de una mujer tan hermosa, inteligente, tierna y con una luz tan única que ilumina cada uno de mis días.

Gracias por existir y por dejarme ser parte de tu vida, por que apesar de no poder tener una economica tan grande para llenarte de regalos; aun asi estas conmigo sin importar que.

Tuyo siempre,
Alda :)`},{id:2,date:`20 de Octubre, 2026`,title:`Me dejas pensando`,content:`Karly mi princesa hermsosa,

A veces me pongo a pensar en cómo cambió mi vida desde que llegaste. Te juro que jamás me había enamorado tanto de una mujer tan hermosa, detallista, fuerte como tu. No hace falta mencionar tu hermosa sonrisa y lo hermosa que te ves cuando te enojas y me haces berrinche.

Tu me conoces y sabes que antes de ti estana muy solo en mi casa, eso se volvió un concepto extraño para mí desde que descubrí lo hermoso que es compartir el tiempo contigo. Vivir en tu casa, ver peliculas juntos, desvelarnos, pelearnos y amarnos mucho es lo único que quiero hacer el resto de mis días. 

Eres mi refugio, mi paz y mi más grande inspiración.

Estoy muy orgullso de ti,
Dai`},{id:3,date:`25 de Octubre, 2026`,title:`Nuestro futuro juntos`,content:`Mi vida, Karly,

Mientras escribo esto me rio yo solo JAJAJAJA, DEJAMEEE. Me doy cuenta, sin ninguna duda, de que tú eres la mujer que llevaré al altar, con quien tendré hijos y criaremos juntos una hermosa familia. 

Imagino nuestra vida juntos, porque en todos mis planes de vida tú estás en el centro. Quiero construir un hogar a tu lado, despertar cada mañana viendo tu carita y compartir cada meta, cada logro y cada sueño. 

Te amo de una forma que ni las palabras alcanzan a explicar, y sé que lo mejor de nuestra historia apenas está comenzando.

Que Dios nos guíe a los dos en nuestra aventura,
Tu amor`},{id:4,date:`28 de Octubre, 2026`,title:`Promesa eterna`,content:`Mi preciosa Karly,

Cierro esta serie de cartas recordándote lo mucho que significas para mí. Cada segundo a tu lado me hace confirmar que eres la mujer de mi vida, con quien quiero llegar al altar y formar una familia maravillosa. 

Gracias por el amor tan bonito que me das, por tu paciencia y por hacerme sentir que, por fin, encontré mi lugar en el mundo. Aunque a veces no me alcancen las palabras para decirte todo lo que siento, quiero que sepas que mi corazón te pertenece por completo, hoy y siempre.

Te amo con toda el alma.

Para siempre tuyo,
El amor de tu vida, Alda`}]}),t=e[`../content/letters.js`]??e[`../content/letters.example.js`],n={PROJECT_NAME:`romantic-gift`,TITLE:`Para mi amada Lyly`,YOUR_NAME:`~ Alda ♡`,FONT:`handwritten`,TEXT_TOP:`Cada carta expresa solo una miniscula parte de todo lo mucho que siento por ti.`,TEXT_BOTTOM:`Si pudiera elegirte una vez mas, elegiria poder escogerte 1000 veces mas. ♡`,CLOSED_LETTER_TEXT_TOP_LINE:`&#10084;&#65039; Para Karly &#10084;&#65039;`,CLOSED_LETTER_TEXT_BOTTOM_LINE:`&#10084;&#65039; Ojala te guste ♡ &#10084;&#65039;`,SHOW_BRANDING:!0},r=[{hue:18,sat:54,light:88,sealHue:345,sealSat:76,sealLight:42},{hue:26,sat:48,light:86,sealHue:12,sealSat:72,sealLight:38},{hue:4,sat:50,light:84,sealHue:5,sealSat:78,sealLight:34},{hue:38,sat:42,light:90,sealHue:24,sealSat:66,sealLight:36},{hue:8,sat:58,light:86,sealHue:6,sealSat:82,sealLight:30},{hue:12,sat:50,light:88,sealHue:11,sealSat:74,sealLight:33},{hue:22,sat:46,light:92,sealHue:20,sealSat:68,sealLight:40},{hue:16,sat:60,light:84,sealHue:5,sealSat:86,sealLight:32},{hue:28,sat:52,light:90,sealHue:15,sealSat:70,sealLight:38},{hue:14,sat:44,light:88,sealHue:8,sealSat:80,sealLight:36}];function i(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n),t|=0;return Math.abs(t)}function a(e,t,n){return Math.min(Math.max(e,t),n)}function o(e){let t=i(`${e.id}|${e.title}|${e.date}`),n=r[t%r.length],o=Math.floor(t/r.length)%7,s=[0,14,-12,20,-18,26,-22][o],c=[0,8,-6,12,-10,14,-8][o],l=[0,-8,8,-5,6,-10,10][o];return{envelope:`hsl(${a(n.hue+s,0,360)}, ${a(n.sat+c,42,72)}%, ${a(n.light+l,78,92)}%)`,flap:`hsl(${a(n.hue+s+2,0,360)}, ${a(n.sat+c+8,50,82)}%, ${a(n.light-18+l,60,76)}%)`,shadow:`hsl(${a(n.hue+s+8,0,360)}, ${a(n.sat+c-12,30,58)}%, ${a(n.light-36+l,42,58)}%)`,base:`hsl(${a(n.hue+s+8,0,360)}, ${a(n.sat+c-10,30,58)}%, ${a(n.light-30+l,44,62)}%)`,seal:`hsl(${a(n.sealHue+s,0,360)}, ${a(n.sealSat+c,68,92)}%, ${a(n.sealLight+l*.8,28,46)}%)`,text:`hsl(${n.hue}, 22%, 18%)`}}var s={classic:`'Lora', Georgia, serif`,handwritten:`'Cormorant Garamond', serif`,modern:`'Montserrat', Arial, sans-serif`};document.documentElement.style.setProperty(`--main-font`,s[n.FONT]||s.handwritten),document.querySelectorAll(`[data-variable]`).forEach(e=>{let t=n[e.dataset.variable];typeof t==`string`&&(t.includes(`&`)||t.includes(`<`)||t.includes(`>`))?e.innerHTML=t:e.textContent=t});export{n,t as r,o as t};