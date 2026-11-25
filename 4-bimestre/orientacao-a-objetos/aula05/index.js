
const express = require("express")

const app = express()

app.use(express.json())

const livros = [
  {
    id: 1,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis"
  },
  {
    id: 2,
    titulo: "O Cortico",
    autor: "Aluisio Azevedo"
  }
]

// GET /
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Livros"
  })
})

// GET /livros
app.get("/livros", (req, res) => {
  res.json(livros)
})

// GET /livros/total
app.get("/livros/total", (req, res) => {
  res.json({
    total: livros.length
  })
})

// POST /livros
app.post("/livros", (req, res) => {
  res.status(201).json({
    mensagem: "Livro criado"
  })
})

module.exports = app