import { Experience as ExpType } from '@/data/skills'
import { ElementType } from 'react'

export function Experience({ as, exp }: { as?: ElementType; exp: ExpType }) {
	const El = as ?? 'li'

	return (
		<El key={exp.name} className="flex gap-4">
			<p className="basis-28">
				{exp.startYear == exp.endYear
					? exp.startYear
					: `${exp.startYear} - ${exp.endYear ?? 'Present'}`}
			</p>
			<article className="flex-1">
				<p className="font-semibold">
					{exp.name} ({exp.organization})
				</p>
				<p className="text-[0.95rem]">{exp.description}</p>
			</article>
		</El>
	)
}
