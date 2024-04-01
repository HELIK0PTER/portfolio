"use client";
import React, {useEffect, useState} from 'react';
import { Article } from '@/app/veille/Article';
import { veilleData } from '@/lib/veilleData';
import {Select, SelectItem} from "@nextui-org/react";

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

  useEffect(() => {
    if (ordering === 'note: croissant') {
      setArticles([...articles].sort((a, b) => a.note - b.note));
    } else if (ordering === 'note: decroissant') {
      setArticles([...articles].sort((a, b) => b.note - a.note));
    }
    else if (ordering === 'recents') {
      setArticles([...articles].slice().sort((b, a) =>
        new Date(Number(a.date.split("/")[2]),Number(a.date.split("/")[1]),Number(a.date.split("/")[0])).getDate()
        -
        new Date(Number(b.date.split("/")[2]),Number(b.date.split("/")[1]),Number(b.date.split("/")[0])).getDate()
      ))
    }
    else if (ordering === 'anciens') {
      setArticles([...articles].slice().sort((a, b) =>
        new Date(Number(a.date.split("/")[2]),Number(a.date.split("/")[1]),Number(a.date.split("/")[0])).getDate()
        -
        new Date(Number(b.date.split("/")[2]),Number(b.date.split("/")[1]),Number(b.date.split("/")[0])).getDate()
      ))
    }
    else {
      setArticles(veilleData);
    }
  }, [articles, ordering]);
  
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

      <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            description={article.description}
            note={article.note}
            image={article.img}
            link={article.link}
            date={article.date}
          />
        ))}
      </div>
    </>
  );
};
