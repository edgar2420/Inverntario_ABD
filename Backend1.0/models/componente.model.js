module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define('Componente', {
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    descripcion: DataTypes.STRING,
    clase: DataTypes.STRING,
    tipo: DataTypes.STRING,
    modelo: DataTypes.STRING,
    fabricante: DataTypes.STRING,
    cantidad: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    imagen_url: DataTypes.STRING,
    equipo: DataTypes.STRING,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'componentes',
    timestamps: false
  });

  return Componente;
};
