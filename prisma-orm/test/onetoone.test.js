import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    // it("Should can create one to one", async () => {
    //     const wallet = await prismaClient.wallet.create({
    //         data: {
    //             id: "wallet1",
    //             customer_id: "1",
    //             balance: 1000000
    //         },
    //         include: {
    //             customer: true
    //         }
    //     })
    //     console.info(wallet);
    //     expect(wallet.customer.id).toBe("1")
    // })

    // it("Should can create one to one with relation", async () => {
    //     const customer = await prismaClient.customer.create({
    //         data: {
    //             id: "5",
    //             name: "amri1",
    //             email: "amri1@pzn",
    //             phone: "081234567865789",
    //             wallet: {
    //                 create: {
    //                     id: "wallet2",
    //                     balance: 1000000
    //                 }
    //             }
    //         },
    //         include: {
    //             wallet: true
    //         }
    //     })
    //     console.info(customer);
    //     expect(customer.wallet.id).toBe("wallet2")
    // })

    // it("should can find one to one relation", async () => {
    //     const customer = await prismaClient.customer.findUnique({
    //         where: {
    //             id: "5"
    //         },
    //         include: {
    //             wallet: true
    //         }
    //     })
    //     console.info(customer);
    //     expect(customer.wallet.id).toBe("wallet2")
    // })

    it("Should can find one to one with relation filter", async () => {
        const customers =  await prismaClient.customer.findMany({
            where: {
                wallet: {
                    isNot: null
                }
            },
            include: {
                wallet: true
            }
        })
        console.info(customers);
        // expect(customers.length).toBe(1)
    })
})