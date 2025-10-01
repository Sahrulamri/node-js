import { PrismaClient } from "../generated/prisma";

describe("Prisma Client", () => {
  let prisma;

  beforeAll(async () => {
    prisma = new PrismaClient();
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should be able to query sql", async () => {
    const id = Date.now().toString(); // biar selalu unik
    const samples = await prisma.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of samples) {
      console.info(`id: ${sample.id}, name: ${sample.name}`);
    }
    
  });
});
