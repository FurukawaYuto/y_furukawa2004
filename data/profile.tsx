import { SectionData, SnsLink } from '../types';
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import React from 'react';

export const heroData = {
  title: "古川優斗のホームページ",
  message: "めっちゃ作りかけのホームページです。"
};

export const profileData: SectionData = {
  title: "基本情報",
  items: [
    { id: 1, label: "名前", value: "古川 優斗" },
    { id: 2, label: "年齢", value: "21歳" },
    { id: 3, label: "出身", value: "千葉県 松戸市" },
  ]
};

export const organizations: SectionData = {
  title: "所属団体",
  items: [
    { 
      id: 1,
      value: "日本大学 生産工学部 数理情報工学科 メディアデザインコース",
      subValue: "学部４年。大学院に進学予定。" 
    },
    { 
      id: 2,
      value: "株式会社AIMIRU",
      subValue: "今年度創業予定。"
    },
    { 
      id: 3,
      value: "東京和僑会 ユース会員",
      subValue: ""
    },
  ]
};

export const activities: SectionData = {
    title: "活動中",
    items: [
      { 
        id: 1,
        value: "能登復興応援マルシェ＠原宿 の学生ボランティア",
        subValue: "コロンバン 原宿サロンで毎月第４土曜日に開催されているマルシェです。"
      },
      { 
        id: 2,
        value: "株式会社Aitaneでインターンシップ",
        subValue: "",
        url: "https://aitane.co.jp/"
      },
      { 
        id: 3,
        value: "ベトナムフェスティバル2026",
        subValue: "ベトフェスに和僑ユースが出店します。古川はセールスを担当します。",
        url: "https://www.vietnamfes.net/"
      },
    ]
  };

export const recommendations: SectionData = {
  title: "最近のおすすめ",
  items: [
    { 
      id: 1, 
      value: "Next.js 14 App Router 完全ガイド（仮）", 
      subValue: "最新のNext.jsを学ぶのに最適なドキュメントです。実用的なパターンが豊富に紹介されています。",
      url: "https://nextjs.org/docs" 
    },
    { 
      id: 2, 
      value: "松戸のおいしいコーヒーショップ（仮）", 
      subValue: "地元で見つけた落ち着くカフェ。集中して作業したい時によく行きます。",
      url: "https://example.com" 
    },
  ]
};

export const hobbies: SectionData = {
  title: "趣味",
  items: [
    { 
      id: 1, 
      value: "WIXOSS", 
      subValue: "美少女でガチなTCGです。",
      url: "https://www.takaratomy.co.jp/products/wixoss/" 
    },
    { 
      id: 2, 
      value: "学園アイドルマスター", 
      subValue: "藤田ことねと花海佑芽を担当しています。",
      url: "https://gakuen.idolmaster-official.jp/"
    },
  ]
};

export const snsLinks: SnsLink[] = [
    { id: 1, name: "X", url: "https://x.com/y_furukawa2004", icon: <FaXTwitter className="w-6 h-6" /> },
    { id: 2, name: "Instagram", url: "https://instagram.com/y_furukawa2004", icon: <FaInstagram className="w-6 h-6 text-pink-600" /> },
    { id: 3, name: "Facebook", url: "https://facebook.com/y_furukawa2004", icon: <FaFacebook className="w-6 h-6 text-blue-700" /> },
  ];