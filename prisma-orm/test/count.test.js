import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it("should can count", async () => {
        const count = await prismaClient.customer.count({
            where: {
                name: "amri"
            }
        })
        expect(count).toBe(4);
    })
})