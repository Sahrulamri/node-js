import { prismaClient } from "../src/prisma-client";



describe("Prisma Client", () => {
    it("should do pagging", async () => {
        const page1 = await prismaClient.customer.findMany({
            skip: 0,
            take: 2
        })

        const page2 = await prismaClient.customer.findMany({
            take: 2,
            skip: 2
        })

        expect(page1.length).toBe(2)
        expect(page2.length).toBe(2)
    })
})