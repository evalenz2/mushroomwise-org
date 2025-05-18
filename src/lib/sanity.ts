import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@sanity/types'

// Create a Sanity client
export const client = createClient({
  projectId: 'lx079q5w',
  dataset: 'production',
  apiVersion: '2024-03-19', // Use today's date or your preferred version
  useCdn: true, // Set to false if you want to ensure fresh data
})

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Helper function to generate image URLs
export function urlFor(source: Image) {
  return builder.image(source)
}

// GROQ query helpers
export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      categories[]->{
        title,
        slug
      },
      author->{
        name,
        image
      }
    }
  `)
}

export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] {
      _id,
      name,
      role,
      quote,
      image
    }
  `)
}

export async function getCourses() {
  return client.fetch(`
    *[_type == "course"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      price,
      duration,
      level,
      categories[]->{
        title,
        slug
      }
    }
  `)
}

export async function getChallenges() {
  return client.fetch(`
    *[_type == "challenge"] | order(startDate asc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      startDate,
      endDate,
      status,
      participants
    }
  `)
}

export async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      bio,
      image,
      socialLinks
    }
  `)
}

export async function getLeadMagnets() {
  return client.fetch(`
    *[_type == "leadMagnet"] | order(publishedAt desc) {
      _id,
      title,
      description,
      downloadUrl,
      mainImage,
      formFields
    }
  `)
}

// Helper to get a single document by slug
export async function getDocumentBySlug(type: string, slug: string) {
  return client.fetch(`
    *[_type == $type && slug.current == $slug][0] {
      ...,
      categories[]->,
      author->
    }
  `, { type, slug })
} 