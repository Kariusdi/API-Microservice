from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://frontend:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

queue = {}

@app.get('/queue/get')
def get():
    return queue

@app.post('/queue/create')
def create():
    person = "Person" + str(len(queue) + 1)
    queue[len(queue) + 1] = person
    return "Create successfully"

@app.delete('/queue/delete')
def delete():
    queue.pop(len(queue), None)
    return "Delete successfully"