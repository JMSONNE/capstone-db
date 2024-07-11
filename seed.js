const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {

    // deletes seeded data
    await prisma.user.deleteMany()

    try {
        // creates a user 
        const user1 = await prisma.user.create({
            data: {
                username: 'jordynsonne',
                password: 'password',
                name: 'jordyn sonne',
                email: 'jordynsonne@gmail.com',
                role: "USER",

            },
        })

        console.log(user1)
        console.log("seeded the database!")

    } catch (error) {
        console.log(error)
    }




}




seed()