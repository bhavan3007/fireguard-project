import re 
from rapidfuzz import fuzz
from loader import load_knowledge

knowledge = load_knowledge()

def normalize(text):
    text = text.lower()
    text = re.sub(r"[^a-z0-9\s]", "", text)
    return text.split()

def match_score(words, keywords):
    score = 0
    for word in words:
        for key in keywords:
            if fuzz.ratio(word, key) >= 75:
                score += 1
    return score

def find_answer(question):
    words = normalize(question)

    best_match = None
    best_score = 0

    for item in knowledge:
        score = match_score(words, item["keywords"])
        if score > best_score:
            best_score = score
            best_match = item

    if best_match and best_score >= 2:
        return best_match["answer"]

    return {
        "purpose": "Unsupported query",
        "steps": [
            "This system supports fire and safety guidance only."
        ],
        "warning": "Do not rely on this system for non-fire emergencies.",
        "escalation": "Contact emergency services if required."
    }
