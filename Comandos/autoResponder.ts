module.exports = [{
    name: "$alwaysExecute",
    $if: "old",
    code: `
    $if[$checkContains[$message;Bom dia;Bom Dia;bom dia;bdia;bomdia;bom dia!;Bom dia!;Bom Dia!;bomdia!]==true]
    $reply
    $randomText[<@$authorID> bom dia pra quem? O dia mal começou o dia e eu já to trabalhando igual a um codenado pro corno do <@1064162067919163485>;<@$authorID> bom dia pra você meu amigo!]
    $elseif[$checkContains[$message;<@$aclientID>;<@1064162067919163485>;corno;Corno;corninho;Cornhinho;cornao;cornão;Cornao;Cornão]==true]
    $reply
    <@$authorID> o $username[1064162067919163485] é o ser mais corno desse mundo, o rei dos cornos, o embaixador da cornisse, porém, em compensação é o rei do capa. Ain ericzin papelaum!!! 😎😎😎😎😎
    $endelseif
    $endif
    $onlyIf[$isBot==false;]
    $cooldown[3s;]
    `
}]