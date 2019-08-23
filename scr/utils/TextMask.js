function cpf(str) {
  // 999.999.999-99
  return str
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3}).(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{3}).(\d{3}).(\d{3})(\d{1,2})/, '$1.$2.$3-$4')
    .replace(/(\d{3}).(\d{3}).(\d{3})-(\d{2})(\d)/, '$1.$2.$3-$4');
}

function telefone(str) {
  // (99) 99999-9999
  // (99) 9999-9999
  return str
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/^(\d{2})(\d{5})(\d{4})(\d)/, '($1) $2-$3')
    .replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    .replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3')
    .replace(/^(\d{2})(\d)/, '($1) $2');
}

function cnpj(str) {
  // 99.999.999/9999-99
  return str
    .replace(/\D/g, '')
    .slice(0, 14)
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{2}).(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{2}).(\d{3}).(\d{3})(\d)/, '$1.$2.$3/$4')
    .replace(/(\d{2}).(\d{3}).(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5')
    .replace(/(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})(\d)/, '$1.$2.$3/$4-$5');
}

function cep(str) {
  // 99999-999
  return str
    .replace(/\D/g, '')
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(\d{5})-(\d{3})(\d)/, '$1-$2');
}

function numero(str) {
  return str.replace(/\D/g, '');
}

export default {
  cpf,
  telefone,
  cnpj,
  cep,
  numero,
};
