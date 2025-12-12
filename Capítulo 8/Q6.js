import readline from 'readline';
import { create, all } from 'mathjs';
const rl=readline.createInterface({input:process.stdin,output:process.stdout});
const math=create(all);
rl.question('Número: ',n=>{console.log(math.log(parseFloat(n)));rl.close();});
