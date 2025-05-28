import React from 'react';
function ProdutosFiltrados() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        Resultados para &quot;Tênis&quot; - 389 produtos
      </div>
      <div style={{ width: '332px', height: '60px', display: 'flex', alignItems: 'center' }}>
        Ordenar por:
        <select style={{ padding: '5px', marginLeft: '5px', flexGrow: 1 }}>
          <option>Mais relevantes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais recentes</option>
        </select>
      </div>
    </div>
  );
}

export default ProdutosFiltrados;