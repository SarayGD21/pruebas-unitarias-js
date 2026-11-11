const {
    sumar,
    restar,
    multiplicar,
    dividir
} = require('./calculadora');

test('Suma', () => {
    expect(sumar(5, 3)).toBe(8);
});

test('Resta', () => {
    expect(restar(10, 4)).toBe(6);
});

test('Multiplicacion', () => {
    expect(multiplicar(3, 4)).toBe(12);
});

test('Division', () => {
    expect(dividir(10, 2)).toBe(5);
});

test('Division entre cero', () => {
    expect(() => dividir(10, 0))
        .toThrow("No se puede dividir entre cero");
});