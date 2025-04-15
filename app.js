const express = require('express')
const { version } = require('./package.json')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send(`v${version} - built at ${new Date().toISOString()}`)
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  '
  res.send('ok')
})
