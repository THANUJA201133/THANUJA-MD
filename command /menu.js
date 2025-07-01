module.exports = {
  name: 'menu',
  category: 'general',
  run: async (sock, m) => {
    const menu = `🌟 *THANUJA-MD Menu* 🌟
- hi
- menu
- alive
- song
- video
- download
- tiktok
- fb
- google
- pair
- gm
- ai
- ai edit
- ai video`;
    await sock.sendMessage(m.key.remoteJid, { text: menu });
  }
};
