import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hello! 👋 I'm your comprehensive AI Health Assistant. 

I can help you with virtually any health question including:
🩺 **Symptoms & Conditions** - Any symptom you're experiencing
💊 **Medications** - Information, dosages, interactions, side effects  
🏥 **Medical Advice** - When to see a doctor, treatment options
🩹 **First Aid** - Emergency care guidance
🧠 **Mental Health** - Stress, anxiety, depression support
👶 **All Ages** - Child, adult, and elderly health
👩 **Women's Health** - Pregnancy, menstrual health
💪 **Fitness & Nutrition** - Exercise, diet, wellness
🔬 **Chronic Conditions** - Diabetes, hypertension, arthritis
🚨 **Emergency Guidance** - When to call 911, urgent care

Just ask me anything about your health - I'm designed to provide helpful information on any medical topic! What would you like to know?`
    ),
  ],
  botName: "HealthBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    chatButton: {
      backgroundColor: "#3b82f6",
    },
  },
};

export default config;
