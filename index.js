// https://discordjs.guide/additional-info/changes-in-v12.html
import { Client, GatewayIntentBits, Partials, Events } from "discord.js";
import config from "./config.json" with {type: "json"};
import { Message } from "./message.js";
import { AsyncMessageReactionAdd, AsyncMessageReactionRemove } from "./messageReactions.js";

export const client = new Client(
	{ 
		allowedMentions: { 
			parse: ['users', 'roles', 'everyone'], 
			repliedUser: true 
		},
		partials: [
			Partials.Message, 
			Partials.Channel, 
			Partials.Reaction
		], 
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.GuildMembers,
			GatewayIntentBits.GuildMessageReactions
		] 
	});

client.login(config.credentials.discordApiKey);

client.on(Events.ClientReady, () => { console.log("Discord client connected!"); });
client.on(Events.MessageCreate, (_message) => Message(_message));
client.on(Events.MessageReactionAdd, (reaction, user) => AsyncMessageReactionAdd(reaction, user));
client.on(Events.MessageReactionRemove, (reaction, user) => AsyncMessageReactionRemove(reaction, user));