const prefixes = ['c_', 'g_'];

export function HandleRole(reaction, member, action) {
	if (reaction.emoji.guild?.id != member.guild.id) return;
    if (!prefixes.map(prefix => reaction.emoji.name.startsWith(prefix)).some(e => e == true)) return;
    
	var role = member.guild.roles.cache.find(r => r.name == reaction.emoji.name);
	if (role == null) return;

	action(member, role);
}