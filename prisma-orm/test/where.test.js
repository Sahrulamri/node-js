import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it("should do where", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                OR:[
                    {
                        name: "amri"
                    }
                ]
            },
            orderBy: [
                {
                    name: "asc"
                }
            ]
        })
        console.info(customers)
       expect(customers.length).toBe(4)
       expect(customers[0].name).toBe("amri")
    //    expect(customers[1].name).toBe("sahrul")
    })
})