const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("596447510323789824")
setInterval(function() {
channel.send(`aaa2223fscx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);