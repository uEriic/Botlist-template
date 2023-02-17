module.exports = {
    type: "interaction",
    prototype: "slash",
    name: "addbot",
    code: `
    $interactionReply[<@$authorID>;{newEmbed:{title:<a:Prints_dark:1075957686518157392> | Verifique os dados...}{field:Nome\\::\`$userTag[$slashOption[id]]\`:yes}{field:ID\\::\`$slashOption[id]\`:yes}{field:Linguagem\\::\`$replaceText[$replaceText[$replaceText[$replaceText[$slashOption[linguagem];aoijs;Aoi.js];djs;Discord.js];dpy;Discord.py];bdfd;Bot Designer For Discord]\`:yes}{field:Prefixo\\::\`$slashOption[prefixo]\`:yes}{field:Descrição\\::\`$replaceText[$slashOption[descrição];;Nada foi informado.]\`:yes}{color:#2b2d31}{thumbnail:$userAvatar[$slashOption[id]]}{timestamp}};;;all;true]
    
    $onlyIf[$memberExists[$slashOption[id]]==false;**❌ | <@$authorID> você não pode adicionar este bot pois ele já está nesse servidor.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[totalBots]<$getUserVar[maxBots];**❌ | <@$authorID> você excedeu seu limite de bots! __Você possui__: \`$getUserVar[totalBots]/$getUserVar[maxBots] bots\`** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    $onlyIf[$getUserVar[blacklist]==false;**❌| <@$authorID> você está na blacklist do servidor, por tanto está proibido de enviar seus bots para a analise.** {options:{ephemeral: true}}{extraOptions:{interaction: true}}]
    `
}