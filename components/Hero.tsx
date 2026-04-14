import React from 'react';
import { heroData } from '../data/profile';

export const Hero = () => {
  return (
    <header className="text-center mb-16 pt-16">
      {/* メインタイトル */}
      <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-6">
        {heroData.title}
      </h1>
      
      {/* メッセージ：少し文字を大きくし、色を整えました */}
      <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
        {heroData.message}
      </p>

      {/* シンプルなアクセント */}
      <div className="mt-10 flex justify-center gap-1.5">
        <div className="w-10 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-1.5 h-1 bg-blue-200 rounded-full"></div>
      </div>
    </header>
  );
};