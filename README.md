# Fam Hub

A simple local home dashboard for a Raspberry Pi + touchscreen.

Displays current date/time, weather info, and daily reminders.

Designed for **local network use** (not a public hosted app).

## Requirements

- Node.js + npm (for Tailwind build)
- Python 3 (for local static file server)
- OpenWeather API key from [openweathermap.org/](https://openweathermap.org/) (free tier is generous)

## Setup

1. Create `config.local.js` based off `config.local.example.js` and add the weather API key
2. Create `reminders.json` based off `reminders.example.json` and edit/add reminders specific to your kids/family
3. `npm install`
4. `npm run build` to build the tailwind css
5. Copy files to your Pi (if developing on a separate computer), e.g. via `scp` by running `scp -r . pi@<pi-ip>:/home/pi/<name-of-destination-folder>` replacing with your Pi's host etc. and being sure to run this command while already in the folder containing this code
6. On the Pi, navigate to the folder where the code is located and serve the files via `python3 -m http.server 8000`
7. Open on the Pi browser `http://<pi-ip>:8000`

## Local dev on separate computer

If you want to change/extend the app, work on it locally then transfer the files to your Pi.

- Do steps 1-4 in Setup section
- `npm dev` to watch for tailwind changes, build them, and then serve everything
- Open on `http://localhost:8000`

