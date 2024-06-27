const pessoas = [
    {id: 3, nome: 'Louis'},
    {id: 2, nome: 'Alan'},
    {id: 1, nome: 'Chico'},
];

/* const novaspessoas = {};
for (const pessoa of pessoas) {
    const { id } = pessoa;
        novaspessoas [id] = {...pessoa};
} */

    const novaspessoas = new Map();
    for (const pessoa of pessoas) {
        const {id} = pessoa;
        novaspessoas.set(id, {...pessoas});
    }
    for (const pessoas of novaspessoas.values()) {
        console.log(pessoas);
    }
