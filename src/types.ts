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
