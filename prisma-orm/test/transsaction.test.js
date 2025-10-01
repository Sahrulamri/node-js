import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it("should can run in sequential transaction mode", async () => {
       const [amri, sahrul] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "amri2",
                    name: "amri",
                    email: "amri@example2.com",
                    phone: "08123456789732"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "sahrul2",
                    name: "sahrul",
                    email: "sahrul@sahrul2",
                    phone: "081234567899332"
                }
            })
        ])

        expect(amri.name).toBe("amri")
        expect(sahrul.name).toBe("sahrul")
    })

    it("should can run in interactive transaction mode", async () => {
       const [amri, sahrul] = await prismaClient.$transaction(async (prisma) => {
           const amri = await prisma.customer.create({
                data: {
                    id: "amri4",
                    name: "amri",
                    email: "amri2@example3.com",
                    phone: "081234567781"
                }
            })
            const sahrul = await prisma.customer.create({
                data: {
                    id: "sahrul3",
                    name: "sahrul",
                    email: "sahrul2@sahrul2",
                    phone: "081456789981"
                }
            })

            return [amri, sahrul]
       })

        expect(amri.name).toBe("amri")
        expect(sahrul.name).toBe("sahrul")
    })
})