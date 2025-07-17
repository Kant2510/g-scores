import psycopg2
import os
from dotenv import load_dotenv
from time import sleep
# Load environment variables
load_dotenv()

# Kết nối database
conn = psycopg2.connect(
    dbname=os.getenv('POSGRESQL_DATABASE'),
    user=os.getenv('POSGRESQL_USERNAME'),
    password=os.getenv('POSGRESQL_PASSWORD'),
    host=os.getenv('POSGRESQL_HOST'),
    port="5432"
)

prefix1 = "student"
prefix2 = "score"

cur = conn.cursor()

def fast_seed():
    with open(f'data/{prefix1}s/merged_{prefix1}.csv', 'r') as f:
        sql = """
            COPY students(id)
            FROM STDIN
            WITH (FORMAT csv, HEADER true, DELIMITER ',');
        """
        cur.copy_expert(sql, f)
    conn.commit()
    print("✅ Seeded Students successfully.")
    sleep(5)
    
    with open(f'data/{prefix2}s/merged_{prefix2}.csv', 'r') as f:
        sql = """
            COPY scores(student_id, subject_id, score, foreign_language_code)
            FROM STDIN
            WITH (FORMAT csv, HEADER true, DELIMITER ',');
        """
        cur.copy_expert(sql, f)
    conn.commit()
    print("✅ Seeded Scores successfully.")

    cur.close()
    conn.close()
