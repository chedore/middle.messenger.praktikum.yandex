import { expect } from 'chai';
/* eslint-disable arrow-parens */
import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon';

import HTTPTransport from './HTTPTransport';

describe('HTTPTransport', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let request: SinonFakeXMLHttpRequest;
  let http: HTTPTransport;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-expect-error не соответствует точному типу глобального XMLHttpRequest
    global.XMLHttpRequest = xhr;

    xhr.onCreate = req => {
      request = req;
    };

    http = new HTTPTransport();
  });

  afterEach(() => {
    xhr.restore();
  });

  it('тест, GET-запроса с данными', async () => {
    http.get('http://example.com');

    expect(request.method).to.equal('GET');
    expect(request.url).to.equal('http://example.com');
  });

  it('тест, POST-запроса', async () => {
    const data = { key: '1' };
    http.post('http://example.com', { data });

    expect(request.method).to.equal('POST');
    expect(request.url).to.equal('http://example.com');
    expect(request.requestBody).to.equal(JSON.stringify(data));
  });

  it('тест, PUT-запрос с данными', async () => {
    const data = { key: '1' };
    http.put('http://example.com', { data });

    expect(request.method).to.equal('PUT');
    expect(request.url).to.equal('http://example.com');
    expect(request.requestBody).to.equal(JSON.stringify(data));
  });

  it('тест, DELETE-запрос', async () => {
    http.delete('http://example.com');

    expect(request.method).to.equal('DELETE');
    expect(request.url).to.equal('http://example.com');
  });
});
