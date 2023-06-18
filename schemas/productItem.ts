export default {
  name: 'productItem',
  type: 'document',
  title: 'Product Item',
  fields: [
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
    },
    {
      name: 'sku',
      type: 'slug',
      title: 'Sku',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          {title: 'Green', value: 'green'},
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
          {title: 'Blue', value: 'blue'},
          {title: 'Red', value: 'red'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Brown', value: 'brown'},
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Size',
      name: 'size',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'quanity',
          fields: [
            {
              type: 'string',
              name: 'size',
              layout: 'dropdown',
              options: {
                list: [
                  {title: 'S', value: 'S'},
                  {title: 'M', value: ','},
                  {title: 'L', value: 'L'},
                  {title: 'XL', value: 'XL'},
                ],
              },
            },
            {type: 'number', name: 'quanity'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'product.productName',
      subtitle: 'color',
    },
  },
}
