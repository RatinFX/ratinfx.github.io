function gitRepo(name: string): string {
  return `https://github.com/RatinFX/${name}/`;
}

function dllLink(repoName: string, tag: string, vpver: '' | '13' | '14', extension: 'zip' | 'exe' | 'dll'): string {
  return gitRepo(repoName) + `releases/download/${tag}/${repoName}${vpver}.${extension}`;
}

function extensionLink(repoName: string, tag: string, vpver: '13' | '14', extension: 'zip' | 'exe' | 'dll'): string {
  return gitRepo(repoName) + `releases/download/${tag}/${repoName}${vpver}-${tag}.${extension}`;
}

/**
 * Discontinued extension
 */
export function betterSearchLink(tag: string, vpver: '13' | '14', extension: 'zip' | 'exe'): string {
  return extensionLink('BetterSearch', tag, vpver, extension);
}

export function customFadesLink(tag: string, vpver: '13' | '14'): string {
  return dllLink('CustomFades', tag, vpver, 'dll');
}

export function shortenExtendMediaLink(tag: string, vpver: '13' | '14'): string {
  return dllLink('ShortenExtendMedia', tag, vpver, 'dll');
}

export function vpflowLink(tag: string, vpver: '13' | '14', extension: 'zip' | 'exe'): string {
  return extensionLink('VegasProFlow', tag, vpver, extension);
}
