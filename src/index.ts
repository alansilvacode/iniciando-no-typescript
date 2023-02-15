import Express, { Application } from 'express'

const app: Application = Express()

app.listen(3000, () => {
  console.log('ok')
})
