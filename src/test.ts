import { QF_StockCommands } from "./services/stock.service";

const fetchTest = async () => {
    const fetchDate = await QF_StockCommands.fetchStocks();
    console.log(fetchDate)
    return fetchDate;
}

fetchTest();