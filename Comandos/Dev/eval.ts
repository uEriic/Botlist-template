module.exports = {
    name: "eval",
    aliases: "ev",
    $if: "old",
    code: `
    $if[$message!=]
    $eval[$message]
    $else
    $reply
    $updatecommands
    **✅ | Recarregado todos os comandos!**
    $endif
    $onlyForIDs[$botOwnerID;767181964644974632;]
    `
}