module.exports = {
    type: "join",
    channelID: "1075632042970189845",
    $if: "old",
    code: `
    $if[$isBot[$authorID]==true]
    $giveRoles[$guildID;$authorID;1076165384027259020]
    $else
    $useChannel[1075632042970189845]
    $reply
    👋 Saudações <@$authorID>! Seja muito bem vindo a **$guildName**.
    > <a:d_baby_dance:1077730853813231717> Neste servidor você poderá conversar com outros devs, tirar suas dúvidas de programação de bots e aprender muito.
    > 🤖 Possuímos um sistema de botlist e você pode acessá-lo no canal <#1076175358254120960>.
    > <:d_code:1077730445032169563> Para tirar sua dúvidas e ter acesso a códigos exclusivos de comandos para bots acesse o canal <#1077056113444388864>.

    Lembre se de ler as <#1075573630781636658>, fazer seu <#1075637280322105426> e se divertir muito!! <:d_love:1077669469649899620>
    $deleteIn[15s]
    $giveRoles[$guildID;$authorID;1075938179565232230]
    $endif
    $onlyForGuilds[1075214880187093022;]
    `
}