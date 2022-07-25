import {
  FiAlignLeft
} from 'react-icons/fi'

export default {
  title: 'Studio',
  name: 'studio',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    // {
    //   name: 'devNote',
    //   type: 'note',
    //   options: {
    //     headline: 'Dev Note: Work In Progress',
    //     message: 'This page is a work in progress and may change, please feel free to still use.',
    //     tone: 'caution'
    //   }
    // },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    // {
    //   title: 'Hero Text',
    //   name: 'heroText',
    //   description: 'The small text block bottom left of the hero',
    //   type: 'text',
    //   rows: 3,
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Hero Image Left',
    //   name: 'heroImageLeft',
    //   type: 'defaultImage',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Hero Image Right',
    //   name: 'heroImageRight',
    //   type: 'defaultImage',
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Content Heading',
    //   description: 'The large heading below the hero',
    //   name: 'contentHeading',
    //   type: 'text',
    //   rows: 5,
    //   validation: Rule => Rule.required()
    // },
    {
      title: 'Block One Heading',
      name: 'workBlockHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Block One Meta Title',
      name: 'workBlockMetaTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Block One Text',
      name: 'workBlockText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Content Image',
      name: 'contentImage',
      type: 'defaultImage',
    },
    {
      title: 'Block Two Heading',
      name: 'practiceBlockHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Block Two Meta Title',
      name: 'practiceBlockMetaTitle',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Block Two Text',
      name: 'practiceBlockText',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Quote',
      name: 'quote',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Quote Author',
      name: 'quoteAuthor',
      type: 'string',
    },
    {
      title: 'Content Image Two',
      name: 'contentImageTwo',
      type: 'defaultImage',
    },
    // {
    //   title: 'Content Images',
    //   name: 'contentImages',
    //   type: 'array',
    //   of: [
    //     {
    //       name: 'image',
    //       type: 'defaultImage',
    //       title: 'Image',
    //     },
    //   ],
    //   options: {
    //     layout: 'grid',
    //   },
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Past Team',
    //   name: 'pastTeam',
    //   description: 'The comma seperated list of past team members',
    //   type: 'text',
    //   rows: 3,
    // },
    // {
    //   title: 'Recognition',
    //   name: 'recognition',
    //   description: 'The comma seperated list of recoginitions',
    //   type: 'text',
    //   rows: 3,
    // },
    // {
    //   title: 'Publications',
    //   name: 'publications',
    //   description: 'The comma seperated list of publications',
    //   type: 'text',
    //   rows: 3,
    // },
    {
      title: 'Additional Content Blocks',
      name: 'additionalContentBlocks',
      type: 'array',
      of: [
        {
          title: 'Content Block',
          name: 'contentBlock',
          type: 'object',
          icon: FiAlignLeft,
          fields: [
            {name: 'title', type: 'string', title: 'Title', description: 'The title of this block, eg: "Past Team" or "Publications"'},
            {name: 'text', type: 'text', rows: 3, title: 'Text'},
          ],
          preview: {
            select: {
              title: 'title',
              text: 'text'
            },
            prepare(selection) {
              const {title, text} = selection
              return {
                title: title,
                subtitle: `${text}`
              }
            }
          }
        }
      ]
    },
    // {
    //   title: 'Services Text',
    //   description: 'The supporting text for the "Services" section',
    //   name: 'servicesText',
    //   type: 'array', 
    //   of: [{type: 'block'}],
    //   validation: Rule => Rule.required()
    // },
    // {
    //   title: 'Services',
    //   description: 'The list of services that West Of West provide.',
    //   name: 'services',
    //   type: 'array',
    //   of: [{
    //     type: 'string',
    //     validation: Rule => Rule.required()
    //   }],
    // },
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