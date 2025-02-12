/**
  
 * RDG BOTricolors

**/

const fs = require('fs')
const { color } = require('../../lib/myfunc')

//owner
global.ownername = 'MrNadun'
global.nomerowner = ["94781352903"]
global.botname = 'YUNA-MD'
//sticker
global.packname = 'YUNA-MD'
global.author = 'MrNadun'

// biarin
global.urldb = 'mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority'; 

// thumbnail
global.thumurl = "https://files.catbox.moe/afqydo.jpg"
global.thumurl2 = "https://files.catbox.moe/glt7ub.jpg"

//saluran
global.urls = "https://whatsapp.com/channel/0029VauYaRAJZg45fQAoeQ0M"
global.ids = "120363347072990822@newsletter"
global.nems = "© YUNA-MD"

// pterodactyl panel
global.domain = 'https://al.xyz' // isi domain
global.apikey = 'plta' // Isi Apikey Plta Lu
global.capikey = 'pltc' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//messages reply
global.mess = {
    done: '*`[ GUMDRAMON ] : Request completed !`*', 
    owner: '*`[ GUMDRAMON ] : For an owner only`*',
    private: '*`[ GUMDRAMON ] : In Private only`*',
    group: '*`[ GUMDRAMON ] : Only available in group`*',
    wait: '*`[ GUMDRAMON ] : Request processed..`*',
    check: {
    premium: '*`[ GUMDRAMON ] : You not a premium user`*',
    jadibot: '*`[ GUMDRAMON ] : You not a jadibot user`*',
    },
}
global.title = "Gumdramon Digivo-lution"
global.body = "ʀᴏᴀᴅ ᴛᴏ ʀᴀᴍᴀᴅʜᴀɴ"
global.filename = "𝗡𝗔𝗧𝗨𝗥𝗘-𝗦𝗣"
global.jpegfile = "𝗠𝗗 𝗚𝘂𝗺𝗱𝗿𝗮𝗺𝗼𝗻"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
