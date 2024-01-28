import { SlashCommandBuilder } from '@discordjs/builders'

export default function createSlashCommands(BOT) {
  // ==================
  //      /help
  // ==================
  const helpCommand = new SlashCommandBuilder()
    .setName('help')
    .setDescription('Affiche la liste des commandes')
  BOT.application.commands.create(helpCommand)
}
