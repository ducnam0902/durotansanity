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
      title: 'Product Item',
      name: 'productItem',
      type: 'reference',
      to: [{type: 'productItem'}],
    },
    {
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
    },
  ],
}
