import { HandleRole } from "./HandleRole.js";

export async function AsyncMessageReactionRemove(reaction, user) {
	try {
		if (user.bot) return;
		if (reaction.partial) await reaction.fetch();

		var member = reaction.message.guild.members.cache.find(m => m.id == user.id);
		if (member == null) return;

		console.log(`${member.displayName} removed reaction ${reaction._emoji.name}.`);

		HandleRole(reaction, member, 0);
	} catch (e) {
		console.error(e);
	}
};