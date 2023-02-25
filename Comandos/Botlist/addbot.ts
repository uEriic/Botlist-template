module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "addbot",
    $if: "old",
    code: `
    $interactionReply[<@$authorID>;{newEmbed:{title:<a:Prints_dark:1075957686518157392> | Verifique os dados...}{field:Nome\\::\`$userTag[$getUserVar[botID]]\`:yes}{field:ID\\::\`$getUserVar[botID]\`:yes}{field:Linguagem\\::\`$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[botLang];aoijs;Aoi.js];djs;Discord.js];dpy;Discord.py];bdfd;Bot Designer For Discord]\`:yes}{field:Prefixo\\::\`$getUserVar[botPrefix]\`:yes}{field:Descrição\\::\`$getUserVar[botDesc]\`:yes}{color:#2b2d31}{thumbnail:$userAvatar[$getUserVar[botID]]}{timestamp}};{actionRow:{button:Enviar:success:enviarBot:false:✅}{button:Cancelar:danger:cancelarEnvio:false:❎}};;all;true]
    
    $setGuildVar[botID;$slashOption[id]]
    $setUserVar[botID;$slashOption[id];$slashOption[id]]
    $setUserVar[botLang;$slashOption[linguagem];$slashOption[id]]
    $setUserVar[botPrefix;$slashOption[prefixo];$slashOption[id]]
    $setUserVar[botOwner;$authorID;$slashOption[id]]

    $setUserVar[botID;$slashOption[id]]
    $setUserVar[botLang;$slashOption[linguagem]]
    $setUserVar[botPrefix;$slashOption[prefixo]]

    $if[$slashOption[descrição]!=]
    $setUserVar[botDesc;$slashOption[descrição]]
    $setUserVar[botDesc;$slashOption[descrição];$slashOption[id]]
    $else
    $setUserVar[botDesc;$getVar[botDesc]]
    $setUserVar[botDesc;$getVar[botDesc];$slashOption[id]]
    $endif
    
    $onlyForChannels[1076175358254120960;**:x: | <@$authorID> você só pode usar esse comando em <#1076175358254120960>!** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$memberExists[$slashOption[id]]==false;**❌ | <@$authorID> você não pode adicionar este bot pois ele já está nesse servidor.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[totalBots]<$getUserVar[maxBots];**❌ | <@$authorID> você excedeu seu limite de bots! __Você possui__: \`$getUserVar[totalBots]/$getUserVar[maxBots] bots\`** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyForChannels[1076175358254120960;**❌| <@$authorID> você deve usar esse comando em <#1076175358254120960>.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[blacklist]==false;**❌| <@$authorID> você está na blacklist do servidor, por tanto está proibido de enviar seus bots para a analise.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    `
}, {
    type: "interaction",
    prototype: "button",
    name: "enviarBot",
    code: `
    $interactionUpdate[<@$authorID>;{newEmbed:{title:✅ | Sucesso! Bot enviado!}{thumbnail:$userAvatar[$getUserVar[botID]]}{color:#00FA9A}};;;all]
    
    $setUserVar[messageID;$messageID;$getGuildVar[botID]]
    $useChannel[1076177567029153855]
    <@&1076179007940345877>
    $title[📫 | Correio!]
    $addfield[📋 | Descrição:;\`$getUserVar[botDesc]\`;true]
    $addfield[$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[botLang];aoijs;<:aoijs:1076305357376340028>];djs;<:discordjs:1076302939322323034>];dpy;<:discordpy:1076304134896107530>];bdfd;<:bdfd:1076304688426786876>] | Linguagem:;\`$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[botLang];aoijs;Aoi.js];djs;Discord.js];dpy;Discord.py];bdfd;Bot Designer For Discord]\`;true]
    $addfield[⚙️ | Prefixo:;\`$getUserVar[botPrefix]\`;true]
    $addfield[🤖 | Bot:;\`$userTag[$getUserVar[botID]]\`\n(*$getUserVar[botID]*);true]
    $color[#2b2d31]
    $thumbnail[$userAvatar[$getUserVar[botID]]]
    $addtimestamp
    $footer[Dev: $userTag;$userAvatar[$authorID]]
    $addButton[1;Adicionar Aqui!;link;https://discord.com/oauth2/authorize?client_id=$getUserVar[botID]&scope=bot+applications.commands&permissions=0;no;📌]

    $channelSendMessage[1076178391482503229;<@$authorID>{newEmbed:{title:Bot Enviado!}{description:$username seu bot **__$userTag[$getUserVar[botID]]__** foi enviado para a análise!}{color:#2b2d31}{timestamp}{thumbnail:$userAvatar[$getUserVar[botID]]}}]
    `
}, {
    type: "interaction",
    prototype: "button",
    name: "cancelarEnvio",
    code: `
    $setUserVar[botID;$getVar[botID]]
    $setUserVar[botLang;$getVar[botLang]]
    $setUserVar[botPrefix;$getVar[botPrefix]]
    $setUserVar[botDesc;$getVar[botDesc]]
    $setUserVar[botOwner;$getVar[botOwner]]
    $interactionUpdate[<@$authorID>;{newEmbed:{title:❎ | Sucesso! Envio cancelado!}{color:#ff0000}};;;all]
    `
}]