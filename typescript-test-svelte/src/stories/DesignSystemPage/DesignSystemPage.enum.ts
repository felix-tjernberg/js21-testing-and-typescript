import { z } from 'zod'
const VALUES = [
  'overview',
  'colors',
  'typography',
  'spacing',
  'borders',
  'icons'
] as const
export const Section = z.enum(VALUES)
export type Section = z.infer<typeof Section>
