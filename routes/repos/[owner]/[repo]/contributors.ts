import type { GithubContributor } from "~types";

export default eventHandler(async (event) => {
  return await ghRepoContributors(
    `${event.context.params.owner}/${event.context.params.repo}`,
  );
});
