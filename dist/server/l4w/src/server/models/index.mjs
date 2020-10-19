import { readdirSync } from "fs";
import { sep, join } from "path";
import Sequelize from "sequelize";
if (process.env.DATABASE_URL === undefined) {
    console.error("Env variable DATABASE_URL undefined!");
    process.exit();
}
let sequelizeOptions = {
    dialect: "postgres",
    protocol: "postgres",
    define: {
        timestamps: false
    },
    logging: false
};
let sequelizeInstance = new Sequelize(process.env.DATABASE_URL, sequelizeOptions);
export let models = {};
let dirname = process.cwd() + sep + "dist" + sep + "server" + sep + "l4w" + sep + "src" + sep + "server" + sep + "models";
readdirSync(dirname).filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.mjs");
}).forEach(function (file) {
    let model = sequelizeInstance.import(join(dirname, file));
    models[model.name] = model;
});
Object.keys(models).forEach(function (modelName) {
    if ("associate" in models[modelName]) {
        models[modelName].associate(models);
    }
});
models.sequelize = sequelizeInstance;
models.Sequelize = Sequelize;
