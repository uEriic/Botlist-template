module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "setar",
    $if: "old",
    code: `
    $if[$interactionData[options._subcommand]==usuario]
    $interactionReply[;{newEmbed:{title:✅ | VIP Adicionado com sucesso!}{description:<@$authorID> você setou um vip de 30 dias na conta de <@$slashOption[user]> com sucesso!}{color:#00FF7F}{timestamp}};;;all;false]
    $setTimeout[vip;30d;{
        "userID": "$slashOption[user]"
    };false;false]
    $giveRoles[$guildID;$timeoutData[userID];1076164397782798376]
    $endif

    $onlyIf[$interactionData[options._subcommandgroup]==vip;]
    `
}, {
    type: "timeout",
    name: "vip",
    $if: "old",
    code: `
    $takeRoles[$guildID;$timeoutData[userID];1076164397782798376]
    $if[$isUserDmEnable[$timeoutData[userID]]==true]
    $sendDM[$timeoutData[userID];**Seu vip em \`$guildName\` acabou, você pode comprar mais usando o comando __/loja__.**]
    `
}]