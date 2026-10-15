export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="route-loading-ring" aria-hidden="true" />
      <span className="route-loading-text">Loading…</span>
    </div>
  );
}
