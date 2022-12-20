const axios = require('axios');
const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5431,
    user: 'postgres',
    password: 'Pokemon10',
    database: 'pokemon_practice'
});

let pokeObjectList = [];

async function connectPgAndCreator() {
    try {
        console.log('Starting setup process...');
        await client.connect();
        await client.query(`CREATE TABLE pokemon_data(id INT UNIQUE NOT NULL, pokemon_name VARCHAR(100), pokemon_type VARCHAR(20), is_first BOOLEAN);`);

        await getPokemon(584)

        for(const object of pokeObjectList) {
            let params = [ object.index, object.name, object.type, object.isFirst ]

            await client.query(`INSERT INTO pokemon_data VALUES ($1, $2, $3, $4)`, params);

            console.log(`[ ${object.index} ] - Pokemon ${(object.name).toUpperCase()} successfully logged`)
        }

        console.log('SETUP PROCESS ENDED SUCCESSFULLY!');
    } catch (error) {
        console.log('DEU PROBLEMA EM ALGUMA PARTE DO CLIENT.CONNECT / QUERY');
        throw error;
    } finally {
        return
    }
}

async function getPokemon(quantity) {
    try {
        console.log('Catching all pokemon...')
        for(let i = 1; i <= quantity; i++) {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`, {"headers": { "Accept-Encoding": "gzip,deflate,compress"}});

            let pokeObject = {
                index : i,
                name : response.data.name,
                type : response.data.types[0].type.name,
                isFirst : (i <= 151) ? true : false
            }

            pokeObjectList.push(pokeObject);
        }
        console.log('Pokemon caught with success!')

    } catch (error) {
        console.log('DEU PROBLEMA EM ALGUMA PARTE DO FOR');
        console.log(error)
    }
}

connectPgAndCreator()