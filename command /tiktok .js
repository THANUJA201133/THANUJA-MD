module.exports = {
  name: 'tiktok',
  category: 'media',
  run: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: '⬇️ TikTok downloader coming soon...' });
  }
};
