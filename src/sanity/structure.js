// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      // S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('events').title('Events'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['category', 'events'].includes(item.getId()),
      ),
    ])
