const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log(bot.user.tag + " is ready!");
});
  
bot.on("message", (message) => {
  let msg = message.content;

  if (msg.substring(0, 2) == "y!") {
    let str = msg.substring(2, msg.length);
    let args = str.split(' ');
    let cmd = args[0];
    args.splice(0, 2);

  if (message.author.bot) return;
     if (cmd == "pomoc") {  
      let embed = new Discord.MessageEmbed()
      embed.setColor("#55FFFF")
      embed.setTitle(`**Pomoc**`)
      embed.addField(`tu nic nie ma`, `tu nic nie ma`)
      message.channel.send(embed).then(embedMessage => {
      });
    }
     else {
      return;
    }  
  });
bot.login(`tu wklej swoj token`); 
