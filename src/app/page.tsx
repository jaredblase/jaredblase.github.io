import Image from 'next/image'
import { experiences, others } from '@/data/skills'
import { projects } from '@/data/projects'
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <div className="space-y-12 pb-24 max-w-prose">
      <section id="about">
        <p className="max-w-prose">
          I'm currently taking up Masters in Computer Science at{' '}
          <a href="https://www.dlsu.edu.ph" className="underline">De La Salle University - Manila</a>.
          I have experience in web development, object-oriented programming,
          database design, and software engineering. I have done scripts
          for myself, friends, and family to automate tasks. As I journey
          deeper into the world of computers and programming, I also find myself
          guiding others who are about to begin theirs. I just really love
          learning things, solving problems, and improving myself while also
          helping others.
        </p>
      </section>
      <section id="experience">
        <ol className="space-y-4">
          {experiences.map((e) => <Experience key={e.name} as="li" exp={e} />)}
        </ol>
      </section>
      <section id="projects">
        <div>
          <p>
            For more samples, please checkout my{' '}
            <a href="https://github.com/jaredblase">GitHub profile</a> or
            contact me directly.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className="block h-36 w-64 rounded-lg bg-white px-5 py-6 shadow-md transition-transform hover:scale-105"
                style={{ backgroundColor: p.bgColor }}
              >
                <figure className="relative h-full w-full">
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-contain object-center"
                  />
                </figure>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="others">
        <ol className="space-y-4">
          {others.map((e) => <Experience key={e.name} as="li" exp={e} />)}
        </ol>
      </section>
    </div>
  )
}
