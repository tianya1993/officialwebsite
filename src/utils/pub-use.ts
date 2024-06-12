

export const getAssetsFile = (name: string, folder = 'images') => {
  // 注意路径一定要以../assets开头，开发环境下，vite 会自动拼上 src
  return new URL(`../assets/${folder}/${name}`, import.meta.url).href
}