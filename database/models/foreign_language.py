from sqlalchemy import Column, Integer, String
from models.base import Base

class ForeignLanguage(Base):
    __tablename__ = 'foreign_languages'
    id = Column(Integer, primary_key=True)
    code = Column(String, unique=True, nullable=False)
    name = Column(String, nullable=False)