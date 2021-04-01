const fs = require('fs')
const Discord = require('discord.js')
const { prefix } = require('./utils/config')
const { doCmd, interpret } = require('./ai/ai')
require('dotenv').config()

const client = new Discord.Client()

const eventFiles = fs.readdirSync('./events') //
    .filter(file => file.endsWith('.js'))

eventFiles.forEach(file => {
    const event = require(`./events/${file}`)
    event.once
        ? client.once(event.name, (...args) => event.execute(...args, client))
        : client.on(event.name, (...args) => event.execute(...args, client))
})

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

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
})