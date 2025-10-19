const hasAvatar = document.querySelector('[data-testid="test-user-avatar"]');

if (hasAvatar) {
  console.log("✅ Avatar element found successfully!");
} else {
  console.error("❌ Avatar element missing!");
}
