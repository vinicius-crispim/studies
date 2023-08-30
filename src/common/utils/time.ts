

export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;

    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}

export function segundosParaMinutosESegundos(tempoSegundos: number) {
    console.log('TEMPO3: ',tempoSegundos)

    const minutos = Math.floor(tempoSegundos/60);
    const segundos = tempoSegundos % 60;
    return `${minutos}:${segundos}`
}