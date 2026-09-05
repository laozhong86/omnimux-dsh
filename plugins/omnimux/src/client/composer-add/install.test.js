import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const installSource = readFileSync(join(here, 'install.js'), 'utf8')
const indexSource = readFileSync(join(here, '../index.js'), 'utf8')
const commandsSource = readFileSync(join(here, 'commands.js'), 'utf8')
const pickerSource = readFileSync(join(here, '../components/asset-picker/AssetPicker.jsx'), 'utf8')

describe('composer-add install contract', () => {
  it('keeps the business side: modal, window events, toast, submit capture', () => {
    assert.match(installSource, /installComposerAttachmentSubmitCapture/)
    assert.match(installSource, /AssetPickerModal/)
    assert.match(installSource, /composerAdd\.pickerUnsupported/)
    assert.match(installSource, /\/omnimux\/assets\/pick/)
    assert.match(installSource, /kind === 'directory' \|\| kind === 'any' \? kind : 'file'/)
    assert.match(installSource, /registerComposerAddCommands/)
    assert.match(installSource, /addLocalPaths\(sessionId, 'any', actionSignal\)/)
    assert.match(installSource, /AbortSignal\.any\(\[signal, registrationSignal\]\)/)
    assert.match(installSource, /async function requestJson\(path, body, signal\)/)
    assert.match(installSource, /signal\?\.aborted/)
    assert.match(installSource, /libraryActions\.isCurrent\(action\)/)
    assert.match(installSource, /closeLibraryAction\(libraryActions\.current\(\)\)/)
    assert.match(installSource, /\/omnimux\/composer\/attachments\/materialize/)
    assert.match(installSource, /key: `library-action-\$\{libraryActions\.revision\(\)\}`/)
  })

  it('does not intercept the official + button or draw a replacement menu', () => {
    assert.doesNotMatch(installSource, /add-button\.js|menu-dom\.js/)
    assert.doesNotMatch(installSource, /bindAddButton|findAddButton|replayOfficialAdd|openNativeAddMenu|closeNativeAddMenu/)
    assert.doesNotMatch(installSource, /MutationObserver/)
    assert.doesNotMatch(installSource, /state\.bypass|fileDisabled/)
  })

  it('is installed from the hub client without new slots or extra injects', () => {
    assert.match(indexSource, /installComposerAddCapture/)
    assert.match(indexSource, /export const inject = \['slots', 'locale'\]/)
    assert.doesNotMatch(indexSource, /conversation\.input\.add-menu/)
  })

  it('contributes both actions to the official command list (sole path)', () => {
    assert.match(commandsSource, /name: 'add-file'/)
    assert.match(commandsSource, /name: 'add-from-library'/)
    assert.match(commandsSource, /ctx\.inject\(\['commandUi'\]/)
    assert.match(commandsSource, /kind: 'clientAction'/)
    assert.match(commandsSource, /capabilities\?\.clientAction !== true/)
    assert.match(commandsSource, /session\.sessionId/)
    assert.doesNotMatch(commandsSource, /popupSelect/)
  })

  it('guards delayed shared-picker confirmation from closing a later open instance', () => {
    assert.match(pickerSource, /const ownerRevision = openRevision\.current/)
    assert.match(pickerSource, /openRevision\.current === ownerRevision/)
    assert.match(pickerSource, /if \(openRevision\.current === ownerRevision\) \{\n        setError/)
    assert.match(pickerSource, /if \(openRevision\.current === ownerRevision\) setBusy\(false\)/)
  })
})
