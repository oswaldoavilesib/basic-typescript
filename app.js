"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroesPower;
    (function (HeroesPower) {
        HeroesPower[HeroesPower["acuaman"] = 0] = "acuaman";
        HeroesPower[HeroesPower["batman"] = 1] = "batman";
        HeroesPower[HeroesPower["flash"] = 5] = "flash";
        HeroesPower[HeroesPower["superman"] = 100] = "superman";
    })(HeroesPower || (HeroesPower = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
