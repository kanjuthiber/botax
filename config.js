import Function from "./src/lib/lib.function.js"
import Collection from "./src/lib/lib.collection.js"

import { fileURLToPath } from "url"
import fs from "fs"


global.reloadFile = (file) => reloadFile(file)
global.commands = new Collection()

// limit
global.limit = {
	free: 25,
	premium: 250,
	VIP: "Infinity",
	download: {
		free: 30000000, // use byte
		premium: 100000000, // use byte
		VIP: 1130000000, // use byte 
	}
}

//API
global.APIs = {
	sinon: {
		URI: 'http://api-rest-sinon.my.id:5000',
		Key: 'create your key at the url abrove'
	},
	xzn: {
		URI: 'https://xznsenpai.xyz/'
	}
}

// Other
global.mess = (type, m, options = {}) => {
	let msg = {
		owner: 'Perintah ini hanya dapat digunakan oleh *Owner*',
		group: 'Perintah ini hanya dapat digunakan didalam *Group*',
		private: 'Perintah ini hanya dapat digunakan di *Private Chat*',
		admin: 'Perintah ini hanya dapat digunakan oleh *Admin Group*',
		botAdmin: 'Bot bukan admin, tidak dapat mengeksekusi perintah tersebut',
		bot: 'Fitur ini hanya dapat digunakan oleh Bot',
		locked: 'Fitur ini telah dinonaktifkan!',
		media: 'Reply media cuy',
		error: "Error nih cuy",
		quoted: "Reply message cuy",
		wait: "Wait cuy",
		premium: "Perintah ini hanya dapat digunakan oleh *Premium Users*",
		vip: "Perintah ini hanya dapat digunakan oleh pengguna *VIP*",
		dlFree: `File over ${Function.formatSize(limit.download.free)} can only be accessed by premium users${options?.extra ? options.extra : ""}`,
		dlPremium: `WhatsApp Web cannot send files larger than ${Function.formatSize(limit.download.premium)}${options?.extra ? options.extra : ""}`,
		dlVIP: `WhatsApp cannot send files larger than ${Function.formatSize(limit.download.VIP)}${options?.extra ? options.extra : ""}`
	}[type]

	if (msg) return m.reply(msg, { ...options })
	
}
global.options = {
	public: true,
	URI: "database.json", // use mongo or file json 
	owner: ["6281320843460"],
	pathCommand: 'commands'
}
global.Exif = {
	packId: "https://instagram.com/moreegih",
	packName: `Sticker ini Dibuat Oleh :\nhttps://instagram.com/moreegih\n\nPada :\n${Function.tanggal(new Date())} Pukul ${Function.jam(new Date())} WIB\n\nPowered by Opet BOT`,
	packPublish: "Opet BOT",
	packEmail: "egiytta@proton.me",
	packWebsite: "https://instgaram.com/moreegih",
	androidApp: "",
	iOSApp: "",
	categories: ['😹', '😎', '😱'],
	isAvatar: 0
}
global.session = {
	Path: "session",
	Name: "hisoka"
}


async function reloadFile(file) {
	file = (file).url || (file)
	let fileP = fileURLToPath(file)
	fs.watchFile(fileP, () => {
		fs.unwatchFile(fileP)
		console.log(`Update File "${fileP}"`)
		import(`${file}?update=${Date.now()}`)
	})
}

reloadFile(import.meta.url)
