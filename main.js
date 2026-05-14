const duas = [

{
text: "اللهم ارزقني رزقًا واسعًا حلالًا طيبًا.",
benefit: "🤍 دعاء جميل لطلب الرزق والتوفيق."
},

{
text: "ربِّ إني لما أنزلت إليّ من خير فقير.",
benefit: "🌿 من دعاء موسى عليه السلام للرزق."
},

{
text: "اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمّن سواك.",
benefit: "☁️ من أشهر أدعية الرزق والغنى."
},

{
text: "اللهم بارك لي في رزقي وعملي ووقتي.",
benefit: "✨ دعاء جميل للبركة والتوفيق."
},

{
text: "اللهم افتح لي أبواب رزقك وكرمك.",
benefit: "💜 يساعد على الشعور بالأمل والتفاؤل."
},

{
text: "اللهم ارزقني التوفيق والسداد في أمري كله.",
benefit: "🌸 دعاء للتوفيق في الحياة والعمل."
},

{
text: "اللهم يسّر لي الخير حيث كان.",
benefit: "🕊️ يبعث الطمأنينة والتيسير."
},

{
text: "اللهم ارزقني رزقًا لا ينقطع وبركة لا تزول.",
benefit: "🤲 دعاء جميل للرزق المبارك."
},

{
text: "اللهم اجعل لي من كل ضيق مخرجًا ومن كل هم فرجًا وارزقني من حيث لا أحتسب.",
benefit: "🌷 دعاء عظيم للفرج والرزق."
},

{
text: "اللهم وفّقني لما تحب وترضى.",
benefit: "☁️ دعاء شامل للتوفيق والنجاح."
},

{
text: "اللهم ارزقني النجاح والبركة في مستقبلي.",
benefit: "✨ يبعث الأمل والطموح."
},

{
text: "اللهم لا تجعل حاجتي بيد أحد من خلقك.",
benefit: "🌿 يزيد التوكل على الله."
},

{
text: "اللهم ارزقني رزقًا مباركًا فيه.",
benefit: "🤍 دعاء جميل للبركة في الرزق."
},

{
text: "اللهم اجعل التوفيق حليفي في كل خطوة.",
benefit: "💜 يساعد على الثقة والراحة."
},

{
text: "اللهم ارزقني خير الدنيا والآخرة.",
benefit: "🕊️ دعاء جامع للخيرات كلها."
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


