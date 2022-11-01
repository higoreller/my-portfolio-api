import { Request, Response } from "express";
import { ListMessageService } from "../../services/message/ListMessageService";

class ListMessageController {
  async handle(req: Request, res: Response) {
    const listMessageService = new ListMessageService();

    const message = await listMessageService.execute();

    return res.json(message);
  }
}

export { ListMessageController };
