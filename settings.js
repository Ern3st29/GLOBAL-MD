

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: නැ 👉👈" //ur yt chanel name
global.socialm = "GitHub: Ern3st29👉👈" //ur github or insta name
global.location = "Africa/Nigeria✌️💖" //ur location

//new
global.botname = 'Vawulence-MD' //ur bot name
global.ownernumber = ['2349030359124'] //ur owner number, dont add more than one
global.ownername = 'Vawulence😈' //ur owner name
global.websitex = "https://wa.me/qr/P6WADRJOKAFUK1"
global.wagc = "https://wa.me/qr/P6WADRJOKAFUK1"
global.themeemoji = '🪀'
global.wm = "Vawulence Bot Inc."
global.botscript = 'https://wa.me/qr/P6WADRJOKAFUK1' //script link
global.packname = "Ernest"
global.author = "🐼-𝐌𝐃\n\n+2349065526692"
global.creator = "2349065526692@s.whatsapp.net"
global.xprefix = '.',''
global.premium = ["2349030359124"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = 'null' //set autoblock country code
global.antiforeignnumber = 'null' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Umm....bro theres an Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done🤓'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
