const { Client } = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const client = new Client({
  connectionString:
    "postgresql://autolensDB_owner:e4Fv0YIATVWb@ep-dry-wave-a5d77r71.us-east-2.aws.neon.tech/autolensDB?sslmode=require",
});

client.connect((error) => {
  if (error) throw error;
  console.log("Conectada a la base de datos");
});

// Endpoint para obtener los IDs de los estudiantes asociados a un profesor en sus grupos
app.get("/member/:teacherid/canva/:studentid", async (req, res) => {
  try {
    const query = `
      SELECT DISTINCT s.student_id
      FROM submission s
      JOIN teacher t ON s.canvas_group_id = t.canvas_id
      WHERE t.canvas_id = $1
    `;
    const { teacherid } = req.params;
    const { rows } = await client.query(query, [teacherid]);
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener los IDs de los estudiantes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});
