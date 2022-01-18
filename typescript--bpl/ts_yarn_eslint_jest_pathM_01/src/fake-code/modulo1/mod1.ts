import { ola, soma } from '@/fake-code/modulo2/mod2'
// import { ola, } from '../modulo2/mod2'

// eslint-disable-next-line comma-dangle
console.log('Hello 2')
console.log(ola())

/*
Para recuperar parametros parametrizados
- tem que criar um obj com as chaves iguais do param como se fosse responder invocacao e colocar os valores dos args neste obj e

- usar a ref deste obj como argumento ja que os params parametrizados esperam um objeto tem que devolver um obj com o que vc quer argumentar
*/
const data = { a: 20, b: 20 }
console.log(soma(data))
