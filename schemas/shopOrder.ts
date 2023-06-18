export default {
  name: 'shopOrder',
  type: 'document',
  title: 'Shop Order',
  fields: [
    {
      name: 'user',
      type: 'reference',
      title: 'User',
      to: [{type: 'user'}],
    },
    {
      name: 'orderDate',
      type: 'date',
      title: 'Order Date',
    },
    {
      name: 'paymentMethod',
      type: 'reference',
      title: 'Payment Method',
      to: [{type: 'userPaymentMethod'}],
    },
    {
      title: 'Shipping Address',
      name: 'shippingAddress',
      type: 'reference',
      to: [{type: 'address'}],
    },
    {
      title: 'Shipping Method',
      name: 'shippingMethod',
      type: 'reference',
      to: [{type: 'shippingMethod'}],
    },
    {
      title: 'Order Total',
      name: 'orderTotal',
      type: 'number',
    },
    {
      title: 'Order Status',
      name: 'orderStatus',
      type: 'reference',
      to: [{type: 'orderStatus'}],
    },
  ],
}
