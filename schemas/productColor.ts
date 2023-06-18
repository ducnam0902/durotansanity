export default {
  name: 'productColor',
  type: 'document',
  title: 'Product Color',
  fields: [
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
    },
    {
      name: 'color',
      type: 'reference',
      title: 'Color',
      to: [{type: 'color'}],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    },
  ],
  preview: {
    select: {
      title: 'product.productName',
      subtitle: 'color.colorName',
    },
  },
}
