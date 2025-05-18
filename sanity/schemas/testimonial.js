export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the person giving the testimonial',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role or Title',
      type: 'string',
      description: 'Role, title, or short description of the person (e.g., "Hobby Forager")'
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial text',
      validation: Rule => Rule.required().max(300)
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Photo of the person (optional)',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility'
        }
      ]
    },
    {
      name: 'imagePlaceholder',
      title: 'Image Placeholder',
      type: 'string',
      description: 'If no image is provided, use this letter as a placeholder (usually first initial)',
      validation: Rule => Rule.max(1)
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating out of 5 stars (optional)',
      validation: Rule => Rule.min(1).max(5).precision(1)
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as a featured testimonial to highlight in prominent areas',
      initialValue: false
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category this testimonial relates to',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Community', value: 'community' },
          { title: 'Course', value: 'course' },
          { title: 'Product', value: 'product' },
          { title: 'Service', value: 'service' }
        ]
      },
      initialValue: 'general'
    },
    {
      name: 'relatedItem',
      title: 'Related Item',
      type: 'reference',
      description: 'If this testimonial is about a specific course, product, etc.',
      to: [
        { type: 'course' },
        { type: 'leadMagnet' },
        { type: 'productEmbed' }
      ]
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'When the testimonial was given'
    },
    {
      name: 'socialProfile',
      title: 'Social Profile',
      type: 'url',
      description: 'Link to the person\'s LinkedIn, Twitter, or other social profile (optional)'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image'
    }
  }
};
