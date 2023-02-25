module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "setar",
    $if: "old",
    code: `
    $interactionReply[;{newEmbed:{title:✅ | VIP Adicionado com sucesso!}{description:<@$authorID> você setou um vip na conta de <@$slashOption[user]> com sucesso!}{color:#00FF7F}{timestamp}};;;all;false]
    $setUserVar[vip;true;$slashOption[user]]
    $giveRoles[$guildID;$slashOption[user];1076164397782798376]

    $onlyIf[$isBot[$slashOption[user]]==false;**:x: | <@$authorID você deve marcar um usuário para dar vip e não um bot.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[vip;$slashOption[user]]==false;**:x: | <@$authorID> o membro mencionado já possui vip.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyForRoles[1075215458166390804;1075937595445493773;1076138471414042644;**:x: | <@$authorID> você não possui permissão para executar este comando.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$interactionData[options._subcommand]==vip;]
    `
}]