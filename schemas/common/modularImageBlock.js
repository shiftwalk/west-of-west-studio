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
          { title: 'Centered', value: 'centered' },
          { title: 'Left Aligned', value: 'left-aligned' },
          { title: 'Right Aligned', value: 'right-aligned' },
          { title: 'Left Aligned (Portrait)', value: 'left-aligned-portrait' },
          { title: 'Right Aligned (Portrait)', value: 'right-aligned-portrait' },
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