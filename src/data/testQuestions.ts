export type QuestionCategory =
  | "SELF_WORTH"
  | "INNER_INSECURITY"
  | "TRUST_DEFENSE"
  | "PERFECTIONISM"
  | "VALIDATION_NEED";

export type Question = {
  id: string;
  category: QuestionCategory;
  text: string;
};

export const TEST_QUESTIONS: Question[] = [
  // SELF WORTH
  {
    id: "q1",
    category: "SELF_WORTH",
    text: "Gyakran érzem, hogy nem vagyok elég jó."
  },
  {
    id: "q2",
    category: "SELF_WORTH",
    text: "Sokszor hasonlítom magam másokhoz negatívan."
  },

  // INNER INSECURITY
  {
    id: "q3",
    category: "INNER_INSECURITY",
    text: "Félek, hogy a kapcsolataim nem tartanak sokáig."
  },
  {
    id: "q4",
    category: "INNER_INSECURITY",
    text: "Nehéz biztonságban éreznem magam egy kapcsolatban."
  },

  // TRUST DEFENSE
  {
    id: "q5",
    category: "TRUST_DEFENSE",
    text: "Nehezen bízom meg másokban."
  },
  {
    id: "q6",
    category: "TRUST_DEFENSE",
    text: "Gyakran attól tartok, hogy mások kihasználnak."
  },

  // PERFECTIONISM
  {
    id: "q7",
    category: "PERFECTIONISM",
    text: "Túl magas elvárásaim vannak magammal szemben."
  },
  {
    id: "q8",
    category: "PERFECTIONISM",
    text: "Zavar, ha nem csinálok valamit tökéletesen."
  },

  // VALIDATION NEED
  {
    id: "q9",
    category: "VALIDATION_NEED",
    text: "Fontos számomra mások elismerése."
  },
  {
    id: "q10",
    category: "VALIDATION_NEED",
    text: "Rosszul esik, ha nem kapok visszajelzést."
  }
];