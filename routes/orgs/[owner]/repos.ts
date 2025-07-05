export default eventHandler(async (event) => {
  const query = getQuery(event);
  const page = query.page ? Number(query.page) : 1;
  const perPage = query.perPage ? Number(query.perPage) : 100;

  const owner = getRouterParam(event, "owner");

  const { _data, headers } = await ghPagination(
    `orgs/${owner}/repos`,
    page,
    perPage,
  );

  setResponseHeader(event, "Link", headers.Link);
  return _data;
});
