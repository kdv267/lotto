
export const getRandomField = () => {
	const result = {
		first:[],
		second:[]
	}
	for (let i = 0; i < 8;){
		const randomNum = Math.round((Math.random() * 18)) + 1
		if (!result.first.includes(randomNum)){
			result.first.push(randomNum)
			i++
		}
	}
	for (let i=0; i < 1;){
		const randomNum = Math.round((Math.random() * 1)) + 1
		if (!result.second.includes(randomNum)){
			result.second.push(randomNum)
			i++
		}
	}
	return result
}

