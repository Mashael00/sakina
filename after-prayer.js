const duas = [

{
text: "أستغفر الله (3 مرات) اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام",
benefit: "🤍 مغفرة وطمأنينة"
},

{
text: "لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير",
benefit: "🌿 أجر عظيم"
},

{
text: "اللهم أعني على ذكرك وشكرك وحسن عبادتك",
benefit: "✨ دعاء شامل"
},

{
text: "سبحان الله (33) الحمد لله (33) الله أكبر (34)",
benefit: "🕌 ذكر بعد الصلاة"
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
