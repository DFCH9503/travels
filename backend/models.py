from sqlmodel import SQLModel, Field
from typing import Optional
from decimal import Decimal
from sqlalchemy import Column, DateTime, func

#Define models
class Hotel(SQLModel, table=True):
    __tablename__ = "hotels"

    hotel_id: int | None = Field(default=None, primary_key=True)
    name: str = Field(default=None)
    city_id: int = Field(default=None)
    address: str = Field(default=None)
    stars: int = Field(default=None, ge=1, le=5)
    description: str = Field(default=None)

# class Hotel(SQLModel, table=True):
#     __tablename__ = "hotels"
    
#     hotel_id: Optional[int] = Field(default=None, primary_key=True)
#     name: str = Field(max_length=150)
#     city_id: Optional[int] = Field(default=None, foreign_key="cities.city_id")
#     address: Optional[str] = Field(default=None, max_length=200)
#     stars: Optional[int] = Field(default=None, ge=1, le=5)  # Between 1 and 5
#     description: Optional[str] = Field(default=None)


# class HotelRooms(SQLModel, table=True):
#     room_id: int | None = Field(default=None, primary_key=True)
#     hotel_id: int
#     room_type: str
#     price_per_night: Decimal
#     available: bool = Field(default=True)


# class Airline(SQLModel, table=True):
#     airline_id: int | None = Field(default=None, primary_key=True)
#     name: str


# class Flight(SQLModel, table=True):
#     flight_id: int | None = Field(default=None, primary_key=True)
#     airline_id: int
#     original_city_id: int
#     destination_city_id: int
#     departure_time: Optional[str] = Field(default=None) 
#     arrival_time: Optional[str] = Field(
#         sa_column=Column(
#             DateTime,
#             default=func.now(),
#             onupdate=func.now()
#         )
#     )
#     price: Decimal
#     total_seats: int = Field(..., ge=0, le=200)
#     available_seats: int = Field(..., ge=0, le=total_seats)

# class City(SQLModel, table=True):
#     city_id: int | None = Field(default=None, primary_key=True)
#     name: str
#     department: str
#     country: str = Field(default='Colombia')





# from typing import Optional
# from sqlmodel import SQLModel, Field

# class Hotel(SQLModel, table=True):
#     __tablename__ = "hotels"
    
#     hotel_id: Optional[int] = Field(default=None, primary_key=True)
#     name: str = Field(max_length=150)
#     city_id: Optional[int] = Field(default=None, foreign_key="cities.city_id")
#     address: Optional[str] = Field(default=None, max_length=200)
#     stars: Optional[int] = Field(default=None, ge=1, le=5)  # Between 1 and 5
#     description: Optional[str] = Field(default=None)