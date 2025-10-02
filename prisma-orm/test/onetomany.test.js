import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    // it("should do one to many", async () => {
    //     const comments = await prismaClient.comment.create({
    //         data: {
    //             customer_id: "1",
    //             title: "Insert Comment",
    //             description: "Insert Comment"
    //         },
    //         include: {
    //             customer: true
    //         }
    //     })
    //     console.info(comments)
    // })

    // it("Should can insert and many relation", async () => {
    //     const customer = await prismaClient.customer.create({
    //         data: {
    //             id: "alex",
    //             name: "Alex",
    //             email: "alex@gmail.com",
    //             phone: "68796576879",
    //             comments: {
    //                 createMany: {
    //                     data: [
    //                         {
    //                             title: "Coments 1",
    //                             description: "Description 1"
    //                         },
    //                         {
    //                             title: "Comment 2",
    //                             description: "Description 2"
    //                         }
    //                     ]
    //                 }
    //             }
    //         },
    //         include: {
    //             comments: true
    //         }
    //     })
    //     console.info(customer)
    // })

    it("Should can find one to many", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        })
        console.info(JSON.stringify(customers))
    })
})