const { Client } = require('discord-selfbot-v11');
const bot = new Client();
const settings = require('./config.json');
const myID = settings.ID;
const token = settings.token;
const command = settings.command;
const amountDel = settings.bulk;
      colors = require("colors")

console.log(`LOADING`.brightCyan + ` | Wait for the Selfbot to load completely`)

bot.on('ready', () => {
    process.title = `Spectral Clear [${bot.user.username}] - https://youtube.com/c/vilão7`;  
    console.clear()
    console.log(`LOADED`.brightCyan + ` | Selfbot successfully loaded`)
    console.log(`

  .d8888b.                             888                     888 
 d88P  Y88b                            888                     888 
 Y88b.                                 888                     888 
  "Y888b.   88888b.   .d88b.   .d8888b 888888 888d888  8888b.  888 
     "Y88b. 888 "88b d8P  Y8b d88P"    888    888P"       "88b 888 
       "888 888  888 88888888 888      888    888     .d888888 888 
 Y88b  d88P 888 d88P Y8b.     Y88b.    Y88b.  888     888  888 888 
  "Y8888P"  88888P"   "Y8888   "Y8888P  "Y888 888     "Y888888 888 
            888                                                    
            888                                                    
            888                                                   

    `.brightCyan)
    console.log(`?`.brightCyan + ` Connected:`.white + ` ${bot.user.tag} `.brightCyan)
    console.log(`?`.brightCyan + ` Limit:`.white + ` ${amountDel}`.brightCyan)
    console.log(`?`.brightCyan + ` Command:`.white + ` ${command}`.brightCyan + ` - Type`.white + ` ${command}`.brightCyan + ` in the private you want to clear!`.white)
    console.log(``)
});

bot.on('message', message => {
    if (message.author.id !== myID) {
        return;
    } 
        else if (message.content.startsWith(command) && message.author.id === myID) {
    }
    if (message.content.startsWith(command).then(console.log())) {
        message.channel.fetchMessages({ limit: amountDel }).then(msgs => msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    }
});

bot.login(token);