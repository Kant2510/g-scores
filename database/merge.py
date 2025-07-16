# merge file .csv
import pandas as pd

prefix1 = "student"
prefix2 = "score"
start = 0
end = 107

def merge_csv_files(start, end):
	merged_df = pd.DataFrame()
	count = 0
	for i in range(start, end):
		count += 1
		if count % 10 == 0:
			print(f"Processed {count} files...")
		file_path = f"data/{prefix1}s/{prefix1}_{i}.csv"
		df = pd.read_csv(file_path, dtype={"id": str})
		merged_df = pd.concat([merged_df, df], ignore_index=True)
	merged_df.to_csv(f"data/{prefix1}s/merged_{prefix1}.csv", index=False)
	print("Merged CSV files successfully.")

	merged_df = pd.DataFrame()
	count = 0
	for i in range(start, end):
		count += 1
		if count % 10 == 0:
			print(f"Processed {count} files...")
		file_path = f"data/{prefix2}s/{prefix2}_{i}.csv"
		df = pd.read_csv(file_path, dtype={"student_id": str})
		merged_df = pd.concat([merged_df, df], ignore_index=True)
	merged_df.to_csv(f"data/{prefix2}s/merged_{prefix2}.csv", index=False)
	print("Merged CSV files successfully.")
if __name__ == "__main__":
	merge_csv_files(start, end)