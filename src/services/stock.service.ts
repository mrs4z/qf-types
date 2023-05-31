import { QF_IStock, QF_StockFields } from "../interfaces/IStock";
import fetchApi from "../plugins/fetchApi";

enum QF_StockCommandsApi {
    GET_STOCKS = 'getStocks'
}

interface QF_IFetchStockResponse {
    stocks: QF_IStock[]
}

export const QF_StockCommands = {
    
    /**
     * Запрос к АПИ для получения списка акций
     * @param fields QF_StockFields[]
     * @returns QF_IStocks[]
     */
    fetchStocks: async (
        fields: QF_StockFields[] = [
            QF_StockFields.ID,
            QF_StockFields.NAME,
            QF_StockFields.TICKER_NAME,
            QF_StockFields.ROUND,
            QF_StockFields.MARKET_ID
        ]
    ): Promise<QF_IStock[]> => {
        const { data, error } = await fetchApi<QF_IFetchStockResponse>(QF_StockCommandsApi.GET_STOCKS, fields);

        if(error) {
            return [];
        }

        return data?.stocks || [];
    }
}