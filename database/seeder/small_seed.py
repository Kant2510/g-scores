import pandas as pd
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
from models.subject import Subject
from models.foreign_language import ForeignLanguage
# Load environment variables
load_dotenv()

# Subjects
en2vi = {
    'math': 'toan',
    'physics': 'vat_li',
    'chemistry': 'hoa_hoc',
    'biology': 'sinh_hoc',
    'literature': 'ngu_van',
    'geography': 'dia_li',
    'history': 'lich_su',
    'civic_education': 'gdcd',
    'foreign_language': 'ngoai_ngu'
}
subjects = ['math', 'physics', 'chemistry', 'biology', 'literature', 'geography', 'history', 'civic_education', 'foreign_language']
subject_map = {}
def create_subjects(session):
    for name in subjects:
        subj = Subject(name=name)
        session.add(subj)
        session.flush()
        subj = session.query(Subject).filter_by(name=name).first()
        subject_map[name] = subj.id
    session.commit()

# Foreign Languages
code2name = {
    'N1': 'English',
    'N2': 'Russian',
    'N3': 'French',
    'N4': 'Chinese',
    'N5': 'German',
    'N6': 'Japanese',
    'N7': 'Korean',
}
def create_foreign_languages(session, df):
    foreign_ids = df['ma_ngoai_ngu'].dropna().unique()
    foreign_ids = sorted(foreign_ids)

    for i in range(len(foreign_ids)):
        fid = foreign_ids[i]
        lang = ForeignLanguage(code=fid, name=code2name.get(fid, 'Unknown'))
        session.add(lang)
        session.flush()
    session.commit()

def small_seed(engine, path):
    df = pd.read_csv(path)
    Session = sessionmaker(bind=engine)
    session = Session()
    create_subjects(session)
    print("✅ Seeded Subjects successfully.")
    create_foreign_languages(session, df)
    print("✅ Seeded Foreign Languages successfully.")
    # create_students_and_scores_bulk(df)
