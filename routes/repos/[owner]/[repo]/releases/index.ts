import type { GithubRelease } from "~types";

export default eventHandler(async (event) => {
  const repo = `${event.context.params.owner}/${event.context.params.repo}`;
  const res = await ghFetch(`/repos/${repo}/releases`);
  return res;
});
