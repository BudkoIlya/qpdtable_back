import db from "../db";

class UserController {
  async createLine(req, res) {
    try {
      const { name, value } = req.body;
      const newLine = await db.query(
        `INSERT INTO line (name, value) values ($1, $2) RETURNING *`,
        [name, value]
      );
      res.json(newLine.rows[0]);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async getLines(req, res) {
    try {
      const lines = await db.query("SELECT * FROM line");
      res.json(lines.rows);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async updateLine(req, res) {
    try {
      const { id, name, value } = req.body;
      const user = await db.query(
        "UPDATE line set name = $1, value = $2 where id = $3 RETURNING *",
        [name, value, id]
      );
      res.json(user.rows[0]);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
  async deleteLine(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query("DELETE FROM line where id = $1", [id]);
      console.log("USER: ", user);
      res.json(id);
    } catch (err) {
      res.status(400).send({ error: err });
    }
  }
}

export default new UserController();
