/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit
# decode by tech god
*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['50934960331']
global.ownMain = '50934960331'
global.NamaOwner = '⏤͟͟͞͞𝄞∘̥⃟𝐄𝐆 𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ ʙᴜɢ ʙᴏᴛ' //
global.author = '⏤͟͟͞͞𝄞∘̥⃟𝐄𝐆 𝐃𝐘𝐁𝐘 𝐓𝐄𝐂𝐇 🕸️' //
global.packname = 'ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ ʙᴜɢ ʙᴏᴛ' //
global.url1 = 'https://whatsapp.com/channel/0029VaiOvsV1iUxQRXWnv40R' //
global.url2 = 'https://whatsapp.com/channel/0029VaiOvsV1iUxQRXWnv40R' //
global.linkgc = 'https://whatsapp.com/channel/0029Va9Ufzi8kyyEnEHvOm1h'
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.delayjpm = 3500
//Panel
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // 
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // 
global.eggsnya = '15' // 
global.location = '1' // 

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not owne4.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by 𝘔𝘈𝘎𝘈𝘓𝘖𝘋𝘖𝘕 𝘉𝘜𝘎 𝘉𝘖𝘛',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})