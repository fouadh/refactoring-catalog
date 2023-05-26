import { getDefaultSettings, setDefaultSettings } from './encapsulated-variable'

describe('Settings', () => {
  beforeEach(() => {
    setDefaultSettings({
      language: 'fr',
      timezone: 'Europe/Paris',
    })
  })

  it('has defaults', () => {
    expect(getDefaultSettings()).toEqual({
      language: 'fr',
      timezone: 'Europe/Paris',
    })
  })

  it('default settings can be updated', () => {
    setDefaultSettings({
      language: 'en',
      timezone: 'Europe/London',
    })
    expect(getDefaultSettings()).toEqual({
      language: 'en',
      timezone: 'Europe/London',
    })
  })

  test('default settings cannot be overriden locally after getting them', () => {
    const settings = getDefaultSettings()
    settings.language = 'en'
    settings.timezone = 'Europe/London'

    expect(getDefaultSettings()).toEqual({
      language: 'fr',
      timezone: 'Europe/Paris',
    })
  })

  test('default settings cannot be overriden locally after setting them', () => {
    const settings = {
      language: 'en',
      timezone: 'Europe/London',
    }
    setDefaultSettings(settings)
    settings.language = 'fr'
    settings.timezone = 'Europe/Paris'

    expect(getDefaultSettings()).toEqual({
      language: 'en',
      timezone: 'Europe/London',
    })
  })
})
