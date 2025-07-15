from sqlalchemy import create_engine
from dotenv import load_dotenv
import os
from models.base import Base
# Load environment variables
load_dotenv()

engine = create_engine(os.getenv('POSGRESQL_URL'), echo=False)

def migrate():
	Base.metadata.drop_all(engine)  # Drop all tables first
	print("✅ Tables dropped.")
	Base.metadata.create_all(engine)
	print("✅ Tables created.")

# if __name__ == "__main__":
#     migrate()
