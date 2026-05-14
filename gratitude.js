const duas = [

{
text: "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
benefit: "🤍 من أجمل أدعية الشكر والرضا."
},

{
text: "اللهم لك الحمد حتى ترضى ولك الحمد إذا رضيت.",
benefit: "🌸 دعاء جميل لحمد الله وشكره."
},

{
text: "اللهم اجعلني من الشاكرين لنعمك.",
benefit: "✨ يزيد الامتنان والرضا."
},

{
text: "ربِّ أوزعني أن أشكر نعمتك التي أنعمت علي.",
benefit: "🌿 من أدعية الشكر في القرآن."
},

{
text: "اللهم لك الحمد على كل نعمة أنعمت بها علي.",
benefit: "☁️ يبعث الرضا والطمأنينة."
},

{
text: "اللهم ارزقني قلبًا ممتنًا راضيًا.",
benefit: "🕊️ يساعد على الشعور بالسعادة."
},

{
text: "الحمد لله دائمًا وأبدًا.",
benefit: "💜 ذكر جميل يبعث الراحة."
},

{
text: "اللهم اجعلني أرى نعمك في كل تفاصيل حياتي.",
benefit: "🌷 يزيد الشعور بالامتنان."
},

{
text: "اللهم لك الحمد على ما أعطيت وما منعت.",
benefit: "🤲 يعزز الرضا بقضاء الله."
},

{
text: "اللهم ارزقني شكر نعمك وحسن عبادتك.",
benefit: "✨ دعاء جميل للرضا والشكر."
},

{
text: "الحمد لله على كل لحظة جميلة وكل نعمة خفية.",
benefit: "🌸 يساعد على التفاؤل والامتنان."
},

{
text: "اللهم اجعل الحمد ملازمًا لقلبي ولساني.",
benefit: "🤍 يبعث السكينة والرضا."
},

{
text: "اللهم لك الحمد في السراء والضراء.",
benefit: "☁️ يزيد الصبر والرضا."
},

{
text: "اللهم لا تجعلني غافلًا عن نعمك.",
benefit: "🌿 يذكّر القلب بالامتنان."
},

{
text: "اللهم اجعلني عبدًا شاكرًا راضيًا.",
benefit: "🕊️ دعاء جميل للرضا الداخلي."
},

{
text: "اللهم لك الحمد عدد نعمك التي لا تُحصى.",
benefit: "🤍 يذكّر القلب بكثرة نعم الله."
},

{
text: "اللهم ارزقني عينًا ترى نعمك دائمًا.",
benefit: "🌸 يزيد الشعور بالامتنان."
},

{
text: "الحمد لله على راحة القلب وسكينة الروح.",
benefit: "☁️ يبعث الرضا والطمأنينة."
},

{
text: "اللهم اجعلني من عبادك الحامدين الشاكرين.",
benefit: "🌿 دعاء جميل للشكر والرضا."
},

{
text: "اللهم لك الحمد على كل يوم جديد وكل نعمة خفية.",
benefit: "🕊️ يساعد على التفاؤل والامتنان."
}

];

let currentDua = 0;

const duaText = document.getElementById("duaText");
const duaBenefit = document.getElementById("duaBenefit");
const duaCounter = document.getElementById("duaCounter");

function showDua() {

duaText.innerText = duas[currentDua].text;

duaBenefit.innerText = duas[currentDua].benefit;

duaCounter.innerText = `${currentDua + 1} من ${duas.length}`;

}

function nextDua() {

currentDua++;

if(currentDua >= duas.length){

currentDua = 0;

}

showDua();

}

function prevDua() {

currentDua--;

if(currentDua < 0){

currentDua = duas.length - 1;

}

showDua();

}

showDua();
