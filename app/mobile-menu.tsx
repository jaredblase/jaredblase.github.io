'use client'

import { useEffect, useState } from 'react'

export function MobileMenu() {
	const [showMenu, setShowMenu] = useState(false)

	function handleClick() {
		setShowMenu(false)
	}

	useEffect(() => {
		window.addEventListener('click', handleClick)
		return () => window.removeEventListener('click', handleClick)
	}, [])

	return (
		<>
			<button
				className="h-full sm:hidden hover:bg-gray-200 active:bg-gray-300 transition-colors px-5 -mx-6"
				onClick={(e) => { e.stopPropagation(); setShowMenu(s => !s) }}
			>
				<svg className="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
				</svg>
			</button>
			<nav data-show={showMenu}
				className="grid absolute sm:hidden transition-transform
						data-[show=false]:hidden bg-white w-full left-0 top-14 children:py-2"
			>
				<a href="#about">About Me</a>
				<a href="#skills">Skills</a>
				<a href="#projects">Projects</a>
				<a href="#publications">Publications</a>
				<a href="#contact">Contact Me</a>
			</nav>
		</>
	)
}
