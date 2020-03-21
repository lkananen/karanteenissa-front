const { getters } = require('./state')

const localizeServices = (services) => {
    const lang = getters.locale().value
    const svcs = services.map((svc) => {
        if (svc.langs[lang]) {
            return Object.assign(svc, svc.langs[lang])
        } else {
            return Object.assign(svc, svc.langs['fi'])
        }
    })
    return svcs
}

const localizeLocations = (locations) => {
    const lang = getters.locale().value
    const locs = locations.map((loc) => {
        if (loc.name[lang]) {
            return {...loc, current: loc.name[lang]}
        } else {
            return {...loc, current: loc.name['fi']}
        }
    })
    return locs
}

const findLocation = (locations, locStr) => {
    const lang = getters.locale().value
    return locations.find((loc) => {
        return loc.name[lang] == locStr || loc.name.fi == locStr
    })
}

module.exports = { 
    localizeServices, 
    localizeLocations,
    findLocation
}