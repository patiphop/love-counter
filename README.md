Love Counter

A personalized React website that displays a dynamic counter counting the time elapsed since the day you started dating your partner.

Features:

- Live Counter: Displays years, months, days, hours, minutes, seconds, and milliseconds since the start date.
- Feminine Theme: Elegant pink and black design with interactive hover effects.
- Responsive Design: Looks great on all devices.
- Easy Deployment: Deployable to GitHub Pages with minimal configuration.

Setup Instructions:

1. Clone the Repository:
   git clone https://github.com/patiphop/love-counter.git
   cd love-counter

2. Install Dependencies:
   npm install

3. Configure Environment Variables:
   - Create a .env file in the root directory.
   - Add the start date:
     REACT_APP_START_DATE="2025-12-25T19:05:00"
     Ensure the date is in ISO format and in the past relative to the current date.

4. Run Locally:
   npm start

5. Deploy to GitHub Pages:
   npm run deploy

Customization:

- Change Start Date: Update the REACT_APP_START_DATE in the .env file.
- Modify Styles: Edit the CSS files in src/App.css and src/components/Counter.css.
- Update Fonts: Modify the Google Fonts links in public/index.html.

License:

This project is open-source and available under the MIT License.
