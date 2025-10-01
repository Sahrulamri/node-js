import { prismaClient } from "../src/prisma-client"

describe("Prisma Client", () => {
    it("should can run in many record", async () => {
  const result = await prismaClient.customer.createMany({
    data: [
    {
      id: "cust101",
      name: "Budi Santoso",
      email: "budi101@example.com",
      phone: "0812345678001"
    },
    {
      id: "cust102",
      name: "Siti Aminah",
      email: "siti102@example.com",
      phone: "0812345678002"
    }
  ]
  });

  expect(result.count).toBe(2); // Perhatikan: result.count, BUKAN result langsung
});

    it("should can update in many record", async () => {
        const { count } = await prismaClient.customer.updateMany({
            where: { id: { in: ["cust101", "cust102"] } },
            data: { name: "Budi Santoso" }
        })
});

it ("should can delete in many record", async () => {
    const { count } = await prismaClient.customer.deleteMany({
        where: { id: { in: ["cust101", "cust102"] } }
    })
});

it ("should can read in many record", async () => {
    const result = await prismaClient.customer.findMany({
        
    })

    console.info(result);
    expect(result.length).toBe(10);
});

})