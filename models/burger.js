var ORM = reqire('../config/orm.js');

var burger = {
    commitBurger: function (burgerData) {
        return new Promise((resolve, reject) => {
            ORM.addItem('burgers', ['burgerInfo', 'eaten'], [burgerData, false]).then((data) => {

                reject(data)

                resolve(data)
            })
        })
    },

    eatBurger: function (burgerID) {

        return new Promise((resolve, reject) => {
            ORM.editWithID('burgers', burgerID, 'eaten', true).then((data) => {

                reject(data)

                resolve(data)
            })
        })
    }
};

module.exports(burger);