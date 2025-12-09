//questão 8//
    let prato = prompt("Escolha um prato: pizza, hamburguer, salada ou macarrao").toLowerCase();

switch (prato) {
  case "pizza":
    console.log("Preço: R$75,00\nDescrição: Pizza de mussarela com borda recheada.");
    break;
  case "hamburguer":
    console.log("Preço: R$35,00\nDescrição: Hambúrguer artesanal com batata.");
    break;
  case "salada":
    console.log("Preço: R$15,00\nDescrição: Salada fresca com molho especial.");
    break;
  case "macarrao":
    console.log("Preço: R$18,00\nDescrição: Macarrão ao molho branco.");
    break;
  default:
    console.log("Opção inválida!");
}