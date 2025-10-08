# Journey Paths Design Document

## Overview
Journey paths are curated sequences of 6-12 cards that guide users through common AI PM scenarios from start to finish.

## Path Design Principles

1. **Problem-First**: Each path starts with a user's problem or phase
2. **Logical Flow**: Cards build on each other in a natural progression
3. **Cross-Deck**: Paths mix Strategy, Risk, and Execution cards for holistic guidance
4. **Actionable**: Users can work through a path in 1-3 days and produce real artifacts
5. **Realistic Length**: 6-10 cards keeps paths focused and completable

---

## Proposed Journey Paths (15-20 Total)

### Strategy Paths (5 paths)

#### 1. **From Concept to Validated Strategy** (Existing)
**For**: PMs exploring if AI fits their product
**Duration**: 2-3 weeks
**Cards** (6):
- STRAT-002: Map AI Opportunity Canvas
- STRAT-001: Map Model Capabilities
- STRAT-012: Run a Model Feasibility Spike
- STRAT-015: Build vs. Buy vs. API Decision
- STRAT-008: Define AI Value Proposition
- EXEC-002: Define AI Success Metrics

#### 2. **Building Your First AI Business Case**
**For**: PMs needing to justify AI investment to executives
**Duration**: 1-2 weeks
**Cards** (7):
- STRAT-008: Define AI Value Proposition
- STRAT-011: Quantify AI Benefits with Metrics
- STRAT-007: AI Unit Economics Model
- STRAT-014: AI ROI Projection Model
- STRAT-003: AI Technical Debt Calculator
- RISK-001: AI Risk Categories Overview
- STRAT-009: AI Feature Pricing Strategy

#### 3. **AI Product Roadmap Planning**
**For**: PMs planning 6-12 month AI roadmap
**Duration**: 2-3 weeks
**Cards** (8):
- STRAT-017: AI Feature Prioritization
- STRAT-020: Minimum Viable AI Feature
- STRAT-018: AI Feature Sequencing
- STRAT-019: Crawl-Walk-Run AI Roadmap
- STRAT-023: AI Tech Debt Prioritization
- STRAT-024: Model Refresh Cadence
- STRAT-022: AI Feature Kill Criteria
- EXEC-039: Phased Rollout Planning

#### 4. **Choosing the Right AI Approach**
**For**: PMs deciding build vs. buy vs. API
**Duration**: 1-2 weeks
**Cards** (6):
- STRAT-001: Map Model Capabilities
- STRAT-002: Data Availability Assessment
- STRAT-012: Run a Model Feasibility Spike
- STRAT-015: Build vs. Buy vs. API Decision
- STRAT-006: Multi-Model Strategy Design
- STRAT-025: AI Platform vs. Feature Decision

#### 5. **Pricing Your AI Product**
**For**: PMs designing AI monetization strategy
**Duration**: 1 week
**Cards** (7):
- STRAT-007: AI Unit Economics Model
- STRAT-009: AI Feature Pricing Strategy
- STRAT-010: Freemium AI Strategy
- STRAT-011: Usage-Based vs. Seat-Based Pricing
- STRAT-013: Enterprise AI Packaging
- STRAT-016: AI Cost Containment Tactics
- STRAT-014: AI ROI Projection Model

---

### Risk Paths (4 paths)

#### 6. **Preventing AI Failures Before Launch**
**For**: PMs preparing to launch first AI feature
**Duration**: 2-3 weeks
**Cards** (8):
- RISK-001: AI Risk Categories Overview
- RISK-007: Bias Detection in Models
- RISK-011: Data Quality Validation
- RISK-019: Harmful Output Prevention
- RISK-023: Design Fallback Mechanisms
- RISK-042: Deployment Failure Prevention
- EXEC-034: AI A/B Testing Strategy
- EXEC-040: AI Monitoring Dashboard

#### 7. **Building Trust in AI Products**
**For**: PMs addressing user skepticism about AI
**Duration**: 1-2 weeks
**Cards** (7):
- RISK-020: Set User Expectations for AI
- RISK-021: AI Transparency Communication
- RISK-024: AI Error Communication
- RISK-027: Build User Trust in AI
- RISK-050: User Control Over AI
- RISK-022: Human-in-the-Loop Review
- EXEC-031: AI Explanation Interfaces

