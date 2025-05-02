// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      // S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('page').title('Page'),
      S.divider(),
      S.documentTypeListItem('event').title('Event'),
      S.documentTypeListItem('category').title('Categories'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['page', 'event', 'category'].includes(item.getId()),
      ),
    ])
