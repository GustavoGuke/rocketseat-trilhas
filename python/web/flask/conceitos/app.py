from flask import Flask, request, jsonify
from models.task import Task

app = Flask(__name__)

tasks = []
task_id_control = 1
@app.route('/tasks', methods=['POST'])
def create_task():
  global task_id_control
  data = request.get_json()
  new_task = Task(id=task_id_control, title=data['title'], description=data.get('description', ""))
  task_id_control += 1
  tasks.append(new_task)
  print(tasks)
  return jsonify({"message": "Task created successfully"})

@app.route('/tasks', methods=['GET'])
def get_tasks():
  task_list = [task.to_dict() for task in tasks]
  output = {"tasks": task_list, "count": len(task_list)}
  return jsonify(output)


@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
  for task in tasks:
    if task.id == task_id:
      return jsonify(task.to_dict())
  return jsonify({"message": "Task not found"}), 404


@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
  data = request.get_json()
  for task in tasks:
    if task.id == task_id:
      task.title = data.get('title', task.title)
      task.description = data.get('description', task.description)
      return jsonify({"message": "Task updated successfully"})
  return jsonify({"message": "Task not found"}), 404

@app.route('/tasks/<int:task_id>', methods=['PATCH'])
def done_task(task_id):
  #data = request.get_json()
  #print(data)
  for task in tasks:
    if task.id == task_id:
      task.completed = True
      return jsonify({"message": "Task done "})
  return jsonify({"message": "Task not found"}), 404

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
  task = None
  for t in tasks:
    if t.id == task_id:
      task = t
      break
  if not task:
    return jsonify({"message": "Task not found"}), 404
  tasks.remove(task)
  return jsonify({"message": "Task deleted successfully"}), 200
 
 
if __name__ == "__main__":
  app.run(host='localhost', port=8080, debug=True)