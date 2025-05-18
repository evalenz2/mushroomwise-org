import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'MushroomWise',
  
  projectId: 'lx079q5w',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: schema,
  
  basePath: '/studio',
})
