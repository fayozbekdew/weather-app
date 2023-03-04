const KEY = 'a32a21db864a7f2a1d4a12023cc3f91c'

const getData = async (sity) => {
    const base = `https://api.openweathermap.org/data/2.5/weather`
    const query = `?q=${sity}&units=metric&appid=${KEY}`
    loader(true)
    const request = await fetch(base + query)
    const data = await request.json()
    loader(false)
    return data
}
