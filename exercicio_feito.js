// importando o módulo FileSystem
const fs = require('fs');

// importando o módulo do pg e configurando o client/a pool
const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5431,
    user: 'postgres',
    password: 'Pokemon10',
    database: 'pokemon_practice'
});

// Começando a função async
(async () => {
    // Conectando com o client/com a pool
    await client.connect();
    
    // Pegando a quantidade de dados que precisamos colocar no arquivo
    const pkmnQuantity = await client.query({
        rowMode: 'array',
        text: `SELECT COUNT(id) FROM pokemon_data`
    })

    // Fazendo um for para a quantidade de 
    for(let i = 0; i <= Number(pkmnQuantity.rows[0][0]); i++) {
        try {
            // Procurando o pokemon
            const id = [i];
            const result = await client.query({
                rowMode: 'array',
                text: `SELECT * FROM pokemon_data WHERE id = $1`
            }, id);

            // Tendo certeza que o arquivo existe
            fs.readFileSync(`.\\export\\test.csv`);

            // Se existir, adicionar o pokemon certo da maneira certa no arquivo
            fs.open(`.\\export\\test.csv`, 'a+', (err, fd) => {
                if (err) throw err;
                fs.appendFile(fd, `\n${result.rows[0][1]},${result.rows[0][2]},${result.rows[0][3]}`, (err) => {if (err) throw err});
            });
            
            // Informando que deu certo
            console.log(`[${result.rows[0][0]}] - Pokemon ${(result.rows[0][1]).toUpperCase()} done!`);
        } catch {
            // Se não existir, criar o arquivo com o header correto
            fs.open(`.\\export\\test.csv`, 'a+', (err, fd) => {
                if (err) throw err;
                fs.appendFile(fd, `pokemon_name,pokemon_type,is_1st_gen`, (err) => {if (err) throw err});
            });

            // Informando que deu certo
            console.log('HEADER APPEND DONE');
        }
    }
})();