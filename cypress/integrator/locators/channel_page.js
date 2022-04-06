module.exports= {
    HOME_PAGE:{
        SEARCH_BTN_HEADER:"//button[@data-test='btnSearch_Header_Disabled']"
    },
    SEARCH_PAGE:{
        SEARCH_INPUT:"//label[@data-test='txtPlaceHolderSearch']",
        SEARCH_BTN:"//button[@data-test='btnSubmitSearch']",
        RESULT_OF_SEARCH:"//*[@id='new-search-overlay']/div/div[2]/div[2]/div/div[2]/div/div[2]/div[3]",
        ASSERTION_MESSAGE:"//span[@data-test='lblProductTitle'][contains(text(),?)]"
    }
}