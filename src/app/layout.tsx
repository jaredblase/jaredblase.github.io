import './globals.css'
import { title, description, link } from '@/data/metadata'
import { Metadata } from 'next'
import { ibmMono } from '@/fonts/ibm-mono'
import { CyclingTypedText } from '@/components/cycling-typed-text'
import { contactInfo } from '@/data/contact-info'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://jaredblase.github.io'),
  keywords: ['Jared', 'Blase', 'Sy', 'developer', 'portfolio'],
  generator: 'Next.js',
  openGraph: {
    title,
    description,
    type: 'profile',
    url: link,
    images: `${link}/images/og_image.jpg`,
  },
  twitter: {
    title,
    description,
    images: `${link}/images/og_image.jpg`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmMono.variable}`}>
      <body>
        <header className="sticky h-16 bg-gradient-to-r from-white"></header>
        <section className="relative grid min-h-screen items-center">
          <div className="container">
            <p className="z-0 font-mono text-3xl font-semibold sm:text-5xl">
              <CyclingTypedText
                texts={[
                  'Fullstack Developer',
                  'Software Engineer',
                  'Shopify Developer',
                  'Leader',
                  'Mentor',
                ]}
              />
            </p>
            <p className="mt-4 text-xl">
              Hi! I&apos;m Jared. A fullstack developer who loves learning and
              building web applications.
            </p>
            <div className="my-gradient circle absolute bottom-0 right-0 w-64 opacity-75 blur-lg" />
          </div>
        </section>
        <div className="relative m-auto grid max-w-screen-xl grid-cols-2">
          <aside>
            <header className="container sticky top-24 flex h-[80vh] flex-col">
              <article>
                <h1 className="text-4xl font-bold">Jared Blase Sy</h1>
                <h2 className="mt-1 text-xl">Full Stack Engineer</h2>
                <p className="max-w-72">
                  I build accessible and responsive websites fit to your tastes
                </p>
              </article>
              <nav className="mt-8 w-min">
                <ul>
                  {['About', 'Experience', 'Projects', 'Others'].map(
                    (section) => (
                      <li key={section}>
                        <a
                          className="group flex items-center py-1"
                          href={'#' + section.toLowerCase()}
                        >
                          <span className="mr-4 h-px w-8 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-slate-800 group-focus-visible:w-16 group-focus-visible:bg-slate-800 motion-reduce:transition-none" />
                          <span className="font-medium text-gray-600 group-hover:text-gray-900 group-focus-visible:text-gray-900">
                            {section}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              <div className="mt-auto flex gap-5" id="contact">
                {contactInfo.map((c) => (
                  <a
                    key={c.title}
                    href={c.link}
                    title={c.title}
                    aria-label={`${c.title} profile link (opens a new tab)`}
                    className="w-7 fill-black"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {c.icon}
                  </a>
                ))}
              </div>
            </header>
          </aside>
          {children}
        </div>
      </body>
    </html>
  )
}
