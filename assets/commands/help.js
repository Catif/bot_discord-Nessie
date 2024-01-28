import { EmbedBuilder } from 'discord.js'

export default function help(BOT, interaction) {
  console.log(`${interaction.user.username} use /help`)

  const embed = new EmbedBuilder()
    .setColor(0x1B1D31)
    .setTitle('Voici la liste des commandes :')
    .setThumbnail(BOT.user.displayAvatarURL())
    .addFields({ name: '/help', value: 'Affiche la liste des commandes.' })
    .setTimestamp()
  interaction.reply({
    embeds: [embed],
  })
}
