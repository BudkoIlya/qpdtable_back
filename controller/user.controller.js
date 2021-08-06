import * as UserService from "../services/user.service";
import { NotFoundError } from "../repositories/user.repository";

class UserController {
  async createLine(req, res) {
    try {
      const { name, value } = req.body;
      const newLine = await UserService.createLine(name, value);
      res.json(newLine);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async getLines(req, res) {
    try {
      const lines = await UserService.getLines();
      res.json(lines.rows);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  async updateLine(req, res) {
    try {
      const { id, name, value } = req.body;
      const line = await UserService.updateLine(id, name, value);
      res.json(line);
    } catch (err) {
      if (err instanceof NotFoundError) {
        res.status(404).send({ error: { ...err, message: err.message } });
      } else {
        res.status(500).send(err);
      }
    }
  }
  async deleteLine(req, res) {
    try {
      const id = req.params.id;
      const lineId = await UserService.deleteLine(id);
      res.json(lineId);
    } catch (err) {
      if (err instanceof NotFoundError) {
        res.status(404).send({ error: { ...err, message: err.message } });
      } else {
        res.status(500).send(err);
      }
    }
  }
}

export default new UserController();
