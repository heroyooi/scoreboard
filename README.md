# Scoreboard

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "D:\\MEGA\\Desktop\\repo\\app",
  "type": [
    "capacitor"
  ],
  "name": "Scoreboard",
  "pkg": "com.syw.scoreboard",
  "framework": "react",
  "template": "single-view",
  "cssPreProcessor": "scss",
  "bundler": "vite",
  "capacitor": {
    "platforms": [
      "ios",
      "android"
    ]
  },
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkMode": false,
    "iconFonts": true
  },
  "customBuild": false
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-capacitor-ios` - build app and copy it to iOS capacitor project
* 📱 `build-capacitor-android` - build app and copy it to Android capacitor project

## Deploying to Vercel

To host the web build on [Vercel](https://vercel.com):

1. Commit the included `vercel.json` so Vercel knows to run `npm run build` and publish the generated `www` directory. The configuration also hints Vercel to use its built-in Vite optimizations.
2. Push the repository to GitHub (or another Git provider supported by Vercel) and import the project in the Vercel dashboard.
3. When prompted for build settings, keep the defaults—thanks to `vercel.json` the build command will be `npm run build` and the output directory will be `www`.
4. Trigger a deployment; after the first successful build, every push to the selected branch will redeploy automatically.

If you prefer to configure things manually in the dashboard instead of relying on `vercel.json`, set the **Build Command** to `npm run build` and the **Output Directory** to `www`, matching the Vite configuration in `vite.config.js`.

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.
## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add ios && npx cap add android
```

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Capacitor Assets

Capacitor assets are located in `resources` folder which is intended to be used with `cordova-res` tool. To generate  mobile apps assets run in terminal:
```
npx cordova-res
```

Check out [official cordova-res documentation](https://github.com/ionic-team/cordova-res) for more usage examples.

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)

* [Framework7 React Documentation](https://framework7.io/react/)

* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on:
- Patreon: https://patreon.com/framework7
- OpenCollective: https://opencollective.com/framework7