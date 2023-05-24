type Settings = {
  language: string
  timezone: string
}

let settings: Settings = {
  language: 'fr',
  timezone: 'Europe/Paris',
}

export function getSettings() {
  return settings
}

export function setSettings(newSettings: Settings) {
  settings = newSettings
}

export function setLondonSettings() {
  settings = {
    language: 'en',
    timezone: 'Europe/London',
  }
}
