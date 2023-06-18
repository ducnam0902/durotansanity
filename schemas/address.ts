export default {
  name: 'address',
  type: 'document',
  title: 'Address',
  fields: [
    {
      name: 'unitNumber',
      type: 'number',
      title: 'Unit number',
    },
    {
      name: 'streetNumber',
      type: 'number',
      title: 'Street Number',
    },
    {
      name: 'addressLine1',
      type: 'string',
      title: 'Address Line 1',
    },
    {
      name: 'addressLine2',
      type: 'string',
      title: 'Address Line 2',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'region',
      type: 'string',
      title: 'Region',
    },
    {
      name: 'postalCode',
      type: 'number',
      title: 'Postal code',
    },
    {
      title: 'Country',
      name: 'country',
      type: 'reference',
      to: [{type: 'country'}],
    },
  ],
}
