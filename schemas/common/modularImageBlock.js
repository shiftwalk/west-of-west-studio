import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Image',
  type: 'object',
  name: 'modularImageBlock',
  icon: FiCamera,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'full-bleed',
      options: {
        list: [
          { title: 'Full Bleed', value: 'full-bleed' },
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
        title: 'Image Block',
        subtitle: `${layout}`
      }
    }
  }
}