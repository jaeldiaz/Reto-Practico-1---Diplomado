function generarSecuenciaFibonacci(n) {
    if (n <= 0) return "";
    const secuencia = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        secuencia.push(a);
        [a, b] = [b, a + b];
    }
    return secuencia.join('');
}

module.exports = { generarSecuenciaFibonacci };
