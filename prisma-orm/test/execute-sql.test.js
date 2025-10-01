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

  it("should be able to connect to the database", async () => {
    const id = Date.now().toString(); // biar selalu unik
    const name = "amri";

    const impacted = await prisma.$executeRaw`
      INSERT INTO sample (id, name) VALUES (${id}, ${name})
    `;
    expect(impacted).toBe(1);
  });
});
