const { random } = require('../utils/helpers')

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

module.exports = {
    name: 'ready',
    once: true,
    execute: client => {
        console.log(`Benvenuti. Sono ${client.user.username}, accendete pure le cam per piacere.`)
        
        setInterval(
            () => {
                const { activity, type } = random(activities)
                client.user.setActivity(activity, type)
            },
            1800000
        )
        
        client.user.setActivity('Una Poltrona per Due', { type: 'WATCHING' })
    },
}