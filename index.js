import express from 'express'
import bodyParser from 'body-parser'

import { createReadStream } from 'fs'
import crypto from 'crypto'
import http from 'http'

import createApp from './app.js'

const app = createApp(
    express, 
    bodyParser, 
    createReadStream, 
    crypto, 
    http
);

app.listen(process.env.PORT || 3000)
