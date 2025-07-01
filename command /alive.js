module.exports = {
  name: 'alive',
  category: 'general',
  run: async (sock, m) => {
    await sock.sendMessage(m.key.remoteJid, { text: '✅ Bot is Alive!' });
  }
};
