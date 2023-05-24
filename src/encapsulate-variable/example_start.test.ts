import { updateLanguage, updateTimezone } from './client_start'
import { setLondonSettings, settings } from './example_start'

describe('Settings', () => {
  beforeEach(() => {
    settings.language = 'fr'
    settings.timezone = 'Europe/Paris'
  })

  it('has defaults', () => {
    expect(settings).toEqual({ language: 'fr', timezone: 'Europe/Paris' })
  })

  it('language can be updated', () => {
    updateLanguage('en')
    expect(settings).toEqual({ language: 'en', timezone: 'Europe/Paris' })
  })

  it('timezone can be updated', () => {
    updateTimezone('Europe/London')
    expect(settings).toEqual({ language: 'fr', timezone: 'Europe/London' })
  })

  it('London settings can be defined', () => {
    setLondonSettings()

    expect(settings).toEqual({ language: 'en', timezone: 'Europe/London' })
  })
})
