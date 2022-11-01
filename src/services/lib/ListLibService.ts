import { PrismaClient } from "@prisma/client";
import prismaClient from "../../prisma";

class ListLibService {
  async execute() {
    const lib = await prismaClient.lib.findMany({
      where: {
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return lib;
  }
}

export { ListLibService };
