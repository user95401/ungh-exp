import type { GithubRelease } from "~types";

export default eventHandler(async (event) => {
  const repo = `${event.context.params.owner}/${event.context.params.repo}`;
  const i = await ghFetch(`repos/${repo}/releases/latest`);
  return i;
});
