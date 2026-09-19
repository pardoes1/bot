const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'gp-node-01.future-node.com',
  port: 35003,
  username: 'MagischeBot',
  version: false
})

bot.once('spawn', () => {
  console.log('Bot joined the server!')

  // Teleport the bot directly to the location
  bot.chat('/tp @s -273 -30 -146')
})

bot.on('error', err => {
  console.log('Error:', err.message)
})

bot.on('end', () => {
  console.log('Bot disconnected')
})
