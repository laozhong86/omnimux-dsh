import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { INSPIRATION_TOOL_NAMES, apply } from './index.js'

describe('inspiration tools registration', () => {
  it('registers inspiration_search, inspiration_get, inspiration_create', () => {
    const registered = []
    const mockCtx = {
      tools: {
        register(t) {
          registered.push(t)
        },
      },
    }

    apply(mockCtx)

    const names = registered.map((t) => t.name)
    assert.deepEqual(names, INSPIRATION_TOOL_NAMES)
  })

  it('inspiration_search filters items correctly', async () => {
    const registered = {}
    const mockCtx = {
      tools: {
        register(t) {
          registered[t.name] = t
        },
      },
    }

    apply(mockCtx)

    const searchTool = registered.inspiration_search
    assert.ok(searchTool)

    const result = await searchTool.execute({ query: '' })
    assert.ok(Array.isArray(result.inspirations))
  })
})
