/* Project schedule. This is the only file to edit when dates change: the Milestones page
   and the "Coming up" list on the home page are drawn from it, and statuses follow today's date.
   Dates are from the revised schedule in the kick-off deck (27 October 2026). */
window.AMCE_SCHEDULE = {
  rangeStart: "2026-10-01",
  rangeEnd: "2029-12-01",

  activities: [
    { wp: 2, title: "Design architecture, interface and guidelines for the AI-powered exercise framework", start: "2026-10-19", end: "2027-04-19" },
    { wp: 2, title: "Criteria and metadata specification", start: "2027-03-07", end: "2027-07-07" },
    { wp: 2, title: "Framework brainstorming workshop", start: "2027-04-09", end: "2027-04-11" },
    { wp: 2, title: "Experiment specifications", start: "2027-05-04", end: "2027-08-16" },

    { wp: 3, title: "Pre-knowledge assessment", start: "2027-09-05", end: "2028-02-23" },
    { wp: 3, title: "Recommendation AI system for course design", start: "2027-12-05", end: "2028-06-05" },
    { wp: 3, title: "AI course design validation protocol", start: "2028-06-03", end: "2028-11-08" },
    { wp: 3, title: "Workshop: AI recommendation system design", start: "2028-07-16", end: "2028-07-18" },

    { wp: 4, title: "Simulation-based exercises and laboratory models", start: "2028-08-05", end: "2029-03-17" },
    { wp: 4, title: "Validation and evaluation of the AI-based framework", start: "2028-12-02", end: "2029-05-07" },
    { wp: 4, title: "Joint event", start: "2029-04-06", end: "2029-04-08" },
    { wp: 4, title: "Testing and evaluation of the built exercises", start: "2029-04-26", end: "2029-09-13" },

    { wp: 5, title: "Project logo, visual identity and dissemination strategy", start: "2026-11-01", end: "2026-12-05" },
    { wp: 5, title: "Internet promotion: website, social networks, webinars and blogs", start: "2026-11-01", end: "2029-10-19" },
    { wp: 5, title: "Regular communication with target groups and stakeholders", start: "2026-12-01", end: "2029-10-19" },
    { wp: 5, title: "Promotional materials", start: "2027-07-03", end: "2029-10-31" },
    { wp: 5, title: "Writing and submitting a journal paper", start: "2027-09-06", end: "2029-09-30", endLabel: "Sep 2029" },
    { wp: 5, title: "Special session at the SAUM conference and combined promotional event", start: "2029-04-24", end: "2029-04-27" }
  ],

  milestones: [
    { date: "2026-10-27", wp: 1, title: "Kick-off meeting", note: "University of Maribor, FERI" },
    { date: "2026-12-05", wp: 5, title: "Project logo, visual identity and dissemination strategy" },
    { date: "2027-04-09", endDate: "2027-04-11", wp: 2, title: "Framework brainstorming workshop", note: "Slovakia" },
    { date: "2027-04-19", wp: 2, title: "Exercise framework architecture, interfaces and guidelines" },
    { date: "2027-07-07", wp: 2, title: "Criteria and metadata specification" },
    { date: "2027-08-16", wp: 2, title: "Experiment specifications" },
    { date: "2028-02-23", wp: 3, title: "Pre-knowledge assessment protocol" },
    { date: "2028-06-05", wp: 3, title: "Working AI recommendation system" },
    { date: "2028-07-16", endDate: "2028-07-18", wp: 3, title: "Workshop: AI recommendation system design", note: "North Macedonia" },
    { date: "2028-11-08", wp: 3, title: "AI course design validation protocol" },
    { date: "2029-03-17", wp: 4, title: "Simulation exercises and laboratory models built" },
    { date: "2029-04-06", endDate: "2029-04-08", wp: 4, title: "Joint event with student competition and webinar", note: "College of Polytechnics Jihlava, Czechia" },
    { date: "2029-04-24", endDate: "2029-04-27", wp: 5, title: "Special session at the SAUM conference and combined promotional event", note: "Serbia" },
    { date: "2029-05-07", wp: 4, title: "AI-based framework validated with students and teachers" },
    { date: "2029-09-13", wp: 4, title: "Exercises tested on-site, remotely and virtually" },
    { date: "2029-09-30", wp: 5, title: "Journal paper submitted", label: "Sep 2029" }
  ]
};
