//Дано масив об’єктів.
// Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів.
// І знайти суму всіх балансів користувачів

let balanceMoreThan2000 = [];
let sum = 0;

for (let i = 0; i < users.length; i++) {
    sum += users[i].balance;
    if (users[i].balance >= 2000) {
        balanceMoreThan2000.push(users[i]);
    }
}

console.log(balanceMoreThan2000);
document.write(` Сумма всех балансов пользователей: ${sum}`);