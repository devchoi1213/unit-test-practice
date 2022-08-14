class StubProductClient {
    async fetchItems() {
        return [
            {item: 'apple', available: true},
            {item: 'banana', available: false},
        ];
    }
}

module.exports = StubProductClient;