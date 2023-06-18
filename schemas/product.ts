export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'productName',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'productCategory'}],
    },
  ],
}
