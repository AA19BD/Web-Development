var person = {
  name: "Aylay",
  surname: "A",
  age: 19,
  do_it:function(){
      document.write(this.age+" "+this.surname);
  }
};
person.name="JJ";
document.write(person.name);

person.do_it();

