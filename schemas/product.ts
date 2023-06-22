import { DocumentStore } from "sanity";
import { DocumentNode } from "sanity/desk";

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
      type: 'string',
      name: 'categories',
      layout: 'dropdown',
      title: 'Categories',
      options: {
        list: [
          {title: 'Hoodies', value: 'Hoodies'},
          {title: 'Trousers & Jeans', value: 'Trousers & Jeans'},
          {title: 'Jackets', value: 'Jackets'},
          {title: 'Shirts', value: 'Shirts'},
          {title: 'Tshirts', value: 'Tshirts'},
        ],
      },
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
      title: 'Product Quantity',
      name: 'productQuanity',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'quanityInStock',
          fields: [
            {
              name: 'images',
              type: 'array',
              title: 'Images',
              of: [{type: 'image'}],
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
              },
            },
            {
              title: 'Size',
              name: 'size',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      type: 'string',
                      name: 'size',
                      layout: 'dropdown',
                      options: {
                        list: [
                          {title: 'S', value: 'S'},
                          {title: 'M', value: 'M'},
                          {title: 'L', value: 'L'},
                          {title: 'XL', value: 'XL'},
                        ],
                      },
                    },
                    {type: 'number', name: 'quanity'},
                  ]
                }
              ]
            }

          ],
        },
      ],
    },
  ],
}
