export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The URL path for this page',
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
      description: 'A brief description of the page content (used for SEO)',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'The main content of the page',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    type: 'boolean'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        },
        {
          type: 'code',
          options: {
            withFilename: true,
          }
        }
      ]
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the page (used in social sharing and SEO)',
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
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title used for search engines and browser tabs',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'metaKeywords',
          title: 'Meta Keywords',
          type: 'array',
          description: 'Keywords for search engines',
          of: [{ type: 'string' }]
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'The canonical URL, if this content exists elsewhere'
        }
      ]
    },
    {
      name: 'includeInNavigation',
      title: 'Include in Navigation',
      type: 'boolean',
      description: 'Whether to include this page in the main navigation',
      initialValue: false
    },
    {
      name: 'navigationOrder',
      title: 'Navigation Order',
      type: 'number',
      description: 'The order in which this page appears in navigation (if included)',
      hidden: ({ parent }) => !parent?.includeInNavigation
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      description: 'Add reusable sections to the page (optional)',
      of: [
        {
          type: 'object',
          name: 'hero',
          title: 'Hero Section',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string'
            },
            {
              name: 'subheading',
              title: 'Subheading',
              type: 'text'
            },
            {
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'cta',
              title: 'Call to Action',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string'
                },
                {
                  name: 'link',
                  title: 'Button Link',
                  type: 'string'
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'heading'
            },
            prepare({ title }) {
              return {
                title: title || 'Hero Section',
                subtitle: 'Hero section'
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
      slug: 'slug.current',
      media: 'featuredImage'
    },
    prepare({ title, slug, media }) {
      return {
        title,
        subtitle: `/${slug}`,
        media
      };
    }
  }
};
