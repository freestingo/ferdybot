const { random } = require('../../utils/helpers')
const { compliments } = require('../../utils/config')

const isJavaFile = file => file.name.slice(-5) === '.java'
const isJSFile = file => file.name.slice(-3) === '.js'

module.exports = {
	name: 'rfc',
	description: 'ti offro il mio feedback su del codice Java o JavaScript.',
	execute: msg => {
		const code = msg.attachments.first()
		code && (isJavaFile(code) || isJSFile(code))
			? msg.channel.send(`${msg.author} ${random(compliments)}`)
			: msg.channel.send(`${msg.author} perdonami ma non trovo nessun codice da controllare`)
	}
}