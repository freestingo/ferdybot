const fs = require('fs')
const Discord = require('discord.js')
const { prefix } = require('./utils/config')
const { doCmd, interpret } = require('./ai/ai')
require('dotenv').config()

const client = new Discord.Client()
client.commands = new Discord.Collection()
const commandFolders = fs.readdirSync('./commands')

commandFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}`) //
        .filter(file => file.endsWith('.js'))

    commandFiles.forEach(file => {
        const command = require(`./commands/${folder}/${file}`)
        client.commands.set(command.name, command)
    })
})

client.login(process.env.BOT_TOKEN)

client.once('ready', () => console.log('bot is ready!'))

client.on('message', msg => {
    if (msg.author.bot) return

    msg.content.startsWith(prefix)
        ? doCmd(msg)
        : interpret(msg)
})