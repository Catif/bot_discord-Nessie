// Importation libs
import dotenv from 'dotenv'
import { ActivityType, Client, GatewayIntentBits } from 'discord.js'

// import schedule from 'node-schedule'

// Commands
import createSlashCommands from './assets/functions/createSlashCommands.js' // Create all slash commands
import commandHelp from './assets/commands/help.js' // /help

// Déclaration de variable
dotenv.config()

const BOT = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

BOT.on('ready', async () => {
  console.log('BOT opérationnel')
  BOT.user.setPresence({
    activities: [
      {
        name: '/help',
        type: ActivityType.Listening,
      },
    ],
    status: 'online',
  })

  createSlashCommands(BOT)
})

BOT.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand())
    return

  switch (interaction.commandName) {
    case 'help':
      commandHelp(BOT, interaction)
      break

    default:
      break
  }
})

BOT.login(process.env.BOT_TOKEN)
