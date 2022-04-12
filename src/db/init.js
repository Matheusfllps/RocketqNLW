const Database = require("./config")// importar o banco de dados de

const initDb = {
    async init (){
        const db = await Database()// O AWAIT SERVE PARA QUE O JAVASCRIPT SÓ CONTINUE LENDO A LINHA DE CODIGO APÓS A RESPOSTA OU O RETORNO DO QUE FOI SOLICITADO 

        await db.exec(`CREATE TABLE rooms 
        (id INTEGER PRIMARY KEY, pass TEXT)`);// CRIAMOS A TABELA E PARA NÃO REPETIR O ID USAMOS O PRIMARY KEY E POR FIM PASS POIS SERÁ A SENHA PORTANTO USAMOS O TEXT
        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT, 
            read INT
        )`);

        await db.close()
    }
}
initDb.init()

