const duas = [

{
text: "أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمدًا عبده ورسوله.",
benefit: "🤍 من قالها بعد الوضوء فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء."
},

{
text: "اللهم اجعلني من التوابين واجعلني من المتطهرين.",
benefit: "💧 دعاء ثابت بعد الوضوء وفيه طلب الطهارة الظاهرة والباطنة."
},

{
text: "سبحانك اللهم وبحمدك، أشهد أن لا إله إلا أنت، أستغفرك وأتوب إليك.",
benefit: "🌿 ذكر عظيم يُختم به العمل ويزيد الأجر والمغفرة."
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