#### 8. **AI Compliance & Ethics Fundamentals**
**For**: PMs in regulated industries or enterprise
**Duration**: 1-2 weeks
**Cards** (8):
- RISK-002: Risk Assessment Framework
- RISK-028: Fairness Auditing Process
- RISK-033: Responsible AI Principles
- RISK-036: AI Regulation Landscape
- RISK-037: GDPR Compliance for AI
- RISK-040: Audit Trail Requirements
- RISK-041: Responsible AI Documentation
- EXEC-037: AI Fairness Testing

#### 9. **Fixing Underperforming AI**
**For**: PMs dealing with degraded or poor AI performance
**Duration**: 2-4 weeks
**Cards** (9):
- RISK-008: Model Performance Degradation
- RISK-004: Detect Model Drift
- RISK-003: Detect and Prevent Overfitting
- RISK-011: Data Quality Validation
- EXEC-046: Model Retraining Cycles
- EXEC-048: AI Performance Tuning
- EXEC-024: Loading & Latency UX
- STRAT-024: Model Refresh Cadence
- STRAT-022: AI Feature Kill Criteria

---

### Execution Paths (6 paths)

#### 10. **Scoping Your First AI Feature**
**For**: PMs writing specs for first AI feature
**Duration**: 1-2 weeks
**Cards** (8):
- EXEC-001: Write AI Product Specs
- EXEC-002: Define AI Success Metrics
- EXEC-003: Model Evaluation Rubric
- EXEC-004: AI Acceptance Criteria
- EXEC-005: Edge Case Documentation
- EXEC-006: AI Constraints & Requirements
- EXEC-009: Data Collection Planning
- EXEC-017: PM-ML Engineer Sprint Planning

#### 11. **From Model to Production**
**For**: PMs taking AI from prototype to launch
**Duration**: 4-6 weeks
**Cards** (10):
- EXEC-018: Experiment Tracking Setup
- EXEC-020: Establish Model Baseline
- EXEC-021: Model Iteration Loops
- EXEC-032: AI Testing Strategy
- EXEC-035: Shadow Mode Deployment
- EXEC-039: Phased Rollout Planning
- EXEC-040: AI Monitoring Dashboard
- EXEC-041: Log AI Predictions
- EXEC-044: Incident Response for AI
- EXEC-045: AI Feedback Collection

#### 12. **Launching AI Features Safely**
**For**: PMs preparing for production launch
**Duration**: 2-3 weeks
**Cards** (8):
- EXEC-035: Shadow Mode Deployment
- EXEC-034: AI A/B Testing Strategy
- EXEC-039: Phased Rollout Planning
- EXEC-040: AI Monitoring Dashboard
- EXEC-044: Incident Response for AI
- RISK-042: Deployment Failure Prevention
- RISK-023: Design Fallback Mechanisms
- EXEC-045: AI Feedback Collection

#### 13. **Building AI Data Pipelines**
**For**: PMs setting up data infrastructure
**Duration**: 3-4 weeks
**Cards** (9):
- EXEC-009: Data Collection Planning
- EXEC-010: Labeling Workflow Design
- EXEC-011: Active Learning Strategy
- EXEC-012: Data Versioning Setup
- EXEC-013: Synthetic Data Generation
- EXEC-014: Data Privacy in AI
- RISK-011: Data Quality Validation
- RISK-012: Data Privacy & Compliance
- RISK-016: Labeling Quality Assurance

#### 14. **Designing AI User Experiences**
**For**: PMs designing UX for AI features
**Duration**: 1-2 weeks
**Cards** (8):
- EXEC-024: Loading & Latency UX
- EXEC-025: AI Error State Design
- EXEC-026: Confidence Score Display
- EXEC-027: Progressive Disclosure for AI
- EXEC-028: AI Empty States
- EXEC-029: AI Feedback Mechanisms
- EXEC-031: AI Explanation Interfaces
- RISK-024: AI Error Communication

#### 15. **AI Testing & Quality Assurance**
**For**: PMs establishing AI testing practices
**Duration**: 2-3 weeks
**Cards** (8):
- EXEC-032: AI Testing Strategy
- EXEC-033: AI Edge Case Testing
- EXEC-034: AI A/B Testing Strategy
- EXEC-035: Shadow Mode Deployment
- EXEC-036: Red Team AI Systems
- EXEC-037: AI Fairness Testing
- EXEC-038: User Acceptance Testing for AI
- RISK-036: AI Regulation Landscape

---

### Cross-Cutting Paths (4 paths)

