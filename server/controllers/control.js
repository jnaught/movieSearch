
const axios = require('axios');
const bodyParser = require('body-parser');
const app = require('express');

const { apiKey } = require("./../config");
let getData = (req, res, next) => {
    console.log(req.body);
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req.body.searchMovie}`)
    .then(response => {
        const selectedMovie = response.data.results[0];
        axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${apiKey}&append_to_response=videos,images,casts`)
        .then(res2=>{
            console.log(res2);
            return res.status(200).json(res2.data)
        })
        // return res.json(response.data);
    });
};

module.exports = {
    getData
};