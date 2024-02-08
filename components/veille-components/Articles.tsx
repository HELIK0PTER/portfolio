"use client";
import React, { useState } from 'react';
import { Article } from '@/components/veille-components/Article';
import {Section} from "@/components/Sections/Global/Section";

interface ArticleType {
  id: number;
  title: string;
  note: number;
  image: string;
}

export const Articles: React.FC = () => {
  const [ordering, setOrdering] = useState<string>('');

  const articles : ArticleType[] = require('./articles.json').articles
  const articlesCroissant = articles.slice().sort((a, b) => a.note - b.note)
  const articlesDecroissant = articles.slice().sort((a, b) => b.note - a.note);

  return (
    <Section>
      <div className="flex flex-col md:flex-row justify-start items-center w-full pt-2">
        <label className="pr-2">Trier par :</label>
        <select
          id="sortSelect"
          className="text-white bg-gray-600 hover:bg-gray-800 font-medium rounded-full text-sm px-4 py-2 focus:ring-primary-200 focus:border-primary-100"
          value={ordering}
          onChange={(e) => setOrdering(e.target.value)}
        >
          <option value="">Aucun</option>
          <option value="croissant">Notes: Croissant</option>
          <option value="decroissant">Notes: Décroissant</option>
        </select>
      </div>

      <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {ordering === 'croissant'
          ? articlesCroissant.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              note={article.note}
              image={article.image}
            />
          ))
          : ordering === 'decroissant'
            ? articlesDecroissant.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                title={article.title}
                note={article.note}
                image={article.image}
              />
            ))
            : articles.map((article) => (
              <Article
                key={article.id}
                id={article.id}
                title={article.title}
                note={article.note}
                image={article.image}
              />
            ))}
      </div>
    </Section>
  );
};
