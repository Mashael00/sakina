const duas = [

{
text: "باسمك اللهم أموت وأحيا.",
benefit: "🌙 سنة ثابتة: من أشهر وأعظم أذكار النوم."
},

{
text: "باسمك ربي وضعت جنبي، وبك أرفعه، إن أمسكت نفسي فارحمها، وإن أرسلتها فاحفظها بما تحفظ به عبادك الصالحين.",
benefit: "🤍 سنة ثابتة: دعاء عظيم للحفظ والطمأنينة قبل النوم."
},

{
text: "اللهم قني عذابك يوم تبعث عبادك.",
benefit: "☁️ سنة ثابتة: كان النبي ﷺ يقولها عند النوم."
},

{
text: "اللهم أسلمت نفسي إليك، وفوضت أمري إليك، ووجهت وجهي إليك، وألجأت ظهري إليك، رغبةً ورهبةً إليك، لا ملجأ ولا منجى منك إلا إليك.",
benefit: "🕊️ سنة ثابتة: يُستحب أن يكون آخر ما يقال قبل النوم."
},

{
text: "سبحان الله (33)، والحمد لله (33)، والله أكبر (34).",
benefit: "✨ سنة ثابتة: خير للعبد من خادم كما أوصى النبي ﷺ فاطمة رضي الله عنها."
},

{
text: "اللهم إني أعوذ بك من الأحلام المزعجة والكوابيس.",
benefit: "🌿 دعاء جميل للراحة والطمأنينة أثناء النوم."
},

{
text: "اللهم احفظني بعينك التي لا تنام.",
benefit: "💜 يبعث الشعور بالأمان والحفظ."
},

{
text: "اللهم ارزقني نومًا هادئًا وقلبًا مطمئنًا.",
benefit: "🌸 يساعد على الراحة النفسية قبل النوم."
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
