export const mockResponses = {
  "What's driving churn?": {
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: "Three themes account for ~78% of exit survey mentions across 47 feedback items in the last 90 days: " },
          { text: "onboarding complexity", bold: true },
          { text: ", " },
          { text: "missing integrations", bold: true },
          { text: ", and " },
          { text: "performance at scale", bold: true },
          { text: "." },
        ],
      },
      {
        type: 'bullets',
        items: [
          {
            segments: [
              { text: "Brightwave", citationId: "c1" },
              { text: " and " },
              { text: "Cascade AI", citationId: "c3" },
              { text: " both cited setup time as the primary reason for not renewing. Onboarding complexity hits enterprise accounts hardest, typically during the first 30 days." },
            ],
          },
          {
            segments: [
              { text: "Fieldlens", citationId: "c2" },
              { text: " left specifically over the missing Salesforce sync — a pattern repeated across 6 other mid-market churns this quarter." },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: "How this maps to ARR risk" }],
        bold: true,
      },
      {
        type: 'paragraph',
        segments: [
          { text: "All three " },
          { text: "Brightwave", citationId: "c1" },
          { text: ", " },
          { text: "Fieldlens", citationId: "c2" },
          { text: ", and " },
          { text: "Cascade AI", citationId: "c3" },
          { text: " were in the $50–200K ARR range. Collectively that's $340K churned this quarter tied to preventable product gaps." },
        ],
      },
      {
        type: 'blockquote',
        text: "We spent three weeks just trying to get our team configured. By the time we were ready, leadership had already moved on to another tool.",
        citationId: "c1",
      },
    ],
    citations: {
      c1: { id: "c1", customer: "Brightwave", tier: "Enterprise", category: "Onboarding", feedback: "Setup too complex for large teams", quote: "We spent three weeks just trying to get our team configured. By the time we were ready, leadership had already moved on to another tool.", source: "Exit survey · Jan 2026", color: "#fef3c7", accent: "#d97706" },
      c2: { id: "c2", customer: "Fieldlens", tier: "Mid-market", category: "Integrations", feedback: "No native Salesforce sync", quote: "Without a Salesforce integration, my reps are doing double data entry. That's a dealbreaker at our scale.", source: "Churn interview · Feb 2026", color: "#fee2e2", accent: "#dc2626" },
      c3: { id: "c3", customer: "Cascade AI", tier: "Growth", category: "Performance", feedback: "Board lag at 200+ items", quote: "Once we hit 200 cards on a board it became unusable. 4–5 seconds per action. We needed something faster.", source: "Support ticket #8821 · Dec 2025", color: "#ede9fe", accent: "#7c3aed" },
    },
  },

  "Which features have the most unmet demand?": {
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: "63 open requests across 28 accounts. " },
          { text: "AI summarization", bold: true },
          { text: ", " },
          { text: "granular permissions", bold: true },
          { text: ", and " },
          { text: "offline mode", bold: true },
          { text: " dominate — and are correlated with lower NPS in enterprise and mid-market segments." },
        ],
      },
      {
        type: 'bullets',
        items: [
          {
            segments: [
              { text: "Apex Systems", citationId: "c4" },
              { text: " and " },
              { text: "Orion Health", citationId: "c5" },
              { text: " both flagged AI features and permissions as blockers to company-wide rollout. These are linked requests — better AI needs scoped visibility." },
            ],
          },
          {
            segments: [
              { text: "Tidal Commerce", citationId: "c6" },
              { text: " represents a broader offline use case affecting field-heavy teams. At least 8 accounts have flagged the same gap in the last 60 days." },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: "How these tie back to roadmap" }],
        bold: true,
      },
      {
        type: 'paragraph',
        segments: [
          { text: "The AI summarization request from " },
          { text: "Apex Systems", citationId: "c4" },
          { text: " and permissions gap flagged by " },
          { text: "Orion Health", citationId: "c5" },
          { text: " both map to Q3 initiative scope. Prioritizing these two together could unblock expansion across 11 enterprise accounts." },
        ],
      },
      {
        type: 'blockquote',
        text: "If I could just ask it to summarize a sprint retro, that alone would justify the cost for my whole org.",
        citationId: "c4",
      },
    ],
    citations: {
      c4: { id: "c4", customer: "Apex Systems", tier: "Enterprise", category: "AI Features", feedback: "AI summarization of boards and retros", quote: "If I could just ask it to summarize a sprint retro, that alone would justify the cost for my whole org.", source: "Feature request · Feb 2026", color: "#d1fae5", accent: "#059669" },
      c5: { id: "c5", customer: "Orion Health", tier: "Enterprise", category: "Permissions", feedback: "Role-based content visibility", quote: "We can't roll this out company-wide until we can control who sees sensitive patient-adjacent boards.", source: "Sales call notes · Jan 2026", color: "#dbeafe", accent: "#2563eb" },
      c6: { id: "c6", customer: "Tidal Commerce", tier: "Mid-market", category: "Offline Mode", feedback: "No offline or low-bandwidth support", quote: "Half my team is in the field with spotty wifi. No offline mode means Miro is a no-go for half our use cases.", source: "NPS survey · Mar 2026", color: "#fce7f3", accent: "#db2777" },
    },
  },

  "Where are users hitting the most friction?": {
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: "Session data and support tickets converge on three friction zones: " },
          { text: "first-time template setup", bold: true },
          { text: ", " },
          { text: "real-time sync conflicts", bold: true },
          { text: ", and " },
          { text: "export formatting", bold: true },
          { text: ". These have the highest drop-off and repeat-contact rates." },
        ],
      },
      {
        type: 'bullets',
        items: [
          {
            segments: [
              { text: "Dune Analytics", citationId: "c7" },
              { text: " and " },
              { text: "Helix Studio", citationId: "c8" },
              { text: " both represent new-user friction — onboarding drop-off in the first session is 34% higher than last quarter." },
            ],
          },
          {
            segments: [
              { text: "Northgate Capital", citationId: "c9" },
              { text: " highlights a recurring export issue affecting executive-facing workflows. This shows up in 19 support tickets this quarter alone." },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: "Where to focus first" }],
        bold: true,
      },
      {
        type: 'paragraph',
        segments: [
          { text: "The friction reported by " },
          { text: "Helix Studio", citationId: "c8" },
          { text: " during live collaboration directly erodes the core value prop. Fixing real-time sync reliability would have the highest impact on retention across all segments, especially " },
          { text: "Northgate Capital", citationId: "c9" },
          { text: "'s export concerns which compound in high-stakes moments." },
        ],
      },
      {
        type: 'blockquote',
        text: "Our standups became chaos — cards moving around, edits disappearing. We reverted to Figma for anything real-time.",
        citationId: "c8",
      },
    ],
    citations: {
      c7: { id: "c7", customer: "Dune Analytics", tier: "Growth", category: "Onboarding", feedback: "Templates confusing for first-timers", quote: "I literally spent 20 minutes trying to figure out where to start. The template library is overwhelming with no guidance.", source: "Usability test · Feb 2026", color: "#fef3c7", accent: "#d97706" },
      c8: { id: "c8", customer: "Helix Studio", tier: "SMB", category: "Collaboration", feedback: "Sync conflicts when 5+ people are live", quote: "Our standups became chaos — cards moving around, edits disappearing. We reverted to Figma for anything real-time.", source: "Support ticket #9134 · Jan 2026", color: "#fee2e2", accent: "#dc2626" },
      c9: { id: "c9", customer: "Northgate Capital", tier: "Enterprise", category: "Export", feedback: "PDF exports lose formatting", quote: "Every export looks different from the board. We have to manually fix decks before sharing with the C-suite. It's embarrassing.", source: "QBR feedback · Mar 2026", color: "#ede9fe", accent: "#7c3aed" },
    },
  },

  "What do our top accounts have in common?": {
    blocks: [
      {
        type: 'paragraph',
        segments: [
          { text: "Top 10% of accounts by ARR share three patterns: " },
          { text: "cross-functional adoption", bold: true },
          { text: " (3+ teams on the same workspace), " },
          { text: "weekly active usage", bold: true },
          { text: " above 4 sessions per user, and a documented " },
          { text: "executive sponsor", bold: true },
          { text: " at onboarding." },
        ],
      },
      {
        type: 'bullets',
        items: [
          {
            segments: [
              { text: "Lumen Ventures", citationId: "c10" },
              { text: " and " },
              { text: "Skyline Health", citationId: "c11" },
              { text: " both exhibit all three patterns. Accounts with an exec sponsor at onboarding are 3x less likely to downgrade within 12 months." },
            ],
          },
          {
            segments: [
              { text: "Monarch Retail", citationId: "c12" },
              { text: " shows that async-first adoption can replace recurring meetings, which correlates with higher daily active usage and stronger renewal intent." },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: "What this means for expansion" }],
        bold: true,
      },
      {
        type: 'paragraph',
        segments: [
          { text: "The pattern seen in " },
          { text: "Lumen Ventures", citationId: "c10" },
          { text: ", " },
          { text: "Skyline Health", citationId: "c11" },
          { text: ", and " },
          { text: "Monarch Retail", citationId: "c12" },
          { text: " suggests that land-and-expand motions should prioritize exec sponsorship and cross-team onboarding over seat count. Quality of adoption predicts ARR growth better than initial deal size." },
        ],
      },
      {
        type: 'blockquote',
        text: "Miro became the one place where product, design, and eng could see the same picture. That's rare — and it's why we expanded.",
        citationId: "c10",
      },
    ],
    citations: {
      c10: { id: "c10", customer: "Lumen Ventures", tier: "Enterprise", category: "Adoption", feedback: "Cross-functional teams all on same workspace", quote: "Miro became the one place where product, design, and eng could see the same picture. That's rare — and it's why we expanded.", source: "Expansion interview · Feb 2026", color: "#d1fae5", accent: "#059669" },
      c11: { id: "c11", customer: "Skyline Health", tier: "Enterprise", category: "Exec Sponsorship", feedback: "CPO champions Miro in all-hands", quote: "Our CPO uses it in every all-hands. When leadership models the behavior, adoption takes care of itself.", source: "Customer story · Jan 2026", color: "#dbeafe", accent: "#2563eb" },
      c12: { id: "c12", customer: "Monarch Retail", tier: "Mid-market", category: "Usage Frequency", feedback: "Async collaboration replacing meetings", quote: "We cut our weekly sync meetings in half because the board already has everything. People actually read it.", source: "NPS deep-dive · Mar 2026", color: "#fce7f3", accent: "#db2777" },
    },
  },
}

