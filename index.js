const Discord = require('discord.js');
const bot = new Discord.Client();
var charlimit = 100

const token = 'NjA1NTYwMjUxODc3NDI1MTY5.XT-R-Q.DDgOx4O_TXNNWpnd3OnwMpRkWCE';

bot.on('ready', () =>{
    console.log('The bot has been activated and is fully online!');
})


bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('hello friend(?) (@everyone)');
    }  
})

bot.login(token)


    