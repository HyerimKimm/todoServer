const { TODAY_DATA, TOMORROW_DATA } = require('../db/data');

module.exports = async (req,res) => {
    console.log(TODAY_DATA);
    res.status(200).send({ TODAY_DATA, TOMORROW_DATA});
}