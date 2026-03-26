# Final Prototype Evaluation — Interview / Think-Aloud Guide

Aligned with `Final_Evaluation_Survey.md` so **interview** data can sit in the same **Final Evaluation** narrative as your survey. Budget **10–15 minutes** per session (extend to **~20 minutes** if you run a fuller think-aloud).

## When to use this

- Participants either watch a **~5 minute** screen recording or **explore the live demo for ~5 minutes** (match what you promised in your plan).
- The session can be **retrospective only** (questions after they finish), or **semi-structured + short think-aloud** (talk while clicking).

## Opening (~1–2 minutes)

1. Thank them; explain this is a **course project**, **anonymous**, for the assignment and design improvement only.  
2. Ask permission to **audio record** and/or **record the session**; if they decline, take notes only.  
3. Share links:  
   - Live demo (your deployed URL), and/or  
   - Video link (if video replaces hands-on use).  
4. You may read aloud:  
   > “I’ll ask you to look at a student-side feedback prototype for AP-style practice. There are no right or wrong answers—I’m testing the design, not you.”

## Section 1 — Background (maps to survey items 1–2)

**1. AP experience (survey item 1)**

- Are you currently taking AP courses, or have you taken them before? Which subjects?

**2. Confidence reading assignment / practice feedback (survey item 2, scale 1–7)**

- When you read **assignment, quiz, or progress-check feedback pages**, how well do you usually understand them?  
- Please give a **1 to 7** rating: **1 = not confident at all**, **7 = very confident.** (Record the number as `pre_feedback_confidence`.)

## Section 2 — Task + observation (~5–7 minutes)

Pick one intensity:

### Option A — Light think-aloud (recommended, time-efficient)

Ask them to **share screen**, open the prototype, then say:

> “For the **next 2–3 minutes**, walk through **overview → rubric breakdown → Evidence if you need it → Practice**. **Think aloud**: what you’re looking for, where you hesitate, what feels clear.”

**What to note (keywords; avoid interrupting)**

- Can they find **why points were lost**, **how that ties to their answer**, and **what to practice next**?  
- Any hesitation moving from **explanation** to the **practice pack / queue**.

### Option B — Retrospective only (after they watched the video)

Ask:

- “If this were your score page, **where would you click first**? Why?”  
- “**Where** does the interface tell you **why** you lost points?”  
- “What do you think the **practice / queue** section is asking you to do?”

## Section 3 — Structured agreement (survey items 3–9, verbal 1–7)

Read each **English prompt** below; ask for a **1–7** rating. Optionally follow with **“Why that number?”** and capture short, informative quotes.

| Field name (for your spreadsheet) | Prompt (same as survey) |
| --- | --- |
| `q1_understand_why` | I can understand why points were lost. |
| `q2_identify_where` | I can identify where in my response the issue occurred. |
| `q3_know_what_to_practice` | I know what to practice next after seeing this feedback. |
| `q4_explanation_to_action_clear` | The transition from explanation to action is clear. |
| `q5_independent_improvement` | This prototype would help me improve more independently. |
| `q6_use_again` | I would use this kind of feedback page again. |
| `q7_overall_useful` | Overall, this feedback experience is useful for improvement after receiving AP-style feedback. |

If time is short, prioritize **q1, q3, q4, q7** and cover the rest through open-ended questions.

## Section 4 — Open-ended (survey items 10–13)

1. What was the **most useful** part of the prototype, and **why**? (`useful_part`)  
2. What was **confusing or less useful**? (`confusing_part`)  
3. What feels **missing** from this feedback experience? (`missing_part`)  
4. If you could change **one thing**, what would it be? (`one_change`)

## Section 5 — Improvement confidence (survey item 14)

- After seeing this prototype, how confident are you that you would know **how to improve next time** on a similar assignment? **1–7** (`post_improvement_confidence`)

## Closing (~30 seconds)

- Thank them again; optionally ask if they are willing to leave **contact info** for follow-up (only if your course ethics allow it).

---

## Recording and coding

**One row per interview** (can merge with survey rows in a master sheet):

`participant_id, method_interview, date, ap_experience, pre_feedback_confidence, q1..q7, post_improvement_confidence, useful_part, confusing_part, missing_part, one_change, thinkaloud_notes`

**Thematic codes** (for the Results write-up): clarity of explanations, anchored evidence, practice / next steps, navigation and terminology, missing information, motivation and willingness to use again.

## Combining with a small survey sample (e.g. n = 3)

- In **Results**, use subsections: **Survey (n = …)** and **Interview (n = …)** with short summaries each.  
- In **Limitations**, state small sample, formative goals, no claim to all AP students.  
- In **Discussion**, note whether **survey and interview findings point the same way** (e.g. both flag the explanation → practice transition).
