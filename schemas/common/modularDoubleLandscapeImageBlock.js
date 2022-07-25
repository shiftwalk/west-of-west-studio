import { FiGrid } from 'react-icons/fi'

export default {
  title: 'Modular Double Landscape Image',
  type: 'object',
  name: 'modularDoubleLandscapeImageBlock',
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
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'right-aligned',
      options: {
        list: [
          { title: 'Left Aligned (Bigger Image Left)', value: 'left-aligned' },
          { title: 'Right Aligned (Bigger Image Right)', value: 'right-aligned' },
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
        title: 'Double Landscape Image Block',
        subtitle: `${layout}`
      }
    }
  }
}