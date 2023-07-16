/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// portfolio › onenote-iphone-ios-7-redesign

import { RefObject } from 'react'

import dynamic from 'next/dynamic'
import 'photoswipe/dist/photoswipe.css'

import { styled, theme } from '@/stitches.config'
import { Box, Image } from '@components/base'
import { Text, TextProps } from '@components/base/Text'
import CaseStudySection from '@components/sections/CaseStudySection'
import Contact from '@components/sections/Contact'
import Footer from '@components/sections/Footer'
import PortfolioPager from '@components/sections/PortfolioPager'
import SiteHeader from '@components/sections/SiteHeader'
import TitleAndMetaTags from '@components/sections/TitleAndMetaTags'
import { BoldText as Bold } from '@components/styled/BoldText'
import { CaptionText as Caption } from '@components/styled/CaptionText'
import { Card, CardBox } from '@components/styled/Card'
import { ItalicText as Italic } from '@components/styled/ItalicText'
import { SectionHeading } from '@components/styled/SectionHeading'
import { TallPipe } from '@components/styled/TallPipe'

////
///
// MARK: OneNoteiPhoneRedesignPage Component

export default function OneNoteiPhoneRedesignPage() {

  // Dynamic import required to render entirely client-side
  const Gallery = dynamic(() => import('@components/base/PhotoswipeGallery')
    .then((module) => module.Gallery), { ssr: false })
  const GalleryItem = dynamic(() => import('@components/base/PhotoswipeGallery')
    .then((module) => module.Item), { ssr: false })
    
  const pageTitle = 'OneNote for iPhone: UX Refresh for iOS 7 | Tom Wionzek'
  const pageDescription = 'A redesign of the OneNote iPhone app which significantly improved App Store ratings, downloads, and overall user experience.'
  
  return (
    <>
      <TitleAndMetaTags
        description={pageDescription}
        title={pageTitle}
      />

      <SiteHeader />

      <Box css={{ paddingBottom: '80px' }}>
        <CaseStudySection
          bgColor={theme.colors.white.value}
          columns="1fr 1fr"
          h1="CASE STUDY"
          h2="OneNote for iPhone"
          h2Font="lato"
          h3="UX Refresh for iOS 7"
          imageAlt="OneNote for iPhone's redesigned notebook view for iOS 7"
          imageUrl="/images/onenote-ios-7-hero-portrait.webp"
        >
          <h4>
            A redesign of the OneNote iPhone app which significantly improved App Store ratings, downloads, and overall user experience.
          </h4>
        </CaseStudySection>
        <CaseStudySection bgColor={theme.colors.slateBrightF7.value}>
          <CardBox>
            <Card>
              <SectionHeading>ROLE</SectionHeading>
              <CardText>
                Concept Originator
                <br />
                Funding Securer
                <br />
                Main Designer
                <br />
                Sole Program Manager
              </CardText>
            </Card>
            <Card>
              <SectionHeading>TEAM</SectionHeading>
              <CardText>
                Microsoft OneNote and Macintosh Business Unit (joint collaboration)
              </CardText>
            </Card>
            <Card>
              <SectionHeading>TIMEFRAME</SectionHeading>
              <CardText>
                Jan – Dec 2013
              </CardText>
            </Card>
          </CardBox>
        </CaseStudySection>
        <CaseStudySection
          bgColor={theme.colors.white.value}
          columns="2fr 1fr"
          h1="PROBLEM"
          h2="OneNote had low uptake with new users"
          imageAlt="Illustration of woman sitting in front of phone and a bar graph"
          imageUrl="/images/mobile-analytics.webp"
          imageCss={{ maxWidth: '55vw', '@desktop': { marginTop: '52px' } }}
        >
          <p>
            OneNote for iPhone was a great app, but it shipped with technical compromises in v1.x which resulted in low App Store ratings (~3.0 stars) and low uptake with new users.
          </p>
          <p>
            Version 2.0 in 2012 bridged the technical gap, bringing OneNote's rich, full-fidelity, freeform canvas from Windows to the iPhone.
            However, app ratings and downloads didn't improve.
          </p>
          <p>
            <Bold>I embarked on a journey to analyze and improve the user experience,</Bold>
            {' '}
            first as a personal project on my spare time, then with full backing from leadership after successfully pitching my designs and securing funding.
          </p>
        </CaseStudySection>
        <CaseStudySection
          bgColor={theme.colors.slateBrightF7.value}
          columns="2fr 1fr"
          h1="HYPOTHESIS"
          h2="Improving the user experience would improve metrics"
          imageAlt="Illustration of increasing metrics"
          imageUrl="/images/increasing-visualization.webp"
          imageCss={{ maxWidth: '55vw', '@desktop': { marginTop: '52px' } }}
        >
          <p>
            OneNote had many factors which favored its success:
          </p>
          <p>
            <Bold>Satisfaction numbers on Windows were terrific.</Bold>
            {' '}
            OneNote on Windows was one of Microsoft's highest scoring application in satisfaction at the time. Its core value proposition clearly resonated with customers.
          </p>
          <p>
            <Bold>Mobile notetaking was a hot space.</Bold>
            {' '}
            Many don't know Evernote's first notetaking application released on Windows in the early 2000s (around the same time as OneNote). They became a household name only after they launched an iPhone app in the first days of the App Store. Evernote's success demonstrated a high market demand for fast notes of text and photos.
          </p>
          <p>
            <Bold>Technical compromises were finally fixed.</Bold>
            {' '}
            Version 2.0 solved a host of fidelity and sync issues related to the page surface.
          </p>
          <p>
            Yet OneNote's App Store ratings hadn't improved.
            User experience was a promising avenue to investigate.
          </p>
        </CaseStudySection>
        <CaseStudySection
          bgColor={theme.colors.white.value}
          h1="RESEARCH INSIGHTS"
          h2={`Users reported the app felt "unintuitive"`}
          imageAlt="Mobile"
          imageUrl="/images/review-feedback.webp"
          imageCss={{ maxWidth: '55vw', '@desktop': { marginTop: '52px' } }}
        >
          <p>
            In App Store reviews, several people had described the app as <Bold>"unintuitive"</Bold>.
            Feedback like this likely came from our target group — new users.
            (Existing users reported more on difficulties with syncing and content fidelity.)
          </p>
          <p>
            This begged the question: <Bold>What could improve OneNote's app experience for new users?</Bold>
          </p>
        </CaseStudySection>
        <CaseStudySection
          h1="USER EXPERIENCE ANALYSIS"
          h2="I analyzed the app from the perspective of a new user"
          bgColor={theme.colors.slateBrightF7.value}
        >
          <p>
            I identified <Bold>three core challenges</Bold> with the user interface:
          </p>
          <InnerH3>
            1<TallPipe /> Navigation stack felt heavy
          </InnerH3>
          <p>
            OneNote's navigation stack was four levels deep — notebooks, sections, pages, and the page surface.
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '8px',
                marginTop: '12px',
                width: '100%',
              }}
            >
              <GalleryItem
                caption="Default notebook across the nav stack in version 2.0"
                original="/images/four-screens-welcome-2.0.webp"
                width="1970"
                height="1000"
              >
                {({ ref, open }) => (
                  <Image
                    alt="Default notebook across the nav stack in version 2.0"
                    src="/images/four-screens-welcome-2.0.webp"
                    onClick={open}
                    ref={ref as RefObject<HTMLImageElement>}
                  />
                )}
              </GalleryItem>
              <Caption>
                Default notebook across the nav stack in version 2.0
              </Caption>
            </Box>
          </Gallery>
          <p>
            A new user starting at the top would <Bold>need to tap three times</Bold> to open the getting started page in their default notebook
          </p>
          <p>
            To newcomers, the unexpected complexity can be hard to understand and even overwhelming.
          </p>
          <InnerH3>
            2<TallPipe /> Two Create buttons were confusing
          </InnerH3>
          <p>
            OneNote presented two Create buttons in two of the views — one to create a new page or section in the active list and the other to create a Quick Note.
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '12px',
                width: '100%',
                '@full': { width: '85%' },
              }}
            >
              {/* Grid to tile designs */}
              <Box
                css={{
                  display: 'grid',
                  gridGap: '0px',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto',
                }}
              >
                <GalleryItem
                  caption="Sections list with two Create buttons"
                  original="/images/sections-two-create-buttons-annotated.webp"
                  width="740"
                  height="1000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Sections list with two Create buttons"
                      src="/images/sections-two-create-buttons-annotated.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
                <GalleryItem
                  caption="Create location options twirl from button"
                  original="/images/two-create-buttons-pages-annotated.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Create location options twirl from button"
                      src="/images/two-create-buttons-pages-annotated.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
              </Box>
              <Caption>
                Two Create buttons in two of the views
              </Caption>
            </Box>
          </Gallery>
          <p>
            The motivation was sound.
            When we take a note, our in-the-moment capture priorities vary.
            OneNote recognizes that and supports notes in two varieties: <Bold>pre-organized</Bold> and <Bold>un-organized</Bold>.
          </p>
          <p>
            On desktop:
          </p>
          <OL>
            <li>
              <Bold>Pre-organized notes</Bold> were the default. All notes created in a main OneNote window were pre-organized because they're added to an existing section.
            </li>
            <li>
              <Bold>Un-organized notes</Bold>, or Quick Notes, could be created anytime by the shortcut <Italic>Windows+N</Italic>.
            </li>
          </OL>
          <p>
            On mobile, capture priorities skew to needing to be <Bold>fast</Bold>.
            That's why <Bold>Quick Notes were an important feature</Bold>.
            They help people avoid the friction of first finding the right place to put a note.
          </p>
          <p>
            But the bifurcated buttons (unlabeled, as action buttons on iOS are) was a cause for confusion.
          </p>
          <InnerH3>
            3<TallPipe /> Organizing notes wasn't fun
          </InnerH3>
          <p>
            Organizing in OneNote on Windows was fun.
          </p>
          <p>
            Colorful section tabs decorated the top with matching colorful pages.
            Sections and pages remembered your place making working across them a breeze.
            Drag and drop was effortless.
          </p>
          <p>
            Thanks to these affordances, many people organized their pages into sections naturally.
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                maxWidth: '830px',
              }}
            >
              <GalleryItem
                caption="OneNote 2007 notebooks, sections, and pages"
                original="/images/onenote-2007-tabs.webp"
                width="850"
                height="436"
              >
                {({ ref, open }) => (
                  <Image
                    alt="OneNote 2007 notebooks, sections, and pages"
                    src="/images/onenote-2007-tabs.webp"
                    onClick={open}
                    ref={ref as RefObject<HTMLImageElement>}
                  />
                )}
              </GalleryItem>
              <Caption>
                OneNote 2007 notebooks, sections, and pages
              </Caption>
            </Box>
          </Gallery>
          <p>
            On iPhone, organizing felt different.
          </p>
          <p>
            iPhone's nav stack interface was intuitive but weighty.
            Navigating to a page was easy, but traveling up and down to create new sections or switch between them required greater cognitive effort.
          </p>
          <p>
            Now on mobile, organizing is less important than taking notes fast.
            But <Bold>organizing was also OneNote's differentiator</Bold>.
            Users on Windows loved turning to OneNote when they had powerful note-taking needs.
          </p>
          <p>
            Without making organizing fun, we weren't putting our best foot forward on iPhone.
          </p>
        </CaseStudySection>
        <CaseStudySection
          h1="EXPLORING SOLUTIONS"
          h2="I identified two solution areas to explore and address the UX challenges"
          bgColor={theme.colors.white.value}
        >
          <p>
            I explored two solution areas that, together, I believed could make a serious positive impact on the experience for new and existing users.
          </p>
          <InnerH3>
            1 <TallPipe /> Simplify the nav stack
          </InnerH3>
          <p>
            I explored <Bold>two core ideas</Bold> that I believed combined would let OneNote simplify the nav stack <Bold>from four screens to two and a half</Bold>.
          </p>
          <InnerH4>
            i) Integrated notebook view
          </InnerH4>
          <p style={{ marginTop: '24px' }}>
            I explored combining the sections and pages lists of a notebook into a single view, making it <Bold>the notebook view</Bold>.
          </p>
          <p>
            Here's an early exploration I did:
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                marginX: 'auto',
                width: '100%',
                '@desktop': { width: '75%' },
                '@mid': { marginX: '0', width: '60%' },
              }}
            >
              <GalleryItem
                caption="Early exploration of combining sections and pages into a notebook view"
                original="/images/early-notebook-exploration.webp"
                width="1800"
                height="1800"
              >
                {({ ref, open }) => (
                  <Image
                    alt="Early exploration of combining sections and pages into a notebook view"
                    src="/images/early-notebook-exploration.webp"
                    onClick={open}
                    ref={ref as RefObject<HTMLImageElement>}
                  />
                )}
              </GalleryItem>
              <Caption>
                Early exploration of combining sections and pages into a notebook view
              </Caption>
            </Box>
          </Gallery>
          <p>
            The concept had <Bold>several characteristics:</Bold>
          </p>
          <OL>
            <li>
              <Bold>Horizontal section tabs.</Bold>
              {' '}
              Horizontally swipable tabs were a rare UX construct on iPhone, only used at the time by Apple's own Numbers app.
              But it felt great in Numbers, and it perfectly translates to notebooks on larger screens.
            </li>
            <li>
              <Bold>Prominent section color.</Bold>
              {' '}
              Color is a powerful organizational aid in OneNote.
              Enclosing the page list in the section color helped users quickly orient themselves.
            </li>
            <li>
              <Bold>Indicator to last page.</Bold>
              {' '}
              A subtle visual indicator on the last active page draws the eye and reduces cognitive effort in common scenarios of returning to a page in a section.
            </li>
            <li>
              <Bold>Inviting New Section button.</Bold>
              {' '}
              Section tab shapes meant the similarly shaped New Section button would be delightfully intuitive and inviting.
            </li>
          </OL>
          <p>
            I liked that it had <Bold>several benefits:</Bold>
          </p>
          <OL>
            <li>
              <Bold>Proper home base.</Bold>
              {' '}
              None of the existing navigation screens felt like a true home base, or main view, of the app.
              But an integrated notebook view gave the app a proper center of gravity.
              Without one, it was <Bold>easy to get lost</Bold> in the three levels of hierarchy (notebooks, sections, and pages) which all looked strikingly similar in the nav stack.
            </li>
            <li>
              <Bold>Powerful visual identity.</Bold>
              {' '}
              Sections and pages together present a powerful visual identity that instantly looks like OneNote on any platform.
              A strong visual identity is a memorable branding tool and is a way to help a user feel at ease, <Bold>welcoming them home</Bold> to a familiar environment.
            </li>
            <li>
              <Bold>Encourages organization.</Bold>
              {' '}
              Section tabs are a powerful affordance that explain their purpose brilliantly by their design.
              Not only that, but a tab with a '+' button practically invites one to press it.
              I hypothesized that surfacing section tabs (rather than hide them up the nav stack) would increase organizing on the phone, and thereby <Bold>increase longterm retention</Bold> thanks to an appreciation of OneNote's strength in organized note-taking.
            </li>
            <li>
              <Bold>Clarifies notebooks.</Bold>
              {' '}
              New users to OneNote commonly took a while to understand the framework of notebooks, sections, and pages.
              I hypothesized that an integrated notebook view, seeing section tabs above with page lists beneath, would better clarify the concept of a notebook.
            </li>
          </OL>
          <InnerH4>
            ii) Notebooks drawer
          </InnerH4>
          <p>
            I explored further streamlining the navigation by moving the notebook list into a "drawer".
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                marginX: 'auto',
                width: '100%',
                '@desktop': { width: '75%' },
                '@mid': { marginX: '0', width: '60%' },
              }}
            >
              <GalleryItem
                caption="Early exploration of a notebooks drawer"
                original="/images/early-drawer-exploration.webp"
                width="1800"
                height="1800"
              >
                {({ ref, open }) => (
                  <Image
                    alt="Early exploration of a notebooks drawer"
                    src="/images/early-drawer-exploration.webp"
                    onClick={open}
                    ref={ref as RefObject<HTMLImageElement>}
                  />
                )}
              </GalleryItem>
              <Caption>
                Early exploration of a notebooks drawer
              </Caption>
            </Box>
          </Gallery>
          <p>
            Its characteristics:
          </p>
          <OL>
            <li>
              <Bold>Light dismiss drawer.</Bold>
              {' '}
              The light dismiss drawer was a popular new paradigm on the iPhone introduced by the Facebook app.
              It pushed the active view to the side, but only partially, allowing light dismiss to return to the active view.
            </li>
            <li>
              <Bold>Notebooks and app pivots.</Bold>
              {' '}
              Beyond notebooks, OneNote had views for Recent Notes and Settings.
              A drawer enabled switching between the notebook and app pivots without ever fully leaving a list of notes.
            </li>
          </OL>
          <p>
            It offered several advantages:
          </p>
          <OL>
            <li>
              <Bold>Simplified the nav stack further.</Bold>
              {' '}
              Alongside the integrated notebook view, the notebooks drawer simplified the nav stack <Bold>to a single screen</Bold> that had a light dismiss drawer.
            </li>
            <li>
              <Bold>Easier to return from top level.</Bold>
              {' '}
              In addition to notebooks, the top level was the home of Recent Notes, Settings, and eventually Search.
              It is a nice reduction in cognitive effort when it only requires a light dismiss to return to your original context instead of having to re-tap a notebook's name.
            </li>
            <li>
              <Bold>Kept the attention on the notebook.</Bold>
              {' '}
              As said earlier, the integrated notebook view serves as a powerful home base and visual identity.
              Keeping all other app navigation in a light dismiss view reinforced the return to the notebook as the app's center of gravity.
            </li>
            <li>
              <Bold>Never removed you from your notes.</Bold>
              {' '}
              It's a subtle thing, but being brought outside of all your notebooks can feel jarring.
            </li>
          </OL>
          <InnerH3>
            How did this feel?
          </InnerH3>
          <p>
            Horizontally swipable tabs was a rare UX construct on iPhone, only used at the time by Apple's own Numbers app.
          </p>
          <p>
            <Bold>I coded a prototype</Bold> of swipable section tabs with page lists, all editable, which I loaded onto colleague's phones to collectively evaluate the experience.
            It went a long way to convince myself, and the team, that it was a direction worth taking.
          </p>
          <InnerH3>
            2 <TallPipe /> Consolidate the New Note buttons
          </InnerH3>
          <p>
            I explored combining both New Page in Section and New Quick Note into a single floating button.
          </p>
          <p>
            Here's an early exploration I did:
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                width: '100%',
              }}
            >
              {/* Grid to tile designs */}
              <Box
                css={{
                  display: 'grid',
                  gridGap: '0px',
                  gridTemplateColumns: '1fr',
                  gridTemplateRows: 'auto',
                  '@desktop': { gridTemplateColumns: '1fr 1fr' },
                }}
              >
                <GalleryItem
                  caption="Early exploration of a page with a floating New Note button"
                  original="/images/early-page-exploration.webp"
                  width="1800"
                  height="1800"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Early exploration of a page with a floating New Note button"
                      src="/images/early-page-exploration.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
                <GalleryItem
                  caption="Early exploration of a modal note creation view with a location switcher"
                  original="/images/early-quick-note-exploration.webp"
                  width="1800"
                  height="1800"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Early exploration of a modal note creation view with a location switcher"
                      src="/images/early-quick-note-exploration.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
              </Box>
              <Caption>
                Floating New Note button and modal note creation view with a location switcher
              </Caption>
            </Box>
          </Gallery>
          <p>
            Its key characteristics:
          </p>
          <OL>
            <li>
              <Bold>Floating button.</Bold>
              {' '}
              A floating button enabled creating a new note from the page surface.
              This was a big win because the app remembered the last view when it launches, and it was most likely to be a page.
            </li>
            <li>
              <Bold>Modal view.</Bold>
              {' '}
              I imagined all new notes starting in a modal view.
              The location it saves to would display and could be changed, and would default smartly based on context and earlier actions.
            </li>
          </OL>
          <p>
            However, there was a <Bold>major downside</Bold> to the modal view idea:
            What would happen when the app closes before the note is saved?
            Where was that note?
            Solving that question would mean adding an additional layer of complexity to the storage model, which would add fragility, which we'd only want to risk when absolutely necessary.
          </p>
          <p>
            Ultimately, I quickly gravitated towards a different solution, but only after <Bold>Apple made a big announcement...</Bold>
          </p>
        </CaseStudySection>
        <CaseStudySection
          bgColor={theme.colors.slateBrightF7.value}
          columns="3fr 1fr"
          h1="OPPORTUNITY"
          h2="Apple's new design principles brought sharper focus to the redesign"
          imageAlt="Logo for iOS 7"
          imageCss={{ maxWidth: '250px', '@desktop': { marginTop: '52px' } }}
          imageUrl="/images/ios-7-logo-number.webp"
        >
          <p>
            In June 2013, Apple changed UX design forever.
          </p>
          <p>
            <Bold>Apple unveiled iOS 7</Bold>, and with it, a modern design language for Retina displays.
            iOS 7 dropped button borders and skeuomorphism for sub-pixel hairlines and vibrancy.
            Apple evangelized four design principles: <Bold>Clarity</Bold>, <Bold>Deference</Bold>, <Bold>Depth</Bold>, and <Bold>Detail</Bold>.
          </p>
          <p>
            I watched every design talk from WWDC to absorb Apple's design philosophy. More than ever, I believed in the need to redesign.
          </p>
          <p>
            I adapted my designs for iOS 7, coded a prototype with the beta SDK, and pitched my proposal to leadership and key stakeholders.
          </p>
          <p>
            I <Bold>successfully secured funding</Bold> to finalize the designs.
          </p>
        </CaseStudySection>
        <CaseStudySection
          h1="SOLIDIFYING THE DESIGN"
          h2="I partnered with a design firm for four weeks to solidify the final aesthetic"
          bgColor={theme.colors.white.value}
        >
          <p>
            Collaborating with a respected design firm helped me elevate the fit and finish of the final designs:
          </p>
          <InnerH3>
            1 <TallPipe /> Simplified nav stack
          </InnerH3>
          <p>
            We translated the simplified nav stack with an eye on highlighting the strengths of the iOS 7 aesthetic.
          </p>
          <p>
            Here were the final designs:
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
              }}
            >
              {/* Grid to tile designs */}
              <Box
                css={{
                  display: 'grid',
                  gridGap: '0px',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto',
                  '@desktop': {
                    gridTemplateColumns: '1fr 1fr 1fr',
                  },
                }}
              >
                <GalleryItem
                  caption="Notebooks drawer with translucent vibrancy"
                  original="/images/new-nav-stack-1-drawer.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Notebooks drawer with translucent vibrancy"
                      src="/images/new-nav-stack-1-drawer.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
                <GalleryItem
                  caption="Notebook view integrating sections tabs with page lists"
                  original="/images/new-nav-stack-2-notebook.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Notebook view integrating sections tabs with page lists"
                      src="/images/new-nav-stack-2-notebook.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
                <GalleryItem
                  caption="Page surface with transparent nav bar"
                  original="/images/new-nav-stack-3-page.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Page surface with transparent nav bar"
                      src="/images/new-nav-stack-3-page.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
              </Box>
              <Caption>
                Simplified nav stack comprising notebooks drawer, notebook, and page
              </Caption>
            </Box>
          </Gallery>
          <p>
            Details to highlight:
          </p>
          <OL>
            <li>
              <Bold>Integrated notebook view.</Bold>
              {' '}
              The notebook view became a beautiful home base for the app.
              Vibrant section tabs swipable horizontally above page names were intuitive to understand and use.
              (I coded a prototype with the iOS 7 beta SDK to be sure, and it felt great.)
              Notebook color was minimized to a subtle accent on the buttons, lending to a clean aesthetic alongside the vibrancy.
            </li>
            <li>
              <Bold>Notebooks drawer.</Bold>
              {' '}
              Instead of pushing the active view, as was common in iOS 6, we chose to slide over it, showcasing Apple's new translucent vibrancy.
            </li>
            <li>
              <Bold>Page surface.</Bold>
              {' '}
              Apple's new transparent nav bar allowed us to extend the page surface to the screen's edges, heightening immersiveness.
            </li>
          </OL>
          <InnerH3>
            2 <TallPipe /> Consolidated New Note button
          </InnerH3>
          <p>
            We streamlined the two New Note flows through a single button.
            But instead of the modal view explored earlier, we spun out two options: <Bold>In "section name"</Bold> and <Bold>Quick note</Bold>.
          </p>
          <p>
            Here was the final design:
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                width: '100%',
                '@full': { width: '85%' },
              }}
            >
              {/* Grid to tile designs */}
              <Box
                css={{
                  display: 'grid',
                  gridGap: '0px',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto',
                }}
              >
                <GalleryItem
                  caption="Create button floating over page"
                  original="/images/create-button-on-page.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Create button floating over page"
                      src="/images/create-button-on-page.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
                <GalleryItem
                  caption="Create location options twirl from button"
                  original="/images/create-options-on-page.webp"
                  width="1500"
                  height="2000"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="Create location options twirl from button"
                      src="/images/create-options-on-page.webp"
                      onClick={open}
                      ref={ref as RefObject<HTMLImageElement>}
                    />
                  )}
                </GalleryItem>
              </Box>
              <Caption>
                Floating Create button twirls into two location options
              </Caption>
            </Box>
          </Gallery>
          <p>
            This was a clear win over other models.
          </p>
          <OL>
            <li>
              <Bold>Upfront choice was now clear.</Bold>
              {' '}
              Before, the unlabeled Create buttons meant users had to make a choice, but not an intuitive one.
              Now, with one path and two text labels, the upfront choice was spelled out and easy to understand.
            </li>
            <li>
              <Bold>Always present in a consistent place.</Bold>
              {' '}
              A floating button enabled creating a new note from anywhere in the nav stack, including the page view.
              This was a <Bold>big win for fast capture</Bold> because the app relaunched to the last view, which was almost always a page.
              It was also a win for reinforcing muscle memory thanks to its consistent placement.
            </li>
            <li>
              <Bold>Delightful animation.</Bold>
              {' '}
              The animation to twirl out the options had the circle spin and expand upwards while the options faded in.
              It was a truly delightful animation.
            </li>
          </OL>
          <p>
            Finally, on the notebook screen, the floating New Note button now didn't conflict at all with the visually clear New Section button.
          </p>
          <Gallery withCaption>
            {/* Flex to display caption below images */}
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '48px',
                marginTop: '48px',
                marginX: 'auto',
                width: '100%',
                '@desktop': { width: '75%' },
                '@mid': { marginX: '0', width: '60%' },
              }}
            >
              <GalleryItem
                caption="Intuitively distinct New Note and New Section buttons"
                original="/images/onenote-ios-7-notebook-new-section-button.webp"
                width="1500"
                height="2000"
              >
                {({ ref, open }) => (
                  <Image
                    alt="Intuitively distinct New Note and New Section buttons"
                    src="/images/onenote-ios-7-notebook-new-section-button.webp"
                    onClick={open}
                    ref={ref as RefObject<HTMLImageElement>}
                  />
                )}
              </GalleryItem>
              <Caption>
                Intuitively distinct New Note and New Section buttons
              </Caption>
            </Box>
          </Gallery>
        </CaseStudySection>
        <CaseStudySection
          bgColor={theme.colors.slateBrightF7.value}
          columns="3fr 1fr"
          h1="RESULTS AND TAKEAWAYS"
          h2="Ratings soared above 4.5 stars and downloads rose"
          imageAlt="Appreciation"
          imageCss={{ maxWidth: '250px', '@desktop': { marginTop: '52px' } }}
          imageUrl="/images/appreciation-illustration.svg"
        >
          <p>
            With the designs finalized, I received approval to build it with an engineering crew.
            I wrote 11 specs and led 3 engineers over 3 months to build the new UX.
            We released version 2.2 before the end of 2013.
          </p>
          <p>
            The result?
          </p>
          <p>
            <Bold>The new UX was a hit.</Bold>
            {' '}
            Ratings soared above 4.5 stars and the rate of downloads rose.
            Soon, OneNote started to overtake Evernote in the App Store rankings.
          </p>
          <p>
            I believe the uptick was due to a mix of factors.
            For adopting the iOS 7 design language quickly, Apple featured us in the App Store.
            The technical accomplishments of version 2.0 were really impressive.
            But all the same, the positive reviews that started flowing in were really nice for the team.
          </p>
        </CaseStudySection>
        <PortfolioPager />
        <Contact />
        <Footer />
      </Box>
    </>
  )
}

