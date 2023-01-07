import { title, description, link } from '@data/metadata'
import { CustomHead } from '@components/custom-head'
import { contactInfo } from '@data/contact-info'
import Image from 'next/image'
import { experiences, extracurriculars, technicalSkills } from '@data/skills'
import { projects } from '@data/projects'
import { publications } from '@data/publications'
import { Publication } from '@components/publication'
import HeroImage from '@public/images/hero-bg.avif'
import ProgrammingImage from '@public/images/programming.avif'
import LeadershipImage from '@public/images/leadership.avif'
import ExperienceImage from '@public/images/experience.avif'

export default function Home() {
	return (
		<>
			<CustomHead title={title} description={description} link={link} />
			<header className="h-14 w-full fixed z-50 drop-shadow-2xl bg-white">
				<div className="container h-full flex justify-between items-center">
					<a href="#">
						<h1 className="font-semibold text-xl">Jared Sy</h1>
					</a>
					<nav className="flex h-full">
						<a href="#about">About Me</a>
						<a href="#skills">Skills</a>
						<a href="#projects">Projects</a>
						<a href="#publications">Publications</a>
						<a href="#contact">Contact Me</a>
					</nav>
				</div>
			</header>
			<main className="pt-14">
				<section className="min-h-screen-w-header relative grid place-items-center">
					<Image src={HeroImage} alt="Brown minimalist background with wooden object" fill className="object-cover object-bottom" priority={true} />
					<h1 className="z-0 text-3xl sm:text-5xl font-semibold text-center container">Progammer, Student-Leader & Mentor</h1>
				</section>
				<section className="bg-primary text-white" id="about">
					<article className="container text-center">
						<h2>About Me</h2>
						<p className="max-w-prose mx-auto text-lg">
							Hi! I&apos;m Jared, a senior Computer Science student in <a href="https://www.dlsu.edu.ph">De La Salle University - Manila</a>.
							I have experience in web development, object-oriented programming, database design, and software engineering.
							I have done a few scripts for myself, friends, and my family to automate tasks. As I journey deeper into the world of computers and programming,
							I also find myself guiding others who are about to begin theirs. I just really love learning things, solving problems,
							and improving myself while also helping others.
						</p>
					</article>
				</section>
				<section className="bg-white" id="skills">
					<div className="container grid sm:grid-cols-2 gap-16 place-items-center">
						<article className="order-1">
							<h2>Technical Skills</h2>
							<p className="subtitle">Listed here are the different programming languages I feel at home with.</p>
							<ol>
								{technicalSkills.map(group =>
									<li key={group.title}>
										<p className="list-title">{group.title}</p>
										<p>{group.items.join(', ')}</p>
									</li>
								)}
							</ol>
						</article>
						<figure className="order-2">
							<Image src={ProgrammingImage} alt="man typing on keyboard" />
							<a href="https://www.freepik.com/vectors/technology" target="_blank" rel="noreferrer">Technology vector created by freepik - www.freepik.com</a>
						</figure>
						<figure className="order-4 sm:order-3">
							<Image src={LeadershipImage} alt="three people helping one another reach the top" />
							<a href="https://www.freepik.com/vectors/people" target="_blank" rel="noreferrer">People vector created by pch.vector - www.freepik.com</a>
						</figure>
						<article className="order-3 sm:order-4">
							<h2>Extracurriculars</h2>
							<p className="subtitle">Aside from programming, I also devote my time to different school organizations that hone my leadership and communication skills.</p>
							<ol>
								{extracurriculars.map(e =>
									<li key={e.title}>
										<p className="list-title">{e.title}</p>
										<ol>
											{e.items.map(role =>
												<li key={role.organization + role.position + role.startYear}>
													{role.position} at <a href={role.link}>{role.organization}</a> ({role.startYear}{role.endYear && '-' + role.endYear})
												</li>
											)}
										</ol>
									</li>
								)}
							</ol>
						</article>
						<article className="order-5">
							<h2>Experience</h2>
							<p className="subtitle">Here are some of the career-related responsibilities I took.</p>
							<ol>
								{experiences.map(e =>
									<li key={e.title}>
										<p className="list-title">{e.title}</p>
										<ol>
											{e.items.map(role =>
												<li key={role.organization + role.position + role.startYear}>
													{role.position} at <a href={role.link}>{role.organization}</a> ({role.startYear}{role.endYear && '-' + role.endYear})
												</li>
											)}
										</ol>
									</li>
								)}
							</ol>
						</article>
						<figure className="order-6">
							<Image src={ExperienceImage} alt="a person asking another person for help" />
							<a href="https://www.freepik.com/vectors/work" target="_blank" rel="noreferrer">Work vector created by freepik - www.freepik.com</a>
						</figure>
					</div>
				</section>
				<section id="projects" className="bg-primary text-white">
					<div className="container text-center">
						<h2>Project Work</h2>
						<p className="subtitle text-white">For more samples, please checkout my <a href="https://github.com/jaredblase">GitHub profile</a> or contact me directly.</p>
						<div className="flex flex-wrap gap-6 justify-center">
							{projects.map(p =>
								<a key={p.title} href={p.link} className="w-64 h-36 shadow-md rounded-lg block bg-white px-5 py-6 hover:scale-105 transition-transform" style={{ backgroundColor: p.bgColor }}>
									<figure className="relative w-full h-full">
										<Image src={p.src} alt={p.title} fill className="object-contain object-center" />
									</figure>
								</a>
							)}
						</div>
					</div>
				</section>
				<section id="publications">
					<div className="container text-center">
						<h2>Past Publication Materials</h2>
						<p className="subtitle">Here are some of the publication materials I made during my term as VP Creatives in PTS.</p>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto gap-y-4 sm:gap-y-6 md:gap-y-8 children:transition-transform">
							{publications.map(p => <Publication key={p.title} {...p} />)}
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-primary py-16 text-center space-y-8" id="contact">
				<div className="flex justify-center space-x-8">
					{contactInfo.map(c =>
						<a key={c.title} href={c.link} title={c.title} aria-label={`${c.title} profile link`}>
							{c.icon}
						</a>
					)}
				</div>
				<p>
					<a href='https://www.freepik.com/photos/abstract' className="underline text-white">
						Abstract photo (Used as banner) created by freepik - www.freepik.com
					</a>
				</p>
			</footer>
		</>
	)
}
