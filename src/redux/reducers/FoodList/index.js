const initialState = {
    foodList: [
        {
            id: '0',
            image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
            title: 'Sahil\'s Tandoori - Harrow',
            kitchens: ['Indian', 'Chinese', 'Mexican'],
            rating: 4.7,
            orders: 829,
            bulkOrders: 54,
            subscriptions: 346,
            liked: true,
            starters: [
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                },
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                }
            ]
        },
        {
            id: '1',
            image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
            title: 'Sahil\'s Tandoori - Harrow',
            kitchens: ['Indian', 'Chinese', 'Mexican'],
            rating: 4.7,
            orders: 829,
            bulkOrders: 54,
            subscriptions: 346,
            liked: false,
            starters: [
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                },
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                }
            ]
        },
        {
            id: '2',
            image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
            title: 'Sahil\'s Tandoori - Harrow',
            kitchens: ['Indian', 'Chinese', 'Mexican'],
            rating: 4.7,
            orders: 829,
            bulkOrders: 54,
            subscriptions: 346,
            liked: false,
            starters: [
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                },
                {
                    image: {uri: 'https://images.unsplash.com/photo-1580916883250-437bcb0fec1d?ixlib=rb-1.2.1&w=1000&q=80'},
                    name: 'Veg Manchurian',
                    ingredients: [
                        'Potatoes', 'tomatoes', 'lemons', 'breads', 'cheeses'
                    ],
                    price: 12.00
                }
            ]
        },
    ]
};

export default FoodList = (state = initialState, action) => {
    return state
};