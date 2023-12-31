const db = require('../config/db');

class HomeControllers {
    //[GET] /
    show(req, res, next) {
        // Creating Query
        let query =
            "SELECT id, name, description, DATE_FORMAT(date,'" +
            '%Y-%m-%d' +
            "') as date , piority FROM todolist";

        db.query(query, function (err, result) {
            if (err) return res.status(400);
            res.status(200).json({ data: result });

        });
    }

    //[GET] /search
    search(req, res, next) {
        var { q } = req.query;
        var query;

        // Creating Query
        query =
            "SELECT id, name, description,  DATE_FORMAT(date,'" +
            '%Y-%m-%d' +
            "') as date, piority FROM todolist WHERE name REGEXP '" +
            q +
            "'";

        //response
        db.query(query, function (err, result) {
            if (err) return res.status(400);
            res.status(200).json({ data: result });
        });
    }

    //[POST] /add
    add(req, res, next) {
        var data = req.body;
        console.log(data);
        var query, getQuery;

        // Creating Query
        query =
            "INSERT INTO `todolist` ( `name`, `description`, `date`, `piority`) VALUES ( '" +
            data.name +
            "' ,'" +
            data.description +
            "' ,'" +
            data.date +
            "' ,'" +
            data.piority +
            "')";


        // Creating Query
        getQuery =
        "SELECT id, name, description, DATE_FORMAT(date,'" +
        '%Y-%m-%d' +
        "') as date , piority FROM todolist";
        
        //response
        db.query(query, function (err, result) {
            if (err) return res.status(400);
        });

        db.query(getQuery, function (err, result) {
            if (err) return res.status(400);
            res.status(200).json({ data: result });
        });

    }

    //[PUT] /update
    update(req, res, next) {
        var data = req.body;
        var query;

        // Creating Query
        query =
            "UPDATE `todolist` SET name = '" +
            data.name +
            "', description = '" +
            data.description +
            "', date = '" +
            data.date +
            "', piority = '" +
            data.piority +
            "' WHERE id = '" +
            data.id +
            "'";

        //response
        db.query(query, function (err, result) {
            if (err) return res.status(400);
        });
    }

    //[DELETE] /delete
    delete(req, res, next) {
        var data = req.body;
        var query;

        // Creating Query
        query = "DELETE  FROM todolist WHERE id = '" + data.id + "'";

        //response
        db.query(query, function (err, result) {
            if (err) return res.status(400);
        });
    }
}

module.exports = new HomeControllers();
