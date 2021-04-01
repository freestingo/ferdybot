const { prefix } = require('../utils/config')
const { doCmd, interpret } = require('../ai/ai')

module.exports = {
    name: 'message',
    execute: msg => {
        if (msg.author.bot) return

        msg.content.startsWith(prefix)
            ? doCmd(msg)
            : interpret(msg)
    },
}


