const Discord = require('discord.js');
const bot = new Discord.Client();


const Eris = require("eris");
const BT  = new Eris(process.env.BOT_TOKEN);
BT.connect(process.env.BOT_TOKEN)
BT.on("ready", ready => {
setInterval(function(){
BT.editChannel("530157932214747139", {name : "W"})
BT.editChannel("530157932214747139", {name : "We"})
BT.editChannel("530157932214747139", {name : "Wel"})
BT.editChannel("530157932214747139", {name : "Welc"})
BT.editChannel("530157932214747139", {name : "Welcom"})
BT.editChannel("530157932214747139", {name : "Welcome"})
BT.editChannel("530157932214747139", {name : "Welcome T"})
BT.editChannel("530157932214747139", {name : "Welcome To"})
BT.editChannel("530157932214747139", {name : "Welcome To 「"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚X"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ♚"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ♚"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚X"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚"})
BT.editChannel("530157932214747139", {name : "Welcome To 「"})
BT.editChannel("530157932214747139", {name : "Welcome To "})
BT.editChannel("530157932214747139", {name : "Welcome To"})
BT.editChannel("530157932214747139", {name : "Welcome T"})
BT.editChannel("530157932214747139", {name : "Welcome T"})
BT.editChannel("530157932214747139", {name : "Welcome"})
BT.editChannel("530157932214747139", {name : "Welcom"})
BT.editChannel("530157932214747139", {name : "Welco"})
BT.editChannel("530157932214747139", {name : "Welc"})
BT.editChannel("530157932214747139", {name : "Wel"})
BT.editChannel("530157932214747139", {name : "We"})
BT.editChannel("530157932214747139", {name : "W"})
BT.editChannel("530157932214747139", {name : "W"})
BT.editChannel("530157932214747139", {name : "We"})
BT.editChannel("530157932214747139", {name : "Wel"})
BT.editChannel("530157932214747139", {name : "Welc"})
BT.editChannel("530157932214747139", {name : "Welcom"})
BT.editChannel("530157932214747139", {name : "Welcome"})
BT.editChannel("530157932214747139", {name : "Welcome T"})
BT.editChannel("530157932214747139", {name : "Welcome To"})
BT.editChannel("530157932214747139", {name : "Welcome To 「"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚X"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ"})
BT.editChannel("530157932214747139", {name : "Welcome To 「♚XZ♚"})
}, 10000);
});


bot.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 5**`)


    }
});


bot.login(process.env.BOT_TOKEN);
