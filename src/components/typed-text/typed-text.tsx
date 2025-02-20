'use client'
import { useEffect, useState } from 'react'

type TypedTextProps = {
	children: string
	ms?: number
}

export function TypedText({ children, ms }: TypedTextProps) {
	const [_text, setText] = useState('')
	ms ??= 60

	useEffect(() => {
		if (_text.length == children.length) return
		setTimeout(() => setText(children.substring(0, _text.length + 1)), ms)
	}, [_text])

	return (
		<span className={_text.length === children.length ? '' : 'has-cursor'}>
			{_text}
		</span>
	)
}
