const {response} = require('express');

const getUsuarios = (req, res = response) => {

    const {q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get api - controlador',
        q,
        nombre,
        apikey
    });
}

const postUsuarios = (req, res = response) => {

    //const body = req.body;
    const {nombre} = req.body;

    res.json({
        msg: 'post api - controlador',
        nombre
    });
}

const putUsuarios = (req, res = response) => {

    const id = req.params.id;
    

    res.json({
        msg: 'put api - controlador',
        id
    });
}

const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete api - controlador'
    });
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}