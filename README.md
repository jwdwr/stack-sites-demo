# stack-sites-demo

A Git-backed site. The only workflow is:

```
edit -> npm test -> git commit -> git push -> read the GitHub Check
```

Pushing to `main` triggers a platform build pinned to that exact commit. The
platform clones the commit in an isolated container, runs `npm ci`, `npm test`
and `npm run build`, packages `dist/`, and deploys it. Results appear as a
Check on the commit.

This repository holds no cloud credentials and no deployment configuration.

## Contract

`site.config.json` declares where the built site lands:

```json
{ "schemaVersion": 1, "outputDirectory": "dist" }
```
