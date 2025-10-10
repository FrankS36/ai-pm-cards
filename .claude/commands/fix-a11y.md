---
description: Get specific accessibility fixes for a component with exact code
---

Launch the ui-ux-design-auditor agent to provide detailed implementation guidance for fixing accessibility violations in the specified component.

Focus on these WCAG 2.2 Level AA requirements:
- Color contrast (minimum 4.5:1 for text, 3:1 for UI components)
- Focus indicators (visible 2px ring on all interactive elements)
- Semantic HTML (use button elements, not clickable divs)
- ARIA labels (screen reader announcements)
- Keyboard navigation (tab order, keyboard shortcuts)
- Touch target sizes (minimum 44x44px for mobile)

Provide exact code replacements:
- Show current code (OLD)
- Show fixed code (NEW)
- Include line numbers and file paths
- Explain why each change is needed
- Provide testing steps to verify

Component to fix: $ARGUMENTS
