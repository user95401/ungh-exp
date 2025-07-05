# 📃 UNGH-EXP

> Unlimited access to the GitHub API with an expanded amount of transferred data!

Yes, this version of UNGH returns **raw GitHub API responses** — unlike the original UNGH, which strips most of the data.

---

### ⚠️ Warn: The response structure is same as on GitHub API unlike original UNGH!


- ### UNGH (original):
  ```json
  {
    "repo": {
      "id": 313641207,
      "name": "h3",
      "repo": "h3js/h3"
      // ...other fields
    }
  }
  ```

- ### UNGH-EXP (this fork):
  ```json
  {
    "id": 313641207,
    "node_id": "MDEwOlJlcG9zaXRvcnkzMTM2NDEyMDc=",
    "name": "h3",
    "full_name": "h3js/h3",
    "private": false,
    "owner": {
      "login": "h3js",
      "id": 208435796
      //...
    }
    // ...full raw data
  }
  ```

---

> [!IMPORTANT]
>
> `/repos/<id>/files/<path>` endpoint redirects to original `raw.githubusercontent.com` endpoint due to service absue. ([#123](https://github.com/unjs/ungh/issues/123)).

## Why UNGH?

Accessing to open source GitHub repository meta-data should be fast, easy, and straightforward. GitHub API is rate limited and requires an authentication token to increase limits. Even by using an API token, we need to share or generate it for each deployment and local development of apps and also deal with (increased) rate limits and deployment caching. GitHub REST API is also complex with (unnecessary) bigger payloads because of backward compatibility.

UNGH provides a simplified, cached, and anonymous layer to make GitHub API more enjoyable!

## Roadmap

- [x] Hosted MVP service (powered by cloudflare workers and KV)
- [ ] Publish `ungh` js client to NPM ([#4](https://github.com/unjs/ungh/issues/4))
- [ ] Implement token pool and open token donations ([#5](https://github.com/unjs/ungh/issues/5))
- [ ] Mark API as stable

**Note:** This project is still under development and API might change.

## API

> Remind: This fork returns GitHub's native API format.

### `/repos/{owner}/{name}`

GitHub repository information.

**Example:** https://ungh-exp.vercel.app/repos/unjs/h3

### `/repos/{owner}/{name}/contributors`

Get repository contributors.

**Example:** https://ungh-exp.vercel.app/repos/unjs/h3/contributors

### `/repos/{owner}/{name}/files/{branch}`

Get repository files tree on specific branch.

**Example:** https://ungh-exp.vercel.app/repos/unjs/h3/files/main

```json
{
  "meta": {
    "sha": "501f0c6e623ea827d47691046f3c7319f5ac4651"
  },
  "files": [
    {
      "path": "README.md",
      "mode": "100644",
      "sha": "4c2b9ce4bccd6e046cd71be1a8c5e53a62778858",
      "size": 5782
    }
  ]
}
```

### `/repos/{owner}/{name}/readme`

Get repository readme file on main branch (not cached)

**Example:** https://ungh-exp.vercel.app/repos/unjs/h3/readme

```json
{
  "html": "<p><a href=\"https://npmjs.com/package/h3\" rel=\"nofollow\"><img...",
  "markdown": "[![npm downloads](https://img.shields.io...."
}
```

### `/repos/{owner}/{name}/releases`

Get repository releases.

**Example:** https://ungh-exp.vercel.app/repos/nuxt/framework/releases

### `/repos/{owner}/{name}/releases/latest`

Get latest repository release.

**Example:** https://ungh-exp.vercel.app/repos/nuxt/framework/releases/latest

### `/repos/{owner}/{name}/branches`

Get all the branches of a repository

**Example:** https://ungh-exp.vercel.app/repos/unjs/ungh/branches

### `/orgs/{owner}`

GitHub organization information.

**Example:** https://ungh-exp.vercel.app/orgs/unjs

### `/orgs/{owner}/repos`

GitHub organization repositories overview.

#### Query Parameters ([pagination by](https://github.com/unjs/ungh/pull/76) [Barbapapazes](https://github.com/Barbapapazes))

* `page` - (optional) The page number to retrieve. Defaults to `1`.
* `perPage` - (optional) Number of repositories per page. Defaults to `100`, max `100`.

**Example:** https://ungh-exp.vercel.app/orgs/unjs/repos, https://ungh-exp.vercel.app/orgs/unjs/repos?page=2&perPage=6

### `/stars/{repos}`

Get star information for one or more repositories or organizations.

Multiple items can be separated by either `,` or `+` or ` ` (space). Each item can be either `{owner}/{org}` to specify one repository or `{owner}/*` to specify all organization repositories.

**Example:** https://ungh-exp.vercel.app/stars/nuxt/nuxt.js+nuxt/framework

```json
{
  "totalStars": 51524,
  "stars": {
    "nuxt/nuxt.js": 41560,
    "nuxt/framework": 9964
  }
}
```

### `/users/{username}`

Find one github user by username.

**Example:** https://ungh-exp.vercel.app/users/pi0

### `/users/{username}/repos`

Get user repositories.

#### Query Parameters (by [user95401](https://github.com/user95401), based on [Barbapapazes's pagination](https://github.com/unjs/ungh/pull/76))

* `page` - (optional) The page number to retrieve. Defaults to `1`.
* `perPage` - (optional) Number of repositories per page. Defaults to `100`, max `100`.

**Example:** https://ungh-exp.vercel.app/users/pi0/repos

### `/users/find/{query}`

Find one github user by email or other query.

**Example:** https://ungh-exp.vercel.app/users/find/pooya@pi0.io

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).
