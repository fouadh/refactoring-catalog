import { getSettings, updateLanguage, updateTimezone } from './example'

describe('Settings', () => {
  beforeEach(() => {
    getSettings().language = 'fr'
    getSettings().timezone = 'Europe/Paris'
  })

  it('has defaults', () => {
    expect(getSettings().language).toEqual('fr')
    expect(getSettings().timezone).toEqual('Europe/Paris')
  })

  it('language can be updated', () => {
    updateLanguage('en')
    expect(getSettings().language).toEqual('en')
    expect(getSettings().timezone).toEqual('Europe/Paris')
  })

  it('timezone can be updated', () => {
    updateTimezone('Europe/London')
    expect(getSettings().language).toEqual('fr')
    expect(getSettings().timezone).toEqual('Europe/London')
  })
})
