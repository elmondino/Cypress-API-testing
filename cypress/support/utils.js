import convert from 'xml-js'

export const xml2js = (xml) => {
    return convert.xml2js(xml, {compact: true, spaces: 2});
} 