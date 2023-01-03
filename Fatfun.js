function Fn() {
    this.prop = 'propiedad'
    this.name = 'nombre'
    return 'chanchito feliz'
}

const r = new Fn()

Fn.prototype.lala = function FuncionDePrototipo(){}

//console.log(r.__proto__);


const fatFn =  () => {
    return 'chanchito feliz'
}

const r1 = fatFn()
console.log(r1);