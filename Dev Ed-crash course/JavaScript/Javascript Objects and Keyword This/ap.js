const user = {
  name: "Abylay",
  age: 19,
  gender: "male",
  do_it: function () {
    console.log(this.gender);
  },
};
user.do_it();
