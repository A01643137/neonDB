const { Client } = require("pg");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// app.js

// const postgres = require("postgres");
// require("dotenv").config();

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

// const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
// });

// sql.connect((error) => {
//   if (error) throw error;
//   console.log("Conectada");
// });

// async function getPgVersion() {
//   const result = await sql`select version()`;

//   console.log(result);
// }

// getPgVersion();

const client = new Client({
  connectionString:
    "postgresql://autolensDB_owner:e4Fv0YIATVWb@ep-dry-wave-a5d77r71.us-east-2.aws.neon.tech/autolensDB?sslmode=require",
});
client.connect((error) => {
  if (error) throw error;
  console.log("Conectada");
});
// endpoints
// Get Student ID

//Devuelve una lista de los IDs que tiene el docente en sus grupos
app.get("/member/:teacherid/canva/:studentid", (req, res) => {
  connection.query(
    "SELECT DISTINCT s.student_id FROM submission s JOIN teacher t ON '" +
      req.params.studentid +
      "' = '" +
      req.params.teacherid +
      "'",
    (error, resultados) => {
      if (error) throw error;
      res.json(resultados);
    }
  );
});

//Ya funciona
// async function intento1() {
//   try {
//     await client.connect(); // Asegura que la conexión al cliente esté establecida
//     const selectQuery =
//       "SELECT DISTINCT s.student_id FROM submission s JOIN teacher t ON s.canvas_group_id = t.canvas_id";
//     const res = await client.query(selectQuery);
//     console.log("Consulta exitosa:", res.rows); // Imprime el resultado de la consulta
//   } catch (err) {
//     console.error("Error durante la consulta:", err);
//   } finally {
//     await client.end(); // Cierra la conexión al cliente después de la consulta
//   }
// }

//intento1();
//Insertar datos a las tablas
// async function insertData() {
//   try {
//     await client.connect(); // Ensure client connection is established
//     const insertQuery =
//       "INSERT INTO submission (id, student_id, canvas_group_id, assignment_id, sub_date) VALUES ('SUB1', 'S1', 'T1', 'ASSIGN1', '2024-04-24'), ('SUB2', 'S2', 'T1', 'ASSIGN1', '2024-04-25'), ('SUB3', 'S3', 'T2', 'ASSIGN2', '2024-04-26');";
//     const res = await client.query(insertQuery);
//     console.log("Insertion success:", res); // Output insertion result
//   } catch (err) {
//     console.error("Error during the insertion:", err);
//   }
// }
// insertData();

// async function createUsersTable() {
//   await client.connect();
//   const result = await client.query(`
// CREATE TABLE student(
// student_id TEXT PRIMARY KEY
// );
// CREATE TABLE teacher(
// canvas_id VARCHAR(45)
// );
// CREATE TABLE submission(
// id VARCHAR(45),
// student_id VARCHAR(45),
// canvas_group_id VARCHAR(45),
// assignment_id VARCHAR(45),
// sub_date DATE
// );
// CREATE TABLE assignment(
// id VARCHAR(45),
// course_id VARCHAR(45),
// language_id VARCHAR(45),
// title VARCHAR(25),
// descript TEXT,
// due_date DATE,
// pub_date DATE
// );
// CREATE TABLE language(
// id VARCHAR(45),
// l_name TEXT,
// docker_image_id VARCHAR(45)
// );
// CREATE TABLE submission_analysis(
// id VARCHAR(45),
// submission_id VARCHAR(45),
// sub_analy_date DATE
// );
// CREATE TABLE grading(
// id VARCHAR(45) PRIMARY KEY,
// analysis_id VARCHAR(45),
// passed_tests INT,
// grad_date DATE,
// instance_id VARCHAR(45)
// );
// CREATE TABLE ai_analysis(
// id VARCHAR(45) PRIMARY KEY,
// analysis_id VARCHAR(45),
// modelo TEXT,
// ai_date DATE
// );
// CREATE TABLE docker_instance(
// id VARCHAR(45),
// server_id VARCHAR(45),
// image_id VARCHAR(45)
// );
// CREATE TABLE server(
// server_id VARCHAR(45),
// location TEXT
// );
// CREATE TABLE docker_image(
// id VARCHAR(45),
// image_URL TEXT,
// language_id VARCHAR(45)
// );
//     `);
//   console.log(result);
// }

// createUsersTable();
