# Get the sample data from file csv
# Get about 1000 rows with random sampling
import pandas as pd
def get_sample():
	# Read the CSV file
	df = pd.read_csv('data/diem_thi_thpt_2024.csv')

	# Get a random sample of 1000 rows
	sample_df = df.sample(n=1000, random_state=1)

	# Save the sample to a new CSV file
	sample_df.to_csv('data.csv', index=False)
get_sample()