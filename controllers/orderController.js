const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createOrder = async (req, res) => {
    const { products } = req.body;

    try {
        const order = await prisma.order.create({
            data: {
                userId: req.user.userId,
                products: {
                    create: products.map(product => ({
                        productId: product.id,
                        quantity: product.quantity
                    }))
                }
            }
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            where: { userId: req.user.userId },
            include: {
                products: {
                    include: { product: true }
                }
            }
        });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
