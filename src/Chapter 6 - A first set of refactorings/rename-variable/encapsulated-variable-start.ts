type Settings = {
  language: string
  timezone: string
}

let settings: Settings = {
  language: 'fr',
  timezone: 'Europe/Paris'
}

export function getDefaultSettings() {
  return { ...settings }
}

export function setDefaultSettings(newSettings: Settings) {
  settings = { ...newSettings }
}
