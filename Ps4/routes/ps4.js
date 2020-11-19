const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const fetchoption = require('../Config/config');
const Convert = require('../ConvertFunction');
const redis = require('redis');
const rejson = require('redis-rejson')
const {promisify} = require('util');

rejson(redis)
const client = redis.createClient();

const asyncGet = promisify(client.get).bind(client)
const asyncSet = promisify(client.set).bind(client)
const asyncExist = promisify(client.exists).bind(client)
const asyncExpire = promisify(client.expire).bind(client)

client.flushdb();

const getData = async (CountryCode) => {
    let rawCovidData = await fetch(fetchoption.fetchoptions.url + CountryCode);
    let cleanCovidData = await rawCovidData.json();
    return cleanCovidData;
}

router.post('/', async (req, res, next) => {
    let CountryName = req.body.CountryName
    if (await asyncExist(CountryName)){
        let data = await asyncGet(CountryName)
        let response = {
            Country: CountryName,
            cashed: true,
            data: JSON.parse(data)
        }
        res.send(response)
    }
    else{
        let CountryCode = Convert.getCountryCode(CountryName)
        getData(CountryCode).then(async covid19apicall => {
            let covid19data = covid19apicall.data
            let cache = await asyncSet(CountryName, JSON.stringify(covid19data))
            cache = await asyncExpire(CountryName,15)
            let response = {
                Country:CountryName,
                cashed: false,
                data:covid19data
            }
            res.send(response)
        })
    }
});


module.exports = router;
