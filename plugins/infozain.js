let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Burhanuddin Zain
│ ✎ _Umur_ : 14
│ ✎ _Asal_ : Purbalingga
│ ✎ _Status_ : Pelajar
│ ✎ _Instagram_ : 
│    https://instagram.com/dnzainn
│ ✎ _WhatsApp_ :
│    wa.me/6285728581059
╰───────────────────
`.trim(), m)
}

handler.help = ['infozain']
handler.tags = ['main', 'utama']
handler.command = /^(infozain)$/i

handler.exp = 150

module.exports = handler
