const { app, port } = require('./express')

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
