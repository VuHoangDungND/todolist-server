const db = require('../config/db');

class HomeControllers {
    //[GET] /
    show(req, res, next) {
        // Creating Query
        let query =
            "SELECT id, name, description, tick, DATE_FORMAT(date,'" +
            '%Y-%m-%e' +
            "') as date , piority FROM todolist";

        db.query(query, function (err, result) {
            if (err) return res.status(400);
            console.log(result);
            res.status(200).json({ data: result });
        });
    }

    //[GET] /search
    search(req, res, next) {
        var { q } = req.query;
        var query;

        // Creating Query
        query =
            "SELECT id, name, description, tick,  DATE_FORMAT(date,'" +
            '%Y-%m-%e' +
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
        var query;

        // Creating Query
        query =
            "INSERT INTO `todolist` ( `name`, `description`, `tick`, `date`, `piority`) VALUES ( '" +
            data.name +
            "' ,'" +
            data.description +
            "' ,'" +
            data.tick +
            "' ,'" +
            data.date +
            "' ,'" +
            data.piority +
            "')";

        //response
        db.query(query, function (err, result) {
            if (err) return res.status(400);
        });
    }

    //[PUT] /update
    update(req, res, next) {
        var data = req.body;
        data = { ...data, tick: data.tick === true ? '1' : '0' };
        var query;

        // Creating Query
        query =
            "UPDATE `todolist` SET name = '" +
            data.name +
            "', description = '" +
            data.description +
            "', tick = '" +
            data.tick +
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
