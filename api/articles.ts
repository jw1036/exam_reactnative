import client from './client';
import {Article} from './types';

export async function getArticles({
  limit = 10,
  cursor,
}: {
  limit?: number;
  cursor?: number;
}) {
  const response = await client.get<Article[]>('/articles', {
    params: {
      _sort: 'id:DESC',
      _limit: limit,
      id_lt: cursor,
    },
  });
  return response.data;
}

export async function getArticle(id: number) {
  const response = await client.get<Article>(`/articles/${id}`);
  return response.data;
}

export async function writeArticle(params: {title: string; body: string}) {
  const response = await client.post<Article>('/articles', params);
  return response.data;
}
