export default {
  name: 'userPaymentMethod',
  type: 'document',
  title: 'User Payment Method',
  fields: [
    {
      name: 'provider',
      type: 'string',
      title: 'Provider',
    },
    {
      name: 'accountNumber',
      type: 'string',
      title: 'Account Number',
    },
    {
      name: 'expiryDate',
      type: 'date',
      title: 'Expiry Date',
    },
    {
      name: 'isDefault',
      type: 'boolean',
      title: 'Is Default',
    },
    {
      name: 'user',
      type: 'reference',
      title: 'User',
      to: [{type: 'user'}],
    },
    {
      name: 'payment',
      type: 'reference',
      title: 'Payment',
      to: [{type: 'paymentType'}],
    },
  ],
}
