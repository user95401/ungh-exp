import type { GithubOrg } from "~types";

export default eventHandler(async (event) => {
  const org = await ghFetch(`orgs/${event.context.params.owner}`);

  return org;
});
