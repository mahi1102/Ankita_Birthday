// Global Variables
let stage = 0;
let candles = [];
let balloons = [];
let musicEnabled = true;
let soundEnabled = true;

// Date and Birthday System
const BIRTHDAY_DATE = '09-27'; // September 27th
const BIRTH_YEAR = 2001; // Ankita's birth year
const BIRTHDAY_YEAR = 2025; // Current birthday year
let isBirthdayToday = false;
let currentDayOfYear = 0;
let countdownInterval = null;

// Daily Background Themes (14 different themes)
const backgroundThemes = [
    {
        name: "Sunset Bliss",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        particles: "#ff6b6b",
        animation: "sunsetGlow"
    },
    {
        name: "Ocean Waves",
        gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)",
        particles: "#00cec9",
        animation: "waveMotion"
    },
    {
        name: "Forest Green",
        gradient: "linear-gradient(135deg, #00b894 0%, #00a085 100%)",
        particles: "#55a3ff",
        animation: "forestBreeze"
    },
    {
        name: "Sunset Orange",
        gradient: "linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)",
        particles: "#e17055",
        animation: "orangeGlow"
    },
    {
        name: "Purple Dreams",
        gradient: "linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)",
        particles: "#fd79a8",
        animation: "purplePulse"
    },
    {
        name: "Rose Garden",
        gradient: "linear-gradient(135deg, #fd79a8 0%, #e84393 100%)",
        particles: "#fdcb6e",
        animation: "roseBloom"
    },
    {
        name: "Golden Hour",
        gradient: "linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)",
        particles: "#fd79a8",
        animation: "goldenShimmer"
    },
    {
        name: "Mint Fresh",
        gradient: "linear-gradient(135deg, #00cec9 0%, #00b894 100%)",
        particles: "#74b9ff",
        animation: "mintFlow"
    },
    {
        name: "Lavender Fields",
        gradient: "linear-gradient(135deg, #a29bfe 0%, #fd79a8 100%)",
        particles: "#fdcb6e",
        animation: "lavenderSway"
    },
    {
        name: "Coral Reef",
        gradient: "linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)",
        particles: "#00cec9",
        animation: "coralDance"
    },
    {
        name: "Midnight Blue",
        gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 100%)",
        particles: "#74b9ff",
        animation: "midnightTwinkle"
    },
    {
        name: "Peach Paradise",
        gradient: "linear-gradient(135deg, #fdcb6e 0%, #fd79a8 100%)",
        particles: "#00b894",
        animation: "peachGlow"
    },
    {
        name: "Emerald Forest",
        gradient: "linear-gradient(135deg, #00b894 0%, #55a3ff 100%)",
        particles: "#fdcb6e",
        animation: "emeraldShine"
    },
    {
        name: "Cosmic Purple",
        gradient: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
        particles: "#fd79a8",
        animation: "cosmicFlow"
    }
];
let blessingMessages = [
    "🙏 गजानन महाराजांचे आशीर्वाद तुमच्यावर राहोत 🙏",
    "सद्गुरु गजानन महाराजांचे आशीर्वाद तुमच्या जीवनात सुख, शांती आणि आनंद भरून टाको 🙏",
    "गजानन महाराजांच्या कृपेने तुमच्या प्रत्येक कार्यात यश लाभो 🌸",
    "तुमच्या आयुष्यात आरोग्य, समाधान आणि समृद्धी नांदो 🙏",
    "महाराजांच्या चरणी प्रार्थना — तुमच्या जीवनात सतत नवीन संधी आणि प्रगती येत राहो 🚀",
    "सद्गुरुंच्या कृपाशिर्वादाने तुमच्या वाटचालीत कधीही अडथळा येऊ नये 🌼",
    "गजानन महाराजांची कृपा सदैव तुमच्यावर आणि तुमच्या परिवारावर राहो 🙌",
    "महाराज तुमच्यातील सामर्थ्य जागृत करून नवे यश मिळवण्याची प्रेरणा देवोत ✨",
    "सद्गुरु गजानन महाराजांच्या आशीर्वादाने तुमच्या जीवनातील प्रत्येक दिवस मंगलमय होवो 🌺"
];
let currentBlessingIndex = 0;
let blessingShown = false;

