import { Request, Response } from "express";
import { CreateMessageService } from "../../services/message/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { content, email, phoneNumber } = req.body;

    const createMessageService = new CreateMessageService();

    const message = await createMessageService.execute({
      content,
      email,
      phoneNumber,
    });

    return res.json(message);
  }
}

export { CreateMessageController };
