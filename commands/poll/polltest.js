module.exports = {
    name: 'polltest',
    description: 'test sondaggio.',
    execute: msg => {
        msg.react('👍').then(() => msg.react('👎'))

        msg.channel.send('questa funzionalità è ancora in rodaggio!')

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
        }

        msg.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
            .then(collected => {
                collected.forEach(reaction => msg.reply(`hai messo pollice in ${
                    reaction.emoji.name === '👍'
                        ? 'su'
                        : 'giù'
                }`))
            })
            .catch(() => {
                msg.reply('Qualcosa è andato storto.')
            })
    }
}








