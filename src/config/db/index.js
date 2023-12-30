const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose
            .connect('mongodb://localhost:27017/ame_education_dev')
            .then(() => console.log('Connected DB!'));
    } catch (error) {
        console.log('Falied DB!');
    }
}

module.exports = { connect };
