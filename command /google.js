module.exports = {
  name: 'google',
  category: 'tools',
  run: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: '🔎 Google search command coming soon...' });
  }
};
