import { Request, Response } from "express";
import { ListLibService } from "../../services/lib/ListLibService";

class ListLibController {
  async handle(req: Request, res: Response) {
    const listLibService = new ListLibService();

    const lib = await listLibService.execute();

    return res.json(lib);
  }
}

export { ListLibController };
