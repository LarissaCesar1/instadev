module.exports = (sequelize, DataTypes) => {
    let p = sequelize.define(
        "Publicacao",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            texto: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            imagem: {
                type: DataTypes.STRING(45),
                allowNull: true,
            }
        },
        {
            tableName: "publicacoes",
            timestamps: false
        }
    )

    p.associate = (models) => {
        p.belongsTo(models.Usuario, { as:"autor", foreignKey:"usuarios_id" });

    }

    return p;
}