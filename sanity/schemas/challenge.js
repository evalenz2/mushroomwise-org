export default {
  name: 'challenge',
  title: 'Challenge',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the challenge',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A brief subtitle for the challenge'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A full description of what the challenge entails',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main promotional image for the challenge',
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
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'How long the challenge runs (e.g., "7 days", "30 days")',
      validation: Rule => Rule.required()
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      description: 'When the challenge starts (leave blank if ongoing/self-paced)'
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'When the challenge ends (leave blank if ongoing/self-paced)'
    },
    {
      name: 'isPaid',
      title: 'Is Paid',
      type: 'boolean',
      description: 'Whether this is a paid challenge',
      initialValue: false
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'The price of the challenge (if paid)',
      hidden: ({ parent }) => !parent?.isPaid,
      validation: Rule => Rule.precision(2)
    },
    {
      name: 'priceId',
      title: 'Payment Processor Price ID',
      type: 'string',
      description: 'ID from payment processor (e.g., Stripe) for this product',
      hidden: ({ parent }) => !parent?.isPaid
    },
    {
      name: 'level',
      title: 'Skill Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'All Levels', value: 'all' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'hosts',
      title: 'Hosts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Team members hosting the challenge',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'deliveryMethod',
      title: 'Delivery Method',
      type: 'string',
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Community Platform', value: 'community' },
          { title: 'Website', value: 'website' },
          { title: 'Combination', value: 'combination' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      description: 'External registration link (if applicable)'
    },
    {
      name: 'days',
      title: 'Challenge Days',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'day',
          fields: [
            {
              name: 'dayNumber',
              title: 'Day Number',
              type: 'number',
              validation: Rule => Rule.required().integer().positive()
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'tasks',
              title: 'Tasks',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ],
          preview: {
            select: {
              dayNumber: 'dayNumber',
              title: 'title'
            },
            prepare({ dayNumber, title }) {
              return {
                title: `Day ${dayNumber}: ${title}`,
                subtitle: 'Challenge day'
              };
            }
          }
        }
      ]
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key benefits of participating in this challenge',
      validation: Rule => Rule.min(3)
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }]
        }
      ]
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Open for Registration', value: 'registration' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Completed', value: 'completed' },
          { title: 'Coming Soon', value: 'coming-soon' }
        ]
      },
      initialValue: 'draft'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      status: 'status',
      media: 'coverImage'
    },
    prepare({ title, duration, status, media }) {
      return {
        title,
        subtitle: `${duration || ''} ${status ? `• ${status}` : ''}`,
        media
      };
    }
  }
};
