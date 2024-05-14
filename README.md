-Logo

| Prop        | Default | Description                                           |
| ----------- | ------- | ----------------------------------------------------- |
| `path`      | --      | required, `header` or `footer` and styled is changing |
| `className` | `""`    | optinal, `string` add tailwind styles                 |

- ScrollLink

| Prop        | Default | Description                                                                                                                                  |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`     | --      | required, `string` button's text                                                                                                             |
| `href`      | --      | required, `string` path to page or name of id section for scroll, examples 'policy' or '#sectionId'                                          |
| `variant`   | --      | required, `string` 'primary', 'secondary', 'primary2' see UiKIt (Buttons), 'navlink' for NavBar (desktop, mobile), "policy" for policy page; |
| `className` | `""`    | optinal, `string` add tailwind styles                                                                                                        |

- Button

| Prop        | Default     | Description                                                                       |
| ----------- | ----------- | --------------------------------------------------------------------------------- |
| `label`     | --          | required, `string` button's text                                                  |
| `variant`   | --          | required, `string` 'primary' see UiKIt (Buttons), 'readmore' for comments button; |
| `type`      | `button`    | optinal, `string` 'button''submit'                                                |
| `onCLick`   | `undefined` | optinal, `() => void` , add the function                                          |
| `className` | `""`        | optinal, `string` add tailwind styles                                             |

- Modal

| Prop        | Default     | Description                                                                                                |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| `children`  | --          | optional, `ReactNode` content of the modal window with own styles                                          |
| `isOpen`    | --          | required, `boolean` - current state of modal                                                               |
| `close`     | `undefined` | required, `() => void`, add the function for closeModal                                                    |
| `variant`   | --          | required, `string` "comments" - for comments modal, "burger" - for burgerMenu, "simple" - for other modals |
| `className` | `""`        | optinal, `string` add tailwind styles                                                                      |

- Telephones

| Prop        | Default | Description                                             |
| ----------- | ------- | ------------------------------------------------------- |
| `path`      | --      | required, `contacts` or `footer` and styled is changing |
| `className` | `""`    | optinal, `string` add tailwind styles                   |

- CardsBenefits

| Prop   | Default | Description                       |
| ------ | ------- | --------------------------------- |
| `icon` | --      | `JSX.Element`and show icons       |
| `text` | ---     | `string`, text can change in data |
| `id`   | ---     | `number`, text can change in data |

- SocialMedia

| Prop        | Default | Description                              |
| ----------- | ------- | ---------------------------------------- |
| `section`   | menu    | required, `menu`, `contacts` or `footer` |
| `className` | `""`    | optinal, `string` add tailwind styles    |

- ProductCard

| Prop               | Default | Description                                                    |
| ------------------ | ------- | -------------------------------------------------------------- |
| `img`              | -       | required, `string`, image url                                  |
| `imgBg`            | -       | required, `beans`, `wheat`, `vegetables`, `corn`, or `seaweed` |
| `alt`              | -       | required, `string`, image description                          |
| `name`             | -       | required, `string`, product name                               |
| `descriptionItems` | -       | required, `string`,product description                         |
| `link`             | -       | required, `string`, link to product page                       |
| `buttonText`       | -       | required, `string`, text for button                            |

- ProductPreference

| Prop        | Default | Description                              |
| ----------- | ------- | ---------------------------------------- |
| `data`      | menu    | Taka data productPreference with massive :id: `number`, preference: `string`  |


This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `app/page.tsx`. The page
auto-updates as you edit the file.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
