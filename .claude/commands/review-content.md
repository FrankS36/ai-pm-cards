---
description: Review card content for quality, clarity, and actionability
---

Launch the ai-pm-card-generator agent to review existing card content in src/data/cardData.json.

Evaluate against these criteria:
- **Actionability**: Can a PM use this Monday morning? (Pass the "Monday morning test")
- **Specificity**: Concrete examples, numbers, thresholds (not vague advice)
- **Structure**: Clear steps, proper markdown, scannable formatting
- **Related Cards**: Meaningful learning pathways that make sense
- **Language**: Practitioner voice, active verbs, concise (not academic)
- **Completeness**: All required fields populated, no placeholders

Provide for each card:
- Quality score (1-10) with specific rationale
- What's working well (strengths)
- What needs improvement (gaps)
- Specific recommended changes
- Rewritten versions if score < 7

Content to review: $ARGUMENTS
