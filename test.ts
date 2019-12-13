interface Test {
	[key: string]: string;
	a?: string;
}

const test: Test = {};
const Aa = (key: string) => {
	test[key] = 'sdf';
};

Aa('a');

console.log(test.a);
