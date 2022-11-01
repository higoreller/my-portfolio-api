import { Request, Response } from "express";
import { ListProjectBoxService } from "../../services/projectBox/ListProjectBoxService";

class ListProjectBoxController {
  async handle(req: Request, res: Response) {
    const listProjectBoxService = new ListProjectBoxService();

    const projectBox = await listProjectBoxService.execute();

    return res.json(projectBox);
  }
}

export { ListProjectBoxController };
