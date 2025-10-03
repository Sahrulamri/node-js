import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    // it("Should be insert many to many", async () => {
    //     const like = await prismaClient.like.create({
    //         data: {
    //             customer_id: "1",
    //             product_id: "1"
    //         },
    //         include: {
    //             customer: true,
    //             product: true
    //         }
    //     })
    //     console.info(like)
    // })

    // it("Should can find one with many to many relation", async () => {
    //     const customer = await prismaClient.customer.findUnique({
    //         where: {
    //             id: "1"
    //         },
    //         include: {
    //             likes: {
    //                 include: {
    //                     product: true
    //                 }
    //             }
    //         }
    //     })
    //     console.info(JSON.stringify(customer))
    // })

    // it("Should can find many with many to many relation", async () => {
    //     const customers = await prismaClient.customer.findMany({
    //         where: {
    //             likes: {
    //             some: {
    //                 product: {
    //                 name: {
    //                     contains: "A"
    //                 }
    //                 }
    //             }
    //             }
    //         },
    //         include: {
    //             likes: {
    //             include: {
    //                 product: true
    //             }
    //             }
    //         }
    //         })

    //         console.log(JSON.stringify(customers, null, 2))

    // })

    it("Should can create implicit relation", async () => {
        const customer = await prismaClient.customer.update({
           where : {
               id: "1"
           },
           data: {
               loves: {
                   connect: [
                    {id: "1"},
                    {id: "2"}
                   ]
               }
           },
           include: {
            loves: true
           }
    })
    console.info(JSON.stringify(customer))
})

    it("Should can find many with explicit relation", async () => {
        const customer = await prismaClient.customer.findMany({
          where: {
              loves: {
                  some: {
                      name: {
                          contains: "A"
                      }
                  }
              }
          },
          include: {
              loves: true
          }
    })
    console.info(JSON.stringify(customer))
    })
})