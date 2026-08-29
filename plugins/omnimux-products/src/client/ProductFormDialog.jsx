import { useEffect, useRef } from 'react'
import { Button, IconButton, InputField } from 'dsh-ui-kit'
import { CloseIcon, FileIcon } from './icons.jsx'
import { ProductFormBody } from './ProductFormFields.jsx'
import { useProductFormState } from './useProductFormState.js'

function useEscapeKey(onCancel) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCancel])
}

function ModalCloseButton(props) {
  const { label, onCancel } = props
  return (
    <IconButton
      className="omnimux-products-modal-close"
      variant="ghost"
      size="sm"
      aria-label={label}
      onClick={onCancel}
    >
      <CloseIcon size={14} />
    </IconButton>
  )
}

function ModalFooter(props) {
  const { canSubmit, busy, onSubmit, payload, text } = props
  return (
    <div className="omnimux-products-modal-footer">
      <Button
        variant="primary"
        disabled={!canSubmit}
        loading={busy}
        onClick={() => { onSubmit(payload()) }}
      >
        {text}
      </Button>
    </div>
  )
}

function ModalContainer(props) {
  const { title, bodyProps, footerProps } = props
  return (
    <div className="omnimux-products-modal-container">
      <div className="omnimux-products-modal-header">
        <h2 id="omnimux-products-modal-title" className="omnimux-products-modal-title">
          {title}
        </h2>
      </div>

      <div className="omnimux-products-modal-body">
        <ProductFormBody {...bodyProps} />
      </div>

      <ModalFooter {...footerProps} />
    </div>
  )
}

/**
 * Create / edit overlay. Parent owns dirty banner + submit.
 * @param {{
 *   t: (key: string) => string,
 *   data: { mode: 'create' | 'edit', busy: boolean, error?: string, dirty?: boolean, initial?: any },
 *   onAction: {
 *     onCancel: () => void,
 *     onPick: (kind: 'file' | 'directory') => Promise<string[]>,
 *     onSubmit: (payload: Record<string, unknown>) => void,
 *     onReload?: () => void,
 *   },
 * }} props
 */
export function ProductFormDialog({ t, data, onAction }) {
  const { mode, busy, error, dirty, initial } = data
  const { onCancel, onPick, onSubmit, onReload } = onAction
  const nameRef = useRef(null)

  const form = useProductFormState(initial, busy)
  const { state, setters, actions, canSubmit, payload } = form

  useEffect(() => {
    nameRef.current?.focus()
  }, [])
  useEscapeKey(onCancel)

  const title = mode === 'edit' ? t('detail.title') : t('add.title')
  const submitText = mode === 'edit' ? t('detail.save') : t('add.submit')
  const bodyProps = { t, state, setters, actions, dirty, busy, error, onReload, onPick, nameRef }
  const footerProps = { canSubmit, busy, onSubmit, payload, text: submitText }

  return (
    <div className="omnimux-products-modal-backdrop" onClick={onCancel}>
      <div
        className="omnimux-products-modal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="omnimux-products-modal-title"
        onClick={(event) => { event.stopPropagation() }}
      >
        <ModalCloseButton label={t('stage.close')} onCancel={onCancel} />
        <ModalContainer title={title} bodyProps={bodyProps} footerProps={footerProps} />
      </div>
    </div>
  )
}