// Daily Inspirational Thoughts (365 thoughts for each day of the year)
const dailyThoughts = [
    "श्रद्धा ठेवा, मार्ग सापडेल.",
    "भजन केल्याने मन शुद्ध होते.",
    "संतांचे स्मरण म्हणजेच शक्ती.",
    "देणाऱ्याचा हात कधीच रिकामा नसतो.",
    "संयम ही खरी साधना आहे.",
    "क्रोधावर विजय मिळवणे म्हणजे मोठे यश.",
    "मन जिंकले की जग जिंकले.",
    "परमेश्वरावर विश्वास ठेवा.",
    "इतरांना मदत करा, सुख दुप्पट होईल.",
    "स्वार्थ सोडा, सेवा करा.",
    "नम्रता ही खरी शोभा आहे.",
    "मनुष्याचे खरे सौंदर्य त्याच्या गुणांत असते.",
    "भक्तीचा मार्ग सर्वात सोपा आहे.",
    "दान दिल्याने संपत्ती वाढते.",
    "आत्मज्ञानाने अज्ञान दूर होते.",
    "संतस्मरणाने संकटे टळतात.",
    "सत्याचा मार्ग नेहमी सरळ असतो.",
    "लोभ टाळा, आनंद मिळवा.",
    "मनात शांती ठेवा, आयुष्य सुंदर होईल.",
    "संतांच्या चरणीच खरे सुख आहे.",
    "नित्य स्मरण करा, नित्य आनंदी राहा.",
    "देव सर्वत्र आहे, हे विसरू नका.",
    "इतरांचा सन्मान करा, तुमचा सन्मान होईल.",
    "उपवासाने नव्हे तर उपकाराने पुण्य मिळते.",
    "चांगली संगत हीच खरी संपत्ती आहे.",
    "संतोष हेच खरे धन आहे.",
    "कष्टानेच यश मिळते.",
    "मनातले वाईट विचार हद्दपार करा.",
    "क्षमेतच खरा बळ आहे.",
    "साधेपणातच महानता आहे.",
    "समाधानाने राहिल्यास मनःशांती लाभते.",
    "प्रार्थना हीच खरी शक्ती आहे.",
    "संयमाने केलेले कार्य नेहमी यशस्वी होते.",
    "दुःख तात्पुरते असते, श्रद्धा कायम असते.",
    "प्रेमाने जग जिंकलं जाऊ शकतं.",
    "आत्म्याचे बळ हे सर्वश्रेष्ठ आहे.",
    "गुरुविना ज्ञान पूर्ण होत नाही.",
    "अहंकार हा सर्व अनर्थाचा मूळ आहे.",
    "भक्ताला परमेश्वर नेहमी जवळ असतो.",
    "निंदेला उत्तर शांततेने द्या.",
    "संतांचे वचन हेच मार्गदर्शन आहे.",
    "लहानास मोठा मान द्या.",
    "सेवा केल्याने ईश्वरप्राप्ती होते.",
    "लोभामुळे सुख कधीच मिळत नाही.",
    "संयम आणि श्रद्धा या दोन पंखांनी उंच भरारी घेता येते.",
    "संकट काळात धैर्य सोडू नका.",
    "जे घडते ते चांगल्यासाठीच घडते.",
    "भक्ती ही खरी संपत्ती आहे.",
    "दुःखातूनच अनुभव मिळतो.",
    "जे मिळाले आहे त्यात आनंद मानावा.",
    "मनःशांती हीच खरी संपत्ती आहे.",
    "दुसऱ्याच्या आनंदात आपला आनंद शोधा.",
    "विश्वास ठेवा, देव नेहमी मदत करतो.",
    "परोपकार हेच खरे धर्म आहे.",
    "अपमान सहन केल्याने आत्मबल वाढते.",
    "नको असलेल्या गोष्टींची इच्छा करू नका.",
    "संतांच्या चरणी लीन झाल्याने भय नाहीसे होते.",
    "सत्कर्म केल्याशिवाय मोक्ष नाही.",
    "ज्ञान आणि भक्ती दोन्ही आवश्यक आहेत.",
    "स्वतःचा अभिमान सोडा, देव तुमचं कार्य करेल.",
    "दयेपेक्षा मोठं दान नाही.",
    "भक्ती म्हणजे अंतःकरणाची स्वच्छता.",
    "सत्य बोलणं म्हणजेच पूजा.",
    "संतांची सेवा म्हणजेच देवाची सेवा.",
    "कष्टाशिवाय फळ नाही.",
    "संतांची वाणी म्हणजेच अमृत.",
    "नम्रतेने वागा, सगळ्यांचं मन जिंकाल.",
    "ईश्वर स्मरणाने संकटं नाहीशी होतात.",
    "निस्वार्थ प्रेम हेच खरे प्रेम.",
    "जे आहे त्यात समाधान शोधा.",
    "भक्ताला ईश्वर नेहमी रक्षण करतो.",
    "क्रोधाला वश होऊ नका.",
    "धर्म म्हणजे परोपकार.",
    "दान दिल्याने मन पवित्र होतं.",
    "स्वार्थामुळेच दुःख वाढतं.",
    "इतरांचा अपमान टाळा.",
    "संयम धरल्याने कार्य सिद्ध होतं.",
    "संतांचे आशिर्वादच खरी संपत्ती आहेत.",
    "भक्तीच्या मार्गावर चालणारा कधीच हरवत नाही.",
    "सत्कर्माने कीर्ती मिळते.",
    "ज्ञानाशिवाय अंधार आहे.",
    "संतोष ठेवा, सुखी व्हा.",
    "अहंकार टाकल्यानेच आनंद मिळतो.",
    "दया, क्षमा आणि प्रेम ह्या जीवनाच्या खरी शोभा आहेत.",
    "देव सर्वत्र आहे, हे जाणलं की भय नाहीसं होतं.",
    "दुसऱ्याचं भलं करा, तुमचं भलं आपोआप होईल.",
    "निंदा करणाऱ्याला उत्तर शांततेत द्या.",
    "सेवा, साधना, आणि सत्य — हेच जीवनाचे आधारस्तंभ.",
    "मन शांत असेल तरच समाधान लाभेल.",
    "श्रद्धा ठेवा, ईश्वर नेहमी सोबत आहे.",
    "दुसऱ्याच्या दुःखात सहभागी व्हा.",
    "लोभामुळे मनुष्याचा नाश होतो.",
    "दयाळूपणानेच खरे यश मिळते.",
    "देव भक्ताच्या अंतःकरणात वास करतो.",
    "क्षमाशीलतेतच महानता आहे.",
    "भजन केल्याने मन प्रसन्न होते.",
    "संयम धरल्याने यश लांब नसते.",
    "निसर्ग म्हणजे ईश्वराची मूर्ती.",
    "चांगल्या विचारांनी जीवन उजळतं.",
    "नम्रतेने बोलणं ही खरी सजावट आहे.",
    "सत्यावर ठाम राहा.",
    "संतांचा मार्ग म्हणजेच सुरक्षित मार्ग.",
    "वैर मिटवा, प्रेम जोडा.",
    "साधेपणातच परमेश्वर भेटतो.",
    "लोभी माणसाला कधीच शांती मिळत नाही.",
    "भक्तीने मन निर्मळ होतं.",
    "सत्संग हेच खरे विद्यापीठ आहे.",
    "आत्म्याचं सुख हेच खरे सुख.",
    "कधीही खोटं बोलू नका.",
    "सद्विचारांनीच समाज बदलतो.",
    "भक्ती, ज्ञान आणि सेवा हेच तीन आधार आहेत.",
    "वाईट संगत टाळा, चांगली संगत जोडा.",
    "देवावर विश्वास ठेवा, सगळं सुरळीत होईल.",
    "संतांचा स्मरणाने हृदय हलकं होतं.",
    "क्रोधाला आवर घातल्याने मैत्री जपली जाते.",
    "देणं म्हणजेच खरी पूजा.",
    "दुसऱ्याच्या आनंदात आपला आनंद शोधा.",
    "अपमान केल्यावरही शांत राहा.",
    "परोपकाराने पुण्य मिळते.",
    "मनात श्रद्धा असेल तर संकटं काहीच नाहीत.",
    "संतांचा मार्ग चालणाऱ्याला कधीच भीती वाटत नाही.",
    "सद्विचारांचा संग हा अमूल्य आहे.",
    "सेवा म्हणजेच खरी साधना.",
    "मनःशांती हीच खरी संपत्ती आहे.",
    "दान दिल्याने पुण्य वाढते.",
    "लोभ मनुष्याचा सर्वनाश करतो.",
    "भक्ताच्या हृदयातच देव वास करतो.",
    "संतांचे आशीर्वाद हेच जीवनाचे आधार आहेत.",
    "संयम धरल्याने संकटं सहज निघून जातात.",
    "सत्य मार्गावर चालणाऱ्याला यश नक्की मिळते.",
    "नम्रता हीच खरी सजावट आहे.",
    "परोपकारानेच ईश्वर प्रसन्न होतो.",
    "भजनाने मन शुद्ध होतं.",
    "चांगल्या संगतीत जीवन उजळतं.",
    "देव सर्वत्र आहे, हे जाणलं की मन शांत होतं.",
    "क्षमाशीलतेने वैर संपते.",
    "श्रद्धा ठेवणारा कधीच एकटा नसतो.",
    "संतांचा स्मरण हेच सर्वश्रेष्ठ साधन आहे.",
    "दुसऱ्याच्या मदतीला धावा, देव तुमच्या मदतीला धावेल.",
    "संयम आणि श्रद्धा हे जीवनाचे दोन आधारस्तंभ आहेत.",
    "निस्वार्थ प्रेम हेच खरे सुख आहे.",
    "अहंकाराने मनुष्य पतन पावतो.",
    "साधेपणाने जगणं हेच खरं वैभव आहे.",
    "दया, धर्म, आणि दान – हेच तीन रत्न आहेत.",
    "भक्ताला परमेश्वर नेहमी साथ देतो.",
    "ज्ञानाशिवाय जीवन अंधारमय आहे.",
    "संतोष ठेवा, तेच खरे वैभव आहे.",
    "देवाला हाक दिल्यावर तो नेहमी ऐकतो.",
    "चांगल्या विचारांनी जीवन सुंदर होतं.",
    "संतांची संगत हीच खरी पुण्याई आहे.",
    "भक्तीने मन शुद्ध होतं, आणि शांती लाभते.",
    "संतांच्या चरणी लीन झाल्याने भय नाहीसं होतं.",
    "देवाच्या नावात अपार शक्ती आहे.",
    "लोभ टाकल्याने मन आनंदी होतं.",
    "सेवा हीच खरी पूजा आहे.",
    "संयमाने वागा, यश नक्की मिळेल.",
    "दुसऱ्यांचा सन्मान करा, तुमचा सन्मान वाढेल.",
    "सत्यावर चालणाऱ्याला कोणीही रोखू शकत नाही.",
    "भक्ती म्हणजे देवाशी नातं जोडणं.",
    "दयाळूपणानेच माणुसकी जिवंत राहते.",
    "निंदा टाळा, सत्याचा स्वीकार करा.",
    "साध्या जीवनातच खरी शोभा आहे.",
    "संतस्मरणाने मनःशांती मिळते.",
    "श्रद्धा ठेवा, संकटं नष्ट होतील.",
    "दान दिल्याने मन हलकं होतं.",
    "संयम धरल्याने सर्व काही साध्य होतं.",
    "परमेश्वराची आठवण ठेवा, आनंद लाभेल.",
    "अहंकार सोडा, प्रेम जोडा.",
    "मनुष्याच्या अंतःकरणातच देवाचं मंदिर आहे.",
    "सत्कर्माने जीवनाचा खरा अर्थ कळतो.",
    "लोभ आणि क्रोध हेच दुःखाचे मूळ आहेत.",
    "संयम हा सर्व सद्गुणांचा पाया आहे.",
    "साधेपणा म्हणजेच खरी श्रीमंती.",
    "दुसऱ्याला मदत करणं म्हणजे देवाची सेवा करणं.",
    "संतांचे वचन म्हणजे जीवनाचा प्रकाश.",
    "क्षमा केल्याने अंतःकरण शुद्ध होतं.",
    "श्रद्धा आणि भक्तीने सर्वकाही शक्य आहे.",
    "दुसऱ्याच्या चुकांकडे दुर्लक्ष करा.",
    "परोपकाराने समाज सुंदर होतो.",
    "ईश्वरावर विश्वास ठेवा, तो कधीही साथ सोडत नाही.",
    "संतांचे स्मरण म्हणजेच अमृतपान आहे.",
    "संयम धरल्याने संकटे सहज पार होतात.",
    "भक्ताच्या प्रार्थनेला देव नेहमी उत्तर देतो.",
    "नम्रता हा माणसाचा खरा अलंकार आहे.",
    "भजनाने मनात आनंद निर्माण होतो.",
    "लोभामुळेच शांती हरवते.",
    "सेवा केल्याने पुण्य वाढते.",
    "भक्तीने देव लवकर प्रसन्न होतो.",
    "दुसऱ्याच्या भल्यात आपलं भलं दडलेलं आहे.",
    "साधेपणाने वागा, सगळे आपले होतील.",
    "सत्यावर ठाम राहिल्यास विजय नक्की मिळतो.",
    "संतांच्या आशिर्वादाने अशक्यही शक्य होतं.",
    "श्रद्धा ठेवणाऱ्याला नेहमीच मार्ग मिळतो.",
    "संयम आणि परिश्रम या दोन्हीने जीवन सुंदर होतं.",
    "क्षमा केल्याने वैर नष्ट होतं.",
    "सत्कर्माने कीर्ती चिरंतन राहते.",
    "परोपकार म्हणजेच खरा धर्म.",
    "भक्ती हीच खरी संपत्ती आहे.",
    "नम्रतेने केलेले बोल मन जिंकतात.",
    "क्रोध आल्यास मौन धरा.",
    "संतस्मरणाने अंधार नाहीसा होतो.",
    "समाधान हीच खरी श्रीमंती आहे.",
    "देवाचं नाव घेणाऱ्याला भीती कधी वाटत नाही.",
    "चांगल्या संगतीत आयुष्य आनंदी होतं.",
    "दुसऱ्याच्या चुका माफ करणं हेच खरं पुण्य.",
    "भक्तीने हृदयात शांती निर्माण होते.",
    "दयाळूपणाने समाज मजबूत होतो.",
    "संयम धरल्याने मन स्थिर राहतं.",
    "देवावर विश्वास ठेवल्यास अडचणी नाहीशा होतात.",
    "सेवा म्हणजेच ईश्वरप्रेमाची खरी परीक्षा आहे.",
    "भक्ताचे हृदय हेच देवाचे खरे मंदिर आहे.",
    "संयम हा जीवनाचा खरा अलंकार आहे.",
    "सत्संगाने अंधार नाहीसा होतो.",
    "सत्याचा मार्ग काटेरी असला तरी शेवटी फळ गोडच असतं.",
    "दयाळूपणाने शत्रूही मित्र होतो.",
    "लोभामुळे सुख हरवते.",
    "संतस्मरणाने संकटं दूर होतात.",
    "श्रद्धा ठेवा, परमेश्वर नेहमी जवळ आहे.",
    "सेवा म्हणजेच भक्तीचं खरं रूप आहे.",
    "संयम धरल्याने जीवनाचा मार्ग सुकर होतो.",
    "दुसऱ्याच्या मदतीसाठी पुढे या.",
    "संतांचे वचन हेच जीवनाचे दिशादर्शन आहे.",
    "अहंकारामुळे पतन होते.",
    "भक्तीने मनाचं ओझं हलकं होतं.",
    "परोपकाराने खरा आनंद मिळतो.",
    "सत्य बोलणाऱ्याला भीती नसते.",
    "संयम हा सर्व यशाची किल्ली आहे.",
    "दान दिल्याने मन शुद्ध होतं.",
    "नम्रतेने वागणं म्हणजेच खरी सजावट आहे.",
    "क्रोधावर विजय मिळवल्याने आत्मबल वाढतं.",
    "भक्ताला देव नेहमी संरक्षण देतो.",
    "चांगल्या विचारांनी समाज सुंदर होतो.",
    "साधेपणानेच खरी श्रीमंती मिळते.",
    "क्षमा हीच खरी ताकद आहे.",
    "संतांच्या चरणी लीन झाल्याने भय नाहीसं होतं.",
    "श्रद्धेने केलेली प्रार्थना नेहमी सफल होते.",
    "संयमाने घेतलेले निर्णय योग्य ठरतात.",
    "परोपकार केल्याने जीवन धन्य होतं.",
    "भक्तीने हृदय निर्मळ होतं.",
    "देवाचं नाव घेणाऱ्याला कधीच हार पत्करावी लागत नाही.",
    "संतांचे आशिर्वाद म्हणजेच खरी शक्ती आहे.",
    "भक्ताच्या हृदयात नेहमी आनंद फुलतो.",
    "संयम धरल्याने यश लांब नाही.",
    "परोपकाराने ईश्वर प्रसन्न होतो.",
    "सत्यावर ठाम राहणं हेच खरं धैर्य आहे.",
    "दया हीच माणसाची खरी शोभा आहे.",
    "संतस्मरणाने पापं नाहीशी होतात.",
    "नम्रतेने वागणारा सगळ्यांचा लाडका होतो.",
    "श्रद्धेने केलेली सेवा ईश्वराला प्रिय असते.",
    "लोभ आणि मत्सर यामुळे आयुष्य अंधारमय होतं.",
    "भक्तीने जीवन सुंदर होतं.",
    "संयम हा सर्व गुणांचा राजा आहे.",
    "देवाचं नाव हेच सर्व दुःखांचं औषध आहे.",
    "दुसऱ्याच्या कल्याणातच आपलं खरं भलं आहे.",
    "क्षमाशीलतेने हृदय प्रसन्न होतं.",
    "साधेपणाने जगणं म्हणजेच खरी श्रीमंती आहे.",
    "परोपकार म्हणजेच खरी पूजा आहे.",
    "सत्य बोलणाऱ्याला नेहमी विजय मिळतो.",
    "संतांची संगत हेच जीवनाचं सौंदर्य आहे.",
    "श्रद्धा आणि संयमाने संकटं पार होतात.",
    "सेवा करणं म्हणजे देवाची कृपा मिळवणं.",
    "भक्ताचं मन नेहमी निर्मळ असतं.",
    "लोभामुळे मनुष्य दुःखी होतो.",
    "दान दिल्याने अंतःकरण हलकं होतं.",
    "संतांचे वचन हेच जीवनाची दिशा आहे.",
    "संयम ठेवल्याने मन स्थिर होतं.",
    "भक्तीने परमेश्वर सहज सापडतो.",
    "सत्याचं पालन करणं म्हणजेच देवाची सेवा करणं.",
    "दुसऱ्याच्या दुःखात सहभागी होणं हेच खरं दान आहे.",
    "नम्रतेने जगणं म्हणजेच आयुष्याचं खरं सौंदर्य आहे.",
    "भक्ताच्या हृदयात देव नेहमी वास करतो.",
    "संयम ठेवल्याने संकटं सहज पार होतात.",
    "संतांचे आशिर्वाद हेच खरे धन आहे.",
    "भक्तीने मन प्रसन्न होतं.",
    "दया आणि क्षमा ह्या माणसाची खरी ताकद आहेत.",
    "लोभ टाळल्याने सुख टिकतं.",
    "सेवा हेच जीवनाचं खरे ध्येय आहे.",
    "सत्य बोलल्याने अंतःकरण हलकं होतं.",
    "नम्रतेने केलेलं वर्तन सर्वांचं मन जिंकतं.",
    "भक्ताचे हृदय निर्मळ राहिल्यास देव त्याच्यासोबत असतो.",
    "परोपकाराने समाज मजबूत होतो.",
    "संतस्मरणाने भय नाहीसं होतं.",
    "श्रद्धा ठेवल्याने मार्ग सोपा होतो.",
    "संयम आणि भक्ती या दोन पंखांनी जीवन उंच भरारी घेतं.",
    "दुसऱ्याच्या मदतीसाठी पुढे या, देव तुमच्या मदतीला धावेल.",
    "साधेपणाने जगणं म्हणजेच खरी संपत्ती आहे.",
    "अहंकार सोडल्याने मन शांत राहतं.",
    "भक्ती आणि ज्ञान हे जीवनाचे दोन्ही आधार आहेत.",
    "संतांचे वचन हेच जीवनाचा प्रकाश आहे.",
    "लोभ आणि क्रोध टाळल्याने जीवन सुकर होतं.",
    "सत्याचा मार्ग नेहमी यशस्वी होतो.",
    "दान दिल्याने अंतःकरण हलकं होतं.",
    "भक्ताच्या प्रार्थनेला देव नेहमी उत्तर देतो.",
    "नम्रतेने वागणारा माणूस सगळ्यांचा लाडका होतो.",
    "संयम ठेवल्याने निर्णय योग्य ठरतात.",
    "सेवा केल्याने पुण्य मिळतं.",
    "भक्तीने हृदय निर्मळ होतं.",
    "दुसऱ्याच्या दुःखात सहभागी होणं हेच खरे धर्म आहे.",
    "श्रद्धा आणि संयम ठेवल्यास संकटं पार होतात.",
    "जीवनात देवावर पूर्ण विश्वास ठेवा, तो कधीच साथ सोडत नाही.",
    "भक्ताचे हृदय हेच खरे मंदिर आहे.",
    "संतांचे स्मरण नेहमी मन हलकं करतं.",
    "संयम ठेवल्याने अडचणी सहज दूर होतात.",
    "भक्तीने जीवनात प्रकाश येतो.",
    "सेवा म्हणजेच देवाची खरी पूजा आहे.",
    "दया आणि क्षमा ह्या माणसाचं खरे वैभव आहेत.",
    "लोभ आणि अहंकार टाळल्याने मन शांत राहतं.",
    "सत्य बोलल्याने अंतःकरण प्रसन्न होतं.",
    "नम्रतेने केलेलं वर्तन सर्वांचं मन जिंकतं.",
    "भक्ती आणि श्रद्धा ठेवल्याने सर्व संकट दूर होतात.",
    "परोपकार हेच खरे सुख आहे.",
    "संतस्मरणाने भय नाहीसं होतं.",
    "श्रद्धा ठेवल्याने मार्ग सोपा होतो.",
    "संयम आणि भक्ती या दोन्हीने जीवन सुंदर होतं.",
    "दुसऱ्याच्या मदतीसाठी पुढे या, देव तुमच्यासोबत आहे.",
    "साधेपणाने जगणं हेच खरं वैभव आहे.",
    "अहंकार सोडल्याने जीवन सुलभ होतं.",
    "भक्ती आणि ज्ञान यांच्यामुळे आत्म्याचा उन्नती साधता येतो.",
    "संतांचे वचन हेच जीवनाचा मार्गदर्शक आहे.",
    "लोभ आणि क्रोध टाळल्याने आयुष्य सुखमय होतं.",
    "सत्याचा मार्ग कधीही हारत नाही.",
    "दान दिल्याने अंतःकरण हलकं होतं.",
    "भक्ताच्या प्रार्थनेला देव नेहमी उत्तर देतो.",
    "नम्रतेने वागणारा सगळ्यांचा प्रिय होतो.",
    "संयम ठेवल्याने निर्णय नेहमी योग्य ठरतात.",
    "सेवा केल्याने पुण्य मिळते आणि मन समाधान मिळते.",
    "भक्तीने हृदय निर्मळ होतं आणि शांती लाभते.",
    "दुसऱ्याच्या दुःखात सहभागी होणं हेच खरे धर्म आहे.",
    "श्रद्धा आणि संयम ठेवल्यास सर्व संकटं दूर होतात.",
    "जीवनात देवावर विश्वास ठेवा, तो कधीच साथ सोडत नाही.",
    "भक्तांचे हृदय नेहमी निर्मळ राहावे.",
    "संतांचे स्मरण केल्याने जीवन हलके होते.",
    "संयम ठेवल्याने संकटं सहज निघून जातात.",
    "भक्तीने हृदयात प्रकाश निर्माण होतो.",
    "सेवा हीच खरी भक्ती आहे.",
    "दया आणि क्षमा ह्या माणसाची खरी ताकद आहेत.",
    "लोभ टाळल्याने सुख टिकतं.",
    "सत्य बोलल्याने मन प्रसन्न होतं.",
    "नम्रतेने केलेले वर्तन सर्वांचं मन जिंकते.",
    "श्रद्धा आणि भक्ती ठेवल्याने सर्व संकट दूर होतात.",
    "परोपकाराने आयुष्य सुंदर होतं.",
    "संतस्मरणाने भय नाहीसं होतं.",
    "श्रद्धा ठेवल्याने मार्ग सोपा होतो.",
    "संयम आणि भक्तीने जीवन उजळतं.",
    "दुसऱ्याच्या मदतीसाठी पुढे या, देव तुमच्यासोबत आहे.",
    "साधेपणाने जगणं हेच खरे वैभव आहे.",
    "अहंकार सोडल्याने मन शांत राहतं.",
    "भक्ती आणि ज्ञानाने आत्म्याचा विकास होतो.",
    "संतांचे वचन हेच जीवनाचा प्रकाश आहे.",
    "लोभ आणि क्रोध टाळल्याने आयुष्य सुखमय होतं.",
    "सत्याचा मार्ग कधीच हरत नाही.",
    "दान दिल्याने अंतःकरण हलकं होतं.",
    "भक्ताच्या प्रार्थनेला देव नेहमी उत्तर देतो.",
    "नम्रतेने वागणारा सर्वांचा प्रिय होतो.",
    "संयम ठेवल्याने निर्णय योग्य ठरतात.",
    "सेवा केल्याने पुण्य आणि आनंद मिळतो.",
    "भक्तीने हृदय निर्मळ होतं.",
    "दुसऱ्याच्या दुःखात सहभागी होणं हेच खरे धर्म आहे.",
    "श्रद्धा आणि संयम ठेवल्यास सर्व संकटं दूर होतात.",
    "जीवनात देवावर पूर्ण विश्वास ठेवा, तो कधीच साथ सोडत नाही.",
    "भक्ती आणि श्रद्धा ठेवल्यास जीवनात कधीच अंधार येत नाही.",
    "दुसऱ्याच्या भल्यासाठी केलेले कार्य देवाला प्रिय आहे.",
    "संयम, सेवा आणि प्रेम ह्या तीन गोष्टी जीवनाचा आधार आहेत.",
    "जीवनात सदैव ईश्वरावर विश्वास ठेवा, तो कधीच सोबत सोडत नाही."
];

