from sqlmodel import create_engine, Session
from typing import Generator

#Define SQLModel and connection
url_connection = "mysql+pymysql://root@localhost:3306/travels_db"
engine = create_engine(url_connection, echo=True)


# Dependency to get DB session
def get_session() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session




# from sqlmodel import SQLModel, create_engine
# from sqlalchemy.orm import sessionmaker

# # Database configuration
# DATABASE_URL = "mysql+pymysql://root@localhost:3306/travels_db"

# # Create engine
# engine = create_engine(DATABASE_URL, echo=True)

# # Create session maker
# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# def create_db_and_tables():
#     """Create database tables"""
#     SQLModel.metadata.create_all(engine)

# def get_session():
#     """Dependency to get database session"""
#     with SessionLocal() as session:
#         yield session