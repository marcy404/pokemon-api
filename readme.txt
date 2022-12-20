Olá! Isso aqui é um exercício de prática de JS/TS com SQL, async e chamada de API externa

Antes de começar o exercício, é necessário seguir certinho o passo a passo do setup.txt. Se não seguir como está escrito nele, não vai dar certo o script de setup e vai ficar mais demorado pra começar o exercício em si...

Bom, agora que o setup foi terminado, o exercício consiste de uma tarefa relativamente "simples":
    Usando um module chamado "fs" e outro chamado "pg", faça consultas na DataBase que tem uma tabela com 584 pokemons, transformando-a em um arquivo .csv que siga o seguinte padrão:

        "id,nomeDoPokemon,tipoDoPokemon"

    Requisitos:
        1. O arquivo tem que ser feito automaticamente pelo seu código, de modo que fique na pasta "export" (que encontra-se vazia no começo da prática)

        2. O arquivo precisa ter como primeira linha o nome de cada coluna (ou seja, a primeira linha tem que ser exatamente igual a que eu escrevi como o "padrão" do csv)

    Práticas bônus:
        O objetivo do exercício é praticar a escrita de códigos com async e usando módulos do JS. Porém, para complementar, alguns conceitos de TypeScript seriam bem legais se trabalhados aqui...

        A. Faça uma interface no arquivo "objeto.interface.ts", que está na pasta "models", de modo que use ela como padrão ao converter os dados de cada pokemon para JSON para poder depois usar com o FS


Se qualquer dúvida ou problema aparecer, pode me chamar que eu vou tentar te ajudar!
(também seria legal uns updates de vez em quando sobre como está indo seu progresso durante o exercício, imagino que você vá encontrar vários erros e, como eu não usei o pg no typescript, não sei como exatamente ele vai funcionar).

Bons estudos! ;)