// Apply daily background theme
function applyDailyBackground() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const themeIndex = dayOfYear % backgroundThemes.length;
    const theme = backgroundThemes[themeIndex];
    
    // Apply gradient background
    document.body.style.background = theme.gradient;
    
    // Update CSS custom properties for animations
    document.documentElement.style.setProperty('--particle-color', theme.particles);
    document.documentElement.style.setProperty('--current-animation', theme.animation);
    
    // Add theme class for specific animations
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${theme.animation}`);
    
    console.log(`Applied theme: ${theme.name} (Day ${dayOfYear} of year)`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    applyDailyBackground();
    checkBirthdayAndInitialize();
});

// Main initialization function
function checkBirthdayAndInitialize() {
    const today = new Date();
    const currentDate = today.getDate().toString().padStart(2, '0');
    const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
    const currentYear = today.getFullYear();
    
    // Check if today is birthday
    const todayString = `${currentMonth}-${currentDate}`;
    isBirthdayToday = (todayString === BIRTHDAY_DATE);
    
    // Calculate day of year (1-365)
    const startOfYear = new Date(currentYear, 0, 1);
    const timeDiff = today.getTime() - startOfYear.getTime();
    currentDayOfYear = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1;
    
    // Initialize based on whether it's birthday or not
    if (isBirthdayToday) {
        initializeBirthdayMode();
    } else {
        initializeDailyThoughtMode();
    }
    
    // Always initialize common features
    initModernEffects();
    initDynamicLighting();
    initInteractiveFireworks();
    initAdvancedBackground();
    initPhotoGallery();
    updateDateDisplay();
    setupMidnightRefresh();
}

// Birthday mode initialization
function initializeBirthdayMode() {
    document.body.classList.add('birthday-mode');
    
    // Hide photo gallery on birthday
    const photoGallery = document.querySelector('.photo-gallery');
    if (photoGallery) {
        photoGallery.style.display = 'none';
    }
    
    // Hide countdown timer on birthday
    const countdownSection = document.querySelector('.countdown-section');
    if (countdownSection) {
        countdownSection.style.display = 'none';
    }
    
    // Start birthday countdown animation (3, 2, 1, Boom!)
    startBirthdayCountdown();
}

// Daily thought mode initialization
function initializeDailyThoughtMode() {
    document.body.classList.remove('birthday-mode');
    showMainDashboard();
    
    // Show photo gallery on non-birthday days
    const photoGallery = document.querySelector('.photo-gallery');
    if (photoGallery) {
        photoGallery.style.display = 'block';
    }
    
    // Show countdown timer on non-birthday days
    const countdownSection = document.querySelector('.countdown-section');
    if (countdownSection) {
        countdownSection.style.display = 'block';
    }
    
    // Hide birthday countdown on non-birthday days
    const birthdayCountdown = document.getElementById('birthdayCountdown');
    if (birthdayCountdown) {
        birthdayCountdown.style.display = 'none';
    }
}

// Show main dashboard with all features
function showMainDashboard() {
    const mainDashboard = document.getElementById('mainDashboard');
    
    // Calculate and display age
    updateAgeDisplay();
    
    // Start countdown timer
    startCountdownTimer();
    
    // Show daily thought
    showDailyThoughtCard();
    
    // Update stats
    updateStats();
    
    // Show dashboard with animation
    setTimeout(() => {
        mainDashboard.classList.add('show');
    }, 500);
}

// Update age display
function updateAgeDisplay() {
    const today = new Date();
    const birthDate = new Date(BIRTH_YEAR, 8, 27); // September 27, 2001
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    document.getElementById('ageNumber').textContent = age;
    document.getElementById('birthYear').textContent = `जन्म: ${BIRTH_YEAR}`;
}

// Start countdown timer
function startCountdownTimer() {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}

// Update countdown display
function updateCountdown() {
    // Don't update countdown on birthday
    if (document.body.classList.contains('birthday-mode')) {
        return;
    }
    
    const now = new Date();
    const nextBirthday = getNextBirthday();
    
    // Normalize dates to midnight to avoid timezone issues
    const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const birthdayMidnight = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), nextBirthday.getDate());
    
    const timeDiff = birthdayMidnight.getTime() - nowMidnight.getTime();
    
    if (timeDiff <= 0) {
        // It's birthday! Refresh page
        location.reload();
        return;
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    document.getElementById('daysCount').textContent = days.toString().padStart(3, '0');
    document.getElementById('hoursCount').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutesCount').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('secondsCount').textContent = seconds.toString().padStart(2, '0');
}

// Get next birthday date
function getNextBirthday() {
    const today = new Date();
    const [month, day] = BIRTHDAY_DATE.split('-');
    const currentYear = today.getFullYear();
    
    let nextBirthday = new Date(currentYear, parseInt(month) - 1, parseInt(day));
    
    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, parseInt(month) - 1, parseInt(day));
    }
    
    return nextBirthday;
}

// Show daily thought card
function showDailyThoughtCard() {
    const thoughtText = document.getElementById('thoughtText');
    const dayCounter = document.getElementById('dayCounter');
    const progressFill = document.getElementById('progressFill');
    
    // Get today's thought
    const todayThought = dailyThoughts[currentDayOfYear - 1] || dailyThoughts[0];
    
    thoughtText.textContent = todayThought;
    dayCounter.textContent = `दिवस ${currentDayOfYear} / 365`;
    
    // Update progress bar
    const progressPercentage = (currentDayOfYear / 365) * 100;
    progressFill.style.width = progressPercentage + '%';
}

// Update statistics
function updateStats() {
    const today = new Date();
    const birthDate = new Date(BIRTH_YEAR, 8, 27);
    
    // Calculate years, months, and days since birth
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust for negative days
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Adjust for negative months
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Update displays with current age breakdown
    document.getElementById('daysAlive').textContent = days;
    document.getElementById('monthsAlive').textContent = months;
    document.getElementById('yearsAlive').textContent = years;
}

// Share thought function
function shareThought() {
    const thoughtText = document.getElementById('thoughtText').textContent;
    const dayCounter = document.getElementById('dayCounter').textContent;
    
    const shareText = `${thoughtText}\n\n${dayCounter}\n\n#AnkitaBirthday #DailyThought #Inspiration`;
    
    if (navigator.share) {
        navigator.share({
            title: 'आजचा विचार',
            text: shareText
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('विचार कॉपी केला गेला!');
        });
    }
}

