const duas = [

{
text: "اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل، والجبن والبخل، وغلبة الدين وقهر الرجال.",
benefit: "✨ من أعظم الأدعية لتفريج الهم والحزن."
},

{
text: "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.",
benefit: "🤍 تبعث الطمأنينة وتزيد التوكل على الله."
},

{
text: "لا إله إلا أنت سبحانك إني كنت من الظالمين.",
benefit: "🌷 دعوة عظيمة لفك الكرب وتفريج الضيق."
},

{
text: "رب إني مسني الضر وأنت أرحم الراحمين.",
benefit: "☁️ دعاء الصبر والفرج والسكينة."
},

{
text: "اللهم رحمتك أرجو فلا تكلني إلى نفسي طرفة عين.",
benefit: "🕊️ يبعث الطمأنينة والراحة."
},

{
text: "اللهم اجعل القرآن ربيع قلبي ونور صدري وجلاء حزني.",
benefit: "📖 يشرح الصدر ويخفف الهم."
},

{
text: "اللهم إني أسألك راحة في القلب وطمأنينة في النفس.",
benefit: "💗 دعاء جميل للسكينة."
},

{
text: "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله.",
benefit: "🌸 من الأدعية العظيمة وقت الضيق."
},

{
text: "اللهم هون علي ما أثقل قلبي.",
benefit: "☁️ يخفف الشعور بالضيق والتعب."
},

{
text: "اللهم ارزقني راحة البال وهدوء النفس وسكينة القلب.",
benefit: "🤍 يمنح إحساسًا بالطمأنينة."
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
