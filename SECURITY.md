# Security

## Reporting a vulnerability

If you discover a security issue in Leaf2Tree, please report it privately through GitHub security reporting if available for the repository. If private reporting is not enabled, open an issue only after removing any sensitive exploit details.

## Current security posture

- This project is a static frontend with no server-side secret handling
- No credentials or environment-specific secrets are stored in the repository
- Dependencies should be updated through normal npm workflows and reviewed before release

## Local development safety

- Do not commit `.env` files or secrets
- Run `npm run build` and `npm run lint` before shipping changes
- Review dependency changes in `package-lock.json` before release
