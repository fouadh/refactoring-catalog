export let rawSettings = {
  language: 'fr',
  timezone: 'Europe/Paris',
}

type RawSettings = {
  language: string
  timezone: string
}

export class Settings {
  private _language: string
  private _timezone: string

  constructor(data: RawSettings) {
    this._language = data.language
    this._timezone = data.timezone
  }

  get language() {
    return this._language
  }

  set language(aLanguage: string) {
    this._language = aLanguage
  }

  get timezone() {
    return this._timezone
  }

  set timezone(aTimezone: string) {
    this._timezone = aTimezone
  }
}

const settings = new Settings(rawSettings)

export function getSettings() {
  return settings
}

export function updateLanguage(language: string) {
  getSettings().language = language
}

export function updateTimezone(tz: string) {
  getSettings().timezone = tz
}
