const duas = [

{
text: "اللهم اجعل في قلبي نورًا وفي روحي سكينة.",
benefit: "🤍 يمنح راحة وهدوءًا داخليًا."
},

{
text: "اللهم ارزقني سكينة لا تزول وطمأنينة لا تنقطع.",
benefit: "🌿 دعاء جميل للراحة الدائمة."
},

{
text: "اللهم اجعل أيامي القادمة مليئة بالهدوء والرضا.",
benefit: "☁️ يساعد على الشعور بالأمان النفسي."
},

{
text: "اللهم إني أستودعك قلبي فاملأه سلامًا وراحة.",
benefit: "🕊️ يخفف التوتر والتفكير الزائد."
},

{
text: "اللهم اجعلني أرى الخير في كل ما كتبته لي.",
benefit: "✨ يزيد الرضا والسكينة."
},

{
text: "اللهم ارزقني سكون النفس وهدوء الروح.",
benefit: "🌸 يمنح إحساسًا بالراحة والطمأنينة."
},

{
text: "اللهم أبعد عن قلبي الضيق واملأه طمأنينة.",
benefit: "💜 يبعث السكينة والهدوء."
},

{
text: "اللهم ارزقني راحة لا يشوبها قلق.",
benefit: "🤲 دعاء جميل لراحة البال."
},

{
text: "اللهم اجعل الراحة تسكن قلبي والسكينة تملأ روحي.",
benefit: "🌷 يبعث الطمأنينة والهدوء."
},

{
text: "اللهم ارزقني سلامًا داخليًا لا يتغير.",
benefit: "☁️ يمنح الاستقرار النفسي."
},

{
text: "اللهم اجعل قلبي متعلقًا بك مطمئنًا بذكرك.",
benefit: "🌿 يخفف الخوف والتوتر."
},

{
text: "اللهم إني أسألك هدوءًا يريح نفسي.",
benefit: "🤍 دعاء جميل وقت التعب النفسي."
},

{
text: "اللهم اجعلني مطمئنًا مهما تغيرت الظروف.",
benefit: "✨ يزيد الثبات والراحة."
},

{
text: "اللهم اكتب لي راحة لا تنتهي وسعادة لا تزول.",
benefit: "🕊️ يزرع الأمل والسكينة."
},

{
text: "اللهم ارزقني قلبًا راضيًا مطمئنًا بقضائك.",
benefit: "💜 يساعد على الطمأنينة والرضا."
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
