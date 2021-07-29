const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "testdb",
});

app.post("/add", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const disease = req.body.disease;
  const doctor = req.body.doctor;

  db.query(
    "INSERT INTO patients (name, age, gender, disease, doctor) VALUES(?,?,?,?,?)",
    [name, age, gender, disease, doctor],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/patients", (req, res) => {
  db.query("select * from patients", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/patient/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM patients WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const disease = req.body.disease;
  const doctor = req.body.doctor;
  db.query(
    "UPDATE patients SET name = ?, age = ?, gender = ?, disease = ?, doctor = ? WHERE id = ?",
    [name, age, gender, disease, doctor, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM patients WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3002, () => {
  console.log("connected");
});
