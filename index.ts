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
const { parserSetup } = require('aoi.parser');
const Handler = new LoadCommands(bot);
Handler.load(bot.cmd,'./Comandos/');