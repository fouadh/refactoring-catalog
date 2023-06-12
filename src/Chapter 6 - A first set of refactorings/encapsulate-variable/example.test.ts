import { updateLanguage, updateTimezone } from './client'
import { setLondonSettings, getSettings, setSettings } from './example'

describe('Settings', () => {
  beforeEach(() => {
    setSettings({
      language: 'fr',
      timezone: 'Europe/Paris',
    })
  })

  it('has defaults', () => {
    expect(getSettings()).toEqual({ language: 'fr', timezone: 'Europe/Paris' })
  })

  it('language can be updated', () => {
    updateLanguage('en')
    expect(getSettings()).toEqual({ language: 'en', timezone: 'Europe/Paris' })
  })

  it('timezone can be updated', () => {
    updateTimezone('Europe/London')
    expect(getSettings()).toEqual({ language: 'fr', timezone: 'Europe/London' })
  })

  it('London settings can be defined', () => {
    setLondonSettings()

    expect(getSettings()).toEqual({ language: 'en', timezone: 'Europe/London' })
  })
})
