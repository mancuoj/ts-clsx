export type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassArray
  | ClassDictionary
export type ClassArray = Array<ClassValue>
export type ClassDictionary = Record<string, any>

function toVal(input: ClassValue): string | number {
  if (typeof input === 'string' || typeof input === 'number')
    return input
  else if (Array.isArray(input))
    return input.map(toVal).filter(Boolean).join(' ')
  else if (typeof input === 'object' && input !== null)
    return Object.keys(input).filter(key => Boolean(input[key])).join(' ')

  return ''
}

export function clsx(...args: ClassValue[]): string {
  return args.map(toVal).filter(Boolean).join(' ')
}
