const prefix = '!'

const sentences = [
    'Ah, le mie vecchie ossa...',
    'Ora adotto il metodo mafioso – prima lo faccio e poi lo dichiaro.',
    'NO ORFANI',
    'New. Project. WallStreet.',
    'Quando gli dei vogliono distruggere un uomo, prima lo rendono folle.',
	'Un programmatore Java non ha una vita sentimentale.',
	'Ragazzi, ricordate sempre la forza che spinge tutti noi a fare questo lavoro. I soldi.',
]

const girls = [
    'Oriella',
    'Laura',
]

const greetings = [
    'Oggi ci divertiamo.',
	'Ci siete fino a qui?',
	'Potresti accendere la cam per favore?',
]

/*
	Enjoy the Silence
	Blue Monday
	Lateralus
	Sgt. Peppers
*/
const songs = [

]

const foods = [
	'un salmone intero',
	'un kebab',
	'una pizza panna e salmone'
]

const helpMsg =	'\`\`\`'															+ '\n'
			+	'ciao ferdybot -> saluto'											+ '\n'
			+	'caffè         -> elogio il caffè'									+ '\n'
			+	'pasticciotto  -> elogio i pasticciotti leccesi'					+ '\n'
			+	'-rnd          -> dispenso una delle mie massime'					+ '\n'
			+	'-pausa <tag>  -> metto un attimo in pausa la persona menzionata'	+ '\n'
			+	'-marocchino   -> ti faccio vedere il mio caffè preferito'			+ '\n'
			+	'\`\`\`'

const muteTimer = 20000

module.exports = {
	prefix,
	sentences,
	girls,
	greetings,
	songs,
	foods,
	helpMsg,
	muteTimer
}