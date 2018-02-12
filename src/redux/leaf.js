import daggy from 'daggy'

const leaf = daggy.taggedSum('leaf', {
	unloaded: [],
	loading: [],
	loaded: ['data'],
	failed: ['reason'],
})

export default leaf
