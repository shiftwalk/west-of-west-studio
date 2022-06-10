import {
  FiMapPin
} from 'react-icons/fi'

export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Hero Heading',
      description: 'The large heading in the hero',
      name: 'heroHeading',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Locations',
      name: 'locations',
      type: 'array',
      of: [
        {
          title: 'Location',
          name: 'location',
          type: 'object',
          icon: FiMapPin,
          fields: [
            {name: 'title', type: 'string', title: 'Title'},
            {name: 'coordinates', type: 'string', title: 'Co-Ordinates'},
            {name: 'address', type: 'text', rows: 3, title: 'Address'}
          ],
          preview: {
            select: {
              title: 'title',
              address: 'address'
            },
            prepare(selection) {
              const {title, address} = selection
              return {
                title: title,
                subtitle: `${address}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'General Email',
      name: 'generalEmail',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Telephone',
      name: 'telephone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Press Email',
      name: 'pressEmail',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'New Business Email',
      name: 'newBusinessEmail',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Employment Email',
      name: 'employmentEmail',
      type: 'string',
      validation: Rule => Rule.required()
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