//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY053YlplVG8wT1A2QzVwVmRrcTBCbTJEYmFzZGVVcm93ai9TLzQ4RmxrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiendzMng4ZGRUc0ZVa1N5Z2w3MWRJekxJOTY2SEpqOG05WExQZE1xNi9IST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR2xKcXM3Q3lNYzFKc25CakFNTDFVSE1CZVhTMXRhcXV4amIxeUd1TVdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWnUraG1wakxrdXR4b3ZPWlRpNjNhQjMzdFo5TUFKMzN1eTN5T0J2aFdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPKzVsUnpCK1FkOEFrZThDdkJyc0ZlUDBGRUx5c0JCRVo1QjRCV2Iwa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRWM0JqUWp5ZVNjcGtQN0tRdnlTWUVkOThpamxiSGpBdktLNmM1b3ZoQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0lyMFIvblBHS3Z2cDN0cVBNUVBub3Y2UVZ0L0lPQ3E0YTBnYXVHblltYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3Qxemc0SWVtZzhXSkhtLzFpYW4xdVl6VkpMUG1jcGRHN0V4cVUxcnJqUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml4cE1lUS84SEZ2eHV4REVnUUZqYjI3THVjMjUwdHdYbm9teXhCcG5pM05OQmtVbXlJNm9tTGczMUs2azR4emR6Rk50TTVwL0hVY1JMSVZ4bFB3WGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJ3MzRzai9yVlJ1VFc4VWk4blVjQkNRMEUyYWoxdTVZL1ovNk03YjR6M3BvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJSdHl0YnM2R1JmU2F6Xy05c0sySl93IiwicGhvbmVJZCI6ImIxODQyZGE1LTU5OGYtNDlhYi1hYzVmLWMwYTM5MDdmZjNiYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkVnpkWWhHdk0yVFBFQk5BWDhtMUFzcnVLWG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUh0bnk3MnZUaGdVZktJOS9UbXpsVXVwRzQwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjY0RkNYMjUxIiwibWUiOnsiaWQiOiI5NDc2MzU4NDYwNTo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYXJrIFR1ZHUiLCJsaWQiOiIyNDk0Njk0MzQwOTc4NDQ6NDdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPQ2p4S3NERUlDWXJNVUdHQlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzNmJjcVBDVWJ6Z2dibFN3dW1DK3pXWElIMHVlM2lSbzRGM242M04rRVFRPSIsImFjY291bnRTaWduYXR1cmUiOiJVSDJQVnZ1a2hKWkQwN1hleUhHaDI4SFgxMWNWNEVHMS8vOGc4ZUJjZ0lVaVNQaUZKR0F0YXNEVnZFL2RxUzBQMjh4VkhsZ2xmSHB5bE9LQ1l6UDRCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVUpYNWF5UEV6Zm1zZk8yWi9pS29GN1NSaHlOYWYxUlVYZWdIWjNYUXBKUTZ0Smd3RWQyaTVTVVdqdkYySWMzbkRLSG5GSTNFNHl2VHhHbnpxaXBaaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MzU4NDYwNTo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiT20zS2p3bEc4NElHNVVzTHBndnMxbHlCOUxudDRrYU9CZDUrdHpmaEVFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwNDAyMDYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1oyIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94763584605",
  PASSWORD: 
    process.env.PASSWORD || "Sankalpa86",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
