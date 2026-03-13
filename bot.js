const { Telegraf, Markup } = require('telegraf');
const http = require('http');

// 1. نظام الحفاظ على استمرارية البوت (لـ Render المجاني)
http.createServer((req, res) => {
  res.write('TQ Store is Running!');
  res.end();
}).listen(process.env.PORT || 3000);

// 2. إعدادات البوت
const bot = new Telegraf('8701836458:AAEw6XiVJX9LeYzUwYMKe8kL5FKGPSbOl1c');

bot.start((ctx) => {
    const welcomeText = "🦅 **مـرحـبـاً بـك فـي مـتـجـر TQ سـتـور**\n\nالـوجـهـة الأولـى والأسـرع لـخـدمـات الـشـحـن الـرقـمـي";
    ctx.replyWithMarkdown(welcomeText, 
        Markup.inlineKeyboard([
            [Markup.button.callback("بـبـجـي مـوبـايـل 🟢", "pb"), Markup.button.callback("يـلا لـودو 🟢", "ld")],
            [Markup.button.callback("📜 سـجـل الـطـلـبـات", "history"), Markup.button.callback("🆘 الـدعـم", "support")]
        ])
    );
});

bot.launch();
console.log("🚀 Bot is Online and Server is Listening!");
