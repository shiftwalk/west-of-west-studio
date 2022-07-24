import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Process Block',
  type: 'object',
  name: 'modularProcessBlock',
  icon: FiCamera,
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
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Process Gallery Block',
      }
    }
  }
}