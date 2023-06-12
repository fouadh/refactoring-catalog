type Settings = {
  language: string
  timezone: string
}

let defaultSettings = {
  language: 'fr',
  timezone: 'Europe/Paris',
}

export function getDefaultSettings() {
  return { ...defaultSettings }
}

export function setDefaultSettings(newSettings: Settings) {
  defaultSettings = { ...newSettings }
}
