const azioniURL = 'https://it.finance.yahoo.com/quote'

const codes = {
	nintendo: 'NTDOY',
	apple: 'AAPL',
	ubisoft: 'UBI.PA',
	bitcoin: 'BTC-EUR',
}

module.exports = {
	name: 'borsa',
	description: 'ti aggiorno sui vari trend dei miei investimenti.',
	aliases: ['stock', 'bitcoin', 'crypto'],
	usage: '<nome-azienda/criptovaluta>',
	args: true,
	execute: (msg, args) => {
        msg.channel.send(`Oggi i miei investimenti vanno così:\n${azioniURL}/${codes[args[0]]}`)
	},
}