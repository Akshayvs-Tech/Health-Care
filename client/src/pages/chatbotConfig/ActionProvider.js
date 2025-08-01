class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  addMessageToState = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleUserMessage = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    let response = this.generateResponse(lowerMessage, userMessage);

    const message = this.createChatBotMessage(response);
    this.addMessageToState(message);
  };

  generateResponse = (lowerMessage, originalMessage) => {
    // Greetings
    if (
      this.matchesPattern(lowerMessage, [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
      ])
    ) {
      return `Hello! 👋 I'm your AI Health Assistant. I'm here to help you with any health-related questions you might have. Whether it's about symptoms, medications, treatments, or general wellness advice - just ask me anything!

How can I assist you with your health today?`;
    }

    // Symptoms - Comprehensive coverage
    if (
      this.matchesPattern(lowerMessage, [
        "fever",
        "temperature",
        "hot",
        "chills",
        "burning up",
      ])
    ) {
      return this.getFeverAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "headache",
        "head pain",
        "migraine",
        "head hurts",
        "head ache",
      ])
    ) {
      return this.getHeadacheAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "cough",
        "coughing",
        "throat",
        "sore throat",
        "scratchy throat",
      ])
    ) {
      return this.getCoughAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "cold",
        "runny nose",
        "sneezing",
        "congestion",
        "stuffy nose",
        "blocked nose",
      ])
    ) {
      return this.getColdAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "stomach",
        "nausea",
        "vomiting",
        "diarrhea",
        "abdominal",
        "belly",
        "tummy",
        "stomach pain",
        "upset stomach",
      ])
    ) {
      return this.getStomachAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "back pain",
        "backache",
        "spine",
        "lower back",
        "upper back",
        "back hurts",
      ])
    ) {
      return this.getBackPainAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "chest pain",
        "heart",
        "breathing",
        "shortness of breath",
        "chest hurts",
        "chest tight",
      ])
    ) {
      return this.getChestPainAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "rash",
        "skin",
        "itchy",
        "allergic",
        "hives",
        "eczema",
        "dry skin",
        "skin irritation",
      ])
    ) {
      return this.getSkinAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "dizzy",
        "dizziness",
        "lightheaded",
        "vertigo",
        "spinning",
        "balance",
      ])
    ) {
      return this.getDizzinessAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "tired",
        "fatigue",
        "exhausted",
        "weakness",
        "energy",
        "sleepy",
        "worn out",
      ])
    ) {
      return this.getFatigueAdvice();
    }

    // Pain-related
    if (
      this.matchesPattern(lowerMessage, [
        "joint pain",
        "arthritis",
        "knee pain",
        "shoulder pain",
        "hip pain",
        "joints hurt",
      ])
    ) {
      return this.getJointPainAdvice();
    }

    if (
      this.matchesPattern(lowerMessage, [
        "muscle pain",
        "sore muscles",
        "muscle ache",
        "cramps",
        "muscle strain",
      ])
    ) {
      return this.getMusclePainAdvice();
    }

    // Digestive issues
    if (
      this.matchesPattern(lowerMessage, [
        "constipation",
        "bloating",
        "gas",
        "indigestion",
        "heartburn",
        "acid reflux",
      ])
    ) {
      return this.getDigestiveAdvice();
    }

    // Sleep issues
    if (
      this.matchesPattern(lowerMessage, [
        "insomnia",
        "sleep",
        "cant sleep",
        "can't sleep",
        "sleepless",
        "sleep problems",
      ])
    ) {
      return this.getSleepAdvice();
    }

    // Mental health
    if (
      this.matchesPattern(lowerMessage, [
        "stress",
        "anxiety",
        "depression",
        "worried",
        "panic",
        "mental health",
        "anxious",
        "sad",
      ])
    ) {
      return this.getMentalHealthAdvice();
    }

    // Women's health
    if (
      this.matchesPattern(lowerMessage, [
        "period",
        "menstrual",
        "cramps",
        "pms",
        "menstruation",
        "womens health",
      ])
    ) {
      return this.getWomensHealthAdvice();
    }

    // Eye/Vision issues
    if (
      this.matchesPattern(lowerMessage, [
        "eye",
        "vision",
        "blurry",
        "eye pain",
        "dry eyes",
        "red eyes",
        "itchy eyes",
      ])
    ) {
      return this.getEyeAdvice();
    }

    // Ear issues
    if (
      this.matchesPattern(lowerMessage, [
        "ear",
        "hearing",
        "ear pain",
        "earache",
        "ear infection",
        "ringing ears",
      ])
    ) {
      return this.getEarAdvice();
    }

    // Medications
    if (
      this.matchesPattern(lowerMessage, [
        "medicine",
        "medication",
        "drug",
        "pill",
        "dosage",
        "side effects",
        "paracetamol",
        "ibuprofen",
        "aspirin",
      ])
    ) {
      return this.getMedicationAdvice(lowerMessage);
    }

    // Diet and nutrition
    if (
      this.matchesPattern(lowerMessage, [
        "diet",
        "nutrition",
        "weight loss",
        "healthy eating",
        "vitamins",
        "supplements",
      ])
    ) {
      return this.getNutritionAdvice();
    }

    // Exercise and fitness
    if (
      this.matchesPattern(lowerMessage, [
        "exercise",
        "workout",
        "fitness",
        "gym",
        "running",
        "walking",
        "sports",
      ])
    ) {
      return this.getExerciseAdvice();
    }

    // Allergies
    if (
      this.matchesPattern(lowerMessage, [
        "allergy",
        "allergies",
        "allergic reaction",
        "hay fever",
        "food allergy",
      ])
    ) {
      return this.getAllergyAdvice();
    }

    // Infections
    if (
      this.matchesPattern(lowerMessage, [
        "infection",
        "bacterial",
        "viral",
        "fungal",
        "uti",
        "urinary tract",
      ])
    ) {
      return this.getInfectionAdvice();
    }

    // Diabetes related
    if (
      this.matchesPattern(lowerMessage, [
        "diabetes",
        "blood sugar",
        "glucose",
        "insulin",
        "diabetic",
      ])
    ) {
      return this.getDiabetesAdvice();
    }

    // Blood pressure
    if (
      this.matchesPattern(lowerMessage, [
        "blood pressure",
        "hypertension",
        "high blood pressure",
        "low blood pressure",
      ])
    ) {
      return this.getBloodPressureAdvice();
    }

    // Pregnancy related
    if (
      this.matchesPattern(lowerMessage, [
        "pregnant",
        "pregnancy",
        "expecting",
        "prenatal",
        "morning sickness",
      ])
    ) {
      return this.getPregnancyAdvice();
    }

    // Child health
    if (
      this.matchesPattern(lowerMessage, [
        "child",
        "baby",
        "kid",
        "infant",
        "toddler",
        "pediatric",
      ])
    ) {
      return this.getChildHealthAdvice();
    }

    // Elderly health
    if (
      this.matchesPattern(lowerMessage, [
        "elderly",
        "senior",
        "old age",
        "aging",
        "geriatric",
      ])
    ) {
      return this.getElderlyHealthAdvice();
    }

    // Emergency situations
    if (
      this.matchesPattern(lowerMessage, [
        "emergency",
        "urgent",
        "serious",
        "hospital",
        "ambulance",
        "call 911",
        "help",
      ])
    ) {
      return this.getEmergencyAdvice();
    }

    // First aid
    if (
      this.matchesPattern(lowerMessage, [
        "first aid",
        "wound",
        "cut",
        "bleeding",
        "burn",
        "fracture",
        "sprain",
      ])
    ) {
      return this.getFirstAidAdvice();
    }

    // Preventive care
    if (
      this.matchesPattern(lowerMessage, [
        "prevention",
        "healthy",
        "wellness",
        "checkup",
        "screening",
      ])
    ) {
      return this.getPreventiveAdvice();
    }

    // Vaccinations
    if (
      this.matchesPattern(lowerMessage, [
        "vaccine",
        "vaccination",
        "immunization",
        "shot",
        "flu shot",
      ])
    ) {
      return this.getVaccinationAdvice();
    }

    // General health questions
    if (
      this.matchesPattern(lowerMessage, [
        "health",
        "healthy",
        "wellness",
        "wellbeing",
      ])
    ) {
      return this.getGeneralHealthAdvice();
    }

    // Thank you / Goodbye
    if (
      this.matchesPattern(lowerMessage, [
        "thank",
        "thanks",
        "bye",
        "goodbye",
        "see you",
      ])
    ) {
      return `You're welcome! 😊 I'm glad I could help. Remember:

• Always consult healthcare professionals for serious concerns
• Call emergency services for urgent situations  
• Take care of your physical and mental health
• Feel free to ask me anything anytime!

Stay healthy and take care! 👋`;
    }

    // Default intelligent response for any other question
    return this.getIntelligentResponse(originalMessage);
  };

  matchesPattern = (message, keywords) => {
    return keywords.some((keyword) => message.includes(keyword));
  };

  getIntelligentResponse = (userMessage) => {
    return `I understand you're asking about "${userMessage}". While I aim to help with all health-related questions, let me provide you with some general guidance:

🏥 **For your specific concern, I recommend:**
• Consulting with a healthcare professional for personalized advice
• Calling a medical helpline if you need immediate guidance
• Visiting a clinic or hospital if the symptoms are concerning

💡 **General health tips that might help:**
• Stay hydrated (8-10 glasses of water daily)
• Get adequate rest (7-9 hours of sleep)
• Maintain a balanced diet
• Exercise regularly (30 minutes daily)
• Manage stress effectively
• Practice good hygiene

🚨 **When to seek immediate care:**
• Severe or worsening symptoms
• Difficulty breathing
• Chest pain
• High fever (>39°C/102°F)
• Severe allergic reactions
• Any symptoms that worry you

📞 **Emergency contacts:**
• Emergency services: 911/999
• Poison control: Local poison control center
• Mental health crisis: 988 (US) or local crisis line

Is there a specific symptom or health topic you'd like me to help you with? I can provide detailed information about many health conditions and treatments.`;
  };

  // All your existing specific advice methods here (getFeverAdvice, getHeadacheAdvice, etc.)
  getFeverAdvice = () => {
    return `🤒 **Fever Management:**

**For adults (over 18):**
• Rest and stay hydrated with water, herbal tea, or clear broths
• Paracetamol: 500-1000mg every 4-6 hours (max 4g/day)
• Ibuprofen: 400mg every 6-8 hours with food
• Cool compress on forehead or take lukewarm bath
• Wear light, breathable clothing
• Avoid alcohol and caffeine

**Natural remedies:**
• Elderflower tea or willow bark tea
• Plenty of fluids to prevent dehydration
• Rest in a cool, well-ventilated room

**See a doctor immediately if:**
• Fever over 39°C (102°F) or lasts more than 3 days
• Severe headache with neck stiffness
• Difficulty breathing or chest pain
• Persistent vomiting or signs of dehydration
• Confusion or severe drowsiness
• Rash that doesn't fade under pressure

**For children:** Always consult a pediatrician for proper dosing and care.`;
  };

  // Add all your other specific advice methods here...
  // (I'll include a few more examples)

  getHeadacheAdvice = () => {
    return `🧠 **Headache Relief:**

**Immediate relief:**
• Rest in a dark, quiet room
• Apply cold or warm compress (try both to see what helps)
• Gentle neck, shoulder, and temple massage
• Stay hydrated - dehydration is a common trigger
• Paracetamol 500mg-1g or Ibuprofen 400mg

**Natural remedies:**
• Peppermint or lavender oil on temples
• Ginger tea for nausea-related headaches
• Magnesium supplements (consult doctor first)
• Practice deep breathing or meditation

**Prevention strategies:**
• Maintain regular sleep schedule (7-9 hours)
• Eat regular, balanced meals - don't skip
• Identify and avoid triggers (stress, certain foods, bright lights)
• Stay hydrated throughout the day
• Limit screen time and take regular breaks
• Manage stress through relaxation techniques

**See a doctor if:**
• Sudden, severe headache ("worst headache of your life")
• Headache with fever, neck stiffness, or rash
• Progressive worsening over days/weeks
• Changes in vision, speech, or coordination
• Headache after head injury
• New headache pattern in people over 50`;
  };

  getCoughAdvice = () => {
    return `😷 **Cough Treatment:**

**Home remedies:**
• Honey (1-2 teaspoons) - excellent natural cough suppressant (not for children under 1 year)
• Warm salt water gargle (1/2 teaspoon salt in warm water)
• Stay well-hydrated - warm liquids especially helpful
• Humidifier or steam inhalation (lean over hot water with towel)
• Elevate head while sleeping with extra pillows

**Types of cough:**
• **Dry cough:** Honey, throat lozenges, cough suppressants
• **Productive cough:** Stay hydrated, expectorants may help
• **Chronic cough:** Often requires medical evaluation

**Over-the-counter options:**
• Cough suppressants (Dextromethorphan) for dry cough
• Expectorants (Guaifenesin) for productive cough
• Throat lozenges or sprays for throat irritation

**See a doctor if:**
• Coughing up blood or pink/rust-colored mucus
• High fever (>38.5°C) with cough
• Severe breathing difficulties or wheezing
• Cough lasting more than 3 weeks
• Chest pain or significant weight loss
• Worsening symptoms after initial improvement`;
  };

  // Continue with all other methods...
  // For brevity, I'll show the pattern for a few more:

  getStomachAdvice = () => {
    return `🤢 **Stomach Issues Management:**

**For nausea/vomiting:**
• Small, frequent sips of clear fluids (water, clear broth)
• BRAT diet: Bananas, Rice, Applesauce, Toast
• Ginger tea or ginger supplements (very effective)
• Avoid dairy, fatty, spicy, or acidic foods
• Rest and avoid sudden movements
• Try ice chips if unable to keep fluids down

**For diarrhea:**
• Stay hydrated with ORS (oral rehydration solution)
• Continue BRAT diet, add plain crackers
• Probiotics may help restore gut bacteria
• Avoid dairy products temporarily
• Loperamide (Imodium) for severe cases (follow package directions)

**For constipation:**
• Increase fiber intake gradually (fruits, vegetables, whole grains)
• Drink more water (8-10 glasses daily)
• Regular physical activity
• Prunes or prune juice
• Consider fiber supplements

**Red flag symptoms - see doctor immediately:**
• Blood in stool or vomit
• Signs of severe dehydration (dizziness, dry mouth, no urination)
• High fever with abdominal pain
• Severe, persistent abdominal pain
• Inability to keep fluids down for 24+ hours`;
  };

  getMedicationAdvice = (message) => {
    if (message.includes("paracetamol") || message.includes("acetaminophen")) {
      return `💊 **Paracetamol (Acetaminophen) Information:**

**Uses:** Pain relief, fever reduction
**Adult dosage:** 500mg-1g every 4-6 hours, maximum 4g (4000mg) in 24 hours
**Can be taken:** With or without food

**Important safety:**
• ⚠️ Overdose can cause severe liver damage
• Check all medications for paracetamol content - many contain it
• Avoid alcohol while taking
• Safer option during pregnancy (consult doctor)

**Do not exceed daily maximum - liver damage can be irreversible**`;
    }

    if (message.includes("ibuprofen")) {
      return `💊 **Ibuprofen Information:**

**Uses:** Pain, inflammation, fever
**Adult dosage:** 200-400mg every 6-8 hours, maximum 1200mg in 24 hours
**Must take:** With food or milk to protect stomach

**Benefits:** Reduces inflammation, longer-lasting than paracetamol

**Important warnings:**
• Can cause stomach ulcers - always take with food
• May affect kidney function with long-term use
• Can increase blood pressure
• Avoid in last trimester of pregnancy

**Do not use if:** History of stomach ulcers, kidney disease, heart disease, taking blood thinners`;
    }

    return `💊 **General Medication Safety:**

**Before taking any medication:**
• Read all labels carefully
• Check expiration dates
• Be aware of allergies
• Consider drug interactions
• Follow prescribed dosages exactly

**Over-the-counter medications:**
• **Paracetamol**: Pain/fever (max 4g/day)
• **Ibuprofen**: Pain/inflammation (take with food)
• **Aspirin**: Pain/heart protection (adults only)
• **Antihistamines**: Allergies, itching

**Always consult pharmacist or doctor for specific medication questions, especially regarding interactions and dosing.**`;
  };

  // Add all other advice methods following the same pattern...
  // (getNutritionAdvice, getExerciseAdvice, etc.)
}

export default ActionProvider;
