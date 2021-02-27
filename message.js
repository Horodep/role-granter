import { MessageEmbed } from "discord.js";
import config from "./config.json";

export function Message(message) {
	try {
		if (message.author.bot || !message.content.startsWith("!")) return;
		if (message.channel.type != "text") return;

		var emojiCache = message.guild.emojis.cache;
		var command = config.commands[message.content];
		
		var embed = CreateEmbed(command.title, command.text, command.img)
		message.channel.send(embed).then(setEmojis(emojiCache, command.prefix));
	} catch (e) {
		console.error(e);
	}
};

function setEmojis(emojiCache, prefix) {
	return (msg) => {
		emojiCache.forEach(e => {
			if (e.name.startsWith(prefix))
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
