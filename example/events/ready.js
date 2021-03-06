const Firework = require('../../lib');

class ReadyEvent extends Firework.Event {
	constructor(bot) {
		super(bot, {name: 'ready'})
	}

	run() {
		this.bot.logger.log('I am online!')
	}
}

module.exports = ReadyEvent;