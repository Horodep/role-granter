import { HandleRole } from "./HandleRole.js";

export async function AsyncMessageReactionAdd(reaction, user) {
	try {
		if (user.bot) return;
		if (reaction.partial) await reaction.fetch();

		var member = reaction.message.guild.members.cache.find(m => m.id == user.id);
		if (member == null) return;

		console.log(`${member.displayName} set reaction ${reaction._emoji.name}.`);

		HandleRole(reaction, member, 1);
	} catch (e) {
		console.error(e);
	}
};