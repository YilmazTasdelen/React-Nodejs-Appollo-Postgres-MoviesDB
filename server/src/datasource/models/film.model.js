module.exports = (sequelize, DataTypes, Model) => {

    class Film extends Model { }

    Film.init({
        // Model attributes are defined here
        film_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        description: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        release_year: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        actors: {
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'films', // We need to choose the model name
        tableName: 'film',
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });

    Film.associate = function (models) {
        Group.belongsToMany(models.actors, {
            as: 'films',           // <-- alias here
            through: 'film_actor',
        });
    };
    return Film;
}