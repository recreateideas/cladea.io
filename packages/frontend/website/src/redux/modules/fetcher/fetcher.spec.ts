/* eslint-disable import/first */
jest.mock('axios');
import * as axios from 'axios';
import { fetcher } from './fetcher';
import defaults from './defaults';

beforeEach(() => {
    jest.resetAllMocks();
});
describe('fetcher', () => {
    it('should return by default what defaults.responseHandler returns', async () => {
        const config = { url: 'http://some-url' };
        const axiosResponse = {
            status: 200,
            data: { some: 'payload' },
        };
        jest.spyOn(axios, 'default').mockResolvedValue(axiosResponse as axios.AxiosResponse);
        const handlerSpy = jest.spyOn(defaults, 'responseHandler').mockImplementation((a) => a);
        const result = await fetcher(config);
        expect(handlerSpy).toHaveBeenCalledWith(axiosResponse);
        expect(result).toEqual(axiosResponse);
    });

    it('should return what defaults.errorHandler returns if axios throws', async () => {
        const config = { url: 'http://some-url' };
        const AxiosError = new Error();
        jest.spyOn(axios, 'default').mockRejectedValue({
            response: {
                data: AxiosError,
            },
        });
        const handlerSpy = jest
            .spyOn(defaults, 'errorHandler')
            .mockImplementation((a: any): any => a);
        const result = await fetcher(config);
        expect(handlerSpy).toHaveBeenCalledWith(AxiosError);
        expect(result).toEqual(AxiosError);
    });
    it('should return what defaults.errorHandler returns if axios throws with no data response', async () => {
        const config = { url: 'http://some-url' };
        jest.spyOn(axios, 'default').mockRejectedValue({
            response: {
                data: undefined,
            },
        });
        const handlerSpy = jest
            .spyOn(defaults, 'errorHandler')
            .mockImplementation((a: any): any => a);
        const result = await fetcher(config);
        expect(handlerSpy).toHaveBeenCalledWith(undefined);
        expect(result).toBeUndefined();
    });
});
