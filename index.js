const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 3000;

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("x desconectou " + socket.id);
  });

  socket.on('mensagem', (data) => {
    io.emit('showMsg', data)
    console.log(data);
  })
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

http.listen(port, () => {
  console.log(`Rodando >>> http://localhost:${port}/`);
});
