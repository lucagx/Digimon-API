import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(express.static('public'))

//Rota para listar todos os digimons
app.get('/api/digimons', async (req, res) => {
  const digimons = await prisma.digimon.findMany()
  res.json(digimons)
})

//Rota para buscar um digimon pelo seu nome
app.get('/api/digimons/name/:name', async (req, res) => {
  const { name } = req.params;
  const digimon = await prisma.digimon.findFirst({
    where: { name },
  })

  if (!digimon) {
    return res.status(404).json({ message: 'Digimon não encontrado' });
  }
  res.json(digimon)
})


//Rota para buscar um digimon pelo seu nível
app.get('/api/digimons/level/:level', async (req, res) => {
  const { level } = req.params
  const digimons = await prisma.digimon.findMany({
    where: { level },
  })

  if (digimons.length === 0) {
    return res.status(404).json({ message: 'Não há nenhum Digimon neste nível' });
  }
  res.json(digimons)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})



