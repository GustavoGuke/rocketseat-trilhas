import * as dotenv from 'dotenv';

dotenv.config();

module.exports =
{
  "expo": {
    "name": "login-social",
    "slug": "login-social",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "cover",
      "backgroundColor": "#202024"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.cursorocketseat.ignitefleet",
      "config":{
        "googleMapsApiKey": process.env.GOOGLE_MAPS_API_KEY
      },
      "infoPlist": {
        "UIBackgroundModes": ["location"],
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#202024",
      },
      "package": "com.cursorocketseat.ignitefleet",
      "config": {
        "googleMaps": { "apiKey": process.env.GOOGLE_MAPS_API_KEY }
      },
      "Permissions": ["ACCESS_FINE_LOCATION, ACCESS_COARSE_LOCATION", "ACCESS_BACKGROUND_LOCATION"]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-font",
       [
        "@react-native-google-signin/google-signin",
        {
          "iosUrlScheme": "com.googleusercontent.apps._some_id_here_"
        }
      ],
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]

    ]
  }
}
