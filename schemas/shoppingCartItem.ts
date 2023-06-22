export default {
  name: 'shoppingCartItem',
  type: 'document',
  title: 'Shopping Cart Item',
  fields: [
    {
      title: 'Cart',
      name: 'cart',
      type: 'reference',
      to: [{type: 'shoppingCart'}],
    },
    {
      title: 'product',
      name: 'product',
      type: 'reference',
      to: [{type: 'product'}],
    },
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
    },
  ],
}
