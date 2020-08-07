const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const CompanyRouter = require("./companies/company-router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/company', CompanyRouter)

server.get("/", (req, res) => {
    res.send("hi hi hi")
})

module.exports = server;