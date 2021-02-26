import { HandleRole } from "./_handleRole.js";

export async function AsyncMessageReactionAdd(reaction, user) {
    await AsyncMessageReaction(reaction, user, (member, role) => member.roles.add(role));
}

export async function AsyncMessageReactionRemove(reaction, user) {
    await AsyncMessageReaction(reaction, user, (member, role) => member.roles.remove(role));
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
