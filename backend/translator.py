from deep_translator import GoogleTranslator

def to_english(text, lang):
    if lang == "en":
        return text
    return GoogleTranslator(source=lang, target="en").translate(text)

def from_english(response, lang):
    if lang == "en":
        return response

    return {
        "purpose": GoogleTranslator(source="en", target=lang).translate(response["purpose"]),
        "steps": [
            GoogleTranslator(source="en", target=lang).translate(step)
            for step in response["steps"]
        ],
        "warning": GoogleTranslator(source="en", target=lang).translate(response["warning"]),
        "escalation": GoogleTranslator(source="en", target=lang).translate(response["escalation"])
    }
