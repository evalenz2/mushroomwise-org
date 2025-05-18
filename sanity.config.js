import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'MushroomWise',
  
  projectId: 'your-project-id',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: schema,
  
  basePath: '/studio',
})
