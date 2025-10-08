# Execution Tactics Deck - Quick Reference Index

## 📝 Requirements & Specs (EXEC-001 to EXEC-008)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-001 | Write AI Product Specs | Scoping new AI features with probabilistic behavior |
| EXEC-002 | Define AI Success Metrics | Setting multi-dimensional success criteria before development |
| EXEC-003 | Write AI Acceptance Criteria | Creating testable conditions for AI user stories |
| EXEC-004 | Document Edge Cases & Failure Modes | Identifying how AI should handle unusual inputs |
| EXEC-005 | Write User Stories for AI Features | Crafting stories that capture AI-specific requirements |
| EXEC-006 | Specify Model Constraints & Requirements | Defining technical boundaries (latency, cost, privacy) |
| EXEC-007 | Create Model Evaluation Rubric | Building scorecards to compare model candidates |
| EXEC-008 | Define Human-in-the-Loop Requirements | Specifying when/how humans review AI decisions |

## 📊 Data Strategy (EXEC-009 to EXEC-016)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-009 | Plan Data Collection Strategy | Systematic approach to gathering training data |
| EXEC-010 | Establish Data Labeling Pipeline | Building efficient, quality-controlled annotation workflows |
| EXEC-011 | Design Active Learning Workflow | Smart sampling to reduce labeling costs 40-70% |
| EXEC-012 | Implement Data Versioning | Tracking dataset versions for reproducibility |
| EXEC-013 | Generate Synthetic Training Data | Creating artificial examples for rare cases |
| EXEC-014 | Implement Data Privacy Controls | Protecting user privacy in data pipelines |
| EXEC-015 | Training Data Quality Assurance | Detecting and fixing data quality issues |
| EXEC-016 | Design Data Refresh Strategy | Planning when/how to update training data |

## 🔬 Model Development (EXEC-017 to EXEC-023)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-017 | Plan Model Development Sprint | Structuring 2-week sprints for ML experimentation |
| EXEC-018 | Track Model Experiments | Logging experiments for comparison and reproducibility |
| EXEC-019 | Establish Model Baselines | Creating simple benchmarks to measure ML value |
| EXEC-020 | Evaluate Model Performance | Assessing quality beyond simple accuracy scores |
| EXEC-021 | Run Model Iteration Loops | Systematically improving model performance |
| EXEC-022 | Optimize Model Performance | Improving speed and reducing costs 2-10x |
| EXEC-023 | Implement Model Versioning | Tracking and managing model versions across environments |

## 🎨 UX & Product Design (EXEC-024 to EXEC-031)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-024 | Design AI UX Patterns | Applying proven patterns for AI interfaces |
| EXEC-025 | Design Loading & Latency States | Keeping users engaged during AI processing |
| EXEC-026 | Design AI Error States | Creating clear, actionable error messages |
| EXEC-027 | Implement Confidence Score Display | Communicating model uncertainty intuitively |
| EXEC-028 | Design Progressive Disclosure | Showing simple results with drill-down details |
| EXEC-029 | Design AI Explanation Interfaces | Helping users understand AI decisions |
| EXEC-030 | Design Feedback Collection Mechanisms | Capturing user feedback for improvement |
| EXEC-031 | Design Onboarding for AI Features | Educating users about AI capabilities and limits |

## 🧪 Testing & Validation (EXEC-032 to EXEC-038)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-032 | Design AI Testing Strategy | Comprehensive test plans for AI systems |
| EXEC-033 | Implement A/B Testing for AI | Measuring real-world model impact |
| EXEC-034 | Run Shadow Mode Testing | Validating production performance without user risk |
| EXEC-035 | Conduct AI Red Teaming | Finding vulnerabilities through adversarial testing |
| EXEC-036 | Execute User Acceptance Testing | Validating AI meets user needs with real users |
| EXEC-037 | Test Model Fairness | Ensuring equitable performance across user groups |
| EXEC-038 | Create Automated Test Suites | Building continuous regression testing |

## 🚀 Launch & Monitoring (EXEC-039 to EXEC-045)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-039 | Plan Phased Rollout | Deploying incrementally to manage risk |
| EXEC-040 | Set Up Model Monitoring | Instrumenting production AI for performance tracking |
| EXEC-041 | Build Monitoring Dashboards | Visualizing AI system health for stakeholders |
| EXEC-042 | Design Incident Response Plan | Procedures for detecting and resolving AI failures |
| EXEC-043 | Implement Feedback Collection | Gathering user feedback for continuous improvement |
| EXEC-044 | Measure AI Feature Adoption | Tracking discovery, trial, and retention metrics |
| EXEC-045 | Analyze AI Usage Patterns | Studying interactions to identify improvements |

