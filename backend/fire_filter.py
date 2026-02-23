FIRE_KEYWORDS = [
    "fire", "burn", "smoke", "extinguisher",
    "hydrant", "hose", "gas", "alarm",
    "evacuate", "emergency", "rescue"
]

def is_fire_related(text):
    text = text.lower()
    for word in FIRE_KEYWORDS:
        if word in text:
            return True
    return False
