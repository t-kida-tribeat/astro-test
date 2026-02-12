// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
 // 1. site はドメインまでを指定します（末尾のリポジトリ名は不要）
 site: 'https://t-kida-tribeat.github.io',
 // 2. base に「リポジトリ名」を指定します（ここが最重要！）
 base: '/astro-test',
});
