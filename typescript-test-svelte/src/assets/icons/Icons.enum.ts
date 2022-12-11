import { z } from 'zod'
const NAME_VALUES = ['template', 'moon', 'sun'] as const
export const IconNames = z.enum(NAME_VALUES)
export type IconNamesType = z.infer<typeof IconNames>
