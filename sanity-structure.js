import S from "@sanity/desk-tool/structure-builder";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import IframePreview from './preview/IFramePreview'

import {
  FiHome,
  FiCamera,
  FiBox,
  FiBook,
  FiMail,
  FiUsers
} from 'react-icons/fi'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))).icon(FiHome),
      S.divider(),
      S.listItem().title('Studio').child(S.editor().id('studio').schemaType('studio').documentId('singleton-studio').views(getPreview('studio'))).icon(FiBox),
      S.divider(),
      S.listItem().title('Team').child(S.documentTypeList('team').title('Team')).icon(FiUsers),
      S.divider(),
      S.listItem().title('Works').child(S.documentTypeList('works').title('Works')).icon(FiCamera),
      S.divider(),
      orderableDocumentListDeskItem({
        type: 'works',
        title: 'Works (Grid Ordering)',
        icon: FiCamera,
        // Required if using multiple lists of the same 'type'
        id: 'orderable-work-grid',
        // See notes on adding a `filter` below
        filter: `gridProject == true`,
        params: {
          gridProject: true
        },
      }),

      S.divider(),
      S.listItem().title('Journal').child(S.documentTypeList('journal').title('Journal')).icon(FiBook),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('contact'))).icon(FiMail),
    ]);