// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCzcYqYd4lIfSZtmHzc1SnD2QLquKu9UI",
  authDomain: "fernweh-website.firebaseapp.com",
  databaseURL: "https://fernweh-website-default-rtdb.firebaseio.com",
  projectId: "fernweh-website",
  storageBucket: "fernweh-website.appspot.com",
  messagingSenderId: "131008107454",
  appId: "1:131008107454:web:71a67723c65744e9f95fef",
  // measurementId: "G-E68591VJ3D"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// only grab the analytics if supported
export const analytics = isSupported().then((yes) =>
  yes ? getAnalytics(app) : null
);
