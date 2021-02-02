// https://discordjs.guide/additional-info/changes-in-v12.html
import Discord from "discord.js";
import config from "./config.json";
import { Message } from "./message.js";
import { AsyncMessageReactionAdd } from "./messageReactionAdd.js";
import { AsyncMessageReactionRemove } from "./messageReactionRemove.js";

const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login(config.credentials.discordApiKey);

client.on("ready", () => { console.log("Discord client connected!"); });
client.on("message", (_message) => Message(_message));
client.on("messageReactionAdd", (reaction, user) => AsyncMessageReactionAdd(reaction, user));
client.on("messageReactionRemove", (reaction, user) => AsyncMessageReactionRemove(reaction, user));