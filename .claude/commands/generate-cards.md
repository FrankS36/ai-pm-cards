---
description: Generate new AI PM card content, frameworks, or learning paths
---

Launch the ai-pm-card-generator agent to create comprehensive AI Product Management educational content.

Create content that:
- Follows the existing structure in src/data/cardData.json
- Uses actionable, practitioner-focused language (not academic)
- Includes specific examples, numbers, and failure modes
- Provides proper card ID sequences:
  - Strategy deck: STRAT-032+ (currently 31 cards)
  - Risk deck: RISK-051+ (currently 50 cards)
  - Execution deck: EXEC-054+ (currently 53 cards)
- Links to related existing cards by ID
- Suggests appropriate Lucide icon names

Required card fields: id, deck, category, difficulty, companyContext, title, description, whenToUse (3 scenarios), overview, steps (numbered list), tips (2 pro tips), relatedCards (2-3), icon

Context: Educational platform with 156 existing frameworks. Target audience is practicing AI Product Managers.

Content to generate: $ARGUMENTS
