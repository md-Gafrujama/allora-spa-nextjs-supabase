'use client';

import { useEffect, useState } from 'react';

type Kind = 'success' | 'error';
type Item = { id: number; kind: Kind; title: string; text: string };

let nextId = 0;
let items: Item[] = [];
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function push(kind: Kind, text: string, title?: string) {
  const id = ++nextId;
  const heading = title || (kind === 'success' ? 'Done' : 'Please try again');
  items = [...items.slice(-3), { id, kind, title: heading, text }];
  emit();
  window.setTimeout(() => {
    items = items.filter((item) => item.id !== id);
    emit();
  }, 4200);
}

export function toastSuccess(text: string, title?: string) {
  push('success', text, title);
}

export function toastError(text: string, title?: string) {
  push('error', text, title);
}

export function useToast() {
  return { success: toastSuccess, error: toastError };
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<Item[]>(items);

  useEffect(() => {
    const listen = () => setList(items.slice());
    listeners.add(listen);
    listen();
    return () => {
      listeners.delete(listen);
    };
  }, []);

  function dismiss(id: number) {
    items = items.filter((item) => item.id !== id);
    emit();
  }

  return (
    <>
      {children}
      <div className="toast-stack" aria-live="polite">
        {list.map((item) => (
          <div key={item.id} className={`toast is-${item.kind}`} role="status">
            <div>
              <b>{item.title}</b>
              <p>{item.text}</p>
            </div>
            <button type="button" aria-label="Dismiss" onClick={() => dismiss(item.id)}>×</button>
          </div>
        ))}
      </div>
    </>
  );
}
