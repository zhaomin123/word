const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const httpProxyMiddleware = require("http-proxy-middleware");
const config = require("./server.config.json");
const env = process.env.type || "dev";
const startConfig = config[env];

var app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(morgan());

app.use('/api', httpProxyMiddleware({
    target: startConfig.proxy,
    changeOrigin: true
}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const port = startConfig.port || 3333;
app.listen(port, () => {
    console.log('The server is running at http://localhost:' + port + '/');
});
