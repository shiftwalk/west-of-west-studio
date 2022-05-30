import slugify from '../utils/slugify'

export default {
  title: "Journal",
  name: 'journal',
  type: "document",
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
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Post Date",
      description: "Press the button to the right to pick a date.",
      name: "date",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'heroImage',
      date: 'date'
    },
    prepare(selection) {
      const {title, date, images} = selection
      return {
        title: title,
        subtitle: date,
        media: images
      }
    }
  }
}