import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListMessageService {
  async execute() {
    const message = await prismaClient.message.findMany({
      where: {
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return message;
  }
}

export { ListMessageService };
