export default function WidgetEmbedPreview({ bgColor, textColor, iconText, showPreviewLabel = true }) {
  const label = (iconText ?? '').trim();

  return (
    <div>
      {showPreviewLabel ? (
        <div className="mb-2 font-medium text-foreground-muted">Preview</div>
      ) : null}
      <div className="relative mx-auto max-w-xl overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
        <div className="flex items-center gap-2 border-b border-line/70 bg-foreground/[0.04] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" aria-hidden />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
          <span className="ml-2 truncate text-[10px] text-foreground-muted">example.com / page</span>
        </div>
        <div
          className="relative min-h-[220px] bg-surface p-4 text-[11px] leading-snug text-foreground-muted"
          style={{ boxSizing: 'border-box' }}
        >
          <p className="mb-1.5 text-xs font-semibold tracking-tight text-foreground">Neutral sample page</p>
          <p className="mb-1.5 max-w-[85%]">
            This block simulates a typical page body. Your visitors see your own content here; the
            assistant control stays in the corner, like on a real site.
          </p>
          <p className="max-w-[80%] opacity-90">
            Lorem ipsum dolor sit amet, consectetur placeholder text used only in this preview.
          </p>
          <div
            className="absolute flex items-center justify-center shadow-md"
            style={{
              bottom: 16,
              right: 16,
              background: bgColor,
              color: textColor,
              fontSize: 18,
              borderRadius: 4,
              padding: '4px 8px',
              zIndex: 9,
              minWidth: label ? undefined : 28,
              minHeight: 26,
            }}
            aria-hidden
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
