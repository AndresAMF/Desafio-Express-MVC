const fs = require("fs");
const path = require("path");

const controlador = {


  show: (req, res) => {
    const archivoCanciones = JSON.parse(
      fs.readFileSync("./data/canciones.json")
    );
    res.json(archivoCanciones);
  },



  create: (req, res) => {
    const archivoCanciones = JSON.parse(
      fs.readFileSync("./data/canciones.json")
    );
    const nuevaCancion = req.body;
    archivoCanciones.push(nuevaCancion);
    fs.writeFileSync(
      "./data/canciones.json",
      JSON.stringify(archivoCanciones, null, " ")
    );
    res.send("Canción agregada");
  },



  delete: (req, res) => {
    const { id } = req.params;
    const archivoCanciones = JSON.parse(
      fs.readFileSync("./data/canciones.json")
    );
    const index = archivoCanciones.findIndex((p) => p.id == id);
    archivoCanciones.splice(index, 1);
    fs.writeFileSync("./data/canciones.json", JSON.stringify(archivoCanciones));
    res.send("Canción eliminada");
  },


  
  update: (req, res) => {
    const { id } = req.params;
    const cancionEditada = req.body;
    const archivoCanciones = JSON.parse(fs.readFileSync("./data/canciones.json"));
    const index = archivoCanciones.findIndex((p) => p.id == id);
    archivoCanciones[index] = cancionEditada;
    fs.writeFileSync("./data/canciones.json", JSON.stringify(archivoCanciones));
    res.send("Canción editada");
  },
};

module.exports = controlador;
