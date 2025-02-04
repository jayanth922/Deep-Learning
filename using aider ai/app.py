from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///finance.db"
db = SQLAlchemy(app)

@app.route("/income", methods=["GET"])
def get_income():
    return jsonify({"message": "Income endpoint"})

@app.route("/expenses", methods=["GET"])
def get_expenses():
    return jsonify({"message": "Expenses endpoint"})

@app.route("/goals", methods=["GET"])
def get_goals():
    return jsonify({"message": "Goals endpoint"})

if __name__ == "__main__":
    app.run(debug=True)
