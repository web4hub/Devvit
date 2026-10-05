// Before in src/devvit/main.tsx
import { defineConfig } from '@devvit/server';

export default defineConfig({
  // ... configuration
});

// After
// Simply export your Devvit instance or any Devvit.addX functions
import { Devvit } from '@devvit/web';

// Your Devvit setup code here
export default Devvit;
