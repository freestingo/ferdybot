const { dailyRoutine, askForConscience, lunchPlanning, webexLesson, firstBreak, secondBreak, earlyBreak } = require('../utils/crons')

module.exports = {
    name: 'ready',
    once: true,
    execute: client => {
        console.log(`Benvenuti. Sono ${client.user.username}, accendete pure le cam per piacere.`)
        
        dailyRoutine(client).start()
        askForConscience(client).start()
        lunchPlanning(client).start()
        webexLesson(client).start()
        firstBreak(client).start()
        secondBreak(client).start()
        earlyBreak(client).start()
    },
}