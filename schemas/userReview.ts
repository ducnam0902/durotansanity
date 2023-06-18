export default {
  name: 'userReview',
  type: 'document',
  title: 'User Review',
  fields: [
    {
      name: 'user',
      type: 'reference',
      title: 'User',
      to: [{type: 'user'}],
    },
    {
      name: 'order',
      type: 'reference',
      title: 'Order',
      to: [{type: 'orderLine'}],
    },
    {
      name: 'ratingValue',
      type: 'string',
      title: 'Rating Value',
    },
    {
      title: 'Comment',
      name: 'comment',
      type: 'text',
    },
  ],
}
