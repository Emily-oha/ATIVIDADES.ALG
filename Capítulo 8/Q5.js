let _users=[];
function adicionar(u){_users.push(u);}
function remover(e){_users=_users.filter(u=>u.email!==e);}
function atualizar(e,n){_users=_users.map(u=>u.email===e?{...u,...n}:u);}
function listar(){return [..._users];}
module.exports={adicionar,remover,atualizar,listar};

app-users.js

const db=require('./users');
db.adicionar({nome:'Ana',email:'ana',senha:'123'});
db.adicionar({nome:'Leo',email:'leo',senha:'abc'});
console.log(db.listar());
db.atualizar('leo',{senha:'nova'});
db.remover('ana');
console.log(db.listar());
