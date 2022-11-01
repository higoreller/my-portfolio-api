import { Request, Response } from "express";
import { ListHeadingService } from "../../services/heading/ListHeadingService";

class ListHeadingController {
  async handle(req: Request, res: Response) {
    const listHeadingService = new ListHeadingService();

    const heading = await listHeadingService.execute();

    return res.json(heading);
  }
}

export { ListHeadingController };
