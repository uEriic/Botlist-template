module.exports = {
    type: "interaction",
    prototype: "slash",
    name: "teste",
    $if: "old",
    code: `
    $if[$isAutocomplete==true]
    $interactionReply[$autoCompleteRespond[First option;You selected the first option, therefore I'm responding with this!;Second option;You selected the first second, therefore I'm responding with this!];;;;all;false]
    $else
    $interactionReply[$slashOption[teste];;;;all;false]
    $endif
    $onlyForIDs[$botOwnerID;]
    `
}