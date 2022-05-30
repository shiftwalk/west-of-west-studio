import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonStudio from './singletonStudio'
import singletonContact from './singletonContact'

// Documents
import works from './works'
import journal from './journal'
import team from './team'

// Common
import seo from './common/seo'
import defaultImage from './common/defaultImage'
import modularImageBlock from './common/modularImageBlock'
import modularDoubleImageBlock from './common/modularDoubleImageBlock'
import textBlock from './common/modularTextBlock'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonStudio,
    singletonContact,
    works,
    journal,
    team,
    defaultImage,
    modularImageBlock,
    modularDoubleImageBlock,
    textBlock,
    seo
  ]),
})
