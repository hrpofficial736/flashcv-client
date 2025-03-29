export default function removeHashFromUrl() {
  if (window.location.hash) {
    window.history.replaceState(
      null,
      document.title,
      window.location.pathname,
    );
  }
}
