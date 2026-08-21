/**
 * The single source of truth for which revision of the privacy policy is
 * live.
 *
 * The displayed date and the version recorded with a waitlist consent were
 * separate literals in separate files, so revising the policy moved one and
 * left the other behind: Formspree would record acceptance of a version the
 * visitor never saw, which is exactly what a versioned consent record exists
 * to prevent.
 *
 * Update both fields together whenever the policy text changes substantively.
 */
export const PRIVACY_POLICY_VERSION = "2026-08-21";

/** The same revision, formatted for display in the legal pages. */
export const PRIVACY_POLICY_UPDATED = "21 augusti 2026";

/** Revision of the terms and the other legal pages, which are unchanged. */
export const LEGAL_PAGES_UPDATED = "11 augusti 2026";
