from sqlalchemy import Column, Integer, ForeignKey, Numeric, UniqueConstraint, String
from models.base import Base

class Score(Base):
    __tablename__ = 'scores'
    id = Column(Integer, primary_key=True)
    student_id = Column(String, ForeignKey('students.id'))
    subject_id = Column(Integer, ForeignKey('subjects.id'))
    score = Column(Numeric(4,2), nullable=True)
    foreign_language_code = Column(String, ForeignKey('foreign_languages.code'), nullable=True)
    
    __table_args__ = (
        UniqueConstraint('student_id', 'subject_id', name='unique_score'),
    )