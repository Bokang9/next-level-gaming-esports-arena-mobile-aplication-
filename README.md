# Next Level Gaming & Esports Arena — Mobile Application

## About the application

The **Next Level Gaming & Esports Arena mobile application** is a student-project prototype for a gaming and esports venue. It is designed to help customers learn about the arena, browse gaming packages and experiences, estimate session costs, and find contact information.

The app aims to guide users through a simple journey:

**Discover the arena → Browse services → Select an option → Estimate the cost → Contact the business**

The application is built with Expo and React Native. React Native enables developers to build mobile user interfaces using React, while Expo provides tools for developing and running React Native applications (Expo, n.d.-a; Meta, n.d.-a).

## Purpose

The purpose of the application is to make information about the gaming arena easier to access on a mobile device. Users can explore services, view example prices and prepare a cost estimate without needing to navigate a desktop website.

The app also demonstrates how a mobile interface can organize business information into screens and actions designed for phone use.

## Benefits

The application is intended to benefit customers by:

- **Providing convenient access:** Users can explore the arena’s information from a mobile device.
- **Making services easier to compare:** Packages and individual experiences are presented in organized sections.
- **Showing price estimates:** The calculators help users understand example costs before contacting the business.
- **Supporting informed choices:** Service descriptions and package features help users compare options.
- **Providing a clear customer journey:** Navigation guides users from browsing services to estimating costs and contacting the venue.
- **Saving time:** Customers can review available options and prepare an enquiry in the app.
- **Supporting future development:** The prototype could be extended with features such as live availability, online booking or payment processing.

These are intended benefits of the project; the app is a prototype and is not connected to a live booking or payment system.

## Main features

### Welcome screen

The Welcome screen introduces the Next Level Gaming & Esports Arena brand and provides an entry point into the app. The **Get started** button takes the user to the main content.

### Home screen

The Home screen acts as the main hub. It introduces the arena and can highlight popular packages or activities. It provides shortcuts to important sections, such as browsing services or calculating fees.

### Gaming Packages

The Gaming Packages section presents package options, their prices, descriptions and included features. Example packages include:

- Ultimate Gamer Pass
- VIP Gaming Experience
- Esports Training Package
- Birthday Party Package

Users can review package information and, where implemented, select a package for a booking estimate.

### Experiences

The Experiences section presents individual activities separately from packages. Example experiences include:

- Virtual Reality Experience
- Racing Simulator Challenge
- Escape Room Challenge

Each experience can include a description, example price and information about what is included.

### Calculate Fees

The Calculate Fees area is designed to help users estimate the cost of a gaming session or selected services.

#### Hourly session estimate

The hourly calculator allows the user to choose a gaming experience and enter the number of players and hours. Example rates are:

- PC Gaming: **R50 per player per hour**
- Console Gaming: **R40 per player per hour**

The basic calculation is:

`rate × number of players × hours = subtotal`

If 15% VAT is included, the calculator calculates VAT on the subtotal and adds it to the estimated total. The displayed amount is an estimate, not a confirmed invoice.

#### Package and experience estimate

The package and experience calculator allows users to select services and review an estimated total. The intended calculation is:

1. Add selected service prices to calculate the subtotal.
2. Apply any eligible multi-booking discount.
3. Calculate 15% VAT on the discounted subtotal.
4. Add VAT to show the estimated total.

Example discount levels used in the project are:

| Number of selected services | Example discount |
| --- | ---: |
| 1 | 0% |
| 2 | 5% |
| 3 | 10% |
| 4 or more | 15% |

The final amount is an estimate. The business would need to confirm availability and final pricing.

### Contact Us

The Contact Us section provides a way for users to find the arena’s contact information or prepare an enquiry. Depending on the implemented version, it may include an enquiry form and buttons for email or phone contact.

A prototype confirmation message does not necessarily mean that a message has been delivered to the business. Real message delivery requires a connected email service or backend.

## Navigation

The app’s navigation is intended to provide access to its main areas:

- **Home** — returns to the main screen.
- **Gaming Packages** — opens the list of packages.
- **Experiences** — opens the list of individual activities.
- **Calculate Fees** — opens the cost-estimation area.
- **Contact Us** — shows contact information or enquiry options.

If the project uses Expo Router, screens can be organized and accessed through file-based routing (Expo, n.d.-b).

A typical user journey is:

1. Open the app and view the Welcome screen.
2. Tap **Get started** to enter the main app.
3. Browse packages or experiences from the Home screen or navigation.
4. Review the description and included features for an option.
5. Select a service if booking selection is supported.
6. Open Calculate Fees to estimate the cost.
7. Contact the arena to ask questions or confirm availability.

## Design and usability

The app uses a gaming-inspired visual style to suit the arena’s theme. Screens are organized around headings, service cards and clearly labelled actions. The mobile layout is intended to make browsing and using the app convenient on a phone.

The design aims to:

- Make the main actions easy to find.
- Group related information together.
- Show service names and example prices clearly.
- Keep navigation consistent between sections.
- Present fee calculations in an understandable order.

React Native provides components for creating mobile user interfaces, while Expo provides development tools for building and testing Expo applications (Expo, n.d.-a; Meta, n.d.-a).

## Technology

The project uses the technologies configured in its application folder. It is intended to run with:

- **React Native** for the mobile user interface (Meta, n.d.-a).
- **Expo** for the application development workflow (Expo, n.d.-a).
- **Expo Router**, if configured, for screen navigation and routing (Expo, n.d.-b).
- **TypeScript**, if used in the project, for typed JavaScript development (Microsoft, n.d.).

Check the project’s `package.json` and source folders for the exact dependencies, scripts and file structure.

## Running the application

### Requirements

You will need:

- Node.js and npm
- Visual Studio Code or another code editor
- The application’s project dependencies
- Expo Go on a compatible phone, or an Android emulator configured with Android Studio

### Start the development server

1. Open the **mobile application project folder** in Visual Studio Code. Use the folder that contains `package.json`.
2. Open **Terminal → New Terminal**.
3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start Expo:

   ```bash
   npx expo start
   ```

5. Choose a device:
   - **Physical phone:** Install Expo Go, connect the phone and computer to the same network, then scan the QR code.
   - **Android emulator:** Start an Android emulator, then press `a` in the Expo terminal.
   - **Web preview:** If the project supports Expo web, run `npx expo start --web`.

Run these commands from the directory containing `package.json`. If npm reports that it cannot find `package.json`, check that the correct project folder is open. Expo’s documentation provides further guidance about starting and running Expo projects (Expo, n.d.-a).

## Team

- Bokang
- Gcina
- Esihle
- Onako
- Henoc

## References

Expo. (n.d.-a). *Expo documentation*. [online] Available at:  https://docs.expo.dev/ [Accessed 11 November 2026]

Expo. (n.d.-b). *Introduction to Expo Router*. [online] Available at: https://docs.expo.dev/router/introduction/ [Accessed 11 November 2026]

Meta. (n.d.-a). *React Native documentation*. [online] Available at: https://reactnative.dev/docs/getting-started [Accessed 11 November 2026]

Microsoft. (n.d.). *TypeScript documentation*. [online] Available at:  https://www.typescriptlang.org/docs/ [Accessed 11 November 2026]
