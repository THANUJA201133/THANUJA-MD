module.exports = {
  name: 'song',
  category: 'media',
  run: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: '🎵 Song downloading feature coming soon...' });
  }
};
