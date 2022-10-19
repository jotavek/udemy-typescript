//Sempre que voce precisa receber uma coisa que voce nao sabe com antecedencia o que que aquela coisa vai ser,
//inves de utilizar any, voce pode utilziar unknown sabendo que voce precisa checar o tipo sempre
// que vc for utilizar essa variável pra fazer alguma operação com ela

let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
