const { Sequelize, Model, DataTypes } = require("sequelize");
// const logger = require('../logger/api.logger');

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.USER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;

    const sequelize = new Sequelize('dvdrental', 'postgreslocal', 'postgreslocal', {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: 0,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.films = require("../models/film.model")(sequelize, DataTypes, Model);
    db.actors = require("../models/actor.model")(sequelize, DataTypes, Model);

    return db;

}

module.exports = {
    connect
}