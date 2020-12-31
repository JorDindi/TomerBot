module.exports ={
    name: 'reactionrolegames',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client){
        const channel = '793995006586519553';
 
        const teamOne = message.guild.roles.cache.find(role => role.name === "Valorant");
        const teamTwo = message.guild.roles.cache.find(role => role.name === "Paladins");
        const teamThree = message.guild.roles.cache.find(role => role.name === "The Forest");
        const teamFour = message.guild.roles.cache.find(role => role.name === "Minecraft");
 
        const teamOneEmoji = '🔫';
        const teamTwoEmoji = '🔨';
        const teamThreeEmoji = '🌲';
        const teamFourEmoji = '🧱';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#FF11EE')
            .setTitle('באיזה משחקים אתה משחק?')
            .setDescription('בחר את הסמיילי המתאים\n\n' 
            + `${teamOneEmoji} Valorant\n`
            + `${teamTwoEmoji} Paladins\n`
            + `${teamThreeEmoji} The Forest\n`
            + `${teamFourEmoji} Minecraft`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(teamOneEmoji);
        messageEmbed.react(teamTwoEmoji);
        messageEmbed.react(teamThreeEmoji);
        messageEmbed.react(teamFourEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
 
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === teamOneEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamOne);
                }
                if(reaction.emoji.name === teamTwoEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamTwo);
                }
                if(reaction.emoji.name === teamThreeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamThree);
                }
                if(reaction.emoji.name === teamFourEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamFour);
                }
            }else{
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
 
            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name === teamOneEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamOne);
                }
                if(reaction.emoji.name === teamTwoEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamTwo);
                }
                if(reaction.emoji.name === teamThreeEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamThree);
                }
                if(reaction.emoji.name === teamFourEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamFour);
                }
            }else{
                return;
            }
 
        });
    }
}