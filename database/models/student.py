from sqlalchemy import Column, String
from models.base import Base

class Student(Base):
    __tablename__ = 'students'
    id = Column(String, primary_key=True)