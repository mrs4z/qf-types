/**
 * ABOUT STOCK INTERFACES
 */
/**
 * BASE FIELDS
 */
export declare enum QF_StockFields {
    ID = "id",
    NAME = "name",
    TICKER_NAME = "ticker_name",
    MARKET_ID = "market_id",
    ROUND = "round"
}
/** STOCK STRUCT */
export interface QF_IStock {
    [QF_StockFields.ID]: number;
    [QF_StockFields.NAME]: string;
    [QF_StockFields.TICKER_NAME]: string;
    [QF_StockFields.MARKET_ID]: number;
    [QF_StockFields.ROUND]: number;
}
