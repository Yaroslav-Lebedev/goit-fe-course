const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  addMood(mood) {
    this.mood = mood;
  },
  changeHobby(hobby) {
    this.hobby = hobby;
  },
  changePremium(premium) {
    this.premium = premium;
  },
  isUserIncluds() {
    const keys = Object.keys(this);
    for (const key of keys) {
      let keyResult = `${key}: ${user[key]}`;
      console.log(keyResult);
    }
  },
};

user.addMood('happy');

user.changeHobby('skydiving');

user.changePremium(false);

user.isUserIncluds(user);
