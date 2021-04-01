const { prefix } = require('../../utils/config')

module.exports = {
	name: 'help',
	description: 'Lista di tutti i comandi per interagire con FerdyBot.',
	aliases: ['commands'],
	usage: '[command name]',
	execute: (msg, args) => {
		const data = []
		const { commands } = msg.client

		if (!args.length) {
			data.push(`Questi sono i miei comandi. Oh ${msg.author}, you sweet summer child...\n`)
			data.push(commands.map(command => command.name).join(', '))
			data.push(`\nUsa \`${prefix}help [nome-comando]\` per esplorare ciascun comando!`)

			return msg.channel.send(data, { split: true })
		}

		const name = args[0].toLowerCase()
		const command = commands.get(name) //
			|| commands.find(c => c.aliases && c.aliases.includes(name))

		if (!command) {
			return msg.reply('non conosco alcun comando con quel nome.')
		}

		data.push(`Nome comando: ${command.name}`)
		if (command.aliases) data.push(`Alias: ${command.aliases.join(', ')}`)
		if (command.description) data.push(`Descrizione: ${command.description}`)
		if (command.usage) data.push(`Uso: ${prefix}${command.name} ${command.usage}`)

		msg.channel.send(data, { split: true })
	},
}