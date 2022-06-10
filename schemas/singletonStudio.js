export default {
  title: 'Studio',
  name: 'studio',
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
      title: 'Hero Text',
      name: 'heroText',
      description: 'The small text block bottom left of the hero',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image Left',
      name: 'heroImageLeft',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Image Right',
      name: 'heroImageRight',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Heading',
      description: 'The large heading below the hero',
      name: 'contentHeading',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Images',
      name: 'contentImages',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Services Text',
      description: 'The supporting text for the "Services" section',
      name: 'servicesText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Services',
      description: 'The list of services that West Of West provide.',
      name: 'services',
      type: 'array',
      of: [{
        type: 'string',
        validation: Rule => Rule.required()
      }],
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