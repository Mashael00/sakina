const duas = [

{
text: "اللهم أذهب البأس رب الناس، واشفِ أنت الشافي، لا شفاء إلا شفاؤك، شفاءً لا يغادر سقمًا.",
benefit: "✅ سنة ثابتة: من أعظم ما رُقي به المريض."
},

{
text: "أعوذُ بعزةِ اللهِ وقدرتِه من شرِّ ما أجدُ وأحاذرُ.",
benefit: "🌿 سنة ثابتة: تُكرر 7 مرات مع وضع اليد على موضع الألم."
},

{
text: "أسأل الله العظيم رب العرش العظيم أن يشفيني ويشفي مرضى المسلمين.",
benefit: "🤍 دعاء عظيم للشفاء والعافية."
},

{
text: "اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي.",
benefit: "✨ وصية نبوية: سؤال الله العافية من أفضل الدعاء."
},

{
text: "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله.",
benefit: "🤲 دعاء جامع لصلاح البدن والروح."
},

{
text: "اللهم ألبسني ثوب الصحة والعافية.",
benefit: "☁️ دعاء جميل للعافية والراحة."
},

{
text: "اللهم اشفِ مرضانا ومرضى المسلمين.",
benefit: "💜 دعاء بالرحمة والشفاء."
},

{
text: "اللهم متّعني بالصحة والعافية.",
benefit: "🌸 دعاء جميل للصحة الدائمة."
},

{
text: "اللهم إني أعوذ بك من المرض والتعب.",
benefit: "🕊️ دعاء للحفظ والعافية."
},

{
text: "اللهم ارزقني راحة في جسدي وقلبي.",
benefit: "🌿 يجمع بين الراحة النفسية والجسدية."
},

{
text: "اللهم احفظني بعينك التي لا تنام.",
benefit: "🤍 دعاء للحفظ والرعاية."
},

{
text: "اللهم اشفِ كل جسدٍ أتعبه المرض.",
benefit: "☁️ دعاء جميل للمريض."
},

{
text: "اللهم ارزقني قوةً وصحةً وطمأنينة.",
benefit: "✨ دعاء جميل للراحة والعافية."
},

{
text: "اللهم اجعل الألم راحةً والمرض مغفرة.",
benefit: "💜 يبعث الصبر والسكينة."
},

{
text: "اللهم اشفِ قلوبًا أنهكها التعب.",
benefit: "🌸 دعاء جميل للراحة النفسية."
},

{
text: "اللهم لا تجعل للمرض مكانًا في جسدي.",
benefit: "🕊️ دعاء للحفظ والعافية."
},

{
text: "اللهم اجعل الألم بردًا وسلامًا على جسدي كما جعلت النار بردًا وسلامًا على إبراهيم.",
benefit: "❄️ دعاء يبعث السكينة والراحة."
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
