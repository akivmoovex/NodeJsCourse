const pool = require('../db');

const getStudents = (req, res) => {
    pool.query("SELECT * FROM roles", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
})
    console.log('getting table roles')
}

module.exports = {
    getStudents,
}