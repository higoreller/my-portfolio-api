import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListSkillService {
  async execute() {
    const skill = await prismaClient.skill.findMany({
      where: {
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return skill;
  }
}

export { ListSkillService };
