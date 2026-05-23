export function getApiBaseUrl() {
  const raw = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || '';
  if (raw) {
    return String(raw).replace(/\/$/, '');
  }
  if (import.meta.env.DEV) {
    return 'http://127.0.0.1:8000';
  }
  return '';
}

export function getWidgetScriptUrl() {
  const raw = import.meta.env.VITE_WIDGET_SCRIPT_URL;
  if (raw) {
    return String(raw);
  }
  if (import.meta.env.DEV) {
    return 'http://127.0.0.1:8080/static/js/widget.js';
  }
  return `${typeof window !== 'undefined' ? window.location.origin : ''}/static/js/widget.js`;
}
