import { Request, Response } from "express";
import { ListSkillService } from "../../services/skill/ListSkillService";

class ListSkillController {
  async handle(req: Request, res: Response) {
    const listSkillService = new ListSkillService();

    const skill = await listSkillService.execute();

    return res.json(skill);
  }
}

export { ListSkillController };
