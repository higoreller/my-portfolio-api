import prismaClient from "../../prisma";

interface MessageRequest {
  content: string;
  email: string;
  phoneNumber: string;
}

class CreateMessageService {
  async execute({ content, email, phoneNumber }: MessageRequest) {
    const message = await prismaClient.message.create({
      data: {
        content: content,
        email: email,
        phoneNumber: phoneNumber,
      },
    });

    return message;
  }
}

export { CreateMessageService };
