export function SearchBar() {
	return (
		<div className='h-[5rem] w-full min-w-[24rem] rounded-lg bg-[#2b2b2b]'>
			<input
				placeholder='Search your gitmoji'
				className='h-full w-full bg-transparent px-8 text-3xl text-white caret-white'
			/>
		</div>
	)
}
