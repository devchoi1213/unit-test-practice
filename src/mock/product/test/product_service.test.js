const ProductService = require('../product_service.js');
const StubProductClient = require('./stub_product_client.js');

describe('product_service - Stub', () => {
   let productService;

   beforeEach(() => {
       productService = new ProductService(new StubProductClient());
   });

    it('should filter out only available items', async () => {
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([
            {item: 'apple', available: true},
        ])
    });
})