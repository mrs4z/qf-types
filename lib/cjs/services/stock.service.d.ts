import { QF_IStock, QF_StockFields } from "../interfaces/IStock";
export interface QF_IFetchStockResponse {
    tickers: QF_IStock[];
}
export declare const QF_StockCommands: {
    /**
     * Запрос к АПИ для получения списка акций
     * @param fields QF_StockFields[]
     * @returns QF_IStocks[]
     */
    fetchStocks: (fields?: QF_StockFields[]) => Promise<QF_IStock[]>;
};
