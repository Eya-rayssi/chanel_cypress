const fs = require("fs");
const path = require("path");

const getParameterizedLocator = (unchangedLocator, ...param) => {
    let locator = unchangedLocator;
    param.forEach(e => {
        locator = locator.replace("?", e);
    });
    return locator;
};

const getFixtureFile = fileName => Cypress.env("fixturesBaseDir").concat(fileName);

const getFixtureUploadFile = fileName => Cypress.env("uploadeBaseDir").concat(fileName);

const fileExistsWithCaseSync = filepath => {
    const dir = path.dirname(filepath);
    if (dir === "/" || dir === ".") return true;
    const filenames = fs.readdirSync(dir);
    if (filenames.indexOf(path.basename(filepath)) === -1) {
        return false;
    }
    return fileExistsWithCaseSync(dir);
};

exports.getParameterizedLocator = getParameterizedLocator;
exports.getFixtureFile = getFixtureFile;
exports.getFixtureUploadFile = getFixtureUploadFile;
exports.fileExistsWithCaseSync = fileExistsWithCaseSync;
