import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListProjectBoxService {
  async execute() {
    const projectBox = await prismaClient.projectBox.findMany({
      where: {
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return projectBox;
  }
}

export { ListProjectBoxService };
