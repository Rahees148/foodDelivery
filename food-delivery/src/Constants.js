const prod = {
    api: {
        MOST_POPULAR: 'http://localhost:4000/mostpopular'
   }
};
const dev = {
    api: {
        MOST_POPULAR: 'http://localhost:4000/mostpopular',
        Featured_Restaurants: 'http://localhost:4000/featuredRestaurants'
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;