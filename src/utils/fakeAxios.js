// simulating a backend

const SIMULATE_DELAY = 1500
const SIMULATE_FAILURE = false

const cats = {
	data: [{
		id: 1,
		name: 'Grumples',
	}, {
		id: 2,
		name: 'Snuggles',
	}, {
		id: 3,
		name: 'Mittens',
	}]
}

const dogs = {
	data: [{
		id: 1,
		name: 'Ruby',
	}, {
		id: 2,
		name: 'Star',
	}, {
		id: 3,
		name: 'Stanley',
	}]
}

const snakes = {
	data: [{
		id: 1,
		name: 'Ekans'
	}, {
		id: 2,
		name: 'Naga'
	}]
}

const router = {
	'/api/cats': cats,
	'/api/dogs': dogs,
	'/api/snakes': snakes,
}

const fakeAxios = {
	get(url) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				try {
					const response = router[url]
					if (response && !SIMULATE_FAILURE) resolve(response)
					else reject(Error('404: Could not fetch ' + url))
				} catch (err) {
					reject(err)
				}
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
