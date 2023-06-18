export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'emailAddress',
      type: 'string',
      title: 'Email Address',
    },
    {
      name: 'phoneNumber',
      type: 'number',
      title: 'Phone Number',
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
    },
  ],
}
