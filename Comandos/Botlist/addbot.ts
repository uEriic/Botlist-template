module.exports = [{
    type: "interaction",
    prototype: "slash",
    name: "addbot",
    code: `
    $interactionReply[<@$authorID>;{newEmbed:{title:<a:Prints_dark:1075957686518157392> | Verifique os dados...}{field:Nome\\::\`$userTag[$slashOption[id]]\`:yes}{field:ID\\::\`$slashOption[id]\`:yes}{field:Linguagem\\::\`$replaceText[$replaceText[$replaceText[$replaceText[$slashOption[linguagem];aoijs;Aoi.js];djs;Discord.js];dpy;Discord.py];bdfd;Bot Designer For Discord]\`:yes}{field:Prefixo\\::\`$slashOption[prefixo]\`:yes}{field:Descrição\\::\`$replaceText[$slashOption[descrição];;Nada foi informado.]\`:yes}{color:#2b2d31}{thumbnail:$userAvatar[$slashOption[id]]}{timestamp}};{actionRow:{button:Enviar:success:enviarBot:false:✅}{button:Cancelar:danger:cancelarEnvio:false:❎}};;all;true]
    
    $setUserVar[botID;$slashOption[id]]
    $setUserVar[botLang;$slashOption[linguagem]]
    $setUserVar[botPrefix;$slashOption[prefixo]]
    $setUserVar[botDesc;$replaceText[$slashOption[prefixo];;$getVar[botDesc]]]
    $setUserVar[botOwner;$authorID;$slashOption[id]]
    
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
    
    $channelSendMessage[1076177567029153855;<@&1076179007940345877>{newEmbed:{title:📫 | Correio!}{field:🤖 | Bot\\::\`$userTag[$getUserVar[botID]]\` (*$getUserVar[botID]*):true}{field:$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[botLang];aoijs;<:aoijs:1076305357376340028>];djs;<:discordjs:1076302939322323034>];dpy;<:discordpy:1076304134896107530>];bdfd;<:bdfd:1076304688426786876>] | Linguagem\\::\`$replaceText[$replaceText[$replaceText[$replaceText[$slashOption[linguagem];aoijs;Aoi.js];djs;Discord.js];dpy;Discord.py];bdfd;Bot Designer For Discord]\`:true}{field:⚙️ | Prefixo\\::\`$getUserVar[botPrefix]\`:true}{field:📋 | Descrição\\::\`$getUserVar[botDesc]\`:true}{color:#2b2d31}{thumbnail:$userAvatar[$getUserVar[botID]]}{timestamp}{footer:Dev\\: $userTag:$userAvatar[$authorID]}}]
    
    $wait[2s]

    $channelSendMessage[1076178391482503229;<@$authorID>{newEmbed:{title:Bot Enviado!}{description:$username seu bot **__$userTag[$getUserVar[botID]]__** foi enviada para a análise!}{color:#2b2d31}{timestamp}{thumbnail:$userAvatar[$getUserVar[botID]]}}]
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