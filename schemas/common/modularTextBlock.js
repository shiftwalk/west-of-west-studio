import { FiEdit3 } from 'react-icons/fi'

export default {
  title: 'Text Block',
  type: 'object',
  name: 'textBlock',
  icon: FiEdit3,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
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
          { title: 'Center Aligned', value: 'center-aligned' },
        ],
        layout: 'radio' // <-- defaults to 'dropdown'
      },
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: 'Text Block',
        subtitle: `${text[0].children[0].text}`
      }
    }
  }
}