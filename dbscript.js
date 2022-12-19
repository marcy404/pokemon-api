const { Client } = require('pg');
const https = require('https');
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
    });

async function creator() {
    const client = new Client({
        host: 'localhost',
        port: 5431,
        user: 'postgres',
        password: 'Pokemon10',
        database: 'pokedb'
    });
    await client.connect();
    // const res1 = client.query(`
    //     CREATE TABLE pokemon_data(pokedex_id INT, pokemon_name VARCHAR(100), pokemon_type VARCHAR(80), is_first_generation BOOLEAN);
    // `);

    for(let i = 1; i<=521; i++) {
        let pokeName = (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {
            method: 'GET',
            agent: httpsAgent,
        })).json()).forms[0].name;
        
        let pokeType = (await (await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`), {
            method: 'GET',
            agent: httpsAgent,
        }).json()).types[0].type.name;

        let isFirst = (i <= 151) ? true : false;

        const resContinuous = client.query(`
            INSERT INTO pokemon_data(pokedex_id, pokemon_name, pokemon_type, is_first_generation) VALUES (${i}, ${pokeName}, ${pokeType}, ${isFirst});
        `);

        console.log(`OPERATION ${i} COMPLETED`);
    }
}

creator()