import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    beforeAll(async () => {
        // Hapus semua data lama
        await prismaClient.customer.deleteMany()

        // Insert ulang data agar predictable
        await prismaClient.customer.createMany({
            data: [
                { id: "1", name: "amri", email: "a1@test", phone: "1" },
                { id: "2", name: "amri", email: "a2@test", phone: "2" },
                { id: "3", name: "amri", email: "a3@test", phone: "3" },
                { id: "4", name: "amri", email: "a4@test", phone: "4" },
            ]
        })
    })

    it("should can count", async () => {
        const count = await prismaClient.customer.count({
            where: {
                name: "amri"
            }
        })
        expect(count).toBe(4)
    })
})