## 🔄 Optimization & Iteration (EXEC-046 to EXEC-050)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-046 | Plan Model Retraining | Establishing cadence for model updates |
| EXEC-047 | Optimize Model Costs | Reducing inference/training costs at scale |
| EXEC-048 | Iterate on AI Features | Systematically improving based on feedback |
| EXEC-049 | Tune Model Performance | Adjusting hyperparameters for 5-15% gains |
| EXEC-050 | Evaluate Feature Sunset | Deciding when to deprecate underperforming features |

## 📚 Primers (EXEC-051 to EXEC-053)

| ID | Title | Key Use Case |
|---|---|---|
| EXEC-051 | AI Development Lifecycle Overview | Understanding end-to-end AI product journey |
| EXEC-052 | MLOps Basics Primer | Learning ML operations fundamentals |
| EXEC-053 | Common AI Metrics Primer | Understanding key metrics and when to use each |

## 🔍 Quick Lookup by Scenario

### "I'm starting my first AI project"
→ Start with: EXEC-051, EXEC-001, EXEC-002, EXEC-009

### "I need to collect and label data"
→ See: EXEC-009, EXEC-010, EXEC-015, EXEC-011

### "I'm working with ML engineers on model development"
→ See: EXEC-017, EXEC-018, EXEC-019, EXEC-020

### "I need to design the user experience"
→ See: EXEC-024, EXEC-025, EXEC-026, EXEC-030

### "I'm preparing to launch"
→ See: EXEC-032, EXEC-034, EXEC-039, EXEC-040

### "My AI is in production and I need to maintain it"
→ See: EXEC-040, EXEC-041, EXEC-046, EXEC-047

### "I need to test my AI system"
→ See: EXEC-032, EXEC-033, EXEC-034, EXEC-035, EXEC-037

### "Users are confused or not adopting the feature"
→ See: EXEC-031, EXEC-044, EXEC-045, EXEC-048

### "I need to improve model performance"
→ See: EXEC-021, EXEC-022, EXEC-049, EXEC-046

### "I'm dealing with costs or efficiency issues"
→ See: EXEC-022, EXEC-047, EXEC-012, EXEC-013

## 💡 Pro Tips from the Deck

1. **Always start with baselines** (EXEC-019) - If you can't beat simple rules with ML, you probably don't need ML
2. **Budget 50% of time for data** (EXEC-051) - Data quality matters more than model complexity
3. **Monitor from day 1** (EXEC-040) - Models degrade in production, monitoring isn't optional
4. **Test latency at p95/p99** (EXEC-020) - Average latency hides the experience of real users
5. **Aim for 5-10% feedback rate** (EXEC-043) - Below 2% means your collection mechanism is too hard
6. **Phased rollouts are mandatory** (EXEC-039) - Not optional, even for "simple" features
7. **Include edge cases in specs** (EXEC-004) - Aim for 20-30 documented edge cases minimum
8. **Allocate 30-40% timeline to testing** (EXEC-032) - AI testing takes longer than traditional QA
9. **Re-assess risks monthly for 90 days post-launch** (Risk integration) - Real users reveal hidden risks
10. **Perfect is enemy of shipped** (EXEC-021) - Balance quality with time-to-market

## 📁 File Information

- **Full JSON**: `/Users/franksellhausen/Desktop/pip deck clone/ai-pm-cards/execution-tactics-complete.json`
- **Summary Doc**: `/Users/franksellhausen/Desktop/pip deck clone/ai-pm-cards/EXECUTION-DECK-SUMMARY.md`
- **This Index**: `/Users/franksellhausen/Desktop/pip deck clone/ai-pm-cards/EXECUTION-CARD-INDEX.md`

## ✅ Quality Checklist

- [x] 53 cards total (50 new + 3 primers)
- [x] Valid JSON schema
- [x] 8 categories properly distributed
- [x] Difficulty levels: beginner (3), intermediate (38), advanced (12)
- [x] All cards have specific, actionable steps
- [x] Concrete numbers and thresholds included
- [x] Real-world examples and tools referenced
- [x] Related cards establish learning pathways
- [x] Integration with Strategy and Risk decks
- [x] Icons for visual recognition
- [x] "Monday morning test" - immediately applicable
