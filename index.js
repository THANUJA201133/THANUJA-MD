// index.js - Main bot start file

const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    const msg = m.message.conversation || m.message.extendedTextMessage?.text;
    const sender = m.key.remoteJid;

    if (msg === 'hi') {
      await sock.sendMessage(sender, { text: 'Hello! I am THANUJA-MD 🤖' });
    }
  });
}

startBot();
