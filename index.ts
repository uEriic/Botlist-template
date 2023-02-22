const dotenv = require('dotenv');
dotenv.config()
const { TOKEN } = process.env;
const { AoiClient, LoadCommands, Util } = require('aoi.js')
const bot = new AoiClient({
    token: TOKEN,
    prefix: "!",
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    aoiWarning: true,
    guildOnly: false
});
const { setup } = require('aoi.parser');
const Handler = new LoadCommands(bot);
Handler.load(bot.cmd,'./Comandos/');
const vars = require('./variables.ts')
bot.variables(vars)
bot.status({
    text: "$getGuildVar[totalBots;1075214880187093022] bots!",
    type: "LISTENING",
    status: "idle",
    time: 120
})
bot.status({
    text: "/addbot | $pingms",
    type: "PLAYING",
    status: "idle",
    time: 150
})
bot.status({
    text: "/ajuda | $pingms",
    type: "PLAYING",
    status: "idle",
    time: 150
})
setup(Util)