// Save thought function
function saveThought() {
    const thoughtText = document.getElementById('thoughtText').textContent;
    const dayCounter = document.getElementById('dayCounter').textContent;
    
    // Save to localStorage
    const savedThoughts = JSON.parse(localStorage.getItem('savedThoughts') || '[]');
    const newThought = {
        text: thoughtText,
        day: dayCounter,
        date: new Date().toLocaleDateString('mr-IN'),
        timestamp: Date.now()
    };
    
    savedThoughts.push(newThought);
    localStorage.setItem('savedThoughts', JSON.stringify(savedThoughts));
    
    alert('विचार सेव्ह केला गेला! 💾');
}

// Show daily thought
function showDailyThought() {
    const dailyThought = document.getElementById('dailyThought');
    const thoughtText = document.getElementById('thoughtText');
    const dayCounter = document.getElementById('dayCounter');
    
    // Get today's thought
    const todayThought = dailyThoughts[currentDayOfYear - 1] || dailyThoughts[0];
    
    thoughtText.textContent = todayThought;
    dayCounter.textContent = `दिवस ${currentDayOfYear} / 365`;
    
    // Show with animation
    setTimeout(() => {
        dailyThought.classList.add('show');
    }, 1000);
}

// Show birthday message
function showBirthdayMessage() {
    // This will be handled by the existing birthday animation sequence
    console.log("Happy Birthday Ankita! 🎂");
}

