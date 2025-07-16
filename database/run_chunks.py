import subprocess

# Cấu hình
start = 0                     # Chỉ số bắt đầu
total_chunks = 107              # Tổng số file chunks
batch_size = 10                  # Số tiến trình chạy song song mỗi lần

def run_batch(start_index, end_index):
    processes = []
    for i in range(start_index, end_index):
        file_name = f"data/chunks/chunk_{i}.csv"
        print(f"🚀 Đang chạy convert.py với {file_name}")
        p = subprocess.Popen(['python', 'convert.py', file_name])
        processes.append(p)

    print(f"⏳ Đang chờ {len(processes)} tiến trình hoàn thành...")
    for p in processes:
        p.wait()
    print(f"✅ Batch {start_index}–{end_index - 1} đã hoàn thành.\n")

def main():
    for i in range(start, total_chunks, batch_size):
        end = min(i + batch_size, total_chunks)
        run_batch(i, end)

if __name__ == "__main__":
    main()
