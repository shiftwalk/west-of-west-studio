export default {
  title: "Image",
  type: 'image',
  options: {
    hotspot: true,
    metadata: ["lqip"],
  },
  name: "defaultImage",
  fields: [
    {
      title: 'Alternative Text (Optional)',
      description: 'Used by screen readers to describe the image',
      name: 'alt',
      type: 'string'
    },
    {
      title: 'Caption Heading (Optional)',
      description: 'Optional supporting caption heading',
      name: 'caption',
      type: 'string'
    },
    {
      title: 'Caption SubHeading (Optional)',
      description: 'Optional supporting caption subheading',
      name: 'captionSubHeading',
      type: 'string'
    }
  ]
}