import "dotenv/config";

export default {
  "expo": {
    "name": "expo-router-example",
    "slug": "expo-router-example",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "expo-font",
      [
        "expo-build-properties",
        {
          "ios": {
            "newArchEnabled": true
          },
          "android": {
            "newArchEnabled": true
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "apiKey": process.env.API_KEY,
      "authDomain": process.env.AUTH_DOMAIN,
      "projectId": process.env.PROJECT_ID,
      "storageBucket": process.env.STORAGE_BUCKET,
      "messagingSenderId": process.env.MESSAGING_SENDER_ID,
      "appId": process.env.APP_ID,
    },
  }
}
