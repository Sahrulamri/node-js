import { prismaClient } from "../src/prisma-client";



describe("Prisma Client", () => {
    it("should do sorting", async () => {
        const customers = await prismaClient.customer.findMany({
            skip: 0,
            take: 10,
            orderBy: [
                {
                    name: "asc"
                },
                {
                    name: "desc"
                }
            ] 
        })
        console.info(customers)
    })
})