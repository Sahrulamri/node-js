import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {

  // Bersihkan data sebelum semua test
  beforeAll(async () => {
    await prismaClient.customer.deleteMany(); // Hapus semua customer
  });

  // Bersihkan setelah semua test (optional tapi bagus untuk kebersihan)
//   afterAll(async () => {
//     await prismaClient.customer.deleteMany();
//     await prismaClient.$disconnect(); // Tutup koneksi Prisma
//   });

  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "amri",
        name: "amri",
        email: "amri@amri",
        phone: "08123456789"
      }
    });

    expect(customer.id).toBe("amri");
    expect(customer.name).toBe("amri");
    expect(customer.email).toBe("amri@amri");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      where: { id: "amri" },
      data: { name: "sahrul amri" }
    });

    expect(customer.id).toBe("amri");
    expect(customer.name).toBe("sahrul amri");
    expect(customer.email).toBe("amri@amri");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: { id: "amri" }
    });

    expect(customer.id).toBe("amri");
    expect(customer.name).toBe("sahrul amri");
    expect(customer.email).toBe("amri@amri");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: { id: "amri" }
    });

    expect(customer.id).toBe("amri");
    expect(customer.name).toBe("sahrul amri");
    expect(customer.email).toBe("amri@amri");
    expect(customer.phone).toBe("08123456789");
  });

});
