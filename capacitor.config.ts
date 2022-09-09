import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.satyaapps.digiskool',
  appName: 'DigiSkool',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      // launchShowDuration: 3000,
      launchAutoHide: false,
      // backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
