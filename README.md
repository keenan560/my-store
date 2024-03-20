# my-store

## Summary

While working for Walmart as a React Native Developer I worked on the international version of the me@walmart (fka "my-store") application. Me@walmart was the parent app and I worked on the following mini apps: Shelf Availability, Pin Point, Item Info, and RFID. This is just a light version of some of the many screens that were apart of the app.

## Dependencies

react-native, react-native-camera, react-native-camera-hooks,@react-navigation, react-native-vector-icons

## Instructions

1. Clone the reop `git clone https://github.com/keenan560/my-store.git && cd my-store`
2. Install your dependencies for android and iOS `npm install && npx pod-install`
3. To start app in android run `npm run android`. For iOS run `npm run ios`
   * If you experience build issues you may need to build the project in android studio and xcode.
  
## Troubleshooting

react-native-camera is deprecated and no longer supported. If trying to access the phone's camera you get an error, please do the following:
1. Install deprecated-react-native-prop-types: `npm install deprecated-react-native-prop-types`
2. Locate the file where react-native-camera is imported (node_modules/react-native-camera/src/index.js). Replace the import statement for ViewPropTypes with the one from deprecated-react-native-prop-types:


// Replace this import:
`import { ViewPropTypes } from 'react-native';`

// With this import:
`import { ViewPropTypes } from 'deprecated-react-native-prop-types';`



## Screenshots
<img src="https://github.com/keenan560/my-store/assets/44299306/b7554e5f-a619-4ecd-b7e5-0fa0e612f612" width='300'/>
<img src="https://github.com/keenan560/my-store/assets/44299306/60e90e6f-b070-46bb-b467-c5db77e919ca" width='300'/>
<img src="https://github.com/keenan560/my-store/assets/44299306/9f869bc5-4bde-4a5c-a519-2d55312921fe" width='300'/>
<img src="https://github.com/keenan560/my-store/assets/44299306/e0889121-1a55-473d-af48-bc0379431232" width='300'/>
<img src="https://github.com/keenan560/my-store/assets/44299306/d3bba8d2-868e-4295-b073-9d504bf95805" width='300'/>
<img src="https://github.com/keenan560/my-store/assets/44299306/ba297cbc-2cf1-4611-ba1a-b83a444e2a83" width='300'/>









