const conta = {
    email: 'teste@teste.com',
    password: '123456',
    name: 'Daniel Gonçalves',
    balance: '2000.00',
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1000)
})
