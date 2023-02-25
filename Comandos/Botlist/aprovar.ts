module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "aprovar",
    code: `
    $takeRoles[$guildID;$slashOption[bot];1076165384027259020]
    $interactionReply[<@$authorID>;{newEmbed:{title:✅ | Bot aprovado com sucesso!}{description:O bot <@$slashOption[bot]>, desenvolvido por <@$getUserVar[botOwner;$slashOption[bot]]>, foi aprovado com sucesso!}{color:#00FF7F}{timestamp}{thumbnail:$userAvatar[$slashOption[bot]]}{footer:Analisador\\: $userTag - $getUserVar[analises] analises.:$userAvatar}{execute:logaprovar}};;;all;false]

    $setUserVar[analises;$sum[$getUserVar[analises];1]]
    $setUserVar[notas;$if[$slashOption[notas]==;$getVar[notas];$slashOption[notas]]]
    $setGuildVar[totalBots;$sum[$getGuildVar[totalBots];1]]
    $setGuildVar[botID;$slashOption[bot]]
    $setGuildVar[botOwner;$getUserVar[botOwner;$slashOption[bot]]]]
    $setUserVar[totalBots;$sum[$getUserVar[totalBots;$getUserVar[botOwner;$slashOption[bot]]];1];$getUserVar[botOwner;$slashOption[bot]]]

    $onlyIf[$hasRoles[$guildID;$slashOption[bot];1076165384027259020]==true;**:x: | <@$authorID> este bot não está em análise.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyForChannels[1076178490312892447;**:x: | <@$authorID> você só pode usar este comando em <#1076178490312892447>!** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyForRoles[1075215458166390804;1075937595445493773;1076179007940345877;**:x: | <@$authorID> você não tem permissão para executar este comando.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    `
}, {
    type: "awaited",
    name: "logaprovar",
    code: `
    $channelSendMessage[]
    `
}]