const express = require('express')
const routes = express.Router()

const basePath = __dirname + "/views"

routes.get('/', (req, res) => res.sendFile(basePath + "/index.html"))
routes.get('/job', (req, res) => res.sendFile(basePath + "/job.html"))
routes.get('/profile', (req, res) => res.sendFile(basePath + "/profile.html"))
routes.get('/job/edit', (req, res) => res.sendFile(basePath + "/job-edit.html"))


module.exports = routes;