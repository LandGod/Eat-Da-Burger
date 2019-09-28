var ORM = require('../config/orm.js');

var burger = {
    commitBurger: function (burgerData) {
        return new Promise((resolve, reject) => {
            ORM.addItem('burgers', ['burgerInfo'], [burgerData]).then(
                (result) => { resolve(result) }).catch((err) => { reject(err) }
            )
        })
    },

    eatBurger: function (burgerID) {
        return new Promise((resolve, reject) => {
            ORM.editWithID('burgers', burgerID, 'eaten', 1).then(
                (result) => { resolve(result) }).catch((err) => { reject(err) }
            )
        })
    },

    getUneaten: function () {
        return new Promise((resolve, reject) => {
            ORM.selectWhere('burgers', 'eaten', 0).then(
                (result) => { resolve(result) }).catch((err) => { reject(err) }
                )
        })
    },

    getEaten: function () {
        return new Promise((resolve, reject) => {
            ORM.selectWhere('burgers', 'eaten', 1).then(
                (result) => { resolve(result) }).catch((err) => { reject(err) }
                )
        })
    }

};

module.exports = burger;