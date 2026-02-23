import json
import os

def load_knowledge():
    # Get backend folder path
    backend_dir = os.path.dirname(__file__)

    # Go up one level → project root
    project_root = os.path.dirname(backend_dir)

    # Build correct path to data folder
    file_path = os.path.join(project_root, "data", "knowledge.json")

    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)