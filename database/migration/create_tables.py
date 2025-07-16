from dotenv import load_dotenv
from models.base import Base
from models.subject import Subject
from models.foreign_language import ForeignLanguage
from models.student import Student
from models.score import Score
# Load environment variables
load_dotenv()

def migrate(engine):
	print("📦 Tables to be created:", Base.metadata.tables.keys())
	Base.metadata.drop_all(engine)  # Drop all tables first
	print("✅ Tables dropped.")
	Base.metadata.create_all(engine)
	print("✅ Tables created.")
