import type { Metadata } from 'next';
import classNames from 'classnames';
import { Roboto_Condensed } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import data from '@/data/metadata.json';
import { env } from 'process';

const BASE_APP_URL = process.env.BASE_APP_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_APP_URL),
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  icons: data.icons,
  openGraph: {
    type: 'website',
    url: BASE_APP_URL,
    title: data.ogTitle,
    description: data.ogDescription,
    siteName: data.ogSiteName,
    images: [
      {
        url: data.image.url,
        width: 1200,
        height: 630,
        alt: data.image.alt,
      },
    ],
  },
};

const roboto = Roboto_Condensed({
  subsets: ['cyrillic', 'latin'],
  weight: '700',
  display: 'swap',
  variable: '--font-roboto',
});

const geologica = localFont({
  src: [
    {
      path: '../../../public/fonts/Geologica-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Geologica-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Geologica-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Geologica-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Geologica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Geologica-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-geologica',
});

const slides = [
  { id: 1, content: 'slide' },
  { id: 2, content: 'slide' },
  { id: 3, content: 'slide' },
  { id: 4, content: 'slide' },
  { id: 5, content: 'slide' },
  { id: 6, content: 'slide' },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={classNames(
          geologica.variable,
          roboto.variable,
          'h-full min-h-screen'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
