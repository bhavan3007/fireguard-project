import json

def load_knowledge():
    with open("data/knowledge.json", "r", encoding="utf-8") as f:
        return json.load(f)
