import config from "./config.json";
const prefixes = Object.values(config.commands).map(c => c.prefix);

export function HandleRole(reaction, member, action) {
	if (reaction.emoji.guild?.id != member.guild.id) return;
    if (!prefixes.some(prefix => reaction.emoji.name.startsWith(prefix))) return;
    
	var role = member.guild.roles.cache.find(r => r.name == reaction.emoji.name);
	if (role == null) return;

	action(member, role);
}

export function AddRole(member, role){
	member.roles.add(role);
}

export function RemoveRole(member, role){
	member.roles.remove(role);
}