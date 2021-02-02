export async function AsyncMessageReactionRemove(reaction, user) {
	try {
		if (user.bot) return;
		if (reaction.partial) await reaction.fetch();

		var member = reaction.message.guild.members.cache.find(m => m.id == user.id);
		if (member == null) return;

		console.log(`${member.displayName} removed reaction ${reaction._emoji.name}.`);

		Handle(reaction, member);
	} catch (e) {
		console.error(e);
	}
};

function Handle(reaction, member) {
	var role = member.guild.roles.cache.find(r => r.name == reaction._emoji.name);
	if (role == null) return;
	member.roles.remove(role);
}
