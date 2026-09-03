const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'ضع_أيبس_سيرفر_أتيرنوس_هنا', // مثال: mneer2009.aternos.me
  port: 25445,                     // رقم البورت (Port) الخاص بالسيرفر
  版本: '1.21.50',                  // إصدار اللعبة الخاص بك
  username: 'AFK_Bot'              // اسم البوت داخل السيرفر
});

bot.on('spawn', () => {
  console.log("تم دخول البوت بنجاح وإبقاء السيرفر نشطاً!");

  // حركة بسيطة كل دقيقة لمنع الطرد بسبب الخمول (Anti-AFK)
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 60000);
});

bot.on('end', () => {
  console.log("انقطع اتصال البوت، سيتم إعادة المحاولة...");
  setTimeout(() => process.exit(1), 5000); // إعادة تشغيل تلقائية في حال طرده
});
