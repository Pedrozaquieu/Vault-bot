const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist!"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/4SwGSDCbq5wf92E12vlFmu?si=3c4faded941848df")
    }
}