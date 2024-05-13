export const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Phones')
        .child(
          S.document().schemaType('phone').documentId('phone'),
        ),
      S.listItem()
        .title('Privacy Policy')
            .child(S.document().schemaType('policy').documentId('policy')),
       ...S.documentTypeListItems()
        .filter((listItem: any) => !['phone'].includes(listItem.getId()))
        .filter((listItem: any) => !['policy'].includes(listItem.getId())),
    ]);