from langdetect import detect

SUPPORTED_LANGUAGES = {
    "en", "ta", "hi", "te", "kn"
}

# Explicit language hints
LANGUAGE_HINTS = {
    "tamil": "ta",
    "தமிழ்": "ta",
    "hindi": "hi",
    "हिंदी": "hi",
    "telugu": "te",
    "తెలుగు": "te",
    "kannada": "kn",
    "ಕನ್ನಡ": "kn"
}

def detect_language(text):
    lower_text = text.lower()

    # 1️⃣ Explicit user intent override
    for hint, lang_code in LANGUAGE_HINTS.items():
        if hint in lower_text:
            return lang_code

    # 2️⃣ Auto-detect
    try:
        detected = detect(text)
    except:
        return "en"

    # 3️⃣ SAFETY CHECK (MOST IMPORTANT)
    if detected not in SUPPORTED_LANGUAGES:
        return "en"

    return detected
