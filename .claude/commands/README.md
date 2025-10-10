# AI PM Cards - Custom Slash Commands

This directory contains custom slash commands that invoke specialized agents for various tasks.

## ⚠️ Important: Command Namespace

All commands in this directory require the `/project:` prefix:

✅ **Correct:** `/project:scout-trends what's hot in AI PM`
❌ **Wrong:** `/scout-trends what's hot in AI PM`

This is because commands are scoped to prevent naming conflicts between projects.

### Want Global Commands?

To use these commands across ALL projects, copy them to `~/.claude/commands/`:

```bash
mkdir -p ~/.claude/commands
cp .claude/commands/*.md ~/.claude/commands/
```

Then use with `/user:` prefix: `/user:scout-trends`, `/user:audit-ux`, etc.

---

## Available Commands

### 🎨 Design & UX

#### `/project:audit-ux [component/page/flow]`
Runs comprehensive UI/UX audit using the **ui-ux-design-auditor** agent.

**Examples:**
```
/project:audit-ux Card.jsx flip animation
/project:audit-ux landing page conversion flow
/project:audit-ux mobile navigation experience
```

**Note:** Commands in `.claude/commands/` require the `/project:` prefix.

**Output:** Detailed audit report with severity ratings, code examples, and implementation guidance.

---

#### `/project:fix-a11y [component]`
Provides detailed accessibility fixes for a specific component.

**Examples:**
```
/project:fix-a11y Navigation.jsx
/project:fix-a11y PathView.jsx progress dots
/project:fix-a11y BrowseView search input
```

**Output:** Before/after code with exact accessibility fixes.

---

### 📝 Content Creation

#### `/project:generate-cards [topic/count]`
Creates new AI PM card content using the **ai-pm-card-generator** agent.

**Examples:**
```
/project:generate-cards 5 cards about AI agents
/project:generate-cards learning path for regulated industries
/project:generate-cards expand Risk deck with governance frameworks
```

**Output:** Complete card JSON ready for cardData.json, with IDs, steps, tips, and related cards.

---

#### `/project:review-content [card IDs/category]`
Reviews existing card content for quality and actionability.

**Examples:**
```
/project:review-content STRAT-001 through STRAT-005
/project:review-content all Risk Management cards
/project:review-content concept-to-strategy path
```

**Output:** Quality scores, specific improvements, rewritten versions.

---

### 🔍 Strategy & Intelligence

#### `/project:scout-trends [focus area]`
Identifies trends and opportunities using the **ai-pm-value-scout** agent.

**Examples:**
```
/project:scout-trends what's hot in AI PM this quarter
/project:scout-trends competitive analysis vs Reforge
/project:scout-trends content gaps for junior PMs
/project:scout-trends roadmap priorities for Q2
```

**Output:** Trend alerts, content recommendations, strategic priorities.

---

## Workflow Examples

### Example 1: Adding New Content
```bash
# 1. Research what to add
/project:scout-trends AI safety and alignment for PMs

# 2. Generate the content
/project:generate-cards 8 cards about AI safety based on scout recommendations

# 3. Review quality
/project:review-content newly created safety cards

# 4. Check UX integration
/project:audit-ux how new cards appear in browse view
```

---

### Example 2: Fixing Accessibility
```bash
# 1. Identify issues
/project:audit-ux all form inputs and navigation

# 2. Get specific fixes
/project:fix-a11y Navigation.jsx
/project:fix-a11y Card.jsx
/project:fix-a11y BrowseView.jsx

# 3. Verify improvements
/project:audit-ux accessibility after fixes
```

---

### Example 3: Quarterly Planning
```bash
# 1. Market intelligence
/project:scout-trends comprehensive Q2 market analysis

# 2. Content strategy
/project:generate-cards new paths based on Q2 priorities

# 3. UX optimization
/project:audit-ux conversion funnel from landing to path completion
```

---

## Creating New Commands

To create a new slash command, add a markdown file to this directory:

```markdown
---
description: Brief description of what this command does
---

The command prompt that will be executed...

[User input area]: [Description of what user should provide]
```

**Naming Convention:**
- Use kebab-case: `command-name.md`
- Be descriptive: `audit-ux.md` not `ux.md`
- Group by function: `generate-*`, `audit-*`, `fix-*`

---

## Tips

1. **Be Specific:** The more specific your command input, the better the agent output
   - ❌ `/audit-ux the site`
   - ✅ `/audit-ux Card.jsx flip animation for motion sensitivity`

2. **Chain Commands:** Use output from one command to inform the next
   - `/project:scout-trends` → `/project:generate-cards` → `/project:review-content` → `/project:audit-ux`

3. **Iterate:** You can refine agent outputs by providing feedback
   - "Make those error messages less technical"
   - "Add more specific examples to those cards"

4. **Save Context:** Agents don't remember previous conversations
   - Include relevant context in each command invocation
   - Reference specific file paths, card IDs, or user flows

---

## Agent Descriptions

- **ui-ux-design-auditor**: Comprehensive UI/UX analysis, accessibility audits, interaction design review
- **ai-pm-card-generator**: Educational content creation, frameworks, learning paths
- **ai-pm-value-scout**: Market intelligence, competitive analysis, strategic planning

See `.claude/agents/` directory for full agent prompts and capabilities.
