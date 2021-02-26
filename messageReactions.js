import { HandleRole, AddRole, RemoveRole } from "./handleRole.js";

export async function AsyncMessageReactionAdd(reaction, user) {
    await AsyncMessageReaction(reaction, user, AddRole);
}

export async function AsyncMessageReactionRemove(reaction, user) {
    await AsyncMessageReaction(reaction, user, RemoveRole);
}

async function AsyncMessageReaction(reaction, user, action) {
	try {
		if (user.bot) return;
		if (reaction.partial) await reaction.fetch();

		var member = reaction.message.guild.members.cache.find(m => m.id === user.id);
		if (member == null) return;

		HandleRole(reaction, member, action);
	} catch (e) {
		console.error(e);
	}
};
