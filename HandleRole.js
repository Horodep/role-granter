const prefixes = ['c_', 'g_'];

export function HandleRole(reaction, member, action /* 1 - add, 0 - remove*/) {
	if (reaction.emoji.guild?.id != member.guild.id) return;
    if (!prefixes.map(prefix => reaction.emoji.name.startsWith(prefix)).some(e => e == true)) return;
    
	var role = member.guild.roles.cache.find(r => r.name == reaction.emoji.name);
	if (role == null) return;

	if (action == 1) member.roles.add(role);
    else member.roles.remove(role);
}