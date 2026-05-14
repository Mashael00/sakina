const duas = [

{
text: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
benefit: "🤍 دعاء للتيسير وراحة القلب"
},

{
text: "لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
benefit: "🐋 دعاء يونس عليه السلام لتفريج الكرب"
},

{
text: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
benefit: "🤍 دعاء أيوب عليه السلام عند الشدة"
},

{
text: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
benefit: "✨ دعاء للرزق والخير"
},

{
text: "رَبِّ زِدْنِي عِلْمًا",
benefit: "📚 دعاء للعلم والفهم"
},

{
text: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
benefit: "🌸 من دعاء زكريا عليه السلام"
},

{
text: "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ",
benefit: "🕊️ يبعث الراحة والثقة بالله"
},

{
text: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
benefit: "🤲 دعاء للتوبة وطلب الرحمة"
},

{
text: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي",
benefit: "🕌 دعاء بالصلاح والثبات"
},

{
text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
benefit: "☁️ دعاء جامع لخيري الدنيا والآخرة"
},

{
text: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
benefit: "🌼 يزيد الامتنان والرضا"
},

{
text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ",
benefit: "💜 يزيد الطمأنينة والتوكل"
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
