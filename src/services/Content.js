export const getContentRequest = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const request = await fetch(`http://landingventapregrado.local/api/bussiness-card-utec`, requestOptions)
    const content = await request.json()

    /* const carreras = data.map(carrera => ({
        value: carrera.id,
        label: carrera.descripcion
    })) */
    console.log(content[0])
    return content[0]
}