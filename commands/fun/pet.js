const { SlashCommandBuilder } = require('discord.js');
const petReplies = ['Ruff!', 'Arf!!', 'Woof!', 'Bark!', 'Beep Boop Arf!'];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pet')
		.setDescription('Pet Pupperino!'),
	async execute(interaction) {
        const randomReply = petReplies[(Math.floor(Math.random() * petReplies.length))];
		await interaction.reply(randomReply);
	},
};