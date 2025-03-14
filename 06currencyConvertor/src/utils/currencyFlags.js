// Currency code to country code mapping
export const currencyToCountry = {
    usd: 'us',
    eur: 'eu',
    gbp: 'gb',
    inr: 'in',
    aud: 'au',
    cad: 'ca',
    sgd: 'sg',
    chf: 'ch',
    myr: 'my',
    jpy: 'jp',
    cny: 'cn',
    npr: 'np',
    nzd: 'nz',
    thb: 'th',
    hkd: 'hk',
    pkr: 'pk',
    bdt: 'bd',
    idr: 'id',
    czk: 'cz',
    aed: 'ae',
    afn: 'af',    // Afghanistan
    all: 'al',    // Albania
    amd: 'am',    // Armenia
    ang: 'an',    // Netherlands Antilles
    aoa: 'ao',    // Angola
    ars: 'ar',    // Argentina
    awg: 'aw',    // Aruba
    azn: 'az',    // Azerbaijan
    bam: 'ba',    // Bosnia and Herzegovina
    bbd: 'bb',    // Barbados
    bgn: 'bg',    // Bulgaria
    bhd: 'bh',    // Bahrain
    bif: 'bi',    // Burundi
    bmd: 'bm',    // Bermuda
    bnd: 'bn',    // Brunei
    bob: 'bo',    // Bolivia
    brl: 'br',    // Brazil
    bsd: 'bs',    // Bahamas
    btn: 'bt',    // Bhutan
    bwp: 'bw',    // Botswana
    byn: 'by',    // Belarus
    bzd: 'bz',    // Belize
    clp: 'cl',    // Chile
    cop: 'co',    // Colombia
    crc: 'cr',    // Costa Rica
    cup: 'cu',    // Cuba
    dkk: 'dk',    // Denmark
    dzd: 'dz',    // Algeria
    egp: 'eg',    // Egypt
    etb: 'et',    // Ethiopia
    fjd: 'fj',    // Fiji
    gel: 'ge',    // Georgia
    ghs: 'gh',    // Ghana
    gip: 'gi',    // Gibraltar
    gtq: 'gt',    // Guatemala
    hrk: 'hr',    // Croatia
    htg: 'ht',    // Haiti
    huf: 'hu',    // Hungary
    ils: 'il',    // Israel
    iqd: 'iq',    // Iraq
    irr: 'ir',    // Iran
    isk: 'is',    // Iceland
    jmd: 'jm',    // Jamaica
    jod: 'jo',    // Jordan
    kes: 'ke',    // Kenya
    kgs: 'kg',    // Kyrgyzstan
    khr: 'kh',    // Cambodia
    kmf: 'km',    // Comoros
    krw: 'kr',    // South Korea
    kwd: 'kw',    // Kuwait
    kzt: 'kz',    // Kazakhstan
    lbp: 'lb',    // Lebanon
    lkr: 'lk',    // Sri Lanka
    ltl: 'lt',    // Lithuania
    mad: 'ma',    // Morocco
    mdl: 'md',    // Moldova
    mnt: 'mn',    // Mongolia
    mop: 'mo',    // Macau
    mur: 'mu',    // Mauritius
    mvr: 'mv',    // Maldives
    mxn: 'mx',    // Mexico
    ngn: 'ng',    // Nigeria
    nok: 'no',    // Norway
    omr: 'om',    // Oman
    pen: 'pe',    // Peru
    php: 'ph',    // Philippines
    pln: 'pl',    // Poland
    pyg: 'py',    // Paraguay
    qar: 'qa',    // Qatar
    ron: 'ro',    // Romania
    rsd: 'rs',    // Serbia
    rub: 'ru',    // Russia
    sar: 'sa',    // Saudi Arabia
    sek: 'se',    // Sweden
    sgd: 'sg',    // Singapore
    thb: 'th',    // Thailand
    try: 'tr',    // Turkey
    twd: 'tw',    // Taiwan
    tzs: 'tz',    // Tanzania
    uah: 'ua',    // Ukraine
    uyu: 'uy',    // Uruguay
    vef: 've',    // Venezuela
    vnd: 'vn',    // Vietnam
    zar: 'za',    // South Africa
}

// Function to get flag URL using flagsapi.com
export const getFlagUrl = (currencyCode) => {
    const countryCode = currencyToCountry[currencyCode.toLowerCase()]
    return countryCode 
        ? `https://flagsapi.com/${countryCode.toUpperCase()}/shiny/64.png`
        : null
} 