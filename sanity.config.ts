import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'durotansanity',

  projectId: '95ys244h',
  dataset: 'durotan',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