#### 16. **End-to-End: New AI Product Launch**
**For**: PMs launching new AI product from scratch
**Duration**: 8-12 weeks
**Cards** (12):
- STRAT-002: Map AI Opportunity Canvas
- STRAT-008: Define AI Value Proposition
- STRAT-001: Map Model Capabilities
- EXEC-002: Define AI Success Metrics
- EXEC-009: Data Collection Planning
- EXEC-001: Write AI Product Specs
- RISK-002: Risk Assessment Framework
- EXEC-018: Experiment Tracking Setup
- EXEC-020: Establish Model Baseline
- EXEC-039: Phased Rollout Planning
- EXEC-040: AI Monitoring Dashboard
- EXEC-046: Model Retraining Cycles

#### 17. **AI for Enterprise: Complete Guide**
**For**: Enterprise PMs navigating org complexity
**Duration**: 6-8 weeks
**Cards** (10):
- STRAT-005: Conduct AI Capability Assessment
- STRAT-007: Build AI Transformation Roadmap
- STRAT-013: Enterprise AI Packaging
- STRAT-014: AI ROI Projection Model
- RISK-036: AI Regulation Landscape
- RISK-037: GDPR Compliance for AI
- RISK-040: Audit Trail Requirements
- EXEC-006: AI Constraints & Requirements
- EXEC-039: Phased Rollout Planning
- EXEC-043: AI Adoption Metrics

#### 18. **Optimizing AI Costs & Performance**
**For**: PMs scaling AI products efficiently
**Duration**: 2-4 weeks
**Cards** (8):
- STRAT-007: AI Unit Economics Model
- STRAT-016: AI Cost Containment Tactics
- STRAT-004: Latency Budget Planning
- EXEC-047: AI Cost Optimization
- EXEC-048: AI Performance Tuning
- EXEC-046: Model Retraining Cycles
- STRAT-024: Model Refresh Cadence
- RISK-044: Cost Management for AI

#### 19. **AI Product Management Fundamentals** (Primer Path)
**For**: New AI PMs learning the basics
**Duration**: 1 week
**Cards** (10):
- RISK-001: AI Risk Categories Overview
- EXEC-051: AI Development Lifecycle
- EXEC-052: MLOps Basics
- EXEC-053: Common AI Metrics
- STRAT-001: Map Model Capabilities
- EXEC-002: Define AI Success Metrics
- RISK-020: Set User Expectations for AI
- EXEC-024: Loading & Latency UX
- EXEC-040: AI Monitoring Dashboard
- STRAT-017: AI Feature Prioritization

#### 20. **Responsible AI Program Setup**
**For**: PMs building ethical AI practices
**Duration**: 3-4 weeks
**Cards** (10):
- RISK-033: Responsible AI Principles
- RISK-028: Fairness Auditing Process
- RISK-029: Algorithmic Discrimination Prevention
- RISK-030: Unintended Consequences Assessment
- RISK-034: Ethical AI Decision Framework
- RISK-007: Bias Detection in Models
- EXEC-037: AI Fairness Testing
- RISK-041: Responsible AI Documentation
- RISK-019: Harmful Output Prevention
- RISK-027: Build User Trust in AI

---

## Path Metadata Structure

Each path should include:

```json
{
  "id": "path-id",
  "title": "Path Name",
  "description": "What this path helps you accomplish",
  "duration": "Expected time to complete",
  "difficulty": "beginner | intermediate | advanced",
  "targetAudience": "Who this path is for",
  "cardIds": ["CARD-001", "CARD-002", ...],
  "learningObjectives": [
    "What you'll learn",
    "What you'll be able to do"
  ],
  "prerequisites": ["What knowledge/access you need"],
  "deliverables": ["What artifacts you'll create"]
}
```

---

## Implementation Priority

**Phase 1** (MVP - Already have 1):
1. From Concept to Validated Strategy ✅

**Phase 2** (Core paths - 5 total):
2. Scoping Your First AI Feature
3. From Model to Production
4. Building Your First AI Business Case
5. Preventing AI Failures Before Launch
6. AI Product Roadmap Planning

**Phase 3** (Advanced paths - 10 total):
7-20. All remaining paths

---

## Validation Checklist

For each path:
- [ ] Cards flow logically from one to the next
- [ ] Path solves a real user problem/phase
- [ ] Completable in stated timeframe
- [ ] Produces tangible artifacts/decisions
- [ ] Mix of decks (not all from one deck)
- [ ] No dead-end cards (all cards lead somewhere)
- [ ] Appropriate difficulty level
- [ ] Clear entry/exit points

---

**Next Step**: Review and approve path structure, then implement in cardData.json
