/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// components › sections › TitleAndMetaTags.tsx

import Head from 'next/head'
import { useRouter } from 'next/router'

type TitleAndMetaTagsProps = {
  description?: string
  pathname?: string
  title?: string
  url?: string
}

export default function TitleAndMetaTags({
  description = 'Product manager, UX designer, and developer with ten years experience crafting products and leading teams at Microsoft and startups. UX Design, Product Management, Web Development',
  pathname,
  title = 'Tom Wionzek | Product Manager, UX Designer, and Developer',
  url = 'https://tomwionzek.com',
}: TitleAndMetaTagsProps) {
  
  const router = useRouter()
  const originalPath = pathname ?? router.pathname
  const path = originalPath.replace(/^\/_main/, '')

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}${path}`} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
    </Head>
  )
}
