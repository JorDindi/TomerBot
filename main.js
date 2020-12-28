const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '^';

const fs = require('fs');
const { type } = require('os');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () => {
    console.log('Tomer is online!');
    client.user.setActivity('^joke', {type: "LISTENING"});
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'joke'){
        client.commands.get('joke').execute(message,args,Discord);
    }
});


client.login(process.env.token);