import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { categoryLabel, isSkillInstalled, listInstalledSkills, parseCategory, parseSearch } from './hub.js'

test('parseCategory accepts known keys and rejects others', () => {
  assert.equal(parseCategory('ai-agent'), 'ai-agent')
  assert.equal(parseCategory(' dev-programming '), 'dev-programming')
  assert.equal(parseCategory('nope'), '')
  assert.equal(parseCategory(undefined), '')
})

test('categoryLabel maps zh and en', () => {
  assert.equal(categoryLabel('ai-agent'), 'AI Agent')
  assert.equal(categoryLabel('ai-agent', 'en'), 'AI Agent')
  assert.equal(categoryLabel('office-efficiency'), '办公效率')
  assert.equal(categoryLabel('missing'), '')
})

test('parseSearch maps a SkillHub response', () => {
  const body = {
    code: 0,
    data: {
      total: 2,
      skills: [
        {
          slug: 'find-skills',
          displayName: 'Find Skills',
          summary: 'Search for skills',
          category: 'ai-agent',
          downloads: 100,
          stars: 5,
        },
        {
          slug: 'bad-row',
          category: 'ai-agent',
          downloads: 5,
        },
      ],
    },
  }
  const result = parseSearch(body)
  assert.equal(result.total, 2)
  assert.equal(result.items.length, 2)
  assert.equal(result.items[0].slug, 'find-skills')
  assert.equal(result.items[0].categoryLabel, 'AI Agent')
  assert.equal(result.items[0].downloads, 100)
  assert.equal(result.items[1].slug, 'bad-row')
})

test('parseSearch rejects error responses', () => {
  assert.throws(() => parseSearch({ code: 1, message: 'boom' }), /boom/)
})

test('listInstalledSkills scans $DSH_HOME/skills', () => {
  const home = mkdtempSync(join(tmpdir(), 'esc-hub-'))
  const dir = join(home, 'skills', 'pdf-ocr')
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'SKILL.md'), '# x\n')
  const items = listInstalledSkills(home)
  assert.equal(items.length, 1)
  assert.equal(items[0].slug, 'pdf-ocr')
  assert.equal(isSkillInstalled(home, 'pdf-ocr'), true)
  assert.equal(isSkillInstalled(home, 'no-such'), false)
})