// Update date display
function updateDateDisplay() {
    const currentDateElement = document.getElementById('currentDate');
    const daysUntilBirthdayElement = document.getElementById('daysUntilBirthday');
    
    const today = new Date();
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    currentDateElement.textContent = today.toLocaleDateString('mr-IN', dateOptions);
    
    if (isBirthdayToday) {
        daysUntilBirthdayElement.textContent = "🎂 आज तुमचा वाढदिवस! 🎂";
        daysUntilBirthdayElement.style.color = "#FFD700";
        daysUntilBirthdayElement.style.fontSize = "1.1rem";
        daysUntilBirthdayElement.style.textShadow = "0 0 15px #FFD700";
    } else {
        const daysUntil = calculateDaysUntilBirthday();
        daysUntilBirthdayElement.textContent = `${daysUntil} दिवसांनी पुन्हा येणार धमाल!`;
        daysUntilBirthdayElement.style.color = "#ff6b6b";
    }
}

// Calculate days until next birthday
function calculateDaysUntilBirthday() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const [month, day] = BIRTHDAY_DATE.split('-');
    
    let nextBirthday = new Date(currentYear, parseInt(month) - 1, parseInt(day));
    
    // If birthday has passed this year, calculate for next year
    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, parseInt(month) - 1, parseInt(day));
    }
    
    // Normalize dates to midnight to avoid timezone issues
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const birthdayMidnight = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), nextBirthday.getDate());
    
    const timeDiff = birthdayMidnight.getTime() - todayMidnight.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    return daysDiff;
}

