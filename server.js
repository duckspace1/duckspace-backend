const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // ← Esta línea es la clave

const hashesValidos = ["ab3d", "cafe", "9f7c", "1a2b"];

app.post("/verificar", (req, res) => {
  const { hash } = req.body;

  if (typeof hash === "string" && hashesValidos.includes(hash.toLowerCase())) {
    return res.json({ acceso: true });
  } else {
    return res.json({ acceso: false });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
