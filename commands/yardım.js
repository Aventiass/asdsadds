const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("<:Tac:995463352832774164> Tommy - Yardım Menüsü! <:Tac:995463352832774164>")
    .setDescription("**<:botsemote:1039339851742462072> ・Moderasyon Sistemi ↷**\n > Moderasyon Sistemi hakkında bilgi alabilirsiniz.⠀⠀⠀⠀⠀\n\n**<:botbadge:1039340028607864964> ・Kayıt Sistemi ↷**\n> Kayıt Sistemi hakkında bilgi alabilirsiniz.\n\n**<:disClyde:1039339847434895360> ・Kullanıcı Sistemi ↷**\n> Kullanıcı Sistemi hakkında bilgi alabilirsiniz.")
    .setColor("Random")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("kullanıcı"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};
