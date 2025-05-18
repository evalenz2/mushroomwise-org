export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the team member',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique URL-friendly identifier',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Job title or role within the organization',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Profile photo',
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
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Brief biography (1-2 sentences)',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'fullBio',
      title: 'Full Bio',
      type: 'array',
      description: 'Full team member biography',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' }
          ]
        }
      ]
    },
    {
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Specific areas of expertise or specialization',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Relevant degrees, certifications, or qualifications',
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Contact email (optional)'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        },
        {
          name: 'website',
          title: 'Personal Website',
          type: 'url'
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Team Member',
      type: 'boolean',
      description: 'Display prominently on about/team pages',
      initialValue: false
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display team members (lower numbers appear first)',
      initialValue: 999
    },
    {
      name: 'isAuthor',
      title: 'Is Content Author',
      type: 'boolean',
      description: 'Can be assigned as author of blogs/content',
      initialValue: false
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
