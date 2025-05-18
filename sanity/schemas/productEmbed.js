export default {
  name: 'productEmbed',
  title: 'Product Embed',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the product',
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
      name: 'productType',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Book', value: 'book' },
          { title: 'Cultivation Kit', value: 'cultivationKit' },
          { title: 'Equipment', value: 'equipment' },
          { title: 'Tool', value: 'tool' },
          { title: 'Subscription', value: 'subscription' },
          { title: 'Digital Product', value: 'digitalProduct' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the product',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      description: 'Image of the product',
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
      name: 'affiliateLink',
      title: 'Affiliate Link',
      type: 'url',
      description: 'The affiliate or product URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'company',
      title: 'Company or Brand',
      type: 'string',
      description: 'Name of the company or brand that makes the product'
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Regular price of the product in USD',
      validation: Rule => Rule.precision(2)
    },
    {
      name: 'discountedPrice',
      title: 'Discounted Price (USD)',
      type: 'number',
      description: 'Sale or discounted price in USD (if applicable)',
      validation: Rule => Rule.precision(2)
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Product rating out of 5',
      validation: Rule => Rule.min(0).max(5).precision(1)
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features or benefits of the product'
    },
    {
      name: 'pros',
      title: 'Pros',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Positive aspects of the product'
    },
    {
      name: 'cons',
      title: 'Cons',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Negative aspects or limitations of the product'
    },
    {
      name: 'review',
      title: 'Review Content',
      type: 'array',
      description: 'Full product review (if applicable)',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }
          ]
        }
      ]
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cultivation Supplies', value: 'cultivation' },
          { title: 'Foraging Equipment', value: 'foraging' },
          { title: 'Books & Education', value: 'education' },
          { title: 'Mushroom Species', value: 'species' },
          { title: 'Processing & Storage', value: 'processing' },
          { title: 'Safety Equipment', value: 'safety' },
          { title: 'Miscellaneous', value: 'misc' }
        ]
      }
    },
    {
      name: 'skillLevel',
      title: 'Recommended Skill Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
          { title: 'All Levels', value: 'all' }
        ]
      }
    },
    {
      name: 'isAffiliate',
      title: 'Is Affiliate Link',
      type: 'boolean',
      description: 'Whether this is an affiliate link that earns commission',
      initialValue: true
    },
    {
      name: 'disclosureText',
      title: 'Affiliate Disclosure Text',
      type: 'text',
      description: 'Custom disclosure text (if left blank, a standard disclosure will be used)',
      hidden: ({ parent }) => !parent?.isAffiliate
    },
    {
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Whether to feature this product prominently',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company',
      price: 'price',
      media: 'productImage'
    },
    prepare({ title, company, price, media }) {
      return {
        title,
        subtitle: `${company ? `${company} • ` : ''}${price ? `$${price}` : 'Price not set'}`,
        media
      };
    }
  }
};
