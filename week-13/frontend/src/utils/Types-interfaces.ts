import React from "react";

export interface LabelledInterface {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
export interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
export interface Blog {
  authorName: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
  id: string;
}
