import { FiGrid } from 'react-icons/fi'

export default {
  title: 'Modular Triple Image',
  type: 'object',
  name: 'modularTripleImageBlock',
  icon: FiGrid,
  fields: [
    {
      title: 'Image 1',
      name: 'image1',
      type: 'defaultImage',
      description: 'Ideally square aspect ratio',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 2',
      name: 'image2',
      type: 'defaultImage',
      description: 'Ideally landscape aspect ratio',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 3',
      name: 'image3',
      type: 'defaultImage',
      description: 'Ideally portrait aspect ratio',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text (Optional)',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'left-aligned',
      options: {
        list: [
          { title: 'Left Aligned', value: 'left-aligned' },
          { title: 'Right Aligned', value: 'right-aligned' },
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
    },
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Triple Image Block',
        subtitle: `${layout}`
      }
    }
  }
}