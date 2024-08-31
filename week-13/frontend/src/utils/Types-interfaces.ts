import React from "react";

export interface LabelledInterface {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export interface BlogType {
  authorName?: string;
  title?: string;
  content?: string;
  createdAt?: string;
  author?: {
    name?: string;
  };
  id?: string;
}
