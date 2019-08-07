//回文堆栈
let letter = []; //stack 
let word = "abccba";
let r = "";

for(let i = 0; i< word.length; i++){
		letter.push(word[i]);
}

for(let i = 0; i< word.length; i++){
		r += letter.pop();
}

console.log("First Answer:"+ r===word ? "Palindrome!" : "Normal");


//--------------------------------封装--------------------------------------

let Stacks = function(){
	let t =this;
	t.count=0;
	t.storage = {};

	t.push = function(value){
		t.storage[t.count] = value;
		t.count++;
	}

	t.pop = function () {
		if(t.count === 0 ){
			return undefined;
		}
		t.count--;
		let result = t.storage[t.count];
		delete t.storage[t.count];
		return result;
	}

	t.size =function(){
		return t.count;
	}

	t.peek = function () {
		return t.storage[t.count-1];
	}
}
let s = new Stacks();
s.push("yeonghughes");
s.push("yeoqing");

console.log(s.pop());
console.log(s.peek());
