export default {
  name: 'leadMagnet',
  title: 'Lead Magnet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the lead magnet',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique URL-friendly identifier',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of what the lead magnet contains',
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main promotional image for the lead magnet',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      description: 'Key benefits or features of the lead magnet',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(2).max(6)
    },
    {
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      description: 'ID of the ConvertKit form for this lead magnet'
    },
    {
      name: 'fileUrl',
      title: 'File URL',
      type: 'url',
      description: 'URL to the downloadable file (if applicable)'
    },
    {
      name: 'leadMagnetType',
      title: 'Lead Magnet Type',
      type: 'string',
      options: {
        list: [
          { title: 'PDF Guide', value: 'pdfGuide' },
          { title: 'Checklist', value: 'checklist' },
          { title: 'Cheat Sheet', value: 'cheatSheet' },
          { title: 'Video Training', value: 'videoTraining' },
          { title: 'Mini Course', value: 'miniCourse' },
          { title: 'Template', value: 'template' },
          { title: 'Resource List', value: 'resourceList' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'displayOnHomepage',
      title: 'Display on Homepage',
      type: 'boolean',
      description: 'Whether to feature this lead magnet on the homepage',
      initialValue: false
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'array',
      description: 'Who is this lead magnet primarily designed for',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Beginners', value: 'beginners' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'Foragers', value: 'foragers' },
          { title: 'Cultivators', value: 'cultivators' },
          { title: 'Scientists', value: 'scientists' },
          { title: 'Enthusiasts', value: 'enthusiasts' }
        ]
      }
    },
    {
      name: 'content',
      title: 'Content Description',
      type: 'array',
      description: 'Detailed description of what the lead magnet includes',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      type: 'leadMagnetType',
      media: 'coverImage'
    },
    prepare(selection) {
      const { title, type } = selection;
      return {
        ...selection,
        subtitle: type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : ''
      };
    }
  }
};
