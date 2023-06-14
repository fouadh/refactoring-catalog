import { settings, updateLanguage, updateTimezone } from './example_start'

describe('Settings', () => {
  beforeEach(() => {
    settings.language = 'fr'
    settings.timezone = 'Europe/Paris'
  })

  it('has defaults', () => {
    expect(settings.language).toEqual('fr')
    expect(settings.timezone).toEqual('Europe/Paris')
  })

  it('language can be updated', () => {
    updateLanguage('en')
    expect(settings.language).toEqual('en')
    expect(settings.timezone).toEqual('Europe/Paris')
  })

  it('timezone can be updated', () => {
    updateTimezone('Europe/London')
    expect(settings.language).toEqual('fr')
    expect(settings.timezone).toEqual('Europe/London')
  })
})
