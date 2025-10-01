import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
    it("Should can create and select field", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "rully1",
                name: "rully1",
                email: "rully1@dinus.id",
                phone: "364567898718"
            },
            select: {
                id: true,
                name: true,
                
            }
        });

        expect(customer.id).toBe("rully1");
        expect(customer.name).toBe("rully1");
        expect(customer.email).toBeUndefined();
        expect(customer.phone).toBeUndefined();
    });

    it("should can select field", async () => {
        const customers = await prismaClient.customer.findMany({
            
            select: {
                id: true,
                name: true,
            }
        });
        for (const customer of customers) {
            // console.log(customer);
            expect(customer.id).toBe("rully");
            expect(customer.name).toBe("rully");
            expect(customer.email).toBeUndefined();
            expect(customer.phone).toBeUndefined();
        }
    });
})