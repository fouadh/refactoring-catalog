export let settings = {
  language: 'fr',
  timezone: 'Europe/Paris',
}

export function updateLanguage(language: string) {
  settings.language = language
}

export function updateTimezone(tz: string) {
  settings.timezone = tz
}
