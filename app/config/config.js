import dotenv from 'dotenv'
dotenv.config()

const db_name= process.env.db_name,
db_user = process.env.db_user,
db_password = process.env.db_password,
dialect = process.env.dialect,
db_host = process.env.db_host,
db_port = process.env.db_port

export {
    db_name,
    db_user,
    db_password,
    dialect,
    db_host,
    db_port
}
