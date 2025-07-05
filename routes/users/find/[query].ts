import type { GithubUser } from "~types";

const anonEmailRegex = /^(?:\d+\+)?(.+)@users.noreply.github.com$/;

export default eventHandler(async (event) => {
  let query = event.context.params.query + "";

  const anonMatch = query.match(anonEmailRegex);
  if (anonMatch) {
    query = anonMatch[1];
  }

  const res = await ghFetch("/search/users", {
    params: { q: query },
  });

  if (res.items.length === 0) {
    throw createError({
      statusCode: 404,
      statusMessage: "User Not Found",
    });
  }

  return res;
});
