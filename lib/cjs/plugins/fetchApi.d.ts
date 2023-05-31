interface FetchBaseConfig<T> {
    baseURL: string;
    headers?: T;
}
interface FetchResult<T> {
    data: T | null;
    error: string | null;
}
declare function fetchApi<T>(command: string, body?: object, config?: FetchBaseConfig<Record<string, string>>): Promise<FetchResult<T>>;
export default fetchApi;
