# The Product Store 🎮

The <b>Product Store</b> is a fully-featured product stock based application 
with many more features.

The goal of the Product Store is to get you from zero to app store faster than
before, with a set of opinions from the PS team around page layout,
data/user management, and project structure.

The way to use this app is to register with a new account and login with the credentials entered. Add your items with all the flexible fields to track the details later. You can also share the item in social media and let people know about your search.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Pages](#pages)
3. [Providers](#providers)
4. [i18n](#i18n) (adding languages)

## <a name="getting-started"></a>Getting Started (Ionic 3)

Steps to run on your devices:

Clone this repository.
Connect your phone to your computer and run

- npm install
- ionic cordova platform rm android
- ionic cordova platform add android
- ionic cordova platform rm ios
- ionic cordova platform add ios
- ionic cordova run android / ionic cordova run ios

Or for a new ionic3 product store , install the latest version of the Ionic CLI(Recommended 1.6.X) and run:

- ionic start productStoreApp super

cd productStoreApp

- npm install

- ionic cordova platform add android

- ionic serve

Used modules with specified version to include in new app.
- npm install firebase@4.8.0 angularfire2 --save
- ionic cordova plugin add cordova-plugin-x-socialsharing
- npm install --save @ionic-native/social-sharing

To generate resources of the specified files
- ionic cordova resources android -f




## Pages

The Super Starter comes with a variety of ready-made pages. These pages help
you assemble common building blocks for your app so you can focus on your
unique features and branding.

The app loads with the `FirstRunPage` set to `TutorialPage` as the default. If
the user has already gone through this page once, it will be skipped the next
time they load the app.

If the tutorial is skipped but the user hasn't logged in yet, the Welcome page
will be displayed which is a "splash" prompting the user to log in or create an
account.

Once the user is authenticated, the app will load with the `MainPage` which is
set to be the `TabsPage` as the default to see the product listing.

The entry and main pages can be configured easily by updating the corresponding
variables in
[src/pages/pages.ts](https://github.com/sumit002/ProductStore/tree/master/src/pages/pages.ts).

Please read the
[Pages](https://github.com/sumit002/ProductStore/tree/master/src/pages)
readme, and the readme for each page in the source for more documentation on
each.

## Providers

The Super Starter comes with some basic implementations of common providers.

### User

The `User` provider is used to authenticate users through its
`login(accountInfo)` and `signup(accountInfo)` methods, which perform `POST`
requests to an API endpoint that you will need to configure.

### Api

The `Api` provider is a simple CRUD frontend to an API. Simply put the root of
your API url in the Api class and call get/post/put/patch/delete 

## i18n

Ionic Super Starter comes with internationalization (i18n) out of the box with
[ngx-translate](https://github.com/ngx-translate/core). This makes it easy to
change the text used in the app by modifying only one file. 

### Adding Languages

To add new languages, add new files to the `src/assets/i18n` directory,
following the pattern of LANGCODE.json where LANGCODE is the language/locale
code (ex: en/gb/de/es/ta/te etc.).

### Changing the Language

To change the language of the app, edit `src/app/app.component.ts` and modify
`translate.use('en')` to use the LANGCODE from `src/assets/i18n/`.
