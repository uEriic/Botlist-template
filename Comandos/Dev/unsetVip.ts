module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "remover",
    $if: "old",
    code: `
    $interactionReply[;{newEmbed:{title:✅ | VIP removido com sucesso!}{description:<@$authorID> você removeu o vip de <@$slashOption[user]> com sucesso!}{color:#00FF7F}{timestamp}};;;all;false]
    $setUserVar[vip;false;$slashOption[user]]
    $takeRoles[$guildID;$slashOption[user];1076164397782798376]

    $onlyIf[$isBot[$slashOption[user]]==false;**:x: | <@$authorID você deve marcar um usuário para remover vip e não um bot.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[vip;$slashOption[user]]==true;**:x: | <@$authorID> o membro mencionado não possui vip.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyForRoles[1075215458166390804;1075937595445493773;1076138471414042644;**:x: | <@$authorID> você não possui permissão para executar este comando.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$interactionData[options._subcommand]==vip;]
    `
}]