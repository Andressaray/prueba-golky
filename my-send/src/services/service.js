export const getText = async (text = '') => {
    const url = `http://localhost:3100/text/${text}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
    })
    const { data } = await response.json()
    return data
}