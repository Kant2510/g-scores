import pandas as pd
from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
from sqlalchemy.orm import sessionmaker
from models.student import Student
from models.score import Score
from models.subject import Subject
from models.foreign_language import ForeignLanguage
# Load environment variables
load_dotenv()

# Kết nối DB
engine = create_engine(os.getenv('POSGRESQL_URL'), echo=True)
Session = sessionmaker(bind=engine)
session = Session()

# Load CSV
df = pd.read_csv('data/data.csv')

# Subjects
vi2en = {
    'toan': 'math',
    'vat_li': 'physics',
    'hoa_hoc': 'chemistry',
    'sinh_hoc': 'biology',
    'ngu_van': 'literature',
    'dia_li': 'geography',
    'lich_su': 'history',
    'gdcd': 'civic_education',
    'ngoai_ngu': 'foreign'
}
en2vi = {
    'math': 'toan',
    'physics': 'vat_li',
    'chemistry': 'hoa_hoc',
    'biology': 'sinh_hoc',
    'literature': 'ngu_van',
    'geography': 'dia_li',
    'history': 'lich_su',
    'civic_education': 'gdcd',
    'foreign': 'ngoai_ngu'
}
subjects = ['math', 'physics', 'chemistry', 'biology', 'literature', 'geography', 'history', 'civic_education', 'foreign']
subject_map = {}
def create_subjects():
    for name in subjects:
        subj = Subject(name=name)
        session.add(subj)
        session.flush()
        subject_map[name] = subj.id
    session.commit()

# Khởi tạo ngôn ngữ nếu có
foreign_ids = df['ma_ngoai_ngu'].dropna().unique()
foreign_ids = sorted(foreign_ids)
code2name = {
    'N1': 'English',
    'N2': 'Russian',
    'N3': 'French',
    'N4': 'Chinese',
    'N5': 'German',
    'N6': 'Japanese',
    'N7': 'Korean',
}
def create_foreign_languages():
    for i in range(len(foreign_ids)):
        fid = foreign_ids[i]
        lang = ForeignLanguage(id=i, code=fid, name=code2name.get(fid, 'Unknown'))
        session.merge(lang)
    session.commit()

# Tạo học sinh & điểm
def create_students_and_scores():
    for _, row in df.iterrows():
        # Preprocess student ID
        row['sbd'] = str(row['sbd']).strip()
        if len(row['sbd']) < 8:
            row['sbd'] = row['sbd'].zfill(8)
        student = Student(id=row['sbd'])
        session.merge(student)
        session.flush()

        for subject in subjects:
            score = Score(
                student_id=student.id,
                subject_id=subject_map[subject],
                score=row[en2vi[subject]],
                foreign_language_code=row['ma_ngoai_ngu'] if subject == 'foreign' and pd.notna(row['ma_ngoai_ngu']) else None
            )
            session.add(score)
    session.commit()
def seed():
    create_subjects()
    create_foreign_languages()
    create_students_and_scores()
    print("✅ Seeded successfully.")
