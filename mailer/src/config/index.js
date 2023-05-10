// получаем из docker compose.yaml снаружи
module.exports.port = process.env.PORT;
module.exports.dbPath = process.env.MONGO_URL;
module.exports.login = process.env.LOGIN;
module.exports.password = process.env.PASSWORD;
