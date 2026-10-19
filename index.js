const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.once(Events.ClientReady, (c) => {
  console.log(`Defencer online as ${c.user.tag}`);
});

client.on(Events.GuildMemberAdd, async (member) => {
  const channel = member.guild.systemChannel;
  if (!channel) return;

  channel.send(`Welcome ${member} to **${member.guild.name}**! 🛡️`)
    .catch(console.error);
});

client.login(process.env.DISCORD_TOKEN);
