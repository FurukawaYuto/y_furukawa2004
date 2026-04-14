"use client";

import React, { useEffect, useState } from 'react';
import { visitorStats } from '../data/stats';

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // CountAPI互換のサービスへアクセス
    // 形式: https://api.countapi.xyz/hit/{namespace}/{key}
    const fetchCount = async () => {
      try {
        const response = await fetch(
          `https://api.countapi.xyz/hit/${visitorStats.namespace}/${visitorStats.key}`
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error("CountAPI Error:", error);
        // エラー（サービス停止中など）の場合はローカルの初期値を表示
        setCount(visitorStats.initialTotal);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="flex justify-center items-center gap-3 mt-4 mb-12">
      <div className="px-5 py-2 bg-white rounded-xl border border-slate-200 flex items-center gap-3 shadow-sm">
        {/* 動いている間は青、止まったらグレーにするなどの演出も可能 */}
        <div className="flex h-2 w-2 relative">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${count ? 'bg-blue-400' : 'bg-slate-300'} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${count ? 'bg-blue-500' : 'bg-slate-400'}`}></span>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">
            {visitorStats.label}
          </span>
          <span className="text-xl font-mono font-black text-slate-800 tabular-nums">
            {count !== null ? count.toLocaleString() : "----"}
          </span>
        </div>
      </div>
    </div>
  );
};