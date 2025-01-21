import fs from 'node:fs/promises'


const databasePath = new URL('db.json',import.meta.url)
console.log(databasePath)

export class Database {
    #database = {}

    // ler o arquivo db.json
    constructor() {
        fs.readFile(databasePath, 'utf8')
        .then(data => {
            this.#database = JSON.parse(data)
        })
        .catch(() => {
            this.#persist()
        })
    }

    
    // criar o arquivo db.json 
    #persist(){
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table) {
        const data = this.#database[table] ?? []
        return data
    }

    insert(table, data) {
        if(Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        this.#persist()

        return data
    }
}