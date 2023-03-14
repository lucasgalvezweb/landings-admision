export const getCarrerasRequest = async (unidad) => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    const dataPrograma = await fetch(`https://www.tivenoscloud.com/desarrollo/web_forms/utec/obtieneCRMutec.php?crmuser=VVRFQ19GT1JNVUxBUklPU1dFQg==&catalogo=Programas&nivel1=${unidad}&formulario=General&formato=JSON`, requestOptions)
    const { data } = await dataPrograma.json()

    const carreras = data.map(carrera => ({
        value: carrera.id,
        label: carrera.descripcion
    }))
    console.log(carreras)
    return carreras

}