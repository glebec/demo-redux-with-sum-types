// simulating a backend

const SIMULATE_DELAY = 1000

const response = {
	data: [{
		id: 1,
		name: 'Grumples'
	}, {
		id: 2,
		name: 'Snuggles'
	}, {
		id: 3,
		name: 'Mittens'
	}]
}

const fakeAxios = {
	get(url) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (url === '/api/cats') resolve(response)
				else reject(Error('404: Could not fetch ' + url))
			}, SIMULATE_DELAY)
		})
	}
}

export default fakeAxios

// // debug / dev code

// fakeAxios.get('/api/cats')
// .then(res => res.data)
// .then(cats => console.log('kittez', cats))
// .catch(console.error.bind(console))

// fakeAxios.get('/foobars')
// .then(res => res.data)
// .then(foos => console.log('foobars', foos))
// .catch(console.error.bind(console))
