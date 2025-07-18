import pandas as pd
import sys

if len(sys.argv) != 2:
    print("Usage: python convert.py data/chunks/chunk_0.csv")
    sys.exit(1)

csv_path = sys.argv[1]
df = pd.read_csv(csv_path)
# Check the index of the file to create a unique output filename
# Assuming the file name is like "data/chunks/chunk_0.csv", we extract the index
index = csv_path.split('_')[-1].split('.')[0]

prefix1 = "student"
prefix2 = "score"

# student_df = pd.DataFrame(columns=['id'])
# score_df = pd.DataFrame(columns=['student_id', 'subject_id', 'score', 'foreign_language_code'])

students = []
scores = []

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
for i in range(len(subjects)):
	subject_map[subjects[i]] = i+1

count = 0
for _, row in df.iterrows():
	count += 1
	if count % 1000 == 0:
		print(f"Processed {count} rows...")
	sid = str(row['sbd']).strip().zfill(8)
	students.append({
		'id': sid
	})
	# student_df = pd.concat([student_df, pd.DataFrame({
	# 		'id': [sid]
	# 	})], ignore_index=True)
student_df = pd.DataFrame(students)
student_df.to_csv(f"data/{prefix1}s/{prefix1}_{index}.csv", index=False)

count = 0
for _, row in df.iterrows():
	count += 1
	if count % 1000 == 0:
		print(f"Processed {count} rows...")
	sid = str(row['sbd']).strip().zfill(8)
	for subject in subjects:
		score_val = row[en2vi[subject]]
		score_val = score_val if pd.notna(score_val) else None
		lang_code = row['ma_ngoai_ngu']
		lang_code = lang_code if subject == 'foreign_language' and pd.notna(lang_code) else None
		scores.append({
			'student_id': sid,
			'subject_id': subject_map[subject],
			'score': score_val,
			'foreign_language_code': lang_code
		})
			# Add to score_df
		# score_df = pd.concat([score_df, pd.DataFrame({
		# 		'student_id': [sid],
		# 		'subject_id': [subject_map[subject]],
		# 		'score': [score_val],
		# 		'foreign_language_code': [lang_code]
		# 	})], ignore_index=True)
score_df = pd.DataFrame(scores)
score_df.to_csv(f"data/{prefix2}s/{prefix2}_{index}.csv", index=False)