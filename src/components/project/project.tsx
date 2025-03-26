import { PriorityProject as ProjType } from '@/data/projects'
import Image from 'next/image'

export function Project({ project }: { project: ProjType }) {
	return (
		<a
			className="flex gap-x-4 rounded-md p-4 hover:bg-gray-200"
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Image
				src={project.src}
				alt=""
				width={160}
				height={90}
				className="self-start rounded-sm border-2 border-slate-200"
			/>
			<div>
				<h3 className="font-medium">{project.title}</h3>
				<p>{project.description}</p>
			</div>
		</a>
	)
}
