module.exports = {
    name: 'ready',
    once: true,
    execute: client => console.log(`Benvenuti. Sono ${client.user.username}, accendete pure le cam per piacere.`),
}