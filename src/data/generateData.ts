const { writeFileSync } = require('fs');
const { join } = require('path');

const path = join(__dirname, '..', '..', 'db.json');

const randomName = (count: number) => {
	const words: string[] = ['привет', 'навзание', 'товар', 'продажа', 'покупка', 'задача', 'сделать', 'продать', 'купить', 'услуга', 'деньги', 'обмен', 'сделать', 'обмен', 'событие', 'генерация'];
	let name: string = '';
	for (let i = 0; i < count; i++) {
		name += words[Math.round(Math.random() * (words.length - 1))];
		i !== count - 1 ? name += ' ' : name += '';
	};
	return name;
}

const randomDate = (): string => {
	let day: number | string = Math.floor(Math.random() * 27) + 1;
	day = day < 10 ? '0' + day : day;
	let mounth: number | string = Math.floor(Math.random() * 12);
	mounth = mounth < 10 ? '0' + mounth : mounth;
	let year = Math.floor(Math.random() * 15) + 2007;
	return `${day}.${mounth}.${year}`;
}

const createObjects = (count: number): string => {
	let objects = [];
	for (let i = 0; i < count; i++) {
		objects.push({ id: i + 1, date: randomDate(), name: randomName(Math.round(Math.random() * 3) + 1), distance: Math.round(Math.random() * 500), quantity: Math.round(Math.random() * 10) + 1 });
	}
	console.log(objects);
	return JSON.stringify({ data: objects });
};

const generateData = () => {
	writeFileSync(path, createObjects(1200));
};

generateData();