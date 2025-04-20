# TTRPG.tools Starter



## Creating a project

Use the GitHub template to create a new project:

[https://github.com/ttrpgtools/starter/generate](https://github.com/ttrpgtools/starter/generate)

## Developing

Once you've cloned your project and installed dependencies with `npm install` there are a few things to do:

1. Create a `.env.local` file in the root of your project based off of `.env.example` and get the missing values from Kinde. You can create a new application in Kinde and get the values from there.
2. Update the `wrangler.toml` file with the planned URL for the project.
3. Run the following command to start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

It can be deployed to Cloudflare Workers by setting up the repo with Cloudflare Workers Build.

The values from Kinde will need to be added as Secrets in Cloudflare Workers dashboard.
