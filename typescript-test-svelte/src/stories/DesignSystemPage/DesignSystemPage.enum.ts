import { z } from 'zod'
const VALUES = [
  'overview',
  'colors',
  'typography',
  'spacing',
  'borders',
  'icons',
  'cube'
] as const
export const Section = z.enum(VALUES)
export type Section = z.infer<typeof Section>
