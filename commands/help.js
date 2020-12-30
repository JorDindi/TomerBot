module.exports = {
    name: 'help',
    description: 'stop the bot and leave the channel',
    execute(message, args, Discord) {
        
        const playEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('מי אמר עזרה ולא קיבל?')
        .setThumbnail('https://i.imgur.com/hfaLCFb.png')
        .addFields(
            { name: 'פקודות :', value: '^play (Song name / URL) - מריץ שיר\n ^leave - מפסיק את השיר ועוזב את שיחה\n^joke - מריץ בדיחה', inline: false },
        )
        .setTimestamp()
        .setFooter('Tomer Bot by Dor Yahav', 'https://i.imgur.com/Wvhbq6N.jpg');

        message.reply(playEmbed);
    }
}