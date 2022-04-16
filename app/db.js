import { Sequelize } from "sequelize"
import  { db_name, db_user,db_password, dialect, db_host, db_port }  from "./config/config.js"
export default new Sequelize(db_name,db_user,db_password,{
    dialect:dialect,
    host:db_host,
    port:db_port
})