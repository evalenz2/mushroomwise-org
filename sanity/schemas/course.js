export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the course',
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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short, catchy description of the course',
      validation: Rule => Rule.max(120)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Full description of the course content and benefits',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'The main promotional image for the course',
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
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'teamMember' }],
      description: 'The primary instructor for this course',
      validation: Rule => Rule.required()
    },
    {
      name: 'coInstructors',
      title: 'Co-Instructors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Any additional instructors for the course'
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Regular price of the course in USD',
      validation: Rule => Rule.precision(2)
    },
    {
      name: 'salePrice',
      title: 'Sale Price (USD)',
      type: 'number',
      description: 'Sale price of the course in USD (if applicable)',
      validation: Rule => Rule.precision(2)
    },
    {
      name: 'priceId',
      title: 'Payment Processor Price ID',
      type: 'string',
      description: 'ID from payment processor (e.g., Stripe) for this product'
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
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Total length of the course (e.g., "4 weeks", "6 hours")',
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Course Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features or benefits of the course',
      validation: Rule => Rule.required()
    },
    {
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Any prerequisites or required knowledge'
    },
    {
      name: 'modules',
      title: 'Course Modules',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'module',
          fields: [
            {
              name: 'title',
              title: 'Module Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Module Description',
              type: 'text'
            },
            {
              name: 'lessons',
              title: 'Lessons',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'lesson',
                  fields: [
                    {
                      name: 'title',
                      title: 'Lesson Title',
                      type: 'string',
                      validation: Rule => Rule.required()
                    },
                    {
                      name: 'description',
                      title: 'Lesson Description',
                      type: 'text'
                    },
                    {
                      name: 'duration',
                      title: 'Duration (minutes)',
                      type: 'number'
                    }
                  ],
                  preview: {
                    select: {
                      title: 'title',
                      duration: 'duration'
                    },
                    prepare({ title, duration }) {
                      return {
                        title,
                        subtitle: duration ? `${duration} min` : 'Lesson'
                      };
                    }
                  }
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'title',
              lessonCount: 'lessons.length'
            },
            prepare({ title, lessonCount = 0 }) {
              return {
                title,
                subtitle: `${lessonCount} lesson${lessonCount === 1 ? '' : 's'}`
              };
            }
          }
        }
      ]
    },
    {
      name: 'testimonials',
      title: 'Course Testimonials',
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When the course was or will be published'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
          { title: 'Coming Soon', value: 'coming-soon' },
          { title: 'Archived', value: 'archived' }
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
      status: 'status',
      instructor: 'instructor.name',
      media: 'coverImage'
    },
    prepare({ title, status, instructor, media }) {
      return {
        title,
        subtitle: `${status ? status.charAt(0).toUpperCase() + status.slice(1) : 'Draft'} ${instructor ? `• ${instructor}` : ''}`,
        media
      };
    }
  }
};
