import type { GithubRepo } from "~types";

export default eventHandler(async (event) => {
  return ghRepo(
    `${event.context.params.owner}/${event.context.params.repo}`,
  );
});
