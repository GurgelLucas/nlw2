import { Request, Response } from "express";
import db from "../database/connection";

export default class connectController {
  async index(req: Request, res: Response) {
    try {
      const totalConnections = await db("connections").count("* as total");

      const { total } = totalConnections[0];

      return res.status(201).json({ total });
    } catch (err) {
      return res.status(400).json({ error: "Error in list connections" });
    }
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    const trx = await db.transaction();

    try {
      await trx("connections").insert({
        user_id,
      });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();
      return res.status(400).json({ error: "Not created connection" });
    }
  }
}
