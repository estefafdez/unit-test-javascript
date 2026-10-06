describe('Calculator examples with fixed values', function () {

    // Data-driven tests: one row per case, one `it` per row
    [
        { a: 6, b: 3, suma: 9, resta: 3, multiplicacion: 18, division: 2 },
        { a: 0, b: 5, suma: 5, resta: -5, multiplicacion: 0, division: 0 },
        { a: -4, b: 2, suma: -2, resta: -6, multiplicacion: -8, division: -2 },
        { a: 7, b: 2, suma: 9, resta: 5, multiplicacion: 14, division: 3.5 }
    ].forEach(function (row) {
        it('should calculate with ' + row.a + ' and ' + row.b, function () {
            expect(Calculator.suma(row.a, row.b)).toBe(row.suma);
            expect(Calculator.resta(row.a, row.b)).toBe(row.resta);
            expect(Calculator.multiplicacion(row.a, row.b)).toBe(row.multiplicacion);
            expect(Calculator.division(row.a, row.b)).toBe(row.division);
        });
    });

    it('should return 0 when dividing by zero', function () {
        expect(Calculator.division(5, 0)).toBe(0);
    });

    describe('spies', function () {

        it('should replace a method with spyOn and record the calls', function () {
            spyOn(Calculator, 'suma').and.returnValue(42);

            expect(Calculator.suma(1, 2)).toBe(42);
            expect(Calculator.suma).toHaveBeenCalledWith(1, 2);
            expect(Calculator.suma).toHaveBeenCalledTimes(1);
        });

        it('should call through to the real method when asked to', function () {
            spyOn(Calculator, 'resta').and.callThrough();

            expect(Calculator.resta(5, 3)).toBe(2);
            expect(Calculator.resta).toHaveBeenCalledWith(5, 3);
        });

        it('should restore the original method after each spec', function () {
            expect(Calculator.suma(1, 2)).toBe(3);
        });
    });
});
