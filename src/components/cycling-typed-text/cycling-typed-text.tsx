'use client'
import { useEffect, useState } from 'react'

type CyclingTypedTextProps = {
	texts: Array<string>
	type_ms?: number
	wait_ms?: number
}

export function CyclingTypedText({ texts, type_ms, wait_ms }: CyclingTypedTextProps) {
	const [text, setText] = useState('')
	const [idx, setIdx] = useState(0)
	const [increasing, setIncreasing] = useState(true)
	type_ms ??= 70
	wait_ms ??= 1250

	useEffect(() => {
		if (increasing && text.length == texts[idx].length) {
			setIncreasing(false)
			setTimeout(() => setText(texts[idx].substring(0, text.length-1)), wait_ms)
			return
		}

		if (!increasing && text.length == 0) {
			setIncreasing(true)
			let i = idx + 1 >= texts.length ? 0 : idx + 1
			setIdx(i)
			setTimeout(() => setText(texts[i].substring(0, 1)), wait_ms)
			return
		}
	
		setTimeout(() => setText(texts[idx].substring(0, text.length + (increasing ? 1 : -1))), type_ms)
	}, [text])

	return <span className="has-cursor inline-block">{text}</span>
}
