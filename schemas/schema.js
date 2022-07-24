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
import modularInteractiveImageBlock from './common/modularInteractiveImageBlock'
import modularDoubleImageBlock from './common/modularDoubleImageBlock'
import modularTripleImageBlock from './common/modularTripleImageBlock'
import modularSideBySideImageBlock from './common/modularSideBySideImageBlock'
import modularBeforeAfterBlock from './common/modularBeforeAfterBlock'
import textBlock from './common/modularTextBlock'
import singletonGlobals from './singletonGlobals'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    singletonHome,
    singletonStudio,
    singletonContact,
    singletonGlobals,
    works,
    journal,
    team,
    defaultImage,
    modularImageBlock,
    modularBeforeAfterBlock,
    modularInteractiveImageBlock,
    modularTripleImageBlock,
    modularDoubleImageBlock,
    modularSideBySideImageBlock,
    textBlock,
    seo
  ]),
})
