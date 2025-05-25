import {
    Events,
    Interaction,
    Client,
    ButtonInteraction,
    Message,
    TextChannel,
    Colors
  } from 'discord.js';
  import { ExtendedClient } from '../utils/ExtendedClient';

  import db from '../utils/db';
  
  export default {
    name: Events.InteractionCreate,
    async execute(interaction: Interaction, client: ExtendedClient) {
        try {
        if (interaction.isChatInputCommand()) {
          const command = client.slashCommands.get(interaction.commandName);
          if (!command) return;
          try {
            await command.execute(interaction, client);
          } catch (err) {
            console.error(`Error in slash command ${interaction.commandName}:`, err);
            if (interaction.isRepliable() && !interaction.replied && !interaction.deferred) {
              await interaction.reply({
                content: 'Something went wrong while executing this command.',
                ephemeral: true
              }).catch(() => {}); 
            }
          }
        }
  
        
  
            return;
          
        
      } catch (error) {
        console.error(error, 'InteractionCreate');
      }
    }
  };
  