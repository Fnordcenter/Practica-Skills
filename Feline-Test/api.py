from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3
import os
import urllib.request
import urllib.error
import json

app = Flask(__name__)
# Enable CORS so the vanilla HTML file can fetch without issues if opened locally
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), 'cats-backend.db')

def get_db_connection():
    # Helper to enforce Dict-like rows returning
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/cats', methods=['GET'])
def get_cats():
    try:
        conn = get_db_connection()
        # Query joining cats, breeds, and aggregating their features
        query = """
        SELECT 
            c.id, 
            c.name, 
            c.age_months, 
            c.description, 
            b.name as breed,
            GROUP_CONCAT(f.feature_name) as features
        FROM cats c
        JOIN breeds b ON c.breed_id = b.id
        LEFT JOIN cat_features cf ON c.id = cf.cat_id
        LEFT JOIN features f ON cf.feature_id = f.id
        WHERE c.is_adopted = FALSE
        GROUP BY c.id;
        """
        cats = conn.execute(query).fetchall()
        conn.close()
        
        # Convert sqlite3.Row to dict
        cats_list = [dict(ix) for ix in cats]
        # Split grouped features back into lists
        for cat in cats_list:
            if cat['features']:
                cat['features'] = cat['features'].split(',')
            else:
                cat['features'] = []
                
        return jsonify(cats_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/fact', methods=['GET'])
def get_cat_fact():
    try:
        req = urllib.request.Request("https://catfact.ninja/fact", headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            data = response.read()
            # Decode the response and return it directly through Flask
            fact_json = json.loads(data.decode('utf-8'))
            return jsonify(fact_json), 200
    except Exception as e:
        return jsonify({'error': 'Failed to fetch cat fact from external API', 'details': str(e)}), 500

if __name__ == '__main__':
    # Running on 5000
    print("Starting Feline API Server on port 5000...")
    app.run(port=5000, debug=True)
