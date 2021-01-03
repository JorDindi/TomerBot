const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
    client.user.setActivity('^help', {type: "LISTENING"});
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'joke'){
        client.commands.get('joke').execute(message,args,Discord);
    }else if(command === 'play'){
        client.commands.get('play').execute(message,args, Discord);
    }else if(command === 'leave'){
        client.commands.get('leave').execute(message,args, Discord);
    }else if(command === 'l'){
        client.commands.get('leave').execute(message,args, Discord);
    }else if(command === 'p'){
        client.commands.get('play').execute(message,args, Discord);
    }else if(command === 'help'){
        client.commands.get('help').execute(message,args,Discord);
    }else if(command === 'rrgames'){
        client.commands.get('reactionrolegames').execute(message, args, Discord, client);
    }else if(command ==='pause'){
        client.commands.get('pause').execute(client,message,args);
    }else if(command === 'bread'){
        client.commands.get('bread').execute(message, args, Discord, client);
    }
});


client.login('NzkzMTQwNDQ4MDg3NTA2OTk0.X-n7mg.LjsjtTa-rPTs2fjs9FR8n-J_TWs');