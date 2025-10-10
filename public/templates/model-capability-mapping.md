# AI Model Capability Mapping Template

**Purpose:** Map AI model capabilities to product features and user needs
**Use When:** Scoping your first AI feature or evaluating build vs. buy decisions
**Time to Complete:** 30-45 minutes

---

## 1. User Need Definition

### Primary User Problem
<!-- What problem are users actually trying to solve? Be specific. -->



### Success Criteria
<!-- How will you know if this solves the problem? -->
- **User Outcome:**
- **Business Metric:**
- **Acceptable Performance:**


---

## 2. Required AI Capabilities

### Core Capabilities Needed
<!-- What must the AI be able to do? List specific capabilities, not technologies. -->

| Capability | Description | Priority (Must/Should/Nice) |
|------------|-------------|----------------------------|
| Example: Classify text intent | Determine if user input is a question, command, or statement | Must |
|  |  |  |
|  |  |  |
|  |  |  |

### Input/Output Specification

**Inputs the model will receive:**
- Format:
- Volume:
- Frequency:
- Example:

**Outputs the model must produce:**
- Format:
- Constraints:
- Example:

---

## 3. Performance Requirements

### Accuracy/Quality Thresholds

| Metric | Minimum Acceptable | Target | How Measured |
|--------|-------------------|--------|--------------|
| Example: Precision | 85% | 92% | Manual eval on 100 samples |
|  |  |  |  |
|  |  |  |  |

### Operational Requirements

- **Latency:** Response time must be < ___ ms
- **Throughput:** Must handle ___ requests/second
- **Availability:** Must be up ___% of the time
- **Cost per prediction:** Must be < $___ per request

---

## 4. Model Options Analysis

### Option 1: [Pre-trained API (e.g., OpenAI, Google)]

**Pros:**
-
-
-

**Cons:**
-
-

**Estimated Cost:** $___ /month
**Time to MVP:** ___ weeks
**Capability Match:** ___/10

---

### Option 2: [Fine-tuned Model]

**Pros:**
-
-

**Cons:**
-
-

**Estimated Cost:** $___ /month
**Time to MVP:** ___ weeks
**Capability Match:** ___/10

---

### Option 3: [Custom Model]

**Pros:**
-
-

**Cons:**
-
-

**Estimated Cost:** $___ /month
**Time to MVP:** ___ weeks
**Capability Match:** ___/10

---

## 5. Capability Gaps & Mitigations

### Identified Gaps
<!-- What capabilities are missing or underperform? -->

| Gap | Impact (High/Med/Low) | Mitigation Strategy |
|-----|----------------------|---------------------|
| Example: Can't handle domain jargon | High | Add custom vocabulary + fine-tuning |
|  |  |  |
|  |  |  |

---

## 6. Decision Matrix

### Weighted Scoring

| Criteria | Weight | Option 1 Score | Option 2 Score | Option 3 Score |
|----------|--------|----------------|----------------|----------------|
| **Capability Match** | 30% |  |  |  |
| **Time to Market** | 25% |  |  |  |
| **Total Cost (Year 1)** | 20% |  |  |  |
| **Operational Complexity** | 15% |  |  |  |
| **Vendor Lock-in Risk** | 10% |  |  |  |
| **TOTAL SCORE** | 100% | **___** | **___** | **___** |

**Scoring:** 1 = Poor, 3 = Acceptable, 5 = Excellent

---

## 7. Recommendation

### Selected Approach
<!-- Which option are you recommending? -->



### Rationale
<!-- Why is this the best choice given your constraints? -->



### Key Risks
1.
2.
3.

### Next Steps
- [ ]
- [ ]
- [ ]

---

**Template Version:** 1.0
**Last Updated:** 2025
**Source:** AI PM Cards (https://ai-pm-cards.vercel.app)
