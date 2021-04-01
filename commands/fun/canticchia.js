const { random } = require('../../utils/helpers')
const ytdl = require('ytdl-core')

const privateVoiceChannelID = process.env.FERDYBOT_SERVER_VC_ID
const programmatoriAnonimiVoiceChannelID = process.env.PROG_ANONIMI_VC_ID

const compilation = {
    'Tool - Lateralus': 'https://www.youtube.com/watch?v=Y7JG63IuaWs&ab_channel=TOOLVEVO',
    'Depeche Mode - Enjoy the Silence': 'https://www.youtube.com/watch?v=aGSKrC7dGcY&ab_channel=DepecheMode',
    'Orgy - Blue Monday': 'https://www.youtube.com/watch?v=Vb_wHMnfINs&ab_channel=lifesabeach9137',
    'The Beatles - Sgt. Peppers\' Lonely Hearts Club Band': 'https://www.youtube.com/watch?v=VtXl8xAPAtA&ab_channel=TheBeatles-Topic',
    'Blind Guardian - Nightfall in Middle Earth': 'https://www.youtube.com/watch?v=T0vBVAglUho&ab_channel=SoundOfStorm'
}

const comments = {
    'Tool - Lateralus': '🎵 black... then... white are... all I see... in my infancy... 🎵',
    'Depeche Mode - Enjoy the Silence': 'Sapete di che cosa parla in realtà questa canzone? :)',
    'Orgy - Blue Monday': 'Non mi assumo alcuna responsabilità per il titolo della band. Ma questo remix merita tantissimo.',
    'The Beatles - Sgt. Peppers\' Lonely Hearts Club Band': '🎵 we hope you will enjoy the show... 🎵 lonely hearts... *sigh*',
    'Blind Guardian - Nightfall in Middle Earth': 'un capolavoro.'
}

module.exports = {
    name: 'canticchia',
    description: 'ti canto una canzoncina. Per caso conosci i Tool?',
    aliases: ['canta', 'suona'],
    execute: msg => {
        const voiceChannel = msg.guild.channels.cache.get(programmatoriAnonimiVoiceChannelID)
        voiceChannel.join()
            .then(connection => {
                const songTitle = random(Object.keys(compilation))
                const stream = ytdl(compilation[songTitle], { filter: 'audioonly' })
                const dispatcher = connection.play(stream)

                msg.channel.send(`In riproduzione: ${songTitle}`)
                setTimeout(
                    () => msg.channel.send(comments[songTitle]),
                    10000
                )

                dispatcher.on('finish', () => voiceChannel.leave())
            })
    }
}