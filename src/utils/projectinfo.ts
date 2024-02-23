function gitRepo(repo: string): string {
  return `https://github.com/RatinFX/${repo}/`;
}

function gitReleases(repo: string): string {
  return gitRepo(repo) + `releases/`;
}

export function latestRelease(repo: string): string {
  return gitReleases(repo) + `latest/`;
}

export function dllLink(repo: string, tag: string, vpver: '' | '13' | '14'): string {
  return gitReleases(repo) + `download/${tag}/${repo}${vpver}.dll`;
}

export function extensionLink(repo: string, tag: string, vpver: '' | '13' | '14'): string {
  return gitReleases(repo) + `download/${tag}/${repo}${vpver}-${tag}.zip`;
}

export function softwareLink(name: string, tag: string): string {
  return gitReleases(name) + `download/${tag}/${name}.zip`;
}

export function linkToProjectLatest(project: string): string {
  return `${project}`;
}
