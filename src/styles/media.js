const size = {
    mobile: '600px',
    tablet: '960px',
    laptop: '1280px',
    desktop: '1920px',
}

export const device = {
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
};