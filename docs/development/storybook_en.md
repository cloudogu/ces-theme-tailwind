### Local Storybook

You can use the Theme Storybook locally via Docker.  
Use `docker login registry.cloudogu.com` to log into our Docker repository, if you have not already done so.  
Pull the latest image with `docker pull registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
After that, you can start the container with `docker run -p 8080:8080 registry.cloudogu.com/internal/storybook-ces-theme-tailwind:latest`.  
Now, the Theme Storybook should be accessible at http://localhost:8080.