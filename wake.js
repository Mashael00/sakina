const duas = [

{
text: "الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
benefit: "🤍 شكر لله على الحياة"
},

{
text: "لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
benefit: "🌿 ذكر التوحيد"
},

{
text: "سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
benefit: "✨ ذكر عظيم"
},

{
text: "الحمد لله الذي عافاني في جسدي ورد علي روحي وأذن لي بذكره",
benefit: "🕊️ نعمة الحياة"
}

];

let current = 0;

const text = document.getElementById("duaText");
const benefit = document.getElementById("duaBenefit");
const counter = document.getElementById("duaCounter");

function show() {
text.innerText = duas[current].text;
benefit.innerText = duas[current].benefit;
counter.innerText = `${current + 1} من ${duas.length}`;
}

function nextDua() {
current++;
if (current >= duas.length) current = 0;
show();
}

function prevDua() {
current--;
if (current < 0) current = duas.length - 1;
show();
}

show();
