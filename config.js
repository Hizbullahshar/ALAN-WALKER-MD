import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  [process.env.OWNER_NUMBER || '923278974102', process.env.OWNER_NAME || 'ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ', true],
  ['923183056493', '©ʜᴇꜱᴏʏᴀᴍ', true]
]
global.mods = []
global.prems = []

global.author = process.env.OWNER_NAME || 'ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ'
global.botname = process.env.BOT_NAME || 'ALAN;WALKER-MD'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = process.env.BOT_NAME || 'ALAN;WALKER-MD'
global.stkowner = process.env.OWNER_NAME || 'ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ'

//Watermark
global.maker = process.env.MAKER || 'ᴍᴀᴅᴇ ʙʏ ᴀʟᴀɴ ᴡᴀʟᴋᴇʀ'

//global emojis
global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Africa/Nairobi').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Africa/Nairobi').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
