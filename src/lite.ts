import type { ClassValue } from '.'

export function clsx(...args: ClassValue[]): string {
  return args.filter(arg => typeof arg === 'string').filter(Boolean).join(' ')
}

export default clsx
