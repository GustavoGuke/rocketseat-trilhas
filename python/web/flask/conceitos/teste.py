import pytest
import requests


# crud
BASE_URL = "http://localhost:8080"
tasks = []

def test_create_task():
    data = {
        "title": "Test Task",
        "description": "This is a test task"
    }
    response = requests.post(f"{BASE_URL}/tasks", json=data)
    assert response.status_code == 200