import os
from sqlalchemy import create_engine
from migration.create_tables import migrate
from seeder.small_seed import small_seed
from seeder.fast_seed import fast_seed

database_url = f'postgresql+psycopg2://{os.getenv("POSGRESQL_USERNAME")}:{os.getenv("POSGRESQL_PASSWORD")}@{os.getenv("POSGRESQL_HOST")}:5432/{os.getenv("POSGRESQL_DATABASE")}'
engine = create_engine(database_url, echo=True)
csv_path = "data/diem_thi_thpt_2024.csv"

if __name__ == "__main__":
	print("🚀 Bắt đầu quá trình migrate và seed dữ liệu...")
	migrate(engine)
	small_seed(engine, csv_path)
	fast_seed()
	print("✅ Quá trình migrate và seed dữ liệu hoàn tất.")