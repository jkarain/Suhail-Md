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




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""SUHAIL_10_37_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODQsXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA3LFxuICAgICAgICA3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1S08vUVdwb0orT0xMYU1HdzlZZEVQZi9QS2Q1Q1RybzJDeTB2a3ppdDZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhQXU2bVhzQVM4ZTFoM09veTN4TFJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwYjhlMzI1LTYzOGEtNGFkNi05YTVjLWRhMDlmYTIxNzcxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICA1MCxcbiAgICAgIDE3MixcbiAgICAgIDIzNCxcbiAgICAgIDIyOCxcbiAgICAgIDIwLFxuICAgICAgMTczLFxuICAgICAgMjQ1LFxuICAgICAgMjEyLFxuICAgICAgMzAsXG4gICAgICAyMjAsXG4gICAgICAyMDEsXG4gICAgICA0MSxcbiAgICAgIDEyMixcbiAgICAgIDIzLFxuICAgICAgMjA5LFxuICAgICAgMTM5LFxuICAgICAgNCxcbiAgICAgIDExMCxcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAxMjMsXG4gICAgICAyMjAsXG4gICAgICAxMDIsXG4gICAgICAxNzUsXG4gICAgICA1NixcbiAgICAgIDExOCxcbiAgICAgIDQ0LFxuICAgICAgNTgsXG4gICAgICA4NixcbiAgICAgIDgsXG4gICAgICA0MCxcbiAgICAgIDE4LFxuICAgICAgMTUyLFxuICAgICAgMjUyLFxuICAgICAgMTQzLFxuICAgICAgMTQyLFxuICAgICAgNzcsXG4gICAgICA1MyxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS0FQUTRYV0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIwOTIyOTAzNjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYyOTY0Mzk3MTIxNzM1OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zYXRNMEZFT3E4cExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUUVTSEFTZytUcUdHdFlGeXZWZFhmM3hjMVpiQWcvT3ZJMkdUUGUwM0pDdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0YStEZ3VvbjNiU0lSQzYrNllHRzVZbEhKQ2gvdzZSam1nQU55akFuVmY2VThVbTdtVG1HejM3Tk43ZkFzQVJJQStYS3ZTWkY1S3AzcFJBeTlwT2FBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFU1pPUGFaVnYvMzJPdVRTSU85VW5xNEUxLy9YRnJtYXVZMk1rTnRqMVd5bW1HelZvNDRJQ3pCRTVaMmFxZjBvS2hCRmVtemdxK2pSWU1SbHlaVkZCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyMDkyMjkwMzY6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2MjI1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ2eVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDZ5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiazhpQ3JLd1hrdEpMTnp1M1ZVZ1czTEd0NFY0aVB1RHdvSmExb0JrZTRoMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA0NTIxNTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
