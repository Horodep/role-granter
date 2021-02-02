import { MessageEmbed } from "discord.js";
import config from "./config.json";

const defaultEmojiNames = ['red', 'green', 'white'];

export function Message(message) {
	try {
		if (message.author.bot || !message.content.startsWith("!")) return;
		if (message.channel.type != "text") return;

		if (message.content == "!rg") {
			var emojiServer = message.client.guilds.cache.get(config.guild);
			var emojiCache = emojiServer.emojis.cache;

			var embed = new MessageEmbed()
				.setAuthor("Choose your color!")
				.setDescription("Click an emoji to change your color on server.")
				.setColor(0x5282ef)
				.setThumbnail('https://cdn.discordapp.com/attachments/567589102803746853/806086398046109696/paint-brush.png')
			message.channel.send(embed).then((msg) => {
				emojiCache.forEach(e => {
					if (!defaultEmojiNames.includes(e.name))
						msg.react(e);
				});
			});
		}
	} catch (e) {
		console.error(e);
	}
};