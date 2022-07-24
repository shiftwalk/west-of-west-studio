export default {
  title: 'Globals',
  name: 'globals',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Footer Ticker Items',
      description: 'The list of text items in the footer ticker',
      name: 'footerTickerItems',
      type: 'array',
      of: [{
        type: 'string',
        validation: Rule => Rule.required()
      }],
    },
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}