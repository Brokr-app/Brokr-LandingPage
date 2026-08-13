const required = [
  "VITE_FORMSPREE_FORM_ID",
  "VITE_LEGAL_ENTITY_NAME",
  "VITE_LEGAL_ORGANISATION_NUMBER",
  "VITE_LEGAL_POSTAL_ADDRESS",
];

const missing = required.filter((name) => !process.env[name]?.trim());
if (missing.length > 0) {
  console.error(`Release blocked: missing ${missing.join(", ")}`);
  process.exit(1);
}

if (!/^\d{6}-?\d{4}$/.test(process.env.VITE_LEGAL_ORGANISATION_NUMBER)) {
  console.error("Release blocked: VITE_LEGAL_ORGANISATION_NUMBER has an invalid format");
  process.exit(1);
}

console.log("Landing-page release configuration is complete.");
