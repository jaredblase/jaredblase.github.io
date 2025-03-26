import { experiences, others } from '@/data/skills'
import { isPriorityProject, projects } from '@/data/projects'
import { Experience } from '@/components/experience'
import { Project } from '@/components/project'
import { CyclingTypedText } from '@/components/cycling-typed-text'
import { contactInfo } from '@/data/contact-info'

export default function Home() {
	return (
		<>
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
					<div className="my-gradient circle absolute right-0 bottom-0 w-64 opacity-75 blur-lg" />
				</div>
			</section>
			<div className="relative m-auto grid max-w-(--breakpoint-xl) grid-cols-2">
				<aside>
					<header className="sticky top-24 container flex h-[80vh] flex-col">
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
				<div className="max-w-prose space-y-24 pb-24">
					<section id="about" className="scroll-m-8">
						<p className="max-w-prose">
							I'm currently taking up Masters in Computer Science at{' '}
							<a href="https://www.dlsu.edu.ph" className="underline">
								De La Salle University - Manila
							</a>
							. I have experience in web development, object-oriented
							programming, database design, and software engineering. I have
							done scripts for myself, friends, and family to automate tasks. As
							I journey deeper into the world of computers and programming, I
							also find myself guiding others who are about to begin theirs. I
							just really love learning things, solving problems, and improving
							myself while also helping others.
						</p>
					</section>
					<section id="experience" className="scroll-m-8">
						<ol className="space-y-4">
							{experiences.map((e) => (
								<Experience key={e.name} as="li" exp={e} />
							))}
						</ol>
						<a
							className="mt-4 block"
							target="_blank"
							href="https://drive.google.com/file/d/1V6Xg2QV1_Lt7BkbbZgDllop_tVxZ3iX7/view?usp=drive_link"
						>
							View resume
						</a>
						<a
							className="block"
							target="_blank"
							href="https://drive.google.com/file/d/1FH9lIlOeud1347560ofesHgOskU4NJqg/view?usp=drive_link"
						>
							View CV
						</a>
					</section>
					<section id="projects" className="scroll-m-8">
						<div>
							{projects.filter(isPriorityProject).map((p) => (
								<Project key={p.title} project={p} />
							))}
						</div>
						<a className="mt-4 hover:underline" href="projects">
							View project archive
						</a>
					</section>
					<section id="others">
						<ol className="space-y-4">
							{others.map((e) => (
								<Experience key={e.name} as="li" exp={e} />
							))}
						</ol>
					</section>
				</div>
			</div>
		</>
	)
}
