import React, { useState } from "react";

export default function ProdutosFiltrados() {
  const [filtroAberto, setFiltroAberto] = useState(false);
  const produtos = new Array(6).fill({
    nome: "K-Swiss V8 - Masculino",
    precoOriginal: 200,
    precoPromocional: 100,
    desconto: "30% OFF",
    imagem: "https://via.placeholder.com/200x150.png?text=K-Swiss+V8",
  });

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="p-4 max-w-[1440px] mx-auto">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <span className="text-sm text-gray-600">
            <strong className="font-semibold">Resultados para “Tênis”</strong> – {produtos.length} produtos
          </span>
          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() => setFiltroAberto(true)}
              className="md:hidden bg-[#C92071] text-white px-4 py-2 rounded text-sm"
            >
              Filtros
            </button>
            <select className="border rounded px-2 py-1 text-sm w-full md:w-[332px] h-[60px]">
              <option>Ordenar por: mais relevantes</option>
              <option>Menor preço</option>
              <option>Maior preço</option>
            </select>
          </div>
        </div>

        <div className="flex">
          {/* Filtro para desktop */}
          <aside className="hidden md:block bg-white p-4 rounded shadow-sm mb-6 md:mb-0 w-[308px] h-[720px]">
            <Filtros />
          </aside>
          {/* Drawer para mobile */}
          {filtroAberto && (
            <div className="fixed left-0 right-0 top-[80px] bottom-0 z-50 flex">
              {/* Fundo preto com opacidade 0.4 */}
              <div
                className="absolute inset-0 bg-black opacity-40"
                onClick={() => setFiltroAberto(false)}
              />

              {/* Painel branco do filtro */}
              <aside className="relative bg-white w-[80%] max-w-[320px] h-full p-4 overflow-y-auto z-10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-base">Filtrar por</h2>
                  <button
                    onClick={() => setFiltroAberto(false)}
                    className="text-xl font-bold text-[#C92071]"
                  >
                    &times;
                  </button>
                </div>
                <hr className="mb-4 border-gray-300" />
                <Filtros />
              </aside>
            </div>
          )}

          {/* Grid de produtos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow w-full md:w-[904px] ml-0 md:ml-2">
            {produtos.map((produto, idx) => (
              <div key={idx} className="bg-white rounded p-2 text-center relative">
                {produto.desconto && (
                  <span className="absolute top-2 left-2 bg-lime-200 text-xs font-bold px-2 py-1 rounded">
                    {produto.desconto}
                  </span>
                )}
                <img src={produto.imagem} alt={produto.nome} className="mx-auto h-32 object-contain" />
                <p className="text-xs text-gray-500 mt-2">Tênis</p>
                <h3 className="text-sm">{produto.nome}</h3>
                <div className="mt-1">
                  <span className="line-through text-gray-400 text-sm mr-1">${produto.precoOriginal}</span>
                  <span className="font-bold text-black text-sm">${produto.precoPromocional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Filtros() {
  const checkboxClasses =
    "appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-[#C92071] checked:border-[#C92071] focus:outline-none transition-all duration-150 mr-2 align-middle relative checked:after:content-['\\2713'] checked:after:absolute checked:after:top-[1px] checked:after:left-[3px] checked:after:text-white checked:after:text-xs";
  const radioClasses =
    "appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-[#C92071] checked:border-[#C92071] focus:outline-none transition-all duration-150 mr-2 align-middle peer";

  return (
    <div className="text-sm text-[#333]">
      {/* Marca */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Marca</h3>
        {["Adiddas", "Calenciaga", "K-Swiss", "Nike", "Puma"].map((marca) => (
          <label key={marca} className="flex items-center mb-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClasses}
              defaultChecked={["Adiddas", "K-Swiss"].includes(marca)}
            />
            <span className="peer-checked:font-bold">{marca}</span>
          </label>
        ))}
      </div>

      {/* Categoria */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categoria</h3>
        {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map((cat) => (
          <label key={cat} className="flex items-center mb-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClasses}
              defaultChecked={cat === "Esporte e lazer"}
            />
            <span className="peer-checked:font-bold">{cat}</span>
          </label>
        ))}
      </div>

      {/* Gênero */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Gênero</h3>
        {["Masculino", "Feminino", "Unissex"].map((gen) => (
          <label key={gen} className="flex items-center mb-2 cursor-pointer">
            <input
              type="checkbox"
              className={checkboxClasses}
              defaultChecked={["Masculino", "Feminino"].includes(gen)}
            />
            <span className="peer-checked:font-bold">{gen}</span>
          </label>
        ))}
      </div>

      {/* Estado */}
      <div className="mb-2">
        <h3 className="font-semibold mb-2">Estado</h3>
        {["Novo", "Usado"].map((estado) => (
          <label key={estado} className="flex items-center mb-2 cursor-pointer">
            <input
              type="radio"
              name="estado"
              className={radioClasses}
              defaultChecked={estado === "Novo"}
            />
            <span className="peer-checked:font-bold">{estado}</span>
          </label>
        ))}
      </div>
    </div>
  );
}