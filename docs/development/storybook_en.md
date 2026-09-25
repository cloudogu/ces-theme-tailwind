### Local Storybook

You can use the Theme Storybook locally via Docker.  
Use `docker login registry.cloudogu.com` to log into our Docker repository, if you have not already done so.  
Pull the latest image with `docker pull registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
After that, you can start the container with `docker run -p 8080:8080 registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
Now, the Theme Storybook should be accessible at http://localhost:8080.

### Development without Docker

Requires Node.js 20.19+ or 22.12+ (recommended: Node.js 22).
Install dependencies with `yarn install --frozen-lockfile` and start Storybook 10.6
with `yarn storybook`. Use `yarn build-storybook` to generate the static output.
