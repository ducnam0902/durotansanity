export default {
  name: 'orderLine',
  type: 'document',
  title: 'Order Line',
  fields: [
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
    },
    {
      name: 'order',
      type: 'reference',
      title: 'Order',
      to: [{type: 'shopOrder'}],
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
}
