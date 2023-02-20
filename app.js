function boo(num = 3){
    let count = 0;

    return {
        next(){
            if(count < num){
                return {value: count++, done: false}
            }
            return {value: undefined, done: true}
        }
    }
}

const generator = boo();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());