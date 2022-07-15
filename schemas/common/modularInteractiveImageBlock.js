import { FiCodepen } from 'react-icons/fi'

export default {
  title: 'Modular Interactive Image',
  type: 'object',
  name: 'modularInteractiveImageBlock',
  icon: FiCodepen,
  fields: [
    {
      title: 'Images',
      name: 'images',
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
      description: 'Images to update as mouse moves, add in chronological order left to right.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Autoplay',
      name: 'autoplay',
      type: 'boolean',
      description: 'If this is toggled on, the images will automatically tick along without mouse interaction, best used without captions.',
    },
    {
      title: 'Crossfade',
      name: 'crossfade',
      type: 'boolean',
      description: 'If this is toggled on, the images will crossfade between each other rather than snap, generally used for "before/after" shots.',
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
        title: 'Interactive Image Block',
        subtitle: `${layout}`
      }
    }
  }
}