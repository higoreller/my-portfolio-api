import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListInformationService {
  async execute() {
    const information = await prismaClient.information.findMany({
      where: {
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return information;
  }
}

export { ListInformationService };
