module.exports = {
    type: "interaction",
    prototype: "slash",
    name: "aprovar",
    code: `
    $interactionReply[<@$authorID>;{newEmbed:{title:✅ | Bot aprovado com sucesso!}{description:O bot <@$slashOption[bot]>, desenvolvido por <@$getUserVar[botOwner;$slashOption[bot]]>, foi aprovador com sucesso!}{color:##00FF7F}{timestamp}{thumbnail:$userAvatar[$slashOption[bot]]}{footer:Analisador\\: $userTag - $getUserVar[analises] analises.:$userAvatar}};;;all;false]
    `
}