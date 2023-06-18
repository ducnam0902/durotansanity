export default {
  name: 'productItem',
  type: 'document',
  title: 'Product Item',
  fields: [
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'productColor'}],
    },
    {
      name: 'size',
      type: 'reference',
      title: 'Size',
      to: [{type: 'size'}],
    },
    {
      name: 'sku',
      type: 'string',
      title: 'Sku',
    },
    {
      name: 'quanityStock',
      type: 'number',
      title: 'Quanity in stock',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
}
