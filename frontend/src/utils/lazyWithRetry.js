import { lazy } from "react";

/**
 * A wrapper around React.lazy that reloads the page once if the module fails to load.
 * This handles "ChunkLoadError" or "Failed to fetch dynamically imported module" errors
 * which typically occur after a new deployment when old chunks are no longer available.
 */
export const lazyWithRetry = (componentImport) =>
  lazy(async () => {
    const pageHasAlreadyBeenForceRefreshed = JSON.parse(
      window.sessionStorage.getItem("page-has-been-force-refreshed") || "false"
    );

    try {
      const component = await componentImport();
      // If successful, reset the flag
      window.sessionStorage.setItem("page-has-been-force-refreshed", "false");
      return component;
    } catch (error) {
      if (!pageHasAlreadyBeenForceRefreshed) {
        // Set flag to prevent infinite reload loop
        window.sessionStorage.setItem("page-has-been-force-refreshed", "true");
        // Reload page to fetch fresh index.html and chunks
        window.location.reload();
        // Return a promise that never resolves (since we're reloading)
        return new Promise(() => {});
      }

      // If already reloaded and still failing, throw error to be caught by ErrorBoundary
      throw error;
    }
  });
