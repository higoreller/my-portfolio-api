import { Request, Response } from "express";
import { ListInformationService } from "../../services/information/ListInformationService";

class ListInformationController {
  async handle(req: Request, res: Response) {
    const listInformationService = new ListInformationService();

    const information = await listInformationService.execute();

    return res.json(information);
  }
}

export { ListInformationController };
