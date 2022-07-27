// https://discordjs.guide/additional-info/changes-in-v12.html
import Discord from "discord.js";
import config from "./config.json" assert {type: "json"};
import { Message } from "./message.js";
import { AsyncMessageReactionAdd, AsyncMessageReactionRemove } from "./messageReactions.js";

export const client = new Discord.Client(
	{ 
		partials: ['MESSAGE', 'CHANNEL', 'REACTION'], 
		intents: ["GUILDS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS", "DIRECT_MESSAGES"] 
	});
client.login(config.credentials.discordApiKey);

client.on("ready", () => { console.log("Discord client connected!"); });
client.on("message", (_message) => Message(_message));
client.on("messageReactionAdd", (reaction, user) => AsyncMessageReactionAdd(reaction, user));
client.on("messageReactionRemove", (reaction, user) => AsyncMessageReactionRemove(reaction, user));