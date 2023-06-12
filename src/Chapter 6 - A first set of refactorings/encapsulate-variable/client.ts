import { getSettings, setSettings } from './example'

export function updateLanguage(language: string) {
  setSettings({ ...getSettings(), language })
}

export function updateTimezone(tz: string) {
  setSettings({ ...getSettings(), timezone: tz })
}
