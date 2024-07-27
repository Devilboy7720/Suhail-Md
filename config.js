const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_33_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJLZjdwdnlJSWkxcDdtSkJYMm0wZG12L09nV2wwZG1obTY2dnMyYTFkS2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4NTA5NjQ3MzA4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGRjVDM0JBRTVCNDU4OEE4QUM5ODc5QkFGOTczMkRBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE3NTIzOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRXhPdVZQUWFUbU9rS3V6cHJpN25hd1wiLFxuICBcInBob25lSWRcIjogXCI5NTVlMGYxZS1mMTc4LTQ2ZDctYjQ3NS0zNmQ1N2NkZmYxNWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTgyLFxuICAgICAgNTIsXG4gICAgICAyMDMsXG4gICAgICA3LFxuICAgICAgMjE1LFxuICAgICAgMjA3LFxuICAgICAgNTgsXG4gICAgICAxOSxcbiAgICAgIDI0OCxcbiAgICAgIDE5MixcbiAgICAgIDkzLFxuICAgICAgMTcyLFxuICAgICAgMTE4LFxuICAgICAgMTUwLFxuICAgICAgMjM3LFxuICAgICAgMTg0LFxuICAgICAgMjYsXG4gICAgICAxMjUsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgMjM2LFxuICAgICAgNTYsXG4gICAgICAyMjAsXG4gICAgICAxMTcsXG4gICAgICAxODMsXG4gICAgICAyMjQsXG4gICAgICAyMTMsXG4gICAgICAxNDQsXG4gICAgICA5OCxcbiAgICAgIDExMSxcbiAgICAgIDExNixcbiAgICAgIDI0MCxcbiAgICAgIDQ1LFxuICAgICAgNDcsXG4gICAgICA2NyxcbiAgICAgIDE2MixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlRQlhOOVpFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg1MDk2NDczMDg6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MjIyNzU4MjM5ODY1OTo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSExsZXNERU1TMi83UUdHQkVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxXaVRacWNQTHN2b0xhMFNIbUJmRUg2SnJJUGtZVTdMb2pUN29XODkzU1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTExhbCtkbUp6UGw3d3ZuZWNKdksxVFdQTy9FaG1ZakhlV093WmJOMkF2d0RwUExkSk55NzRvOUdYa2JLdEdZcHFucit1bk1uVG9rWngxcElZTXBVQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHFGbU1YQjhuWGlHeVZlMlR2Z29iZVY1OTk0RkZyM254S1dwdklwRzdQVjMyVGJTQ2J2TWtOYkMwVDBtMHdJLzRLWW1EZURDaGJ3SlBJZ0tVQW90QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4NTA5NjQ3MzA4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc1MjM5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1zYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXNiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0E1VEhaNmdiYU5ZSjkycG1CK2VRcC9TSUpyN001Q2I4d3VwaFNERmJSaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDMwMDU1Mzc3LFwiY3VycmVudEluZGV4XCI6MTYsXCJkZXZpY2VJbmRleGVzXCI6WzE2LDAsMTFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTcyMTQ2Njc4MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
