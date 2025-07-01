module.exports = {
  name: 'download',
  category: 'media',
  run: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: '📥 Download command working...' });
  }
};
