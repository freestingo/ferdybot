module.exports = {
    name: 'pausa',
    description: 'metto un attimo in pausa la persona menzionata.',
    usage: '<tag>',
    execute: msg => {
        const user = msg.mentions.users.first()
        const member = msg.guild.members.cache.get(user.id)

        if (member) {
            msg.channel.send(`Ti metto un attimo in pausa, ${user.username}.`)
            /*
            const role = msg.guild.roles.cache.find(role => role.name === 'In pausa')
            member.roles.add(role)
            setTimeout(
                () => member.roles.remove(role),
                3000
            )
            */
        } else {
            msg.channel.send(`${msg.author}, ricorda di menzionare almeno una persona!`)
        }

    }
}