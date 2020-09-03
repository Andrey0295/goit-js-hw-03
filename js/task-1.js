let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

// 1 добавляет поле 'mood' со значением 'happy'

user.mood = 'happy';

// 2 добавляет поле 'full time' со значением true
user['full time'] = true;

// 3 заменяет значение 'hobby' на 'skydiving'
user.hobby = 'skydiving';

// 4 заменяет значение 'premium' на false
user.premium = !true;

const keys = Object.keys(user);

for (const key of keys) {
  message += `${key}:${user[key]}\n`;
  // console.log(key);
  // console.log(user[key]);
}
console.log(message);

/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
