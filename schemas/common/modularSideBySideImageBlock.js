import { FiColumns } from 'react-icons/fi'

export default {
  title: 'Modular Side By Side Image',
  type: 'object',
  name: 'modularSideBySideImageBlock',
  icon: FiColumns,
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
    }
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      return {
        title: 'Side By Side Image Block'
      }
    }
  }
}