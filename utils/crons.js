const { CronJob } = require('cron')

const ProgrammatoriAnonimiID = '797101789300129802'
const generalChatID = '797101789300129805'

const scheduleMessage = (client, hours, mins, secs, message) => {
	const scheduledMessage = new CronJob(
		`${secs} ${mins} ${hours} * * *`,
		() => {
			client.guilds.cache.get(ProgrammatoriAnonimiID)	// serverid
				.channels.cache.get(generalChatID)			// messageid
				.send(message)
		}
	)
	scheduledMessage.start()
}

module.exports = {
	scheduleMessage
}

