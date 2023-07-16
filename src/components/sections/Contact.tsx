/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// Contact.tsx

import { BoxPageContent, Flex, Text } from '@components/base'
import { SocialLink } from '@components/styled/SocialLink'
import { StyledNextLink } from '@components/styled/StyledNextLink'

export default function Contact() {
  
  const emailAddress = 'tom@tomwionzek.com'
  
  return (
    <BoxPageContent
      id="contact"
      css={{ marginTop: '160px', position: 'relative' }}
    >

      {/* Email and Contact Invitation */}
      <StyledNextLink
        href={`mailto:${emailAddress}`}
        passHref
        css={{ '&::after': { bottom: '8px', height: '4px' } }}
        style={{ padding: '32px 0 12px' }} // applies to the <a> tag
      >
        <Text
          as="h3"
          font="playfair"
          weight={900}
          css={{
            color: '$textDark',
            fontSize: 'min(32px, 8vw)',
            marginBottom: '18px',
            '@largeMobile': {
              fontSize: '36px',
              marginBottom: '10px',
            },
            '@desktop': { fontSize: '40px' },
            '@mid': { fontSize: '44px' },
          }}
        >
          {emailAddress}
        </Text>
      </StyledNextLink>
      <Text
        as="p"
        font="lato"
        spacing="text"
        weight={300}
        css={{
          color: '$textDark',
          fontSize: '20px',
          lineHeight: '1.7',
          marginBottom: '24px',
          '@largeMobile': { fontSize: '22px' },
          '@mid': { maxWidth: '70%' },
        }}
      >
        Passionate about making a positive impact and connecting with like-minded individuals.
        Let's chat and explore exciting ideas and opportunities together.
      </Text>

      {/* Social Links */}
      <Flex align="center" wrap="wrap" css={{ columnGap: '32px', rowGap: '14px' }}>

        {/* LinkedIn */}
        <SocialLink
          alt="LinkedIn"
          href="https://linkedin.com/in/tomwionzek"
          imageSrc="/images/linkedin.webp"
          username="/in/tomwionzek"
        />

        {/* GitHub */}
        <SocialLink
          alt="GitHub"
          href="https://github.com/tw-studio"
          imageSrc="/images/github.webp"
          username="/tw-studio"
        />
      </Flex>

    </BoxPageContent>
  )
}
