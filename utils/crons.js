const { random } = require('../utils/helpers')
const { CronJob } = require('cron')

const activities = [
    {
        activity: 'Una Poltrona per Due',
        type: {
            type: 'WATCHING',
        },
    },
    {
        activity: 'Tool - Lateralus',
        type: {
            type: 'LISTENING',
        },
    },
    {
        activity: 'New Order - Blue Monday',
        type: {
            type: 'LISTENING',
        },
    },
    {
        activity: 'Hearthstone',
        type: {
            type: 'PLAYING',
        },
    },
    {
        activity: 'Street Fighter V',
        type: {
            type: 'PLAYING',
        },
    },
]

const lunchTime = {
    prefix: [
        'Hmmm... oggi ho voglia di',
        'Oggi mi mangio',
        'Stavolta per pranzo prendo'
    ],
    subfix: [
        'un salmone intero',
        'un kebab',
        'una pizza panna e salmone',
    ],
}

const serverId = process.env.FERDYBOT_SERVER_ID
const channelId = process.env.FERDYBOT_SERVER_GC_ID

const dailyRoutine = client =>
    new CronJob({
        cronTime: '* */15 * * * *',
        onTick: () => {
            const { activity, type } = random(activities)
            client.user.setActivity(activity, type)
        },
        runOnInit: true,
    })

const alertServer = (cronTime, message, client) =>
    new CronJob({
        cronTime,
        onTick: () => {
            client.guilds.cache.get(serverId)
                .channels.cache.get(channelId)
                .send(message)
        }
    })

const lunchPlanning = client => alertServer(
    '00 50 12 * * *',
    `${random(lunchTime.prefix)} ${random(lunchTime.subfix)}.`,
    client
)

const firstBreak = client => alertServer(
    '00 00 11 * * 1-5',
    'Ragazzi, pausa. Tra un quarto d\'ora tutti su Webex.',
    client
)

const secondBreak = client => alertServer(
    '00 00 16 * * 1-4',
    'Pausa per tutti. Alle 16:15 tutti qui e facciamo il punto della situazione.',
    client
)

const earlyBreak = client => alertServer(
    '00 59 15 * * 5',
    'Pausa anticipata di un minuto, ragazzi. Lasciate quello che state facendo e tornate qui tra venti minuti.',
    client
)

module.exports = {
    dailyRoutine,
    lunchPlanning,
    firstBreak,
    secondBreak,
    earlyBreak,
}

