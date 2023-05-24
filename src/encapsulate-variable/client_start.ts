import { settings } from './example_start'

export function updateLanguage(language: string) {
  settings.language = language
}

export function updateTimezone(tz: string) {
  settings.timezone = tz
}
