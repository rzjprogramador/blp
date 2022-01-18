export const ola = () => {
    console.log('Oi 2')
}

type Params = { a: number, b: number }

export const soma = ({ a, b }: Params): number => a + b
