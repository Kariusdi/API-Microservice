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

queue = {}
global first
first = 1

@app.get('/queue/get')
def get():
    return queue

@app.post('/queue/create')
def create():
    if len(queue) != 0:
        person = "Person" + str(list(queue.keys())[len(queue) - 1] + 1)
        queue[list(queue.keys())[len(queue) - 1] + 1] = person
    else:
        person = "Person1"
        queue[1] = person
    return "Create successfully"

@app.delete('/queue/delete')
def delete():
    global first
    if len(queue) != 0:
        first = 1
    else :
        first += 1
    queue.pop(first, None)
    return "Delete successfully"