from migration.create_tables import migrate
from seeder.seed_data import seed

if __name__ == "__main__":
	migrate()
	seed()