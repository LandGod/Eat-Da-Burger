var connection = require("./connection.js");

var orm = {
    selectWhere: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        return new Promise((resolve, reject) => {
            connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {

                if (err) {reject(err)};

                resolve(result);
            });
        })
    },

    addItem: function(tableInput, colsToAdd, colValues) {

        // Check input
        if (colsToAdd.length !== colValues.length) {throw('Bad Query: Number of columns and number of values not the same. orm.js line 21.')};

        // Construct query string with correct number of '?'
        var queryString = "INSERT INTO ?? (??";
        for (let i = 1; i < colsToAdd.length; i++) {
            queryString += ', ??';
        }
        queryString += ') VALUES (?';
        for (let i = 1; i < colsToAdd.length; i++) {
            queryString += ', ?';
        }
        queryString += ')';

        // Concatenate both input lists into a single input list for connection.query
        let allInputs = [];
        allInputs.push(tableInput);
        allInputs.push(...colsToAdd);
        allInputs.push(...colValues);

        // Return thenable query promise with inputs plugged in
        return new Promise((resolve, reject) => {
            connection.query(queryString, allInputs, function (err, result) {

                if (err) {reject(err)};

                resolve(result);
            });
        });
    },

    editWithID: function(tableInput,id, columnToEdit, newData) {
        
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"

        return new Promise((resolve, reject) => {
            connection.query(queryString, [tableInput, columnToEdit, newData, id], function (err, result) {

                if (err) {reject(err)};

                resolve(result);

            });
        })
    }

};

module.exports = orm;