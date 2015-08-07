// definicion del modelo de Quiz
// define como es la tabala quiz

module.exports = function( sequelize, DataTypes){
	return sequelize.define('Quiz',{
		pregunta: DataTypes.STRING,
		respuesta: DataTypes.STRING
	});
};