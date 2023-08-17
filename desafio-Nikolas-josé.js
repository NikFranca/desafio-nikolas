

  function calcularValorTotal(itens, formaPagamento) {
    if (itens.length === 0) {
      return 'Não há itens no carrinho de compra';
    }
  
    let valorTotal = 0;
    
    for (var item of itens) {
      var cardapioItem = cardapio.find(entry => entry.codigo === item.codigo);
      
      if (!cardapioItem) {
        return 'Item inválido!';
      }
  
      valorTotal += cardapioItem.valor;
  
      if (item.codigo !== 'chantily' && item.codigo !== 'queijo') {
        for (var extra of item.extras || []) {
          var extraItem = cardapio.find(entry => entry.codigo === extra);
          if (!extraItem) {
            return 'Item extra não pode ser pedido sem o principal';
          }
          valorTotal += extraItem.valor;
        }
      }
    }
  
    if (formaPagamento === 'dinheiro') {
      valorTotal *= 0.95; 
    } else if (formaPagamento === 'credito') {
      valorTotal *= 1.03;   
    } else if (formaPagamento !== 'debito') {
      return 'Forma de pagamento inválida!';
    }
  
    return valorTotal.toFixed(2);
  }
  
  var cardapio = [
    { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
    { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
    { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
    { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
    { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
    { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
  ];
  
  var itensCompra = [
    { codigo: 'cafe' },
    
    { codigo: 'combo1' }
  ];
  var formaPagamento = 'debito';
  
  
  var valorTotal = calcularValorTotal(itensCompra, formaPagamento);
  console.log(`Valor total da compra: R$ ${valorTotal}`);

  
