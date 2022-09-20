const itKotiki = [
	'Анастасія Белкіна',
	'Вадим Суровицький',
	'Сергій Ревва',
	'Віктор Ганзенко',
	'Валерія Нікітюк',
	'Леонід Мельник',
	'Ганна Костяна',
	'Роман Гордієнко',
	'Ліна Миргородська',
	'Анастасія Пригаровська',
	'Вадим Калінченков',
	'Юлія Горохова',
	'Іван Богданов',
];
const itKotikiRu = [
	'Анастасия Белкина',
	'Вадим Суровицкий',
	'Сергей Ревва',
	'Виктор Ганзенко',
	'Валерия Никитюк',
	'Леонид Мельник',
	'Анна Костяна',
	'Роман Гордиенко',
	'Лина Миргородская',
	'Анастасия Пригаровская',
	'Вадим Калинченков',
	'Юлия Горохова',
	'Иван Богданов',
];

const userName = prompt("Вкажи своє ім'я");
const userLastName = prompt('Вкажи своє прізвище');
const userFullName = userName + ' ' + userLastName;
const normalizedToLowerCaseuserUserFullName = userFullName.toLowerCase();

const normalizedToLowerCaseuserItKotiki = [];
for (const member of itKotiki) {
	normalizedToLowerCaseuserItKotiki.push(member.toLowerCase());
}

const normalizedToLowerCaseuserItKotikiRu = [];
for (const member of itKotikiRu) {
	normalizedToLowerCaseuserItKotikiRu.push(member.toLowerCase());
}

if (
	normalizedToLowerCaseuserItKotiki.includes(normalizedToLowerCaseuserUserFullName) ||
	normalizedToLowerCaseuserItKotikiRu.includes(normalizedToLowerCaseuserUserFullName)
) {
	alert(`${userName}, вітаю  ฅ^•ﻌ•^ฅ`);
} else if (normalizedToLowerCaseuserUserFullName.includes('Альона Гарник'.toLowerCase())) {
	alert('Альону, вітаємо Вас у нашій котячій команді ฅ^•ﻌ•^ฅ');
} else {
	const userName = userFullName.split(' ');
	alert(`${userName}, я тебе не знаю!`);
}

console.log('Наша команда ↓');
console.table(itKotiki);
