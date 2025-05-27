import React from 'react';
import { CamisetaIcon, CalcaIcon, BoneIcon, FoneIcon, TenisIcon } from './IconesColecoes';

export default function ColecoesDestaqueCategorias() {
  const colecoes = [
    { icon: <CamisetaIcon />, label: "Camisetas" },
    { icon: <CalcaIcon />, label: "Calças" },
    { icon: <BoneIcon />, label: "Bonés" },
    { icon: <FoneIcon />, label: "Headphones" },
    { icon: <TenisIcon />, label: "Tênis" },
  ];

  return (
    <section className="bg-[#f9f8fc] py-4 text-center">
      <h2 className="text-2xl font-semibold text-[#2d2d2d] mb-8">Coleções em destaque</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {colecoes.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-lg mb-2 hover:bg-pink-100 cursor-pointer transition duration-200">
              <div className="transition duration-200 hover:scale-110 hover:text-pink-600 text-gray-700">
                {icon}
              </div>
            </div>
            <p className="text-sm font-semibold text-[#2d2d2d]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}