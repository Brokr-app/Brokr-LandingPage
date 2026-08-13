export const legalIdentity = {
  name: import.meta.env.VITE_LEGAL_ENTITY_NAME?.trim() || "",
  organisationNumber: import.meta.env.VITE_LEGAL_ORGANISATION_NUMBER?.trim() || "",
  postalAddress: import.meta.env.VITE_LEGAL_POSTAL_ADDRESS?.trim() || "",
};

export const hasCompleteLegalIdentity = Object.values(legalIdentity).every(Boolean);