export const fallbackResponse = {
  blocks: [
    {
      type: 'paragraph',
      segments: [{ text: "I found relevant signals across recent feedback. Here are the most cited items related to your query." }],
    },
    {
      type: 'bullets',
      items: [
        {
          segments: [
            { text: "Brightwave", citationId: "fb1" },
            { text: " flagged reporting gaps as a top concern heading into renewal — analytics visibility is a recurring theme in enterprise accounts." },
          ],
        },
        {
          segments: [
            { text: "Orion Health", citationId: "fb2" },
            { text: " escalated over support SLAs during a live workshop incident. Premium support tier is missing from the current offering." },
          ],
        },
      ],
    },
    {
      type: 'blockquote',
      text: "We don't have a clear view of how our teams are using the tool. Usage analytics would help us justify renewal.",
      citationId: "fb1",
    },
  ],
  citations: {
    fb1: { id: "fb1", customer: "Brightwave", tier: "Enterprise", category: "Analytics", feedback: "Needs better reporting and usage analytics", quote: "We don't have a clear view of how our teams are using the tool. Usage analytics would help us justify renewal.", source: "QBR notes · Feb 2026", color: "#fef3c7", accent: "#d97706" },
    fb2: { id: "fb2", customer: "Orion Health", tier: "Enterprise", category: "Support", feedback: "Response times too slow for enterprise SLA", quote: "When something breaks during a live workshop, 4-hour response times aren't acceptable. We need premium support.", source: "Support escalation · Jan 2026", color: "#ede9fe", accent: "#7c3aed" },
  },
}
