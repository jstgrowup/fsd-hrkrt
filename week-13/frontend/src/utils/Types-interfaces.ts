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
}
