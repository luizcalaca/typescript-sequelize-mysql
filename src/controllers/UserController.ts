import { Request, Response } from "express";
import { UserModel } from "../database/UserModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { userid } = req.params;
    const user = await UserModel.findOne({
      where: {
        id: userid,
      },
    });
    return user ? res.status(200).json(user) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { email, name, age } = req.body;
    const user = await UserModel.create({
      email,
      name,
      age,
    });
    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { email, name, age } = req.body;
    const { userid } = req.params;
    const user = await UserModel.update(
      { email, name, age },
      {
        where: {
          id: userid,
        },
      }
    );
    return res.status(201).json(user);
  }

  async destroy(req: Request, res: Response) {
    const { userid } = req.params;
    const user = await UserModel.destroy({
      where: {
        id: userid,
      },
    });
    return user ? res.status(200).json(user) : res.status(204).send();
  }
}

export default new UserController();
