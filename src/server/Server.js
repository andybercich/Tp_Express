const express = require("express");
const path = require("path");

const startServer = (variablesEntorno) => {
    const app = express();
    const distPath = path.join(__dirname, "../../dist");
    
    app.use(express.static(distPath));
    
    app.get("/", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
    
    app.listen(variablesEntorno.port, () => {
        console.log(`Servidor corriendo en el puerto ${variablesEntorno.port}`);
    });
};

module.exports = { startServer };