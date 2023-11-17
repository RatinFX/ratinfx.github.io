export function gitRepo(name: string): string {
  return `https://github.com/RatinFX/${name}/`;
}

export function scriptLink(
  repoName: string,
  tag: string,
  vpver: '13' | '14',
  extension: 'zip' | 'exe' | 'dll'
): string {
  return gitRepo(repoName) + `releases/download/${tag}/${repoName}${vpver}.${extension}`;
}

export function extensionLink(
  repoName: string,
  tag: string,
  vpver: '13' | '14',
  extension: 'zip' | 'exe' | 'dll'
): string {
  return gitRepo(repoName) + `releases/download/${tag}/${repoName}${vpver}-${tag}.${extension}`;
}

export function customFadesLink(tag: string, vpver: '13' | '14'): string {
  return scriptLink('CustomFades', tag, vpver, 'dll');
}

export function shortenExtendMediaLink(tag: string, vpver: '13' | '14'): string {
  return scriptLink('ShortenExtendMedia', tag, vpver, 'dll');
}

export function betterSearchLink(tag: string, vpver: '13' | '14', extension: 'zip' | 'exe'): string {
  return extensionLink('BetterSearch', tag, vpver, extension);
}

export function vpflowLink(tag: string, vpver: '13' | '14', extension: 'zip' | 'exe'): string {
  return extensionLink('VegasProFlow', tag, vpver, extension);
}

export function vpdata(tag: string, vpver: '13' | '14'): string {
  return extensionLink('VegasProData', tag, vpver, 'zip');
}
