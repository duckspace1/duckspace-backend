const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors()); // <--- esto habilita CORS
app.use(express.json());

const hashesValidos = ["ab3d", "cafe", "9f7c", "1a2b"];

app.post("/verificar", (req, res) => {
  const { hash } = req.body;

  if (typeof hash === "string" && hashesValidos.includes(hash.toLowerCase())) {
    return res.json({ acceso: true });
  } else {
    return res.json({ acceso: false });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