// Auto-refresh daily thought at midnight
function setupMidnightRefresh() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();
    
    setTimeout(() => {
        location.reload(); // Refresh page at midnight for new thought
    }, timeUntilMidnight);
}

// Modern Effects Initialization
function initModernEffects() {
    createParticleSystem();
    initCursorTrail();
}

// Modern Particle System
function createParticleSystem() {
    const particleSystem = document.getElementById('particleSystem');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'modern-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        particleSystem.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 200);
}

// Interactive Cursor Trail
function initCursorTrail() {
    let mouseX = 0, mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create cursor trail effect
        if (Math.random() > 0.7) {
            const trailDot = document.createElement('div');
            trailDot.className = 'cursor-trail';
            trailDot.style.left = mouseX + 'px';
            trailDot.style.top = mouseY + 'px';
            document.body.appendChild(trailDot);
            
            setTimeout(() => {
                trailDot.remove();
            }, 500);
        }
    });
}

// Advanced Background System
function initAdvancedBackground() {
    createGeometricPatterns();
    createBackgroundParticles();
    initParallaxEffects();
    initInteractiveBackground();
    initColorMorphing();
}

// Geometric Patterns
function createGeometricPatterns() {
    const patternsContainer = document.getElementById('geometricPatterns');
    const shapes = ['triangle', 'circle', 'square'];
    
    setInterval(() => {
        const shape = document.createElement('div');
        shape.className = `geometric-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 2 + 's';
        shape.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        patternsContainer.appendChild(shape);
        
        setTimeout(() => {
            shape.remove();
        }, 25000);
    }, 3000);
}

// Background Particles
function createBackgroundParticles() {
    const particlesContainer = document.getElementById('bgParticles');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }, 500);
}

// Parallax Effects
function initParallaxEffects() {
    const layers = [
        document.getElementById('parallaxLayer1'),
        document.getElementById('parallaxLayer2'),
        document.getElementById('parallaxLayer3')
    ];
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            const moveX = (x - 50) * speed;
            const moveY = (y - 50) * speed;
            
            layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Interactive Background
function initInteractiveBackground() {
    const dynamicBg = document.getElementById('dynamicBg');
    const interactiveEffect = document.getElementById('interactiveBgEffect');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Update dynamic background
        dynamicBg.style.setProperty('--mouse-x', x + '%');
        dynamicBg.style.setProperty('--mouse-y', y + '%');
        dynamicBg.style.setProperty('--mouse-x2', (100 - x) + '%');
        dynamicBg.style.setProperty('--mouse-y2', (100 - y) + '%');
        dynamicBg.style.setProperty('--mouse-x3', (x + 20) % 100 + '%');
        dynamicBg.style.setProperty('--mouse-y3', (y + 20) % 100 + '%');
        
        // Update interactive effect
        interactiveEffect.style.setProperty('--interactive-x', x + '%');
        interactiveEffect.style.setProperty('--interactive-y', y + '%');
        interactiveEffect.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        interactiveEffect.classList.remove('active');
    });
}

// Color Morphing
function initColorMorphing() {
    const colorMorph = document.getElementById('colorMorph');
    const colors = [
        ['#1e3c72', '#2a5298', '#4dabf7', '#51cf66'],
        ['#ff6b6b', '#ee5a52', '#ffd43b', '#fab005'],
        ['#da77f2', '#cc5de8', '#845ef7', '#7950f2'],
        ['#51cf66', '#40c057', '#37b24d', '#2f9e44']
    ];
    
    let currentColorIndex = 0;
    
    setInterval(() => {
        const currentColors = colors[currentColorIndex];
        colorMorph.style.setProperty('--color-1', currentColors[0]);
        colorMorph.style.setProperty('--color-2', currentColors[1]);
        colorMorph.style.setProperty('--color-3', currentColors[2]);
        colorMorph.style.setProperty('--color-4', currentColors[3]);
        
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 8000);
}

// Dynamic Lighting
function initDynamicLighting() {
    const lightingEffect = document.getElementById('lightingEffect');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        lightingEffect.style.setProperty('--mouse-x', x + '%');
        lightingEffect.style.setProperty('--mouse-y', y + '%');
        lightingEffect.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        lightingEffect.classList.remove('active');
    });
}

// Interactive Fireworks
function initInteractiveFireworks() {
    const fireworkContainer = document.getElementById('fireworkContainer');
    
    document.addEventListener('click', (e) => {
        if (e.target.id !== 'cakeContainer' && !e.target.closest('.cake-container') && 
            !e.target.closest('.photo-gallery')) {
            createInteractiveFirework(e.clientX, e.clientY);
        }
    });
}

function createInteractiveFirework(x, y) {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2', '#FFD700'];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.transform = `translate(${vx}px, ${vy}px)`;
        particle.style.transition = 'all 1s ease-out';
        particle.style.opacity = '1';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = `translate(${vx * 1.5}px, ${vy * 1.5}px) scale(0)`;
        }, 100);
        
        setTimeout(() => {
            particle.remove();
        }, 1100);
    }
}

// Advanced Photo Gallery System
const photoData = [
    { src: "image/1.jpg", title: "Birthday Cake Memory", emoji: "🎂" },
    { src: "image/2.jpg", title: "Celebration Time", emoji: "🎉" },
    { src: "image/3.jpg", title: "Magical Moments", emoji: "✨" },
    { src: "image/4.jpg", title: "Special Gift", emoji: "🎁" },
    { src: "image/5.jpg", title: "Star Moments", emoji: "🌟" },
    { src: "image/6.jpg", title: "Love & Joy", emoji: "💖" },
    { src: "image/7.jpg", title: "Fun Times", emoji: "😊" },
    { src: "image/8.jpg", title: "Happy Moments", emoji: "🥳" },
    { src: "image/9.jpg", title: "Sweet Memories", emoji: "🍰" },
    { src: "image/10.jpg", title: "Party Time", emoji: "🎊" },
    { src: "image/11.jpg", title: "Celebration", emoji: "🎈" },
    { src: "image/12.jpg", title: "Special Day", emoji: "🎂" },
    { src: "image/13.jpg", title: "Joy & Happiness", emoji: "😄" },
    { src: "image/14.jpg", title: "Beautiful Moments", emoji: "🌸" },
    { src: "image/15.jpg", title: "Amazing Times", emoji: "🌟" },
    { src: "image/17.jpg", title: "WhatsApp Memory", emoji: "💝" }
];

let currentPhotoIndex = 0;
let photoModalOpen = false;

// Memory System
const memories = [
    {
        title: "Birthday Cake Memory 🎂",
        text: "Remember the first time we celebrated your birthday? The joy in your eyes was priceless! Here's to many more amazing years ahead!"
    },
    {
        title: "Celebration Time 🎉",
        text: "Every moment with you is a celebration! Your laughter brings so much happiness to everyone around you. Keep shining bright!"
    },
    {
        title: "Magical Moments ✨",
        text: "You have this magical ability to make ordinary days feel special. Thank you for bringing so much light into our lives!"
    },
    {
        title: "Special Gift 🎁",
        text: "Every gift you receive is a symbol of the love and care people have for you. You deserve all the beautiful things in the world!"
    },
    {
        title: "Star Moments 🌟",
        text: "You shine like a star in everyone's life. Your presence makes every moment brighter and more meaningful!"
    },
    {
        title: "Party Fun 🎉",
        text: "Birthday parties are always more fun with you around! Your energy and enthusiasm make every celebration memorable!"
    },
    {
        title: "Balloon Adventures 🎈",
        text: "Like colorful balloons floating high, your dreams and aspirations soar to new heights. Keep reaching for the stars!"
    },
    {
        title: "Cake Celebration 🎂",
        text: "Every birthday cake tells a story of love, laughter, and precious moments shared. Here's to sweet memories and sweeter years ahead!"
    },
    {
        title: "Love & Joy 💖",
        text: "Your heart is full of love and joy, and it spreads to everyone around you. Thank you for being such a wonderful person!"
    }
];

function showMemory(index) {
    const memoryMessage = document.getElementById('memoryMessage');
    const memoryTitle = document.getElementById('memoryTitle');
    const memoryText = document.getElementById('memoryText');
    
    if (memories[index]) {
        memoryTitle.textContent = memories[index].title;
        memoryText.textContent = memories[index].text;
        memoryMessage.classList.remove('hide');
        memoryMessage.classList.add('show');
    }
}

function hideMemory() {
    const memoryMessage = document.getElementById('memoryMessage');
    memoryMessage.classList.remove('show');
    memoryMessage.classList.add('hide');
}

// Advanced Photo Gallery Functions
function toggleGallery() {
    const photoModal = document.getElementById('photoModal');
    photoModalOpen = !photoModalOpen;
    
    if (photoModalOpen) {
        openPhotoGallery();
    } else {
        closePhotoGallery();
    }
}

function openPhotoGallery() {
    const photoModal = document.getElementById('photoModal');
    photoModal.style.display = 'flex';
    photoModalOpen = true;
    
    // Initialize carousel with first photo
    currentPhotoIndex = 0;
    updateCarousel();
    generateThumbnails();
    
    // Add keyboard navigation
    document.addEventListener('keydown', handlePhotoGalleryKeyboard);
    
    // Add touch/swipe support
    addSwipeSupport();
    
    // Create entrance animation
    setTimeout(() => {
        photoModal.style.opacity = '1';
    }, 10);
}

function closePhotoGallery() {
    const photoModal = document.getElementById('photoModal');
    photoModal.style.opacity = '0';
    photoModalOpen = false;
    
    // Remove event listeners
    document.removeEventListener('keydown', handlePhotoGalleryKeyboard);
    
    setTimeout(() => {
        photoModal.style.display = 'none';
    }, 300);
}

function updateCarousel() {
    const carouselImage = document.getElementById('carouselImage');
    const photoCounter = document.getElementById('photoCounter');
    const photoTitle = document.getElementById('photoTitle');
    
    if (photoData[currentPhotoIndex]) {
        carouselImage.src = photoData[currentPhotoIndex].src;
        photoCounter.textContent = `${currentPhotoIndex + 1} / ${photoData.length}`;
        photoTitle.textContent = photoData[currentPhotoIndex].title;
        
        // Add zoom effect on load
        carouselImage.style.transform = 'scale(0.8)';
        setTimeout(() => {
            carouselImage.style.transform = 'scale(1)';
        }, 100);
    }
    
    updateThumbnailSelection();
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
    updateCarousel();
    createPhotoTransitionEffect();
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length;
    updateCarousel();
    createPhotoTransitionEffect();
}

function goToPhoto(index) {
    currentPhotoIndex = index;
    updateCarousel();
    createPhotoTransitionEffect();
}

function generateThumbnails() {
    const thumbnailsContainer = document.getElementById('photoThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    photoData.forEach((photo, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.onclick = () => goToPhoto(index);
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        
        thumbnail.appendChild(img);
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    updateThumbnailSelection();
}

function updateThumbnailSelection() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentPhotoIndex);
    });
}

function createPhotoTransitionEffect() {
    const carouselImage = document.getElementById('carouselImage');
    carouselImage.style.transform = 'scale(0.9)';
    carouselImage.style.opacity = '0.7';
    
    setTimeout(() => {
        carouselImage.style.transform = 'scale(1)';
        carouselImage.style.opacity = '1';
    }, 150);
}

function handlePhotoGalleryKeyboard(e) {
    if (!photoModalOpen) return;
    
    switch(e.key) {
        case 'Escape':
            closePhotoGallery();
            break;
        case 'ArrowLeft':
            previousPhoto();
            break;
        case 'ArrowRight':
            nextPhoto();
            break;
        case ' ':
            e.preventDefault();
            nextPhoto();
            break;
    }
}

function addSwipeSupport() {
    const carouselContainer = document.querySelector('.carousel-container');
    let startX = 0;
    let startY = 0;
    let isSwipe = false;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isSwipe = true;
    });
    
    carouselContainer.addEventListener('touchmove', (e) => {
        if (!isSwipe) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = startX - currentX;
        const diffY = startY - currentY;
        
        // Check if it's a horizontal swipe
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextPhoto();
            } else {
                previousPhoto();
            }
            isSwipe = false;
        }
    });
    
    carouselContainer.addEventListener('touchend', () => {
        isSwipe = false;
    });
}

// Auto-play slideshow
function startSlideshow() {
    if (photoModalOpen) {
        setTimeout(() => {
            nextPhoto();
            startSlideshow();
        }, 4000);
    }
}

// Enhanced photo effects
function addPhotoParallaxEffect() {
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        photoFrames.forEach((frame, index) => {
            const speed = (index + 1) * 0.1;
            const x = (mouseX - 0.5) * speed * 10;
            const y = (mouseY - 0.5) * speed * 10;
            
            frame.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Initialize photo gallery on page load
function initPhotoGallery() {
    // Add parallax effect to photo frames
    addPhotoParallaxEffect();
    
    // Add click effects to photos
    const photoFrames = document.querySelectorAll('.photo-frame');
    photoFrames.forEach(frame => {
        frame.addEventListener('click', () => {
            createSparkles(frame.offsetLeft + frame.offsetWidth/2, frame.offsetTop + frame.offsetHeight/2);
        });
    });
}

// Enhanced Effects
function createHearts(x, y) {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = (x + Math.random() * 100 - 50) + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = (x + Math.random() * 80 - 40) + 'px';
        sparkle.style.top = (y + Math.random() * 80 - 40) + 'px';
        sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}


// Birthday Countdown Function (3, 2, 1, Boom!)
function startBirthdayCountdown() {
    const birthdayCountdown = document.getElementById('birthdayCountdown');
    let count = 3;
    
    const countInterval = setInterval(() => {
        if (count > 1) {
            count--;
            birthdayCountdown.textContent = count;
            birthdayCountdown.style.animation = 'birthdayCountdownPulse 1s ease-in-out';
        } else if (count === 1) {
            birthdayCountdown.textContent = 'Boom!';
            birthdayCountdown.className = 'birthday-countdown boom';
            count--;
        } else {
            birthdayCountdown.style.display = 'none';
            clearInterval(countInterval);
            startMatrixEffect();
            // Start birthday celebration after countdown
            setTimeout(() => {
                startBirthdayCelebration();
            }, 1000);
        }
    }, 1000);
}

// Matrix Effect
function startMatrixEffect() {
    const matrix = document.getElementById('matrix');
    matrix.style.opacity = '1';
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDelay = Math.random() * 1 + 's';
            matrix.appendChild(char);
            
            setTimeout(() => {
                char.remove();
            }, 2500);
        }, i * 80);
    }
    
    setTimeout(() => {
        matrix.style.opacity = '0';
        startTypingAnimation();
    }, 1000);
}

// Typing Animation
function startTypingAnimation() {
    const container = document.getElementById('typingContainer');
    const textElement = document.getElementById('typedText');
    const text = 'Happy Birthday Ankita 🎉';
    
    container.style.opacity = '1';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            // Add rainbow effect to the text
            textElement.classList.add('rainbow');
            setTimeout(() => {
                startFireworks();
                createBalloons();
                startEmojiAnimation();
                showCake();
                showBlessing();
            }, 500);
        }
    }, 150);
}

// Fireworks
function startFireworks() {
    setInterval(() => {
        createFirework();
    }, 800);
}

function createFirework() {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2'];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.6;
    
    for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'firework';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.animation = `fireworkExplode 1s ease-out forwards`;
        spark.style.transform = `rotate(${i * 30}deg) translateX(100px)`;
        
        document.body.appendChild(spark);
        
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}

// Balloons
function createBalloons() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
            balloon.style.left = Math.random() * (window.innerWidth - 80) + 'px';
            balloon.style.top = window.innerHeight + 'px';
            balloon.style.animation = `balloonFloat 4s ease-in-out infinite, balloonRise 3s ease-out forwards`;
            
            balloon.onclick = () => popBalloon(balloon);
            
            document.body.appendChild(balloon);
            balloons.push(balloon);
            
            // Animate balloon rising
            setTimeout(() => {
                balloon.style.top = Math.random() * (window.innerHeight * 0.3) + 100 + 'px';
            }, 100);
        }, i * 300);
    }
}

function popBalloon(balloon) {
    balloon.className += ' balloon-pop';
    
    // Create pop effect
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.textContent = '🎉';
        particle.style.position = 'absolute';
        particle.style.left = balloon.offsetLeft + 'px';
        particle.style.top = balloon.offsetTop + 'px';
        particle.style.fontSize = '2rem';
        particle.style.animation = `confettiFall 2s ease-out forwards`;
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
    
    setTimeout(() => balloon.remove(), 500);
}

// Emoji Animation
function startEmojiAnimation() {
    const emojis = ['🎂', '🎈', '🎉', '🎁', '✨', '🌟', '💖', '🎊'];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }, 1000);
}

// Show Cake
function showCake() {
    const cakeContainer = document.getElementById('cakeContainer');
    const cakeHint = document.getElementById('cakeHint');
    cakeContainer.style.opacity = '1';
    
    // Show hint after a delay
    setTimeout(() => {
        cakeHint.style.opacity = '1';
    }, 2000);
    
    cakeContainer.onclick = () => blowCandles();
}

// Blow Candles
function blowCandles() {
    const cakeHint = document.getElementById('cakeHint');
    cakeHint.style.opacity = '0'; // Hide hint when cake is clicked
    
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('blown-out');
            createFirework(); // Extra fireworks when candles are blown
        }, index * 200);
    });
    
    setTimeout(() => {
        showModal();
    }, 2000);
}

// Show Blessing with Typing Animation
function showBlessing() {
    setTimeout(() => {
        const blessing = document.getElementById('blessing');
        blessing.style.opacity = '1';
        blessingShown = true;
        startBlessingTyping();
    }, 1000); // Reduced from 3000ms to 1000ms
}

// Auto-cycle through blessing messages with typing effect
function startBlessingTyping() {
    let currentMessageIndex = 0;
    
    function typeNextMessage() {
        const blessing = document.getElementById('blessing');
        const message = blessingMessages[currentMessageIndex];
        
        // Clear previous message
        blessing.textContent = '';
        
        // Type the message character by character
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < message.length) {
                blessing.textContent += message.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                
                // Wait 1 second, then move to next message
                setTimeout(() => {
                    currentMessageIndex = (currentMessageIndex + 1) % blessingMessages.length;
                    typeNextMessage();
                }, 1000); // Reduced from 2000ms to 1000ms
            }
        }, 50); // Typing speed - increased from 100ms to 50ms
    }
    
    // Start the first message
    typeNextMessage();
}

// Enhanced Click Effects with Modern Animations
document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'cakeContainer' && !e.target.closest('.cake-container')) {
        createConfetti(e.clientX, e.clientY);
        createHearts(e.clientX, e.clientY);
        createSparkles(e.clientX, e.clientY);
        createModernRipple(e.clientX, e.clientY);
    }
});

// Modern Ripple Effect
function createModernRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(255,107,107,0.3), transparent)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    ripple.style.animation = 'rippleExpand 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        0% {
            width: 0px;
            height: 0px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function createConfetti(x, y) {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2', '#FFD700'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall 3s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Modal Functions
function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    showFinalScene();
}

// Final Scene
function showFinalScene() {
    // Hide all elements
    document.getElementById('typingContainer').style.opacity = '0';
    document.getElementById('cakeContainer').style.opacity = '0';
    document.getElementById('blessing').style.opacity = '0';
    
    // Stop all animations
    document.querySelectorAll('.floating-emoji, .balloon, .confetti').forEach(el => {
        el.style.animationPlayState = 'paused';
    });
    
    // Show final message
    setTimeout(() => {
        document.getElementById('finalMessage').style.opacity = '1';
    }, 1000);
}
