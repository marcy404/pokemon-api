Passo a passo para ajeitar o docker pra esse teste:
    1. Abrir o CMD
    2. Digitar os seguintes comandos:
        docker run -d -e POSTGRES_PASSWORD=Pokemon10 --name pokemonlearn -p 5431:5432 --restart=always postgres
        
        docker start pokemonlearn

        docker exec -it pokemonlearn bash
    
    A partir daqui, ele vai acessar o novo container postgres que tá no Docker e ir pro "root@" no cmd. Pode até abrir o docker pra ver o container lá

    3. Vai no VSCode e executa o script do arquivo "dbscript.js" (o mesmo que tá nessa pasta aqui). Ele automaticamente vai alimentar seu docker com a tabela certa pra usar pra aprendizagem (SEM FECHAR O CMD)
    OBS: o dbscript.js só executa 1 vez, depois pode até apagar o arquivo se quiser

    4. Pra confirmar que funcionou, vai no CMD que tá o root@ e digita "SELECT * FROM pokemon_list;" e dá enter