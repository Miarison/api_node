const pool = require('../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into user(name, lastname, username, password) values(?,?,?,?)`,
            [
                data.name,
                data.lastname,
                data.username,
                data.password,
            ],
            (error, results) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getUsers: callback => {
        pool.query(
            `select id, name, lastname, username, password from user`,
            [],
            (error, results, fields) => {
                if (error){
                    return callback(error);
                }
                return callback(null, results);
            }
            );

    },
    updateUser: (data, callback) => {

        pool.query(
            `update user set name=?, lastname=?, username=?, password=? where id=?`,
            [
                data.name,
                data.lastname,
                data.username,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from user where id = ?`,
            [data.id],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results[0]);

            }
        );
    },
    
};