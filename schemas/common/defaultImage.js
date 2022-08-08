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
      title: 'Override Video (Optional)',
      description: 'Optionally override this image with a short video loop (10mb max)',
      name: 'overrideVideo',
      type: 'file'
    },
    {
      title: 'Override Vimeo Video (Optional)',
      description: 'Optionally override this image with a short video loop (using a Vimeo Pro direct URL)',
      name: 'overrideVimeoVideo',
      type: 'string'
    },
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