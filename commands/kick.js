module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        const target = message.channel.user.id === '334084440936415233';
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("אח שלי מי אתה חושב שאתה, אתה לא יכול להשתמש בי.");
        }else{
            message.channel.send(`אין, אי אפשר.`);
        }
    }
}