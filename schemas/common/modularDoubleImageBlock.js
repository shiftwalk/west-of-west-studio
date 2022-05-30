import { FiGrid } from 'react-icons/fi'

export default {
  title: 'Modular Double Image',
  type: 'object',
  name: 'modularDoubleImageBlock',
  icon: FiGrid,
  fields: [
    {
      title: 'Image 1',
      name: 'image1',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image 2',
      name: 'image2',
      type: 'defaultImage',
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
      initialValue: 'right-aligned',
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
        title: 'Double Image Block',
        subtitle: `${layout}`
      }
    }
  }
}