import { FiLayers } from 'react-icons/fi'

export default {
  title: 'Modular Before After',
  type: 'object',
  name: 'modularBeforeAfterBlock',
  icon: FiLayers,
  fields: [
    {
      name: 'beforeImage',
      type: 'defaultImage',
      title: 'Before Image',
      validation: Rule => Rule.required()
    },
    {
      name: 'afterImage',
      type: 'defaultImage',
      title: 'After Image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Pixelate',
      name: 'pixelate',
      type: 'boolean',
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
          { title: 'Centered (Portrait)', value: 'centered-portrait' },
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
        title: 'Before / After',
        subtitle: `${layout}`
      }
    }
  }
}