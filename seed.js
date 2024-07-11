const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {

    // deletes seeded data
    await prisma.user.deleteMany()
    await prisma.product.deleteMany()

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
        console.log("Added test user!")

        // creates a product
        const product1 = await prisma.product.create({
            data: {
                name: "JavaScripts Coffee",
                description: "The best coffee on Earth!",
                price: 99999999999.99
            }
        })

        console.log(product1)
        console.log("Added test product(s)!")


        console.log("Seeded the database!")

    } catch (error) {
        console.log(error)
    }




}




seed()