module.exports = {
  name: 'video',
  category: 'media',
  run: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: '🎬 Video downloading feature coming soon...' });
  }
};