////
///
// MARK: Styles

const CardText: React.FC<TextProps> = ({ children, ...props }) => (
  <Text
    css={{
      fontSize: '20px',
      lineHeight: '1.75',
      marginTop: '24px',
    }}
    {...props}
  >
    {children}
  </Text>
)

const InnerH3: React.FC<TextProps> = ({ children, css, ...props }) => (
  <Text
    as="h3"
    display="flex"
    font="lato"
    spacing="text"
    weight={600}
    css={{
      alignItems: 'center',
      color: '$textDark',
      fontSize: '22px',
      marginTop: '48px',
      '@largeMobile': { fontSize: '26px' },
      '@desktop': {
        fontSize: '26px',
        marginTop: '40px',
      },
      '@mid': {
        fontSize: '32px',
        marginBottom: '0px',
        marginTop: '64px',
      },
      ...css,
    }}
    {...props}
  >
    {children}
  </Text>
)

const InnerH4: React.FC<TextProps> = ({ children, css, ...props }) => (
  <Text
    as="h4"
    display="flex"
    font="lato"
    spacing="text"
    weight={600}
    css={{
      alignItems: 'center',
      color: '$textDark',
      fontSize: '20px',
      marginTop: '64px',
      '@largeMobile': { fontSize: '23px' },
      '@desktop': {
        fontSize: '23px',
        marginTop: '52px',
      },
      '@mid': {
        fontSize: '28px',
        marginBottom: '0px',
        marginTop: '64px',
      },
      ...css,
    }}
    {...props}
  >
    {children}
  </Text>
)

const OL = styled('ol', {
  listStyle: 'decimal',
  paddingLeft: '30px',
  '& li': {
    marginTop: '32px',
  },
})
