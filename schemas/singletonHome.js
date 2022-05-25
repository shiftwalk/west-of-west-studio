export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'devNote',
      type: 'note',
      options: {
        headline: 'Dev Note: Work In Progress',
        message: 'This page is a work in progress and may change, please feel free to still use.',
        tone: 'caution'
      }
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Featured Works',
      description: 'The projects to feature in the hero, ideally minimum of 3',
      name: 'heroFeaturedWorks',
      type: 'array',
      of: [
        {
          type: 'reference',
          options: {
            disableNew: true,
          },
          to: [
            {type: 'works'}
          ]
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Heading',
      description: 'The large heading below the hero',
      name: 'heading',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Featured Journal Entry',
      name: 'featuredJournalEntry',
      description: 'The journal entry to feature on the home page content area.',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [
        {type: 'journal'}
      ]
    },
    {
      title: 'Featured Works',
      name: 'featuredWorks',
      description: 'The project to feature on the home page content area.',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [
        {type: 'works'}
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
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