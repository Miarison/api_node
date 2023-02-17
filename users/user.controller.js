const {
    create,
    getUsers,
    deleteUser,
    updateUser,
} = require('./user.service');


module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(body);
        create(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: 'Database connection error',
                    data:err
                })
            }
            return res.status(200).json({
                success: 1,
                message:"user created successfully!",
                data: results
            })
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;

            }
            return res.json({
                success: 1,
                data: results
            });
        })
    },
    deleteUser: (req, res) => {
        const data = req.params
        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                return res.json({
                    success: 1,
                    message: "user deleted successfully"
                })
            }
           
        })
    },
    updateUser: (req, res) => {
        const data = req.body;
        updateUser(data, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                })
            }
            return res.json({
                success: 1,
                message: "user updated successfully"
            })
        })
    },
}