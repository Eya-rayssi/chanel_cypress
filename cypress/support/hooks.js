const utils = require("../support/utils.js");

let scenarioName;
let dataFileContent;

beforeEach(() => {
    scenarioName = processTitle(cy.state().test.title);
    let dataFile = getDataFilePath(scenarioName);
    cy.task("checkIfFileExists", dataFile).then((exists) => {
        if (exists == null) {
            throw new Error(dataFile + " doesn't exist.");
        }
        cy.fixture(utils.getFixtureFile(scenarioName)).then((data) => {
            dataFileContent = data;
        });
    });
});

export {scenarioName, dataFileContent};

const getDataFilePath = (scenarioName) => {
    return "cypress/fixtures/" + utils.getFixtureFile(scenarioName);
};

const processTitle = (title) => {
    const loweredTitle = title.toLowerCase();
    return replaceAll(loweredTitle, " ", "_") + ".json";
};

const replaceAll = (str, match, replacement) => {
    return str.split(match).join(replacement);
};