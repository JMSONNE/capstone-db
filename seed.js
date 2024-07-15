const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {

    // deletes seeded data
    await prisma.user.deleteMany()
    await prisma.product.deleteMany()
    await prisma.cart.deleteMany()

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

        //  creates a cart for the test user
        const cart1 = await prisma.cart.create({
            data: {
                user: {
                    connect: { id: user1.id },
                },
            },
        });
        console.log(cart1)
        console.log("Created test cart!")

        // adds product to test cart
        const cartItem1 = await prisma.cartItem.create({
            data: {
                quantity: 1,
                product: {
                    connect: { id: product1.id },
                },
                cart: {
                    connect: { id: cart1.id }
                }
            }
        })




        console.log("Seeded the database!")

    } catch (error) {
        console.log(error)
    }




}




seed()