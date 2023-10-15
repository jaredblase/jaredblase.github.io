import { Publication } from '@data/publications'
import Image from 'next/image'

export function Publication({ title, src, link }: Publication) {
	const Element = link ? 'a' : 'div'

	return (
		<Element href={link} title={title} data-type={Element} className="drop-shadow-xl rounded-lg data-[type=a]:hover:scale-105">
			<Image src={src} alt={title} width={281} height={386} className="rounded-lg" />
		</Element>
	)
}