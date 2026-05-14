const duas = [

{
text: "اللهم اختر لي ولا تخيرني، واكفني بحلالك عن حرامك.",
benefit: "✨ يساعد وقت الحيرة والتردد."
},

{
text: "اللهم دلّني على الصواب، وألهمني الرشد في أمري.",
benefit: "🕊️ دعاء جميل للحيرة والقرارات."
},

{
text: "اللهم آتِ نفسي تقواها، وزكّها أنت خير من زكاها.",
benefit: "🌿 يبعث الطمأنينة وصفاء النفس."
},

{
text: "اللهم إني أسألك راحة في النفس، وطمأنينة في القلب.",
benefit: "🤍 يخفف التفكير الزائد."
},

{
text: "اللهم اجعل في قلبي نورًا، وفي نفسي سكينة.",
benefit: "☁️ يهدئ القلق والتوتر."
},

{
text: "اللهم لا تعلق قلبي بما ليس لي، واكتب لي الخير حيث كان.",
benefit: "💜 يساعد على الرضا والسكينة."
},

{
text: "اللهم إني فوضت أمري إليك، فأصلح لي شأني كله.",
benefit: "🌸 يخفف الحيرة وكثرة التفكير."
},

{
text: "اللهم ارزقني راحة البال وهدوء النفس.",
benefit: "🫶 يمنح شعورًا بالطمأنينة."
},

{
text: "اللهم أبعد عني القلق والتشتت، واملأ قلبي سلامًا.",
benefit: "✨ يساعد على الهدوء النفسي."
},

{
text: "اللهم يسّر أمري، واهدني لما فيه الخير.",
benefit: "🌿 دعاء جميل عند التردد والقلق."
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