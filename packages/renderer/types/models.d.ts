export interface Database {
  id: string,
  index: number,
  name?: string,

  [key: string]: unknown,
}

export interface ClickKeys {
  main: string[],
  forced?: string[],
}

export type StringArray = {
  [key: string]: string,
}