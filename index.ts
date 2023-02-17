const dotenv = require('dotenv');
dotenv.config()
const { TOKEN } = process.env;
const { AoiClient, LoadCommands, Util } = require('aoi.js')
const bot = new AoiClient({
    token: TOKEN,
    prefix: "!",
    intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
    events: ["onMessage", "onInteractionCreate", "onJoin"],
    aoiWarning: true
});
const { setup } = require('aoi.parser');
const Handler = new LoadCommands(bot);
Handler.load(bot.cmd,'./Comandos/');
const vars = require('./variables.ts')
bot.variables(vars)
bot.status({
    text: "/addbot!!!",
    type: "WATCHING",
    status: "idle",
    time: 60
});
bot.status({
    text: "$membersCount[1075214880187093022] membros",
    type: "LISTENING",
    status: "idle",
    time: 120
})
setup(Util)