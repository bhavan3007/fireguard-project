import json
import os
from groq import Groq
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API key securely
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Initialize Groq client
client = Groq(api_key=GROQ_API_KEY)


def get_ai_fire_answer(question: str):
    """
    Get structured fire safety answer from Groq AI
    """

    prompt = f"""
You are a professional fire safety expert.

Answer ONLY this question:
{question}

Return STRICTLY in JSON format:

{{
  "purpose": "...",
  "steps": ["step1", "step2"],
  "warning": "...",
  "escalation": "..."
}}
"""

    try:
        chat_completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"}
        )

        response = chat_completion.choices[0].message.content

        return json.loads(response)

    except Exception as e:
        print("Groq API Error:", e)

        # Safe fallback response
        return {
            "purpose": "Emergency Fire Safety Protocol",
            "steps": [
                "Raise alarm immediately",
                "Evacuate using nearest exit",
                "Call fire emergency number 101"
            ],
            "warning": "Do not use elevators during fire.",
            "escalation": "Contact Fire Service: 101"
        }