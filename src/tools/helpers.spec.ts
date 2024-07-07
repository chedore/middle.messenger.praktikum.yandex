import { expect } from 'chai';
import { isPlainObject, isArray, isArrayOrObject } from './helpers';
/* eslint-disable no-unused-expressions */

describe('isPlainObject', () => {
  it('тест, return true (для простых объектов)', () => {
    expect(isPlainObject({})).to.be.true;
    expect(isPlainObject({ key: 'value' })).to.be.true;
  });

  it('тест, return false (для array)', () => {
    expect(isPlainObject([])).to.be.false;
  });

  it('тест, return false (для null)', () => {
    expect(isPlainObject(null)).to.be.false;
  });

  it('тест, return false (для strings)', () => {
    expect(isPlainObject('string')).to.be.false;
  });

  it('тест, return false (для undefined)', () => {
    expect(isPlainObject(undefined)).to.be.false;
  });

  it('тест, return false (для numbers)', () => {
    expect(isPlainObject(123)).to.be.false;
  });

  it('тест, return false/true (для booleans)', () => {
    expect(isPlainObject(true)).to.be.false;
    expect(isPlainObject(false)).to.be.false;
  });

  it('тест, return false (для date)', () => {
    expect(isPlainObject(new Date())).to.be.false;
  });

  it('тест, return false (для functions)', () => {
    expect(isPlainObject(() => {})).to.be.false;
  });
});

describe('isArray', () => {
  it('тест, return true (для array)', () => {
    expect(isArray([])).to.be.true;
    expect(isArray([1, 2, 3])).to.be.true;
    expect(isArray(new Array(5))).to.be.true;
  });

  it('тест, return false (для всех не array)', () => {
    expect(isArray({})).to.be.false;
    expect(isArray('string')).to.be.false;
    expect(isArray(123)).to.be.false;
    expect(isArray(true)).to.be.false;
    expect(isArray(null)).to.be.false;
    expect(isArray(undefined)).to.be.false;
    expect(isArray(() => {})).to.be.false;
    expect(isArray(new Date())).to.be.false;
  });
});

describe('isArrayOrObject', () => {
  it('тест, return true (для простых объектов)', () => {
    expect(isArrayOrObject({})).to.be.true;
    expect(isArrayOrObject({ key: 'value' })).to.be.true;
  });

  it('тест, return true (для array)', () => {
    expect(isArrayOrObject([])).to.be.true;
    expect(isArrayOrObject([1, 2, 3])).to.be.true;
    expect(isArrayOrObject(new Array(5))).to.be.true;
  });

  it('тест, return false (для всех кроме array и объектов)', () => {
    expect(isArrayOrObject('string')).to.be.false;
    expect(isArrayOrObject(123)).to.be.false;
    expect(isArrayOrObject(true)).to.be.false;
    expect(isArrayOrObject(false)).to.be.false;
    expect(isArrayOrObject(null)).to.be.false;
    expect(isArrayOrObject(undefined)).to.be.false;
    expect(isArrayOrObject(() => {})).to.be.false;
    expect(isArrayOrObject(new Date())).to.be.false;
  });
});
