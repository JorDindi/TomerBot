const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message,args, Discord){

        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('אל תצא/י בגט, תכנס לשיחה קודם ואחרי זה תשים מוזיקה');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('אין לך הרשאות!');
        if(!permissions.has('SPEAK')) return message.channel.send('אין לך הרשאות!');
        if(!args.length) return message.channel.send('אל תצא/י פיתה, שים/י לינק או שם של שיר');


        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));
        
        if(video){

            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            const playEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
        	.setTitle(`${video.title}`)
        	.setURL(video.url)
        	.setDescription('מריץ שיר מה אתה קופץ')
        	.setThumbnail(`${video.thumbnail}`)
        	.addFields(
        		{ name: 'אורך השיר', value: `${video.duration}`, inline: true },
	        )
	        .setTimestamp()
	        .setFooter('Tomer Bot by Dor Yahav', 'https://imgur.com/Wvhbq6N');

            await message.reply(playEmbed);
        }
    }
}