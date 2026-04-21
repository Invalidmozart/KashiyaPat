const ffs = [
//1
"A Kashiya tem uma estranha obsessão por eletricidade.", 

//2
"A banda favorita da Kashiya é Buck-Tick!", 

//3
" 'Kashiya' é a pronuncia japonesa estilizada do nome 'Cássia'. ",

//4
"O aniversário da Kashiya é dia 14 de fevereiro, quando também se comemora o dia dos namorados em diversos países, o que é surpreendente. Digo, isso significa que ela NÃO foi concebida no Dia dos Namorados!",

//5
"Em japonês, Kashiya seria dublada por Mutsumi Tamura, que é a voz da Hermes em JoJo, e Kobayashi em Maid Dragon. Coincidentemente ela já dublou o Kakashi Criança.",

//6
"A cor favorita da Kashiya é a cor das entranhas de seus inimigos...(rosa claro).",

//7
"O maior inimigo da introversão da Kashiya é a sua própria mãe.",

//8
"O design beta da Kashiya foi reutilizado para seu design genin.",

//9
"Embora incapaz de usá-lo para algum fim prático, a Kashiya tem conhecimento da técnica do Chidori para fins de estudo(e de sua própria obsessão por eletricidade).",

//10
" ''Papai é meio ausente, eu sou meio carente, mas se falar do meu papai, cê vai ficar sem dente!'' ",
];
        
function curiosidade() {
let random = Math.floor(Math.random() * ffs.length);
        document.getElementById("curiosidade").textContent = ffs[random];
}

//Pra já iniciar com uma curiosidade nessa bagaça

let random = Math.floor(Math.random() * ffs.length);
        document.getElementById("curiosidade").textContent = ffs[random];
