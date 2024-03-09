import { describe, expect, it } from 'vitest'
import { clsx } from '../src/lite'

describe('ported from origin clsx test', () => {
  it('exports', () => {
    expect(typeof clsx).toBe('function')
    expect(typeof clsx()).toBe('string')
    expect(clsx()).toBe('')
  })

  it('strings', () => {
    expect(clsx('')).toBe('')
    expect(clsx('foo')).toBe('foo')
    expect(clsx(true && 'foo')).toBe('foo')
    expect(clsx(false && 'foo')).toBe('')
  })

  it('strings (variadic)', () => {
    expect(clsx('')).toBe('')
    expect(clsx('foo', 'bar')).toBe('foo bar')
    expect(clsx(true && 'foo', false && 'bar', 'baz')).toBe('foo baz')
    expect(clsx(false && 'foo', 'bar', 'baz', '')).toBe('bar baz')
  })

  it('emptys', () => {
    expect(clsx('')).toBe('')
    expect(clsx(undefined)).toBe('')
    expect(clsx(null)).toBe('')
    expect(clsx(0)).toBe('')
  })

  it('non-strings', () => {
    // number
    expect(clsx(1)).toBe('')
    expect(clsx(1, 2)).toBe('')
    expect(clsx(Number.POSITIVE_INFINITY)).toBe('')
    expect(clsx(Number.NaN)).toBe('')
    expect(clsx(0)).toBe('')

    // objects
    expect(clsx({})).toBe('')
    expect(clsx(null)).toBe('')
    expect(clsx({ a: 1 })).toBe('')
    expect(clsx({ a: 1 }, { b: 2 })).toBe('')

    // arrays
    expect(clsx([])).toBe('')
    expect(clsx(['foo'])).toBe('')
    expect(clsx(['foo', 'bar'])).toBe('')

    // functions
    expect(clsx(clsx)).toBe('')
    expect(clsx(clsx, clsx)).toBe('')
  })
})
