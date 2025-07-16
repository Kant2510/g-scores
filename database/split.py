import pandas as pd

df = pd.read_csv("data/diem_thi_thpt_2024.csv")
chunk_size = 10_000

for i, chunk in enumerate(range(0, len(df), chunk_size)):
    df.iloc[chunk:chunk+chunk_size].to_csv(f"data/chunks/chunk_{i}.csv", index=False)