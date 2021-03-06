import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Joseph',
            email: 'Joseph.zasiebida@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'John',
            email: "user@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
        {
            name: 'Jon',
            email: "use1r@example.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            category: 'Shirt',
            image: '/images/p1.jpg',
            brand: 'Nike',
            price: 120,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas fit Shirt',
            category: 'Shirt',
            image: '/images/p2.jpg',
            brand: 'Nike',
            price: 180,
            countInStock: 10,
            rating: 4.0,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'lacoste free Shirt',
            category: 'Shirt',
            image: '/images/p3.jpg',
            brand: 'Nike',
            price: 220,
            countInStock: 0,
            rating: 4.8,
            numReviews: 17,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Shirt',
            category: 'Pants',
            image: '/images/p4.jpg',
            brand: 'Nike',
            price: 130,
            countInStock: 15,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Puma Slim Shirt',
            category: 'Shirt',
            image: '/images/p5.jpg',
            brand: 'Nike',
            price: 120,
            countInStock: 7,
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Pants',
            category: 'Shirt',
            image: '/images/p6.jpg',
            brand: 'Nike',
            price: 150,
            countInStock: 5,
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product'
        }
    ]
}
export default data