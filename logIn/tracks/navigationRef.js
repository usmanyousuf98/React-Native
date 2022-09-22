import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

// RootNavigation.js

// import {createNavigationContainerRef} from '@react-navigation/native';

// export const navigationRef = createNavigationContainerRef();

// let navigator;
// export const setNavigator = nav => {
//   navigator = nav;
// };
// export function navigate(name, params) {
//   navigator.dispatch(
//     navigationRef.navigate({
//       name,
//       params,
//     }),
//   );
// }

// // add other navigation functions that you need and export them

// import {NavigationActions} from 'react-navigation';

// export const navigate = (routeName, params) => {
//   navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params,
//     }),
//   );
// };
