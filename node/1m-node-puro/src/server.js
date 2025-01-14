import http from "node:http";
import { json } from "./middewares/json.js";
import { Database } from "./database.js";

const database = new Database

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/users') {
    const users = database.select('users')

    return res.end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { id, name, email } = req.body

    const user = { id, name, email }

    database.insert('users', user)

    return res.end('Criação de usuário')
  }
})

server.listen(3333)

