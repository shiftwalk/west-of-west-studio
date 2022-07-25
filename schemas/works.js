import slugify from '../utils/slugify'
import { FiUser } from 'react-icons/fi'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  title: "Works",
  name: 'works',
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'category', hidden: false }),
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
      title: "Project Name",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Project Code",
      name: "projectCode",
      description: "The code number for this project, eg: 101, displayed as WW.101 on the Front-End",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Grid Project",
      name: "gridProject",
      description: "Toggling this on will add the project to main 'Works' grid",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Non-Routed Archived Project",
      name: "nonRoutedProjects",
      description: "Toggling this on will make this project an archive text only entry with no actual case study page (when the above toggle is false)",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Location: City",
      description: "The city or town, eg: 'Portland'",
      name: "locationCity",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Location: State",
      description: "The state, eg: 'OR'",
      name: "locationState",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Client",
      name: "client",
      type: "string"
    },
    {
      title: "Year",
      description: "The year either as a timeline or a single date, eg: '2018—Ongoing' or '2018'",
      name: "year",
      type: "string"
    },
    {
      title: "Status",
      description: "Current status of the project, eg: 'In Process' or 'Complete'",
      name: "status",
      type: "string"
    },
    {
      title: "Sector",
      name: "sector",
      type: "string",
      options: {
        list: [
          {title: 'Retail & Hospitality', value: 'retail-and-hospitality'},
          {title: 'Living', value: 'living'},
          {title: 'Working', value: 'working'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Expertise",
      name: "expertise",
      type: "string",
      options: {
        list: [
          {title: 'Architecture', value: 'architecture'},
          {title: 'Interiors', value: 'interiors'},
          {title: 'Architecture & Interiors', value: 'architecture-and-interiors'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Credits',
      name: 'credits',
      description: 'Credits for this project (Optional)',
      type: 'array', 
      of: [{
        title: 'Credit',
        name: 'credit',
        type: 'object',
        icon: FiUser,
        fields: [
          {
            title: 'Job',
            name: 'job',
            type: 'string',
            description: 'eg: "Photographer", "Consultant", etc...',
            validation: Rule => Rule.required()
          },
          {
            title: 'Name',
            name: 'name',
            type: 'string',
            description: 'eg: "Clayton Taylor"',
            validation: Rule => Rule.required()
          },
        ],
        preview: {
          select: {
            title: 'job',
            subtitle: 'name'
          }
        }
      }],
    },
    {
      title: 'Thumbnail Image',
      name: 'thumbnailImage',
      type: 'defaultImage',
      description: 'The image used as a thumbnail for this project n the word grid/list view',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Images',
      name: 'heroImages',
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
      title: "Super Wide Hero",
      name: "superWideHero",
      description: "Toggling this on will adjust the hero aspect ratio for super wide imagery",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Intro Text",
      description: "The text block to introduce this piece of work, first paragraph will be a large headline, second paragraph with be standard text",
      name: "introText",
      type: 'array', 
      of: [{type: 'block'}],
    },
    {
      title: 'Content Blocks',
      name: 'contentBlocks',
      description: 'The modular content blocks for this project',
      type: 'array',
      of: [
        {type: 'modularDoubleImageBlock', title: 'Double Image'},
        {type: 'modularDoubleLandscapeImageBlock', title: 'Double Landscape Image'},
        {type: 'modularSideBySideImageBlock', title: 'Side By Side Image'},
        {type: 'modularTripleImageBlock', title: 'Triple Image'},
        {type: 'modularImageBlock', title: 'Single Image'},
        {type: 'modularInteractiveImageBlock', title: 'Interactive Image'},
        {type: 'modularBeforeAfterBlock', title: 'Before / After'},
        {type: 'modularProcessBlock', title: 'Process Gallery'},
        {type: 'textBlock', title: 'Text'},
      ],
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
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      locationCity: 'locationCity',
      locationState: 'locationState',
      images: 'heroImages',
      projectCode: 'projectCode',
    },
    prepare(selection) {
      const {title, locationCity, locationState, images, projectCode} = selection
      return {
        title: title,
        subtitle: `${projectCode} — ${locationCity}, ${locationState}`,
        media: images[0]
      }
    }
  }
}