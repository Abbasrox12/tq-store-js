const { Telegraf, Markup } = require('telegraf');

// التوكن الخاص بك
const bot = new Telegraf('8701836458:AAEw6XiVJX9LeYzUwYMKe8kL5FKGPSbOl1c');

bot.start((ctx) => {
    // النص الفخم الذي طلبته مع المـدات الجمالية
    const welcomeText = "🦅 **مـرحـبـاً بـك فـي مـتـجـر TQ سـتـور**\n\nالـوجـهـة الأولـى والأسـرع لـخـدمـات الـشـحـن الـرقـمـي\nاخـتـر الـقـسـم الـمـطـلـوب مـن الأسـفـل:";
    
    ctx.replyWithMarkdown(welcomeText, 
        Markup.inlineKeyboard([
            [Markup.button.callback("بـبـجـي مـوبـايـل 🟢", "pb"), Markup.button.callback("يـلا لـودو 🟢", "ld")],
            [Markup.button.callback("فـري فـايـر 🟢", "ff"), Markup.button.callback("مـوبـايـل لـيـجـنـد 🟢", "ml")],
            [Markup.button.callback("📜 سـجـل الـطـلـبـات", "history"), Markup.button.callback("🎓 أكـاديـمـيـة الـشـحـن", "academy")],
            [Markup.button.callback("🆘 الـدعـم الـفـنـي", "support")]
        ])
    );
});

bot.launch().then(() => console.log("🚀 TQ Store is Online on Render!"));
