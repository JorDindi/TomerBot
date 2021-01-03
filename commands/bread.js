module.exports ={
    name: 'reactionrolegames',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client){
        const teamOneEmoji = '🍞';
        const teamTwoEmoji = '🥙';
        const teamThreeEmoji = '🥖';
        const teamFourEmoji = '🥯';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#FF11EE')
            .setTitle('מה סוג הלחם האהוב עליכם?')
            .setDescription('בחר את הלחם המתאים\n\n' 
            + `${teamOneEmoji} לבן\n`
            + `${teamTwoEmoji} פיתה\n`
            + `${teamThreeEmoji} בגט\n`
            + `${teamFourEmoji} בייגלה`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(teamOneEmoji);
        messageEmbed.react(teamTwoEmoji);
        messageEmbed.react(teamThreeEmoji);
        messageEmbed.react(teamFourEmoji);
    }
}