import React from 'react';

// 他のファイルでも使えるように「export」をつけます
export interface VisitorStats {
  total: number;
  label: string;
}

export interface SectionItem {
  id: number;
  label?: string;
  value: string;
  subValue?: string;
  url?: string;
}

export interface SectionData {
  title: string;
  items: SectionItem[];
}

export interface SnsLink {
  id: number;
  name: string;
  url: string;
  icon: React.ReactNode;
}