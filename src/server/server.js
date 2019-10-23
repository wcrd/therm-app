import path from 'path'
import express from 'express'

const app = express(),
            DIST_DIR = __dirname,
            APP_FILE = path.join(DIST_DIR, 'index.html'),
            ABOUT_FILE = path.join(DIST_DIR, 'about.html')

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    res.sendFile(APP_FILE)
})
app.get('/about', (req, res) => {
    res.sendFile(ABOUT_FILE)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})