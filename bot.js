const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const path = require('path');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');

  const { version, isLatest } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    auth: state,
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode;
      if (reason !== DisconnectReason.loggedOut) {
        console.log('Reconnecting...');
        startBot(); // Restart bot
      } else {
        console.log('Logged out. Delete auth_info_baileys and scan again.');
      }
    } else if (connection === 'open') {
      console.log('✅ Bot connected');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const from = msg.key.remoteJid;
    const messageText = msg.message.conversation || msg.message.extendedTextMessage?.text;

    // Simple command handler
    if (messageText === 'hi') {
      await sock.sendMessage(from, { text: 'Hello! 😄' });
    } else if (messageText === 'menu') {
      await sock.sendMessage(from, { text: '*Bot Menu:*\n1. hi\n2. alive\n3. help' });
    } else if (messageText === 'alive') {
      await sock.sendMessage(from, { text: '✅ I am alive and working!' });
    }
  });
}

startBot();
