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
console.table(itKotiki);

const userName = prompt("Вкажи своє ім'я");
const userLastName = prompt('Вкажи своє прізвище');
const userFullName = userName + ' ' + userLastName;
console.log(userFullName);
if (itKotiki.includes(userFullName) || itKotikiRu.includes(userFullName)) {
	const indx = itKotiki.indexOf(userFullName);
	alert(`${userName}, вітаю  ฅ^•ﻌ•^ฅ`);
} else {
	const userName = userFullName.split(' ');
	alert(`${userName}, я тебе не знаю!`);
}
