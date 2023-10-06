# Shelf Indulgence

Shelf Indulgence is an app-based solution to book clubs, providing users with a digital space to connect with like-minded readers and share their love of literature.

The app allows users to create and join book clubs which house a number of features, aiming to replicate the 'real-world' book club experience. For example, users can:

- Set a 'current read' and 'next read' for the book club, to ensure that members are aware of the reading schedule. The search funtionality for this feature is provided via integration with the Google Books API.
- Participate in discussion via message boards.
- Personalise their profile to show off their reading tastes and favourite books.

## Future improvements

This app was created for the Northocders Software Development bootcamp final group project. The app in its current state represents the MVP that we strived to create in the limited time that we had to complete the project, but in the future I will be planning to add:

- Admin controls for book clubs
- Voting functionality so members can have their say on a book club's next read
- More interaction within message boards (reply threads, comment voting, comment sorting)
- Weekly wiping/reset of the current read message board so discussion about previous books does not clutter this forum
- Weekly club meeting functionality via video calls

## Demo

Please [click here](https://youtu.be/U90IccAHrEU?si=S1dTSiioNfWnb_ir) to see a demo of the app (approx 5 mins).

## Minimum requirements

- Node: v20.3.1

## Running the app locally

To run the app locally on a computer, you will need to use an emulator.

If you are on macOS, I recommend installing [Xcode from the App Store](https://apps.apple.com/gb/app/xcode/id497799835?mt=12). If you are not using macOS, I would recommend downloading the ExpoGo app for [iPhone](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) and running the app on your phone via the Expo Go app.

Once you have installed an emulator, please execute the following commands in your terminal:

- `git clone https://github.com/msmi1433/Bookclub.git`
- `cd Bookclub`
- `npm install`
- `npx expo start`
- If you are using macOS, press `i` and the Xcode iOS simulator will launch the app.
- If you are using the Expo Go app, please scan the QR code that appears in your terminal using your phone's camera. This will launch Shelf Indulgence in the Expo Go app.

## Stack

- Firebase (Firestore DB and Firebase Auth)
- Expo
- React Native
- TypeScript
