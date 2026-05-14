const duas = [

{
text: "الله أكبر، الله أكبر، الله أكبر. سبحان الذي سخر لنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون. اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى. اللهم هون علينا سفرنا هذا واطوِ عنا بعده. اللهم أنت الصاحب في السفر والخليفة في الأهل. اللهم إني أعوذ بك من وعثاء السفر، وكآبة المنظر، وسوء المنقلب في المال والأهل.",
benefit: "✅ دعاء السفر الكامل الثابت عن النبي ﷺ."
},

{
text: "اللهم احفظني بعينك التي لا تنام.",
benefit: "🤍 دعاء جميل للحفظ والأمان أثناء السفر."
},

{
text: "اللهم يسّر طريقي واكتب لي الخير أينما ذهبت.",
benefit: "🌿 يبعث الطمأنينة والتفاؤل."
},

{
text: "اللهم اجعل سفري هذا مليئًا بالسلام والخير.",
benefit: "☁️ دعاء جميل للراحة والتيسير."
},

{
text: "اللهم ردّني إلى أهلي سالمًا مطمئنًا.",
benefit: "✨ دعاء جميل للعودة بسلام."
},

{
text: "اللهم احفظ أهلي وأنا بعيد عنهم.",
benefit: "💜 يبعث الراحة والسكينة أثناء السفر."
},

{
text: "اللهم بارك لي في رحلتي ووقتي.",
benefit: "🌸 دعاء جميل للبركة والتوفيق."
},

{
text: "اللهم ارزقني سفرًا آمنًا مريحًا.",
benefit: "🕊️ دعاء جميل للسلامة والراحة."
},

{
text: "اللهم اجعل لي في سفري فرحًا وتوفيقًا.",
benefit: "🤲 يبعث الأمل والطمأنينة."
},

{
text: "اللهم احفظني من كل سوء في طريقي.",
benefit: "☁️ دعاء للحفظ والأمان."
},

{
text: "اللهم اكتب لي الخير حيث توجهت.",
benefit: "🌿 دعاء جميل للتوفيق والتيسير."
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
