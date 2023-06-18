export default {
  name: 'paymentType',
  type: 'document',
  title: 'Payment Type',
  fields: [
    {
      name: 'value',
      type: 'string',
      title: 'Value',
      options: {
        list: [
          {title: 'Cash on Delivery', value: 'COD'},
          {title: 'Credit Card', value: 'CD'},
          {title: 'Paypal', value: 'PP'},
        ],
        layout: 'drodown',
      },
    },
  ],
}
