const { generarSecuenciaFibonacci } = require("../src/generar_secuencia_fibonacci");

const casos = [
    { n: 1, esperado: "0" },
    { n: 4, esperado: "0112" },
    { n: 7, esperado: "0112358" },
    { n: 15, esperado: "01123581321345589144233377" },
    { n: 35, esperado: "01123581321345589144233377610987159725844181676510946177112865746368750251213931964183178115142298320401346269217830935245785702887" },
    { n: 0, esperado: "" },
    { n: -5, esperado: "" }
];

casos.forEach(({ n, esperado }) => {
    test(`Debería retornar "${esperado}" para n=${n}`, () => {
        expect(generarSecuenciaFibonacci(n)).toBe(esperado);
    });
});
