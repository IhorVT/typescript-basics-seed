// let coupon: string | null;

// // coupon = 25;
// coupon = '25';
// coupon = null;

// let implicitCoupon = 'pizza';
// let explicitCoupon: string = 'burger';


// //  *********************************************************************** never type

// function erroMsg(error: string): never {
//     throw new Error(error);
// }

// erroMsg('Oh no');


// // *********************************************************************** union type

// function selectOpt(opt: 'time' | 'date' | 1): any {
//     return opt;
// }

// console.log(selectOpt('smth'));

// // *********************************************************************** function types

// let sumOfTwo: (a: number, b: number ) => number;

// sumOfTwo = (a, b) => {
//     return a * b;
// }

// console.log(sumOfTwo('1', 2));

// // *********************************************************************** object types

// let pizza: { name: string; price: number; size?: string; getName(): string};

// pizza = {
//     name: 'Vegetarian',
//     price: 100,
//     getName() {
//         return pizza.name
//     }
// }

// // *********************************************************************** array types

// let sizes: string[] = ['small', 'medium', 'large'];

// // *********************************************************************** generic types

// let toppings: Array<string>;

// toppings = ['cheese', 'mushrooms'];

// // *********************************************************************** tuple types
// let strangePizza: [string, number, boolean];

// strangePizza = ['Pepperoni', 20, true];

// // *********************************************************************** type Aliases

// type Size = 'small' | 'medium' | 'large';

// type Callback = (size: Size) => void;

// // *********************************************************************** type assertion

// type Pizza = { name: string, toppings: number};
// const anotherPizza: Pizza = { name: '4 Seasons', toppings: 5};

// const serialized = JSON.stringify(pizza);

// function getNmaeFromJSON(obj: string): Pizza {
//     return JSON.parse(obj).name; 
//     // return (<Pizza>JSON.parse(obj)).name;
//     // return (JSON.parse(obj) as Pizza).name;
// }

// *********************************************************************** enum

// enum Sizes {
//     small,
//     medium,
//     large,
// }

// console.log(Sizes.medium); // 1
// console.log(Sizes[Sizes.medium]); // medium     reverse mapping
// console.log(Sizes[1]);

// enum Sizes {
//     extraLarge = 3
// }


// enum Sizes { // add const to inline members
//     Small = 'small',
//     Medium = 'medium',
//     Large = 'large',
// }

// let selected: Sizes = Sizes.Small;

// function updateSize(size: Sizes): void {
//     selected = size;
// }

// updateSize(Sizes.Large);
// console.log(selected);

// ************************************Interfaces

type Pizza = {
    name: string;
    size: string[];
};

// interface Pizza  {
//     name: string;
//     size: string[];
// };

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        size
    };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);