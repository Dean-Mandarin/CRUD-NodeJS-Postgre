const db = require('../db');

class UserController {
    async createUser(req, res) {

        const {first_name, last_name, email, gender, date_of_birth, country_of_birth} = req.body;
        const newPerson = await db.query(`INSERT INTO employee
                ( first_name, last_name, email, gender, date_of_birth, country_of_birth)
                values ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [ first_name, last_name, email, gender, date_of_birth, country_of_birth]);

       res.json(newPerson.rows[0]);

    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM employee');
        res.json(users.rows);
    }

    async getOneUser(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM employee where id = $1', [id]);
        res.json(user.rows[0]);
    }

    async updateUser(req, res) {
        const id = req.params.id;
        console.log(id);
        console.log(req.body);
        const {first_name, last_name, email, gender, date_of_birth, country_of_birth} = req.body;
        const user = await db.query(`UPDATE employee set first_name = $1, last_name = $2, 
            email = $3, gender = $4, date_of_birth = $5, country_of_birth = $6 where id = ${id} RETURNING *`,
                [first_name, last_name, email, gender, date_of_birth, country_of_birth]
            )
        res.json(user.rows[0]);
    }

    async deleteUser(req, res) {
        const id = req.params.id;
        const user = await db.query('DELETE FROM employee where id = $1', [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new UserController();