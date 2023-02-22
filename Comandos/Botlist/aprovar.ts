module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "aprovar",
    code: `
    $takeRoles[$guildID;$slashOption[bot];1076165384027259020]
    $interactionReply[<@$authorID>;{newEmbed:{title:✅ | Bot aprovado com sucesso!}{description:O bot <@$slashOption[bot]>, desenvolvido por <@$getUserVar[botOwner;$slashOption[bot]]>, foi aprovado com sucesso!}{color:#00FF7F}{timestamp}{thumbnail:$userAvatar[$slashOption[bot]]}{footer:Analisador\\: $userTag - $getUserVar[analises] analises.:$userAvatar}{execute:logaprovar}};;;all;false]

    $setUserVar[notas;$if[$slashOption[notas]==;$getVar[notas];$slashOption[notas]]]
    $setGuildVar[totalBots;$sum[$getGuildVar[totalBots];1]]
    $setGuildVar[botID;$slashOption[bot]]
    $setGuildVar[botOwner;$getUserVar[botOwner;$slashOption[bot]]]]
    $setUserVar[totalBots;$sum[$getUserVar[totalBots;$getUserVar[botOwner;$slashOption[bot]]];1];$getUserVar[botOwner;$slashOption[bot]]]
    `
}, {
    type: "awaited",
    channel: "1076178391482503229",
    name: "logaprovar",
    code: `
    $setGuildVar[botID;]
    $setGuildVar[botOwner;]
    $giveRoles[$guildID;$getGuildVar[botID];1076165687640338675]

    $wait[2s]
    
    <@$getGuildVar[botOwner]>
    $title[✅ Bot Aprovado!]
    $description[Seu bot <@$getGuildVar[botID]> foi aprovado com sucesso e você já pode usá-lo em qualquer laboratório.]
    $addField[🔍 | Analisador:;<@$authorID>]
    $addField[📋 | Notas:\`$getUserVar[notas]\`]
    $color[#303136]
    $thumbnail[$userAvatar[$getGuildVar[botID]]]
    $addButton[1;Laboratório 01;link;https\\://discord.com/channels/1075214880187093022/1077056295338790953;false;🔬]
    `
}]