export default eventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  const query = getQuery(event);
  const page = query.page ? Number(query.page) : 1;
  const perPage = query.perPage ? Number(query.perPage) : 100;

  const { _data: rawRepos, headers } = await ghPagination(
    `users/${name}/repos`,
    page,
    perPage
  );

  setResponseHeader(event, "Link", headers.Link);
  return rawRepos;
});
