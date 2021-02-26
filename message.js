import { MessageEmbed } from "discord.js";
import config from "./config.json";

const excludedEmojis = ['c_red', 'c_green', 'c_white'];

export function Message(message) {
	try {
		if (message.author.bot || !message.content.startsWith("!")) return;
		if (message.channel.type != "text") return;

		var emojiCache = message.guild.emojis.cache;

		switch (message.content) {
			case "!rg":
				var embed = CreateEmbed("Choose your color!", "Click an emoji to change your color on server.",
					'https://cdn.discordapp.com/attachments/567589102803746853/806086398046109696/paint-brush.png')
				message.channel.send(embed).then(setEmojis(emojiCache, "c_"));
				break;
			case "!pick_game":
				var embed = CreateEmbed("Choose your game!", "Click an emoji to enable access to game channels.")
				message.channel.send(embed).then(setEmojis(emojiCache, "g_"));
				break;
		}
	} catch (e) {
		console.error(e);
	}
};

function setEmojis(emojiCache, prefix) {
	return (msg) => {
		emojiCache.forEach(e => {
			if (e.name.startsWith(prefix) && !excludedEmojis.includes(e.name))
				msg.react(e);
		});
	};
}

function CreateEmbed(title, text, thumbnail) {
	return new MessageEmbed()
		.setAuthor(title)
		.setDescription(text)
		.setColor(0x5282ef)
		.setThumbnail(thumbnail);
}
