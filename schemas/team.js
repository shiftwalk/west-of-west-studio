export default {
  title: "Team",
  name: 'team',
  type: "document",
  fields: [
    {
      name: 'devNote',
      type: 'note',
      options: {
        headline: 'Dev Note: Work In Progress',
        message: 'This page is a work in progress and may change, please feel free to still use.',
        tone: 'caution'
      }
    },
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      options: {
        list: [
          {title: 'Los Angeles', value: 'la'},
          {title: 'Portland', value: 'portland'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      title: "Role",
      name: "role",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Principle",
      name: "principle",
      type: "boolean",
      initialValue: false,
    },
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
    },
    {
      title: "Bio Text",
      name: "bioText",
      type: 'array', 
      of: [{type: 'block'}],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      name: 'name',
      role: 'role',
      image: 'image'
    },
    prepare(selection) {
      const {name, role, image} = selection
      return {
        title: name,
        subtitle: `${role}`,
        media: image
      }
    }
  }
}