const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows all of Pupperino\'s commands!'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
		.setTitle("Pupperino Commands")
		.setDescription("/ping - Checks if Pupperino is awake.\n/pet - Pet Pupperino!");
	  	  
		await interaction.reply({ embeds: [embed] });
	},
};
