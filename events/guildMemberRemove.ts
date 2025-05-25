import { GuildMember, Events } from 'discord.js';
import { Event } from '../types';
import db from '../utils/db';
import idclass from '../idclass';

const event: Event = {
  name: Events.GuildMemberRemove,
  async execute(member: GuildMember) {
    const roleIds = member.roles.cache
      .filter(r => !r.managed && r.id !== member.guild.id)
      .map(r => r.id);

    await db.set(`roles_${member.id}_${member.guild.id}`, roleIds);

    const channel = member.guild.channels.cache.get(idclass.channelEL());
    if (channel?.isTextBased()) {
      channel.send({
        content: `**${member.displayName}** left the server.\nStored roles: ${roleIds.length ? roleIds.map(id => `<@&${id}>`).join(', ') : 'None'}`,
        allowedMentions: { parse: [] }
      });
    }
  },
};

export default event;
