import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { eventType } from './eventType'
import { pageType } from './pageType'
import { sections } from './sections'

export const schema = {
  types: [...sections, blockContentType, categoryType, eventType, pageType],
}