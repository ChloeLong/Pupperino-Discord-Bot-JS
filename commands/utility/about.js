const { versionNumber } = require('../../config.json');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('Information about Pupperino!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
        .setAuthor({
            name: `Pupperino Discord Bot - Ver ${versionNumber}`,
            iconURL: "https://i.imgur.com/WtWKT0K.jpg",
          })
        .setDescription("Pupperino is a discord bot by Witchy64.\n\nI made this bot to practice JavaScript, and to make a useful bot for the servers I'm in. I offer support on Pupperino's official server.\n\nThanks for using Pupperino <3");
	  	  
		await interaction.reply({ embeds: [embed] });
	},
};