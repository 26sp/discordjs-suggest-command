// Start

// Sample 1:
// Put this in a message listener (something like client.on("message") or bot.on("message")

const prefix = "!" // Remove this line if you have a prefix...

 if (message.content.startsWith(`${prefix}suggest`)) {//...and remove "${prefix}" if you need to
         message.reply(`Thank you ${message.author.username}!`) // Thanks the user
    //If you get "bot is not defined" error change bot to client (or whatever you use) ↓
        const log = bot.channels.cache.get("985074332634067075"); // Change the numbers to your log channel, or comment this line and line 9 to have it only log your console
        log.send(`${message.author.tag} (${message.author.id}) suggested:\n\n\`${message.content}\`\nin ${message.guild.name} (${message.guild.id})`); //Sends the suggestion message
        console.log(`${message.author.tag} (${message.author.id} suggested: ${message.content}`) // Logs to your console
  } 

// End of sample 1

// The next one is if you use command files
// Sample 2:
// Just copy and paste the whole thing in a new file (preferrably suggest.js)
const Discord = require ("discord.js")
module.exports = {
config: {
  name: "suggest",
  category: "Feedback",
  aliases: ['suggest'],
  description: 'Suggest something',
},
  run: async (bot, message, args) => {
     message.reply(`Thank you ${message.author.username}!\n\nNote: Abusing this command will get you bot banned`)
        const log = bot.channels.cache.get("985074332634067075");
        log.send(`${message.author.tag} (${message.author.id}) suggested:\n\n\`${message.content}\`\nin ${message.guild.name} (${message.guild.id})`);
        console.log(`${message.author.tag} (${message.author.id} suggested: ${message.content}`)  
}
  
  // End of Sample 2
