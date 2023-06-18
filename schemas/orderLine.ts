export default {
  name: 'orderLine',
  type: 'document',
  title: 'Order Line',
  fields: [
    {
      name: 'productItem',
      type: 'reference',
      title: 'Product Item',
      to: [{type: 'productItem'}],
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
