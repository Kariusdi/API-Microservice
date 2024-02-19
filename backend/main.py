from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["http://localhost:30330"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

queue = []
global first
first = 1

@app.get('/queue/get')
def get():
    return queue

@app.post('/queue/create')
def create():
    person = "Person" + str(len(queue) + 1)
    queue.append(person)
    return "Create successfully"

@app.delete('/queue/delete')
def delete():
    queue.pop(0)
    return "Delete successfully"