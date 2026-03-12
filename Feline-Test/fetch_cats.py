"""
python-api-finder: Fetching Cat Data
This script compares native `urllib` (no dependencies) to the industry-standard `requests` package
for interacting with public APIs.
"""

import json
import urllib.request
import urllib.error

# API Endpoint: Random Cat Facts
API_URL = "https://catfact.ninja/fact"

def fetch_cat_fact_native() -> dict:
    """
    Uses Python's native urllib.
    Pros: Zero external dependencies required.
    Cons: Verbose error handling, strict byte decoding required.
    """
    print("[Native] Fetching data via urllib...")
    try:
        req = urllib.request.Request(API_URL, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = response.read()
            # Must manually decode byte strings to JSON
            return json.loads(data.decode('utf-8'))
    except urllib.error.URLError as e:
        print(f"[Native] Network error occurred: {e}")
        return {}
    except json.JSONDecodeError as e:
        print(f"[Native] Invalid JSON received: {e}")
        return {}

def run_comparison():
    print("--- Python API Finder Comparison ---\n")
    
    # 1. Standard Library (Native) Method
    native_data = fetch_cat_fact_native()
    if native_data:
        print(f"[Native] Fact Output: {native_data.get('fact', 'No fact found')}\n")

    print("""
[Third-Party Alternative - 'requests']
If this project scales, it is highly recommended to run:
    pip install requests
    
Usage would simplify to:
    import requests
    response = requests.get(API_URL).json()
    """)

if __name__ == "__main__":
    run_comparison()
