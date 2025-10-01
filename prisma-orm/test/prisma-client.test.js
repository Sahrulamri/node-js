import { PrismaClient } from "../generated/prisma";

describe("Prisma Client", () => {
    it("should be able to connect to the database", async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        // 
        // Write your tests here
        // 

        await prisma.$disconnect();
    })
})