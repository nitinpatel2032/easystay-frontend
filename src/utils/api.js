// Mock placeholder
export default {
    get: async (url) => {
        return { data: { id: 1, title: 'Mock Listing', price: '$100', description: 'A mock listing.' } };
    }
};
