module.exports = (sequelize, DataTypes, Model) => {

    class Actor extends Model { }

    Actor.init({
        // Model attributes are defined here
        actor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'actors', // We need to choose the model name
        tableName: 'actor',
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });

    Actor.associate = function (models) {
        Group.belongsToMany(models.films, {
            as: 'actors',           // <-- alias here
            through: 'film_actor',
        });
    };
    return Actor;
}