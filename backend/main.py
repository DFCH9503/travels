from fastapi import FastAPI
from sqlmodel import Field, Session, create_engine, select

from models import Hotel, SQLModel
from database import engine, get_session



app = FastAPI()

# Create tables
def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

    # Create tables on startup
@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def root():
    return {"message": "Hola DFCH9503"}

@app.get("/hotels/", response_model=list[Hotel])
def read_hotels():
    with Session(engine) as session:
        hotels = session.exec(select(Hotel)).all()
        return hotels
    

@app.post("/hotels/", response_model=list[Hotel])
def create_hotel(hotel: Hotel):
    with Session(engine) as session:
        session.add(hotel)
        session.commit()
        session.refresh(hotel)
        return hotel



# from fastapi import FastAPI, Depends
# from sqlmodel import Session, select
# from typing import List

# from database import get_session, create_db_and_tables
# from models import Hotel

# app = FastAPI(title="Hotel API", version="1.0.0")

# @app.on_event("startup")
# def on_startup():
#     create_db_and_tables()

# @app.get("/hotels", response_model=List[Hotel])
# def get_all_hotels(session: Session = Depends(get_session)):
#     """Get all hotels from the database"""
#     statement = select(Hotel)
#     hotels = session.exec(statement).all()
#     return hotels

# @app.get("/")
# def read_root():
#     return {"message": "Hotel API is running!"}