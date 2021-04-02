const { random } = require('../../utils/helpers')
const quizzes = require('./quizzes.json')

const encouragements = [
    'Questo è il modo in cui dovete rispondere ai colloqui.',
    'Una garanzia.',
    'Molto bene.'
]

module.exports = {
    name: 'grinding',
    description: 'volete sangue? basta chiedere.',
    aliases: ['quiz'],
    execute: msg => {
        const quiz = random(quizzes)
        const filter = response =>
            quiz.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase())

        msg.channel.send(quiz.question)
            .then(() => msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] }))
            .then(collected =>
                msg.channel.send(`Ottimo, ${collected.first().author}. ${random(encouragements)}`)
            )
            .catch(() =>
                msg.channel.send('Nessuno? Davvero? Ferdinando triste.')
            )
    },
}


