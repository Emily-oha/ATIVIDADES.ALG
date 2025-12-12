import convert from 'convert-units';
import readline from 'readline';

const rl=readline.createInterface({input:process.stdin,output:process.stdout});

rl.question('Dias: ',d=>{
  console.log(d*1440,'minutos');
  rl.question('GB: ',g=>{
    console.log(convert(g).from('GB').to('B'),'bytes');
    rl.close();
  });
});