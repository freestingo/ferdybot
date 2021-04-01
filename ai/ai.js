const { random, isFemale } = require('../utils/helpers')
const { prefix, greetings, foods } = require('../utils/config')

const doCmd = (msg) => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = msg.client.commands.get(commandName) //
        || msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))

    if (command.args && !args.length) {
        return msg.channel.send(
            `Devi specificare degli argomenti per utilizzare questo comando, ${msg.author}.`
        )
    }

    if (!command) {
        return msg.channel.send(
            `Non conosco questo comando. Ti metto un attimo in pausa, ${msg.author}.`
        )
    }

    try {
        command.execute(msg, args)
    } catch (error) {
        console.error(error)
        msg.channel.send(
            `Qualcosa è andato storto. Ti metto un attimo in pausa, ${msg.author}.`
        )
    }
}

const interpret = msg => {
    const content = msg.content.toLowerCase()

    switch (content) {
        case (content.includes('ciao ferdybot') && content):
            msg.reply(`ben arrivat${isFemale(msg.author) ? 'a' : 'o'}. ${random(greetings)}`)
            break
        case (content.includes('grazie ferdybot') && content):
            msg.channel.send(`Tranquillo ${msg.author}, mi pagano.`)
            break
        case (content.includes('pasticciott') && content):
            msg.channel.send('Il pasticciotto leccese... gioia e letizia del mondo...')
            break
        case (content.includes('caffè') && content):
            msg.channel.send('Ah, il caffè... la prova che Dio esiste.')
            break
        case (content.includes('ferdybot') && content.includes('fame') && content):
            msg.channel.send(`Oggi ho proprio voglia di ${random(foods)}.`)
            break
        default:
            return
    }
}

module.exports = { doCmd, interpret }