const express = require('express');
const {getStock, getKOS} = require('./CrollStock');
const app = express();
const http = require("http");
const server = http.createServer(app);
const {pool} = require('./DB');
const {isDate} = require('./Time');
let stock_codes = [];
let kos_codes = [];
getStock_codes();
getKOS_codes();

// app.get("/", (req, res)=>{

// });

server.listen(9090, ()=>{
    setInterval(()=>{
        if(!isDate()) {
            crollStock();
            crollKOS();
        }
    }, 1000);
    console.log('9090 포트에서 구동 중');
});

async function getStock_codes(){
    let result = await pool.query("SELECT code FROM stock_kinds");
    stock_codes = result[0].map(x=> x.code);
}

async function getKOS_codes(){
    let result = await pool.query("SELECT code FROM stock_kos");
    kos_codes = result[0].map(x=> x.code);
}

async function crollStock(){
    for(let x of stock_codes){
        let result = JSON.parse(await getStock(x)).result;
        let json = result.areas[0].datas[0];
        await pool.query("INSERT INTO stock_datas VALUES (?, ?, ?)", [json.cd, json.nv, new Date(result.time)]);
    }
}

async function crollKOS(){
    for(let x of kos_codes){
        let result = JSON.parse(await getKOS(x)).result;
        let json = result.areas[0].datas[0];
        await pool.query("INSERT INTO stock_kos_datas VALUES(?, ?, ?)", [json.cd, json.nv, new Date(result.time)]);
    }
}
