import { PROFILE, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

   const user = await prisma.user.create({
      data: {
         email: "teste.teste.com",
         password: "102030",
         profile: PROFILE.ADMIN,
      }
   })
}
main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
   })