module.exports = {
  name: 'hi',
  alias: ['hello'],
  category: 'general',
  run: async (sock, m) => {
    await sock.sendMessage(m.key.remoteJid, { text: 'Hello! I am THANUJA-MD 🤖' });
  }
};
