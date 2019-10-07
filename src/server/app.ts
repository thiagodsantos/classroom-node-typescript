import express from 'express';

class App {
    private express: express.Application;

    constructor () {
        this.express = express();
    }

    middleware () {
        this.express.use(express.json());
    }
}