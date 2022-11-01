import prismaClient from "../../prisma";

class ListHeadingService {
  async execute() {
    const heading = await prismaClient.heading.findMany({
      select: {
        id: true,
        title: true,
        subtitle: true,
      },
    });

    return heading;
  }
}

export { ListHeadingService };
