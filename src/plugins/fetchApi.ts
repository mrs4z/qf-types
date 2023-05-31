interface FetchBaseConfig<T> {
    baseURL: string;
    headers?: T;
  }
  
  const baseConfig: FetchBaseConfig<Record<string, string>> = {
    baseURL: 'https://qf.ali33.ru:48001/api',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  
  interface FetchResult<T> {
    data: T | null;
    error: string | null;
  }
  
  async function fetchApi<T>(
    command: string,
    body?: object,
    config: FetchBaseConfig<Record<string, string>> = baseConfig
  ): Promise<FetchResult<T>> {
    try {
      const response = await fetch(config.baseURL, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
          command,
          ...body
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData: T = await response.json();
  
      return {
        data: jsonData,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error.message || 'An error occurred',
      };
    }
  }
  
  export default fetchApi;
  