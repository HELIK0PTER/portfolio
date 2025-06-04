"use client";
import React, {useEffect, useState} from 'react';
import { Article } from '@/app/veille/Article';
import { veilleData } from '@/lib/veilleData';
import {Select, SelectItem} from "@nextui-org/react";
import { Masonry } from "@mui/lab"

const tris = [
  {
    value: 'aucun',
  },
  {
    value: 'note: croissant',
  },
  {
    value: 'note: decroissant',
  },
  {
    value: 'recents',
  },
  {
    value: 'anciens',
  },
];

export const Articles: React.FC = () => {
  const [ordering, setOrdering] = useState<string>('aucun');
  const [articles, setArticles] = useState(veilleData);

  // helper to parse dd/mm/yyyy string
  const parseDate = (d: string) => {
    const [day, month, year] = d.split('/').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  useEffect(() => {
    let sorted = [...veilleData];
    if (ordering === 'note: croissant') {
      sorted.sort((a, b) => a.note - b.note);
    } else if (ordering === 'note: decroissant') {
      sorted.sort((a, b) => b.note - a.note);
    } else if (ordering === 'recents') {
      sorted.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    } else if (ordering === 'anciens') {
      sorted.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    }
    setArticles(sorted);
  }, [ordering]);
  
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdering(e.target.value);
  }
  
  return (
    <>
      <div className="flex flex-col md:flex-row justify-start items-center w-full pt-2">
        <Select
          label="Trier par :"
          labelPlacement={"outside-left"}
          className="max-w-xs font-semibold"
          selectedKeys={[ordering]}
          onChange={handleSelectionChange}
        >
          {tris.map((tri) => (
            <SelectItem key={tri.value} value={tri.value}>
              {tri.value || 'aucun'}
            </SelectItem>
          ))}
        </Select>
      </div>
      
      <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}>
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            description={article.description}
            note={article.note}
            image={article.img}
            link={article.link ?? undefined}
            date={article.date}
          />
        ))}
      </div>
    </>
  );
};
