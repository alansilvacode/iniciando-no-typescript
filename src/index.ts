import Express, { Application } from 'express'
import cors from 'cors'

const app: Application = Express()

app.use(cors())

app.listen(3000, () => {
  console.log('ok')
})
