export default function removeHashFromUrl() {
  if (window.location.hash || window.location.search) {
    window.history.replaceState(
      null,
      document.title,
      window.location.pathname,
    );
  }
}
