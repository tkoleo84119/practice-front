export type Gender = 'boy' | 'girl' | 'unisex'
export type Popularity = 'unique' | 'trendy'
export type Length = 'all' | 'short' | 'long'

export interface UserInfo {
  id: number
  name: string
  gender: Gender
  popularity: Popularity,
  length: Length,
}

export interface SelectOptions extends Omit<UserInfo, 'id' | 'name'> { }

export interface FilterInfo {
  title: string
  category: keyof SelectOptions
  buttons: Array<Gender | Popularity | Length>
}