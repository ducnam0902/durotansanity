export default {
  name: 'userAddress',
  type: 'document',
  title: 'User Address',
  fields: [
    {
      name: 'isDefault',
      type: 'boolean',
      title: 'Is default',
    },
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      title: 'Address',
      name: 'address',
      type: 'reference',
      to: [{type: 'address'}],
    },
  ],
}
