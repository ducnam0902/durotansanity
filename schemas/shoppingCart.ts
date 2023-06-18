export default {
  name: 'shoppingCart',
  type: 'document',
  title: 'Shopping Cart',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
    },
  ],
}
