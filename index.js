var foo={
  name: 'foo',
  nickname: 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);

console.log('log'-'l');