(function(){
//OBJETO //*******************************************************
var pessoa = {
	nome: 'Thiago',
	idade: '35',
	andando: true
}
console.log(pessoa.nome);

// FUNÇÕES //*******************************************************
pessoa.andar = function(){ return pessoa.andando; }
console.log(pessoa.andar());

function andar(){ return pessoa.andando; }
console.log(andar());

// TERNÁRIO //*******************************************************
var x = true;
x ? true : false;
console.log(x);

// ARRAY //*******************************************************
var arr = ['Thiago', 35, true, null, undefined];

function thiago(arg){ return arg; }
console.log(thiago(arr)[1]);

function thiago2(arg, arg2){ return arg[arg2]; }
console.log(thiago2(arr, 1));

// IF - ELSE IF - ELSE//*******************************************************
 if(true == 1){	 
}else if(true == 1){	
}else{ }

// WHILE //*******************************************************
var numero = 20;
while(numero <= 30){
    console.log(numero++);
}
// DO WHILE //*******************************************************
var once = false;
do{
    console.log('Entrou ao menos uma vez!');
}while(once);
// SWITCH //*******************************************************
var convertToHex = function(cor){
    switch(cor){
        case 'gray':
            var hex = '#ccc';
            break;
        case 'red':
            var hex = '#f1000';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para '+ cor +'.';    
    }
    return 'O hexadecimal para a cor '+ cor +' é '+ hex +'.';
}
console.log(convertToHex('gray'));
// NUMBER, STRING and TYPEOF//*******************************************************
var five = Number('5');
console.log( five + ' é número?', typeof five === 'number' );

var concat = String(10) + String(10);
console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );
// FOR IN//*******************************************************
var person = {
    'name': 'Thiago',
    'age': 35,
    'weight': 85,
    'birthday': '27/07/1981'
};
var counter = 0;
for(var prop in person){
    counter++;
    console.log('The '+ prop +' of person is ' + person[prop]);
};
console.log('The person has '+ counter +' properties');
// OBJECT.KEY // mostra as keys do objeto ******************************
console.log(Object.keys(person));
// PUSH() // Add no final ***********************************
var addItem = function(add){
    arr.push(add);
    return arr;
}
addItem([4, 5, 6]);
console.log(arr);
// POP() // Retira o último paramentro, guarda na variável e altera o array ********************
var books = ['Livro 1', 'Livro 2', 'Livro 3']
var livroRemovido = books.pop();
console.log(livroRemovido);
console.log(books);
// JSON.STRINGIFY //*******************************************************
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );
// JSON.PARSE //*******************************************************
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );
// join() // Junta todos os itens do array ********************************
var myName = ['T', 'H', 'I', 'A', 'G', 'O'];
console.log(myName.join(''));
// reverse() // Inverte itens do array ****************************************
console.log( myName.reverse().join(''));
// sort() // Ordena itens do array ******************************************
console.log( myName.sort());
// toString() // Array em formato de string *******************************************
var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.toString());
// concat() // Concatena infos *****************************************
var sul = ['Rio Grande do Sul','Santa Catarina', 'Paraná'];
var sudeste = ['São Paulo', 'Rio de Janeiro', 'Espirito Santo', 'Minas Gerais'];
var brasil = sul.concat(sudeste);
console.log(brasil);
// UNSHIFT() // Adiciona no início do array *****************************************
brasil.unshift('Amazonas', 'Acre', 'Pará');
console.log(brasil);
// SHIFT() // Remove o primeiro parametro do array ********************************
brasil.shift()
// SLICE() // Separa paramentros do indice 2 ao 4 sem modificar o obj/arr original ***********
var newSul = brasil.slice(2, 5);
// SPLICE() // Retira parametros do array original (A partir do 5 pega mais 4)********************
var newSudeste = brasil.splice(5, 4);
// forEACH() // Percorre o array `brasil` e gera um novo array chamado `newBrasil` *******************
var newBrasil = [];
brasil.forEach(function(item, index, array){
    newBrasil.push({
        'id': index,
        'estado': item
    });
});
// EVERY() // Verifica no array se TODOS os parâmetros são true *************************
var every = brasil.every(function(item){
    return item.length > 7;
});
console.log(
    every
    ? 'Sim, todos os estados tem mais de 7 letras!'
    : 'Nem todos os estados tem mais de 7 letras!'
);
// SOME() //Verifica no array se ALGUM os parâmetros são true ****************************
var some = brasil.some(function(item){
    return item === 'Ceará';    
});
console.log(
    some
    ? 'Ceará está incluído!'
    : 'Ceará não foi incluído :('
);
// MAP() // Percorre todo o array e retorna ele inteiro ******************************
var map = newBrasil.map(function(item, index, array){
    item.id++;
    item.estado += ' pertence ao Brasil';
    return item;
});
console.log(map);
// FILTER() // Percorre todo o array e retorna apenas o que foi passado por parâmentro ******************
var filter = map.filter(function(item, index){
    return item.id % 2 === 0;
});
console.log(filter);
// REDUCE() e reduceRIGHT() // reduceRight() é o contrário do reduce() ********
var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acumulado, atual, index, array){
	return acumulado + atual; // 15
}, 0); // "0" é o valor inicial

// indexOf() // Procura se o valor existe no INDICE do array, se não existir retorna "-1". (search, a partir de) ************
var arr = ['T', 'h', 'i', 'a', 'g', 'o'];
console.log(arr.indexOf('a', 1)); // 3
console.log(arr.indexOf('a') > -1); // true
// lastIndexOf() // Igual ao indexOf só que procura de trás para frente **********************************

// isArray() //  **********************************
var arr = ['T', 'h', 'i', 'a', 'g', 'o'];
console.log(Array.isArray(arr)); // true
// split(',') // Separa um elemento **********************************
var nome = 'thiago, franchin';
nome.split(',');
console.log(nome);
//  //  **********************************
//  //  **********************************
//  //  **********************************
//  //  **********************************
//  //  **********************************
//  //  **********************************
//  //  **********************************







})();