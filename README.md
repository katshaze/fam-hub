# Fam Hub

A simple local home dashboard for a Raspberry Pi + touchscreen.

Displays current date/time, weather info, and daily reminders.

Designed for **local network use** (not a public hosted app).

## Requirements

- Node.js + npm (for Tailwind build)
- Python 3 (for local static file server)
- OpenWeather API key from [https://openweathermap.org/](https://openweathermap.org/) (free tier is generous)

## Setup

1. Create `config.local.js` based off `config.local.example.js` and add the weather API key
2. Create `reminders.json` based off `reminders.example.json` and edit/add reminders specific to your kids/family
3. `npm install`
4. `npm run build` to build the tailwind css (index.html fetches tailwind from the dist folder)
5. Copy files to your Pi (if developing on a separate computer) via `scp` or `rsync`. E.g. using `scp` by running `scp -r . pi@<pi-ip>:/home/pi/<name-of-destination-folder>` replacing with your Pi's host etc. and being sure to run this command while already in the folder containing this code.
6. On the Pi, navigate to the folder where the code is located and serve the files via `python3 -m http.server 8000`
7. Open on the Pi browser `http://<pi-ip>:8000`

## To open the home hub in kiosk mode

Follow [this github repo](https://github.com/geerlingguy/pi-kiosk) to set up the pi with the necessary kiosk service that will boot up chromium in kiosk mode when the Pi starts. 

You may then, like me, also need to add another service file to start the server along with kiosk mode - details to be added on this soon.

## Local dev on separate computer

If you want to develop the app on a different computer to the Pi, work on it locally then transfer the files to your Pi.

### Local dev setup
- Do steps 1-4 in Setup section
- `npm run dev` to watch for tailwind changes, build them, and then serve everything
- Open on `http://localhost:8000`
