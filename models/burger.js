var ORM = reqire('../config/orm.js');

var burger = {
    commitBurger: function (burgerData) {
        return new Promise((resolve, reject) => {
            ORM.addItem('burgerDB', ['name', 'eaten'], [burgerData, false]).then((data) => {

                reject(data)

                resolve(data)
            })
        })
    },

    eatBurger: function (burgerID) {

        return new Promise((resolve, reject) => {
            ORM.editWithID('burgerDB', burgerID, 'eaten', true).then((data) => {

                reject(data)

                resolve(data)
            })
        })
    }
};

module.exports(